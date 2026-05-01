import type { Template } from "@/types/email";

const SERIF = "'Cormorant Garamond', Georgia, serif";
const SCRIPT = "'Pinyon Script', cursive";
const SANS = "Inter, sans-serif";

const CREAM = "#f3ece2";
const LAVENDER = "#c9b8e0";
const LAVENDER_SOFT = "#e6dcf0";
const DARK = "#2a2520";
const MUTED = "#8a7e72";

const IMG_PRODUCT_1 =
  "https://placehold.co/300x460/efe7da/8a7560?text=Cleanser";
const IMG_PRODUCT_2 =
  "https://placehold.co/300x460/efe7da/8a7560?text=Moisturizer";
const IMG_PRODUCT_3 =
  "https://placehold.co/300x460/efe7da/8a7560?text=Serum";

const IMG_SWATCH_1 =
  "https://placehold.co/240x240/efe7da/c9b8e0?text=swatch";
const IMG_SWATCH_2 =
  "https://placehold.co/240x240/efe7da/c9b8e0?text=swatch";
const IMG_SWATCH_3 =
  "https://placehold.co/240x240/efe7da/c9b8e0?text=swatch";

export const skincare: Template = {
  id: "skincare",
  name: "Beauty / skincare",
  category: "Marketing",
  description:
    "Beauty editorial em cream + lavanda, com script, grid de produtos e swatches.",
  tree: [
    {
      id: "sk-nav-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "16px 16px 8px" },
      children: [
        {
          id: "sk-nav-c1",
          type: "column",
          props: { width: "25%", verticalAlign: "middle" },
          children: [
            {
              id: "sk-nav-1",
              type: "text",
              props: {
                content: "[face](https://example.com/face)",
                color: DARK,
                fontFamily: SANS,
                fontSize: "11px",
                letterSpacing: "1.5px",
                align: "center",
              },
            },
          ],
        },
        {
          id: "sk-nav-c2",
          type: "column",
          props: { width: "25%", verticalAlign: "middle" },
          children: [
            {
              id: "sk-nav-2",
              type: "text",
              props: {
                content: "[bodycare](https://example.com/body)",
                color: DARK,
                fontFamily: SANS,
                fontSize: "11px",
                letterSpacing: "1.5px",
                align: "center",
              },
            },
          ],
        },
        {
          id: "sk-nav-c3",
          type: "column",
          props: { width: "25%", verticalAlign: "middle" },
          children: [
            {
              id: "sk-nav-3",
              type: "text",
              props: {
                content: "[haircare](https://example.com/hair)",
                color: DARK,
                fontFamily: SANS,
                fontSize: "11px",
                letterSpacing: "1.5px",
                align: "center",
              },
            },
          ],
        },
        {
          id: "sk-nav-c4",
          type: "column",
          props: { width: "25%", verticalAlign: "middle" },
          children: [
            {
              id: "sk-nav-4",
              type: "text",
              props: {
                content: "[shop all](https://example.com/shop)",
                color: DARK,
                fontFamily: SANS,
                fontSize: "11px",
                letterSpacing: "1.5px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "sk-brand-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "8px 24px 24px" },
      children: [
        {
          id: "sk-brand-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "sk-brand-text",
              type: "text",
              props: {
                content: "SKYN",
                color: DARK,
                fontFamily: SANS,
                fontSize: "13px",
                fontWeight: "bold",
                letterSpacing: "4px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "sk-hero-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "16px 16px 8px" },
      children: [
        {
          id: "sk-hero-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "sk-hero-script",
              type: "text",
              props: {
                content: "our best",
                color: LAVENDER,
                fontFamily: SCRIPT,
                fontSize: "62px",
                fontWeight: "normal",
                lineHeight: "1.0",
                align: "center",
              },
            },
            {
              id: "sk-hero-bold",
              type: "text",
              props: {
                content: "SELLERS",
                color: LAVENDER,
                fontFamily: SERIF,
                fontSize: "62px",
                fontWeight: "bold",
                letterSpacing: "2px",
                lineHeight: "1.0",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "sk-products-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "32px 16px 8px" },
      children: [
        {
          id: "sk-prod-c1",
          type: "column",
          props: { width: "33.33%", verticalAlign: "bottom" },
          children: [
            {
              id: "sk-prod-i1",
              type: "image",
              props: {
                src: IMG_PRODUCT_1,
                alt: "Produto 1",
                width: "150px",
                align: "center",
              },
            },
            {
              id: "sk-prod-l1",
              type: "text",
              props: {
                content: "01",
                color: DARK,
                fontFamily: SANS,
                fontSize: "12px",
                letterSpacing: "2px",
                align: "center",
              },
            },
          ],
        },
        {
          id: "sk-prod-c2",
          type: "column",
          props: { width: "33.33%", verticalAlign: "bottom" },
          children: [
            {
              id: "sk-prod-i2",
              type: "image",
              props: {
                src: IMG_PRODUCT_2,
                alt: "Produto 2",
                width: "150px",
                align: "center",
              },
            },
            {
              id: "sk-prod-l2",
              type: "text",
              props: {
                content: "02",
                color: DARK,
                fontFamily: SANS,
                fontSize: "12px",
                letterSpacing: "2px",
                align: "center",
              },
            },
          ],
        },
        {
          id: "sk-prod-c3",
          type: "column",
          props: { width: "33.34%", verticalAlign: "bottom" },
          children: [
            {
              id: "sk-prod-i3",
              type: "image",
              props: {
                src: IMG_PRODUCT_3,
                alt: "Produto 3",
                width: "150px",
                align: "center",
              },
            },
            {
              id: "sk-prod-l3",
              type: "text",
              props: {
                content: "03",
                color: DARK,
                fontFamily: SANS,
                fontSize: "12px",
                letterSpacing: "2px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "sk-fans-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "32px 36px 16px" },
      children: [
        {
          id: "sk-fans-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "sk-fans-eyebrow",
              type: "text",
              props: {
                content: "OUR FAN FAVS",
                color: DARK,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "3px",
                align: "center",
              },
            },
            {
              id: "sk-fans-spacer",
              type: "spacer",
              props: { height: "12px" },
            },
            {
              id: "sk-fans-body",
              type: "text",
              props: {
                content:
                  "Every item is designed in small, intentional batches —\nonce they're gone, they're gone. Every item is designed\nin small, intentional batches — once they're gone,\nthey're gone.",
                color: DARK,
                fontFamily: SANS,
                fontSize: "11px",
                lineHeight: "1.9",
                letterSpacing: "0.5px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "sk-cta-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "16px 24px 32px" },
      children: [
        {
          id: "sk-cta-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "sk-cta-btn",
              type: "button",
              props: {
                label: "shop now",
                href: "https://example.com/shop",
                backgroundColor: LAVENDER,
                color: DARK,
                align: "center",
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "normal",
                letterSpacing: "2px",
                borderRadius: "24px",
                innerPadding: "11px 28px",
              },
            },
          ],
        },
      ],
    },
    {
      id: "sk-swatches-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "16px 12px 32px" },
      children: [
        {
          id: "sk-sw-c1",
          type: "column",
          props: { width: "33.33%", verticalAlign: "top" },
          children: [
            {
              id: "sk-sw-i1",
              type: "image",
              props: {
                src: IMG_SWATCH_1,
                alt: "Swatch 1",
                width: "120px",
                align: "center",
              },
            },
            {
              id: "sk-sw-n1",
              type: "text",
              props: {
                content: "*kelp aloe\ncleanser*",
                color: DARK,
                fontFamily: SERIF,
                fontSize: "16px",
                fontWeight: "bold",
                lineHeight: "1.2",
                align: "center",
              },
            },
            {
              id: "sk-sw-d1",
              type: "text",
              props: {
                content:
                  "Every item is designed in small, intentional batches — once they're gone.",
                color: MUTED,
                fontFamily: SANS,
                fontSize: "10px",
                lineHeight: "1.7",
                align: "center",
              },
            },
            {
              id: "sk-sw-b1",
              type: "text",
              props: {
                content: "01",
                color: LAVENDER,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "2px",
                align: "center",
              },
            },
          ],
        },
        {
          id: "sk-sw-c2",
          type: "column",
          props: { width: "33.33%", verticalAlign: "top" },
          children: [
            {
              id: "sk-sw-i2",
              type: "image",
              props: {
                src: IMG_SWATCH_2,
                alt: "Swatch 2",
                width: "120px",
                align: "center",
              },
            },
            {
              id: "sk-sw-n2",
              type: "text",
              props: {
                content: "*white tea\nmoisturizer*",
                color: DARK,
                fontFamily: SERIF,
                fontSize: "16px",
                fontWeight: "bold",
                lineHeight: "1.2",
                align: "center",
              },
            },
            {
              id: "sk-sw-d2",
              type: "text",
              props: {
                content:
                  "Every item is designed in small, intentional batches — once they're gone.",
                color: MUTED,
                fontFamily: SANS,
                fontSize: "10px",
                lineHeight: "1.7",
                align: "center",
              },
            },
            {
              id: "sk-sw-b2",
              type: "text",
              props: {
                content: "02",
                color: LAVENDER,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "2px",
                align: "center",
              },
            },
          ],
        },
        {
          id: "sk-sw-c3",
          type: "column",
          props: { width: "33.34%", verticalAlign: "top" },
          children: [
            {
              id: "sk-sw-i3",
              type: "image",
              props: {
                src: IMG_SWATCH_3,
                alt: "Swatch 3",
                width: "120px",
                align: "center",
              },
            },
            {
              id: "sk-sw-n3",
              type: "text",
              props: {
                content: "*aloe & white\ntea serum*",
                color: DARK,
                fontFamily: SERIF,
                fontSize: "16px",
                fontWeight: "bold",
                lineHeight: "1.2",
                align: "center",
              },
            },
            {
              id: "sk-sw-d3",
              type: "text",
              props: {
                content:
                  "Every item is designed in small, intentional batches — once they're gone.",
                color: MUTED,
                fontFamily: SANS,
                fontSize: "10px",
                lineHeight: "1.7",
                align: "center",
              },
            },
            {
              id: "sk-sw-b3",
              type: "text",
              props: {
                content: "03",
                color: LAVENDER,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "2px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "sk-footnav-section",
      type: "section",
      props: { backgroundColor: LAVENDER_SOFT, padding: "14px 16px" },
      children: [
        {
          id: "sk-fn-c1",
          type: "column",
          props: { width: "25%", verticalAlign: "middle" },
          children: [
            {
              id: "sk-fn-1",
              type: "text",
              props: {
                content: "[face](https://example.com/face)",
                color: DARK,
                fontFamily: SANS,
                fontSize: "11px",
                letterSpacing: "1.5px",
                align: "center",
              },
            },
          ],
        },
        {
          id: "sk-fn-c2",
          type: "column",
          props: { width: "25%", verticalAlign: "middle" },
          children: [
            {
              id: "sk-fn-2",
              type: "text",
              props: {
                content: "[body](https://example.com/body)",
                color: DARK,
                fontFamily: SANS,
                fontSize: "11px",
                letterSpacing: "1.5px",
                align: "center",
              },
            },
          ],
        },
        {
          id: "sk-fn-c3",
          type: "column",
          props: { width: "25%", verticalAlign: "middle" },
          children: [
            {
              id: "sk-fn-3",
              type: "text",
              props: {
                content: "[haircare](https://example.com/hair)",
                color: DARK,
                fontFamily: SANS,
                fontSize: "11px",
                letterSpacing: "1.5px",
                align: "center",
              },
            },
          ],
        },
        {
          id: "sk-fn-c4",
          type: "column",
          props: { width: "25%", verticalAlign: "middle" },
          children: [
            {
              id: "sk-fn-4",
              type: "text",
              props: {
                content: "[shopall](https://example.com/shop)",
                color: DARK,
                fontFamily: SANS,
                fontSize: "11px",
                letterSpacing: "1.5px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "sk-outro-section",
      type: "section",
      props: { backgroundColor: LAVENDER_SOFT, padding: "8px 16px 24px" },
      children: [
        {
          id: "sk-outro-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "sk-outro-text",
              type: "text",
              props: {
                content: "SKYN",
                color: DARK,
                fontFamily: SANS,
                fontSize: "13px",
                fontWeight: "bold",
                letterSpacing: "4px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "sk-footer-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "20px 30px 32px" },
      children: [
        {
          id: "sk-footer-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "sk-footer-text",
              type: "text",
              props: {
                content:
                  "© 2025 Sua Marca. Todos os direitos reservados.\nEndereço da empresa, Cidade, Estado, CEP\n[Cancelar inscrição](https://example.com/unsub).",
                color: MUTED,
                fontFamily: SANS,
                fontSize: "10px",
                lineHeight: "1.7",
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
