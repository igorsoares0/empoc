export type NodeId = string;

export type NodeType =
  | "section"
  | "column"
  | "text"
  | "image"
  | "button"
  | "spacer"
  | "divider"
  | "navbar";

export type SectionProps = {
  backgroundColor?: string;
  padding?: string;
};

export type ColumnProps = {
  width?: string;
  verticalAlign?: "top" | "middle" | "bottom";
};

export type TextProps = {
  content: string;
  color?: string;
  fontSize?: string;
  fontFamily?: string;
  letterSpacing?: string;
  lineHeight?: string;
  align?: "left" | "center" | "right";
  fontWeight?: "normal" | "bold";
};

export type ImageProps = {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
  href?: string;
};

export type ButtonProps = {
  label: string;
  href: string;
  backgroundColor?: string;
  color?: string;
  align?: "left" | "center" | "right";
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: "normal" | "bold";
  letterSpacing?: string;
  border?: string;
  borderRadius?: string;
  innerPadding?: string;
};

export type SpacerProps = {
  height?: string;
};

export type DividerProps = {
  borderColor?: string;
  borderWidth?: string;
  borderStyle?: "solid" | "dashed" | "dotted";
  width?: string;
  padding?: string;
};

export type NavbarLink = {
  id: string;
  label: string;
  href: string;
};

export type NavbarProps = {
  links: NavbarLink[];
  color?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: "normal" | "bold";
  letterSpacing?: string;
  align?: "left" | "center" | "right";
  padding?: string;
};

export type SectionNode = {
  id: NodeId;
  type: "section";
  props: SectionProps;
  children: EmailNode[];
};

export type ColumnNode = {
  id: NodeId;
  type: "column";
  props: ColumnProps;
  children: EmailNode[];
};

export type TextNode = {
  id: NodeId;
  type: "text";
  props: TextProps;
};

export type ImageNode = {
  id: NodeId;
  type: "image";
  props: ImageProps;
};

export type ButtonNode = {
  id: NodeId;
  type: "button";
  props: ButtonProps;
};

export type SpacerNode = {
  id: NodeId;
  type: "spacer";
  props: SpacerProps;
};

export type DividerNode = {
  id: NodeId;
  type: "divider";
  props: DividerProps;
};

export type NavbarNode = {
  id: NodeId;
  type: "navbar";
  props: NavbarProps;
};

export type EmailNode =
  | SectionNode
  | ColumnNode
  | TextNode
  | ImageNode
  | ButtonNode
  | SpacerNode
  | DividerNode
  | NavbarNode;

export type ContainerNode = SectionNode | ColumnNode;
export type LeafNode =
  | TextNode
  | ImageNode
  | ButtonNode
  | SpacerNode
  | DividerNode
  | NavbarNode;

export type Template = {
  id: string;
  name: string;
  category: string;
  description: string;
  tree: EmailNode[];
};
