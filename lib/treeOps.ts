import { nanoid } from "nanoid";
import type {
  ContainerNode,
  EmailNode,
  NodeId,
  NodeType,
} from "@/types/email";

export function isContainer(node: EmailNode): node is ContainerNode {
  return (
    node.type === "section" || node.type === "column" || node.type === "hero"
  );
}

type FoundNode = {
  node: EmailNode;
  parent: ContainerNode | null;
  index: number;
};

export function findNode(
  tree: EmailNode[],
  id: NodeId,
  parent: ContainerNode | null = null,
): FoundNode | null {
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.id === id) return { node, parent, index: i };
    if (isContainer(node)) {
      const found = findNode(node.children, id, node);
      if (found) return found;
    }
  }
  return null;
}

export function cloneNodeWithNewIds(n: EmailNode): EmailNode {
  const id = nanoid(10);
  switch (n.type) {
    case "section":
      return {
        id,
        type: "section",
        props: { ...n.props },
        children: n.children.map(cloneNodeWithNewIds),
      };
    case "column":
      return {
        id,
        type: "column",
        props: { ...n.props },
        children: n.children.map(cloneNodeWithNewIds),
      };
    case "hero":
      return {
        id,
        type: "hero",
        props: { ...n.props },
        children: n.children.map(cloneNodeWithNewIds),
      };
    case "text":
      return { id, type: "text", props: { ...n.props } };
    case "image":
      return { id, type: "image", props: { ...n.props } };
    case "button":
      return { id, type: "button", props: { ...n.props } };
    case "spacer":
      return { id, type: "spacer", props: { ...n.props } };
    case "divider":
      return { id, type: "divider", props: { ...n.props } };
    case "navbar":
      return {
        id,
        type: "navbar",
        props: {
          ...n.props,
          links: n.props.links.map((l) => ({ ...l, id: nanoid(8) })),
        },
      };
  }
}

export function cloneTree(tree: EmailNode[]): EmailNode[] {
  return tree.map((n): EmailNode => {
    switch (n.type) {
      case "section":
        return { ...n, props: { ...n.props }, children: cloneTree(n.children) };
      case "column":
        return { ...n, props: { ...n.props }, children: cloneTree(n.children) };
      case "hero":
        return { ...n, props: { ...n.props }, children: cloneTree(n.children) };
      case "text":
        return { ...n, props: { ...n.props } };
      case "image":
        return { ...n, props: { ...n.props } };
      case "button":
        return { ...n, props: { ...n.props } };
      case "spacer":
        return { ...n, props: { ...n.props } };
      case "divider":
        return { ...n, props: { ...n.props } };
      case "navbar":
        return {
          ...n,
          props: { ...n.props, links: n.props.links.map((l) => ({ ...l })) },
        };
    }
  });
}

export function insertNode(
  tree: EmailNode[],
  parentId: NodeId | null,
  node: EmailNode,
  index?: number,
): EmailNode[] {
  if (parentId === null) {
    const out = [...tree];
    const i = index ?? out.length;
    out.splice(i, 0, node);
    return out;
  }
  return tree.map((n) => {
    if (n.id === parentId && isContainer(n)) {
      const children = [...n.children];
      const i = index ?? children.length;
      children.splice(i, 0, node);
      return { ...n, children };
    }
    if (isContainer(n)) {
      return { ...n, children: insertNode(n.children, parentId, node, index) };
    }
    return n;
  });
}

export function removeNode(tree: EmailNode[], id: NodeId): EmailNode[] {
  return tree
    .filter((n) => n.id !== id)
    .map((n) => {
      if (isContainer(n)) {
        return { ...n, children: removeNode(n.children, id) };
      }
      return n;
    });
}

export function updateNodeProps(
  tree: EmailNode[],
  id: NodeId,
  patch: Record<string, unknown>,
): EmailNode[] {
  return tree.map((n) => {
    if (n.id === id) {
      return { ...n, props: { ...n.props, ...patch } } as EmailNode;
    }
    if (isContainer(n)) {
      return { ...n, children: updateNodeProps(n.children, id, patch) };
    }
    return n;
  });
}

const COLUMN_LEAVES: NodeType[] = [
  "text",
  "image",
  "button",
  "spacer",
  "divider",
  "navbar",
];

const HERO_LEAVES: NodeType[] = ["text", "image", "button", "spacer", "divider"];

export function canContain(parentType: NodeType, childType: NodeType): boolean {
  if (parentType === "section") return childType === "column";
  if (parentType === "column") return COLUMN_LEAVES.includes(childType);
  if (parentType === "hero") return HERO_LEAVES.includes(childType);
  return false;
}

export function canBeRoot(childType: NodeType): boolean {
  return childType === "section" || childType === "hero";
}
