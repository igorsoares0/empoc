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

function nodeToMjml(node: EmailNode): string {
  switch (node.type) {
    case "section": {
      const open =
        `<mj-section` +
        attr("background-color", node.props.backgroundColor) +
        attr("padding", node.props.padding) +
        `>`;
      const inner = node.children.map(nodeToMjml).join("");
      return `${open}${inner}</mj-section>`;
    }
    case "column": {
      const open =
        `<mj-column` +
        attr("width", node.props.width) +
        attr("vertical-align", node.props.verticalAlign) +
        `>`;
      const inner = node.children.map(nodeToMjml).join("");
      return `${open}${inner}</mj-column>`;
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
    if (node.type === "section" || node.type === "column") {
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
  const body = tree.map(nodeToMjml).join("");
  return `<mjml>${head}<mj-body>${body}</mj-body></mjml>`;
}
