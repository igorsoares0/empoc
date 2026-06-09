import type { EmailNode } from "@/types/email";
import { findFontByFamily } from "./fonts";
import { inlineMarkdownToHtml } from "./inlineMarkdown";

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeText(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function attr(name: string, value: string | undefined): string {
  if (value === undefined || value === null || value === "") return "";
  return ` ${name}="${escapeAttr(String(value))}"`;
}

// MJML default body width. mj-body in treeToMjml carries no explicit width.
const EMAIL_BODY_WIDTH = 600;

// MJML sizes a width-less mj-column as bodyWidth / columnCount, ignoring any
// explicit width on its siblings. So mixing a fixed column (e.g. 400px) with an
// auto column overflows the body (300px + 400px = 700 > 600) and the columns
// wrap/stack in email clients. To avoid that we resolve every column to a
// percentage that sums to 100%: explicit px/%, with the remainder split equally
// among the auto columns.
function columnWidthOverrides(children: EmailNode[]): string[] {
  let explicitSum = 0;
  let autoCount = 0;
  const raw = children.map((child) => {
    const w = child.type === "column" ? child.props.width : undefined;
    if (w && w !== "auto") {
      if (w.endsWith("%")) {
        const p = parseFloat(w);
        if (Number.isFinite(p)) {
          explicitSum += p;
          return p;
        }
      } else if (w.endsWith("px")) {
        const p = (parseFloat(w) / EMAIL_BODY_WIDTH) * 100;
        if (Number.isFinite(p)) {
          explicitSum += p;
          return p;
        }
      }
    }
    autoCount += 1;
    return null;
  });
  const remaining = Math.max(0, 100 - explicitSum);
  const per = autoCount > 0 ? remaining / autoCount : 0;
  return raw.map((p) => `${parseFloat((p === null ? per : p).toFixed(4))}%`);
}

function nodeToMjml(node: EmailNode, widthOverride?: string): string {
  switch (node.type) {
    case "section": {
      const open =
        `<mj-section` +
        attr("background-color", node.props.backgroundColor) +
        attr("padding", node.props.padding) +
        `>`;
      const widths = columnWidthOverrides(node.children);
      const inner = node.children
        .map((child, i) => nodeToMjml(child, widths[i]))
        .join("");
      return `${open}${inner}</mj-section>`;
    }
    case "column": {
      const open =
        `<mj-column` +
        attr("width", widthOverride ?? node.props.width) +
        attr("vertical-align", node.props.verticalAlign) +
        `>`;
      const inner = node.children.map((child) => nodeToMjml(child)).join("");
      return `${open}${inner}</mj-column>`;
    }
    case "hero": {
      const open =
        `<mj-hero` +
        attr("mode", node.props.mode) +
        attr("height", node.props.height) +
        attr("background-url", node.props.backgroundUrl) +
        attr("background-color", node.props.backgroundColor) +
        attr("background-position", node.props.backgroundPosition) +
        attr("vertical-align", node.props.verticalAlign) +
        attr("padding", node.props.padding) +
        `>`;
      const inner = node.children.map((child) => nodeToMjml(child)).join("");
      return `${open}${inner}</mj-hero>`;
    }
    case "text": {
      const open =
        `<mj-text` +
        attr("color", node.props.color) +
        attr("font-size", node.props.fontSize) +
        attr("font-family", node.props.fontFamily) +
        attr("letter-spacing", node.props.letterSpacing) +
        attr("line-height", node.props.lineHeight) +
        attr("align", node.props.align) +
        attr("font-weight", node.props.fontWeight) +
        `>`;
      const html = inlineMarkdownToHtml(node.props.content ?? "");
      return `${open}${html}</mj-text>`;
    }
    case "image": {
      return (
        `<mj-image` +
        attr("src", node.props.src) +
        attr("alt", node.props.alt) +
        attr("width", node.props.width) +
        attr("height", node.props.height) +
        attr("href", node.props.href) +
        attr("align", node.props.align) +
        ` />`
      );
    }
    case "button": {
      const open =
        `<mj-button` +
        attr("href", node.props.href) +
        attr("background-color", node.props.backgroundColor) +
        attr("color", node.props.color) +
        attr("align", node.props.align) +
        attr("font-family", node.props.fontFamily) +
        attr("font-size", node.props.fontSize) +
        attr("font-weight", node.props.fontWeight) +
        attr("letter-spacing", node.props.letterSpacing) +
        attr("border", node.props.border) +
        attr("border-radius", node.props.borderRadius) +
        attr("inner-padding", node.props.innerPadding) +
        `>`;
      return `${open}${escapeText(node.props.label ?? "")}</mj-button>`;
    }
    case "spacer": {
      return `<mj-spacer` + attr("height", node.props.height) + ` />`;
    }
    case "divider": {
      return (
        `<mj-divider` +
        attr("border-color", node.props.borderColor) +
        attr("border-width", node.props.borderWidth) +
        attr("border-style", node.props.borderStyle) +
        attr("width", node.props.width) +
        attr("padding", node.props.padding) +
        ` />`
      );
    }
    case "navbar": {
      const open =
        `<mj-navbar` +
        attr("align", node.props.align) +
        attr("padding", node.props.padding) +
        ` base-url="">`;
      const links = node.props.links
        .map(
          (link) =>
            `<mj-navbar-link` +
            attr("href", link.href) +
            attr("color", node.props.color) +
            attr("font-family", node.props.fontFamily) +
            attr("font-size", node.props.fontSize) +
            attr("font-weight", node.props.fontWeight) +
            attr("letter-spacing", node.props.letterSpacing) +
            `>${escapeText(link.label)}</mj-navbar-link>`,
        )
        .join("");
      return `${open}${links}</mj-navbar>`;
    }
  }
}

function collectFontFamilies(tree: EmailNode[]): Set<string> {
  const used = new Set<string>();
  function visit(node: EmailNode) {
    const props = node.props as { fontFamily?: string };
    if (props.fontFamily) used.add(props.fontFamily);
    if (
      node.type === "section" ||
      node.type === "column" ||
      node.type === "hero"
    ) {
      node.children.forEach(visit);
    }
  }
  tree.forEach(visit);
  return used;
}

function buildMjHead(tree: EmailNode[]): string {
  const families = collectFontFamilies(tree);
  const fontTags: string[] = [];
  for (const family of families) {
    const def = findFontByFamily(family);
    if (def?.googleHref) {
      fontTags.push(
        `<mj-font name="${escapeAttr(def.name)}" href="${escapeAttr(def.googleHref)}" />`,
      );
    }
  }
  if (fontTags.length === 0) return "";
  return `<mj-head>${fontTags.join("")}</mj-head>`;
}

export function treeToMjml(tree: EmailNode[]): string {
  const head = buildMjHead(tree);
  const body = tree.map((node) => nodeToMjml(node)).join("");
  return `<mjml>${head}<mj-body>${body}</mj-body></mjml>`;
}
