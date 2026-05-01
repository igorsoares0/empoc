import type { Template } from "@/types/email";

const SERIF = "'Cormorant Garamond', Georgia, serif";
const SANS = "Inter, sans-serif";

const DARK = "#352820";
const CREAM = "#efeeea";
const MUTED = "#7a6f63";

const HERO_IMG =
  "https://placehold.co/440x560/8a7560/efeeea?text=Foto+editorial";

export const backInStock: Template = {
  id: "back-in-stock",
  name: "Voltou ao estoque",
  category: "Promocional",
  description:
    "Editorial fashion com banner de cupom, foto centralizada e tipografia serif grande.",
  tree: [
    {
      id: "bs-eyebrow-section",
      type: "section",
      props: { backgroundColor: DARK, padding: "12px 24px" },
      children: [
        {
          id: "bs-eyebrow-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "bs-eyebrow-text",
              type: "text",
              props: {
                content: "ENJOY YOUR **20% OFF** WITH OUR CODE",
                color: CREAM,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "normal",
                letterSpacing: "3px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "bs-image-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "32px 30px 0" },
      children: [
        {
          id: "bs-image-col",
          type: "column",
          props: { verticalAlign: "top" },
          children: [
            {
              id: "bs-image",
              type: "image",
              props: {
                src: HERO_IMG,
                alt: "Foto editorial do produto",
                width: "440px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "bs-title-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "30px 24px 8px" },
      children: [
        {
          id: "bs-title-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "bs-title-text",
              type: "text",
              props: {
                content: "BACK IN STOCK\nBACK IN STOCK\nBACK IN STOCK",
                color: DARK,
                fontFamily: SERIF,
                fontSize: "44px",
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
      id: "bs-cta-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "22px 24px 16px" },
      children: [
        {
          id: "bs-cta-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "bs-cta-btn",
              type: "button",
              props: {
                label: "SHOP NOW",
                href: "https://example.com/shop",
                backgroundColor: CREAM,
                color: DARK,
                align: "center",
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "bold",
                letterSpacing: "2px",
                border: `1px solid ${DARK}`,
                borderRadius: "24px",
                innerPadding: "10px 22px",
              },
            },
          ],
        },
      ],
    },
    {
      id: "bs-footer-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "18px 30px 36px" },
      children: [
        {
          id: "bs-footer-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "bs-footer-text",
              type: "text",
              props: {
                content:
                  "© 2025 Sua Marca. Todos os direitos reservados.\nEndereço da empresa, Cidade, Estado, CEP\n[Cancelar inscrição](https://example.com/unsub).",
                color: MUTED,
                fontFamily: SANS,
                fontSize: "10px",
                lineHeight: "1.8",
                letterSpacing: "0.3px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
  ],
};
