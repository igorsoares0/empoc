import { nanoid } from "nanoid";
import type { EmailNode, NodeType } from "@/types/email";

export function createNode(type: NodeType): EmailNode {
  const id = nanoid(10);
  switch (type) {
    case "section":
      return {
        id,
        type: "section",
        props: { backgroundColor: "#ffffff", padding: "20px 0" },
        children: [
          {
            id: nanoid(10),
            type: "column",
            props: { verticalAlign: "top" },
            children: [],
          },
        ],
      };
    case "column":
      return {
        id,
        type: "column",
        props: { verticalAlign: "top" },
        children: [],
      };
    case "text":
      return {
        id,
        type: "text",
        props: {
          content: "Seu texto aqui. Clique para editar.",
          color: "#1f2937",
          fontSize: "16px",
          align: "left",
          fontWeight: "normal",
        },
      };
    case "image":
      return {
        id,
        type: "image",
        props: {
          src: "https://placehold.co/600x300/1e40af/ffffff?text=Sua+imagem",
          alt: "Imagem",
          width: "600px",
        },
      };
    case "button":
      return {
        id,
        type: "button",
        props: {
          label: "Clique aqui",
          href: "https://example.com",
          backgroundColor: "#1e40af",
          color: "#ffffff",
          align: "center",
          innerPadding: "12px 24px",
          borderRadius: "4px",
        },
      };
    case "spacer":
      return {
        id,
        type: "spacer",
        props: { height: "24px" },
      };
    case "divider":
      return {
        id,
        type: "divider",
        props: {
          borderColor: "#e5e7eb",
          borderWidth: "1px",
          borderStyle: "solid",
          width: "100%",
          padding: "10px 0",
        },
      };
    case "navbar":
      return {
        id,
        type: "navbar",
        props: {
          links: [
            { id: nanoid(8), label: "Home", href: "https://example.com" },
            { id: nanoid(8), label: "Sobre", href: "https://example.com/about" },
            {
              id: nanoid(8),
              label: "Contato",
              href: "https://example.com/contact",
            },
          ],
          color: "#111827",
          fontSize: "14px",
          fontWeight: "normal",
          letterSpacing: "1px",
          align: "center",
          padding: "10px 0",
        },
      };
  }
}

export const BLOCK_LABELS: Record<NodeType, string> = {
  section: "Seção",
  column: "Coluna",
  text: "Texto",
  image: "Imagem",
  button: "Botão",
  spacer: "Espaçador",
  divider: "Divisor",
  navbar: "Menu",
};

export const BLOCK_ICONS: Record<NodeType, string> = {
  section: "▭",
  column: "│▭│",
  text: "T",
  image: "🖼",
  button: "▢",
  spacer: "↕",
  divider: "—",
  navbar: "≡",
};
