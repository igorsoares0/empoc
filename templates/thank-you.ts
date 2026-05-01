import type { Template } from "@/types/email";

const SERIF = "'Playfair Display', Georgia, serif";
const SANS = "Inter, sans-serif";

export const thankYou: Template = {
  id: "thank-you",
  name: "Confirmação de pedido",
  category: "Transacional",
  description: "Visual editorial com tipografia serif e botão outlined.",
  tree: [
    {
      id: "ty-nav-section",
      type: "section",
      props: { backgroundColor: "#f4f1ec", padding: "20px 0" },
      children: [
        {
          id: "ty-nav-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "ty-nav",
              type: "navbar",
              props: {
                links: [
                  { id: "ty-l1", label: "SHOP", href: "https://example.com/shop" },
                  {
                    id: "ty-l2",
                    label: "ABOUT",
                    href: "https://example.com/about",
                  },
                  { id: "ty-l3", label: "HOME", href: "https://example.com" },
                  {
                    id: "ty-l4",
                    label: "DISCOUNT",
                    href: "https://example.com/discount",
                  },
                ],
                color: "#1a1a1a",
                fontFamily: SANS,
                fontSize: "12px",
                fontWeight: "normal",
                letterSpacing: "2px",
                align: "center",
                padding: "8px 0",
              },
            },
          ],
        },
      ],
    },
    {
      id: "ty-hero-section",
      type: "section",
      props: { backgroundColor: "#f4f1ec", padding: "40px 30px 20px" },
      children: [
        {
          id: "ty-hero-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "ty-hero-text",
              type: "text",
              props: {
                content: "THANK YOU FOR\nYOUR ORDER",
                color: "#1a1a1a",
                fontFamily: SERIF,
                fontSize: "38px",
                fontWeight: "bold",
                letterSpacing: "1px",
                lineHeight: "1.1",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "ty-img-section",
      type: "section",
      props: { backgroundColor: "#f4f1ec", padding: "10px 30px 30px" },
      children: [
        {
          id: "ty-img-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "ty-img",
              type: "image",
              props: {
                src: "https://placehold.co/520x620/2b2622/c9a979?text=Produto",
                alt: "Seu pedido",
                width: "520px",
              },
            },
          ],
        },
      ],
    },
    {
      id: "ty-cta-section",
      type: "section",
      props: { backgroundColor: "#f4f1ec", padding: "10px 30px 50px" },
      children: [
        {
          id: "ty-cta-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "ty-subtitle",
              type: "text",
              props: {
                content: "YOUR ORDER IS NOW ON ITS WAY",
                color: "#1a1a1a",
                fontFamily: SANS,
                fontSize: "12px",
                fontWeight: "normal",
                letterSpacing: "3px",
                align: "center",
              },
            },
            {
              id: "ty-spacer-1",
              type: "spacer",
              props: { height: "20px" },
            },
            {
              id: "ty-btn",
              type: "button",
              props: {
                label: "VIEW YOUR ORDER",
                href: "https://example.com/order/123",
                backgroundColor: "transparent",
                color: "#1a1a1a",
                fontFamily: SANS,
                fontSize: "12px",
                fontWeight: "normal",
                letterSpacing: "2px",
                border: "1px solid #1a1a1a",
                borderRadius: "0",
                innerPadding: "14px 32px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "ty-footer-section",
      type: "section",
      props: { backgroundColor: "#f4f1ec", padding: "20px 30px 40px" },
      children: [
        {
          id: "ty-footer-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "ty-footer-divider",
              type: "divider",
              props: {
                borderColor: "#d6cfc3",
                borderWidth: "1px",
                borderStyle: "solid",
                width: "100%",
                padding: "0 0 20px",
              },
            },
            {
              id: "ty-footer-text",
              type: "text",
              props: {
                content:
                  "© 2025 Sua Marca. Todos os direitos reservados.\nEndereço da empresa, Cidade, Estado, CEP\n[Cancelar inscrição](https://example.com/unsubscribe)",
                color: "#6b665e",
                fontFamily: SANS,
                fontSize: "11px",
                lineHeight: "1.7",
                align: "center",
              },
            },
          ],
        },
      ],
    },
  ],
};
