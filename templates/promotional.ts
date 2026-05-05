import type { Template } from "@/types/email";

const SERIF = "'Cormorant Garamond', Georgia, serif";
const SCRIPT = "'Pinyon Script', cursive";
const SANS = "Inter, sans-serif";

const OLIVE_DEEP = "#3d4530";
const OLIVE = "#5a6147";
const OLIVE_SOFT = "#9a9c8a";
const SAGE = "#c9cbb6";
const CREAM = "#f4f1ea";
const CREAM_SOFT = "#faf8f3";
const MUTED = "#7a7d6a";

const HERO_IMG =
  "https://placehold.co/1100x620/c9cbb6/3d4530?text=Summer+sale";
const PROD_IMG_1 =
  "https://placehold.co/420x520/dcdcc4/5a6147?text=Item+01";
const PROD_IMG_2 =
  "https://placehold.co/420x520/c4c8a8/4a5138?text=Item+02";
const PROD_IMG_3 =
  "https://placehold.co/420x520/b6b89a/3d4530?text=Item+03";

export const promotional: Template = {
  id: "promotional",
  name: "Promocional",
  category: "Vendas",
  description:
    "Promoção editorial em verde oliva, com hero serif, cupom e grid de produtos.",
  tree: [
    {
      id: "p-band-section",
      type: "section",
      props: { backgroundColor: OLIVE_DEEP, padding: "12px 16px" },
      children: [
        {
          id: "p-band-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "p-band-text",
              type: "text",
              props: {
                content: "— TEMPO LIMITADO · TERMINA DOMINGO —",
                color: SAGE,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "bold",
                letterSpacing: "3px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "p-eyebrow-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "44px 24px 4px" },
      children: [
        {
          id: "p-eyebrow-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "p-eyebrow-text",
              type: "text",
              props: {
                content: "EDIÇÃO ESPECIAL",
                color: OLIVE,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "3px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "p-hero-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "8px 24px 4px" },
      children: [
        {
          id: "p-hero-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "p-hero-script",
              type: "text",
              props: {
                content: "summer",
                color: OLIVE,
                fontFamily: SCRIPT,
                fontSize: "70px",
                fontWeight: "normal",
                lineHeight: "1.0",
                align: "center",
              },
            },
            {
              id: "p-hero-bold",
              type: "text",
              props: {
                content: "SALE",
                color: OLIVE_DEEP,
                fontFamily: SERIF,
                fontSize: "84px",
                fontWeight: "bold",
                letterSpacing: "6px",
                lineHeight: "1.0",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "p-discount-section",
      type: "section",
      props: { backgroundColor: OLIVE, padding: "32px 24px" },
      children: [
        {
          id: "p-discount-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "p-discount-eyebrow",
              type: "text",
              props: {
                content: "ATÉ",
                color: SAGE,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "3px",
                align: "center",
              },
            },
            {
              id: "p-discount-num",
              type: "text",
              props: {
                content: "30% OFF",
                color: CREAM,
                fontFamily: SERIF,
                fontSize: "64px",
                fontWeight: "bold",
                letterSpacing: "2px",
                lineHeight: "1.0",
                align: "center",
              },
            },
            {
              id: "p-discount-sub",
              type: "text",
              props: {
                content: "EM TODA A LOJA",
                color: SAGE,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "3px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "p-image-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "16px 24px 12px" },
      children: [
        {
          id: "p-image-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "p-image-img",
              type: "image",
              props: {
                src: HERO_IMG,
                alt: "Summer sale",
                width: "560px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "p-intro-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "20px 48px 16px" },
      children: [
        {
          id: "p-intro-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "p-intro-text",
              type: "text",
              props: {
                content:
                  "Os pretos, os cremes, os verdes que você esperou o ano inteiro. *Selecionamos peças* que conversam entre si — fáceis de combinar, feitas pra durar.",
                color: OLIVE_DEEP,
                fontFamily: SERIF,
                fontSize: "20px",
                fontWeight: "normal",
                lineHeight: "1.55",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "p-code-section",
      type: "section",
      props: { backgroundColor: CREAM_SOFT, padding: "28px 24px" },
      children: [
        {
          id: "p-code-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "p-code-label",
              type: "text",
              props: {
                content: "USE O CÓDIGO",
                color: OLIVE,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "bold",
                letterSpacing: "3px",
                align: "center",
              },
            },
            {
              id: "p-code-value",
              type: "text",
              props: {
                content: "SUMMER30",
                color: OLIVE_DEEP,
                fontFamily: SERIF,
                fontSize: "36px",
                fontWeight: "bold",
                letterSpacing: "6px",
                lineHeight: "1.1",
                align: "center",
              },
            },
            {
              id: "p-code-fine",
              type: "text",
              props: {
                content: "no checkout · válido até domingo, 23h59",
                color: MUTED,
                fontFamily: SANS,
                fontSize: "10px",
                letterSpacing: "1px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "p-cta-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "8px 24px 32px" },
      children: [
        {
          id: "p-cta-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "p-cta-btn",
              type: "button",
              props: {
                label: "aproveitar a oferta",
                href: "https://example.com/sale",
                backgroundColor: OLIVE_DEEP,
                color: CREAM,
                align: "center",
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "2.5px",
                borderRadius: "26px",
                innerPadding: "13px 32px",
              },
            },
          ],
        },
      ],
    },
    {
      id: "p-shop-eyebrow-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "16px 24px 8px" },
      children: [
        {
          id: "p-shop-eyebrow-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "p-shop-eyebrow-text",
              type: "text",
              props: {
                content: "DESTAQUES DA SELEÇÃO",
                color: OLIVE_DEEP,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "3px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "p-products-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "12px 12px 16px" },
      children: [
        {
          id: "p-prod-c1",
          type: "column",
          props: { width: "33.33%", verticalAlign: "top" },
          children: [
            {
              id: "p-prod-i1",
              type: "image",
              props: {
                src: PROD_IMG_1,
                alt: "Item 01",
                width: "170px",
                align: "center",
              },
            },
            {
              id: "p-prod-n1",
              type: "text",
              props: {
                content: "*Vestido olive*",
                color: OLIVE_DEEP,
                fontFamily: SERIF,
                fontSize: "18px",
                fontWeight: "bold",
                lineHeight: "1.2",
                align: "center",
              },
            },
            {
              id: "p-prod-p1",
              type: "text",
              props: {
                content: "R$ 189 · ~~R$ 270~~",
                color: MUTED,
                fontFamily: SANS,
                fontSize: "11px",
                letterSpacing: "1px",
                align: "center",
              },
            },
          ],
        },
        {
          id: "p-prod-c2",
          type: "column",
          props: { width: "33.33%", verticalAlign: "top" },
          children: [
            {
              id: "p-prod-i2",
              type: "image",
              props: {
                src: PROD_IMG_2,
                alt: "Item 02",
                width: "170px",
                align: "center",
              },
            },
            {
              id: "p-prod-n2",
              type: "text",
              props: {
                content: "*Conjunto sage*",
                color: OLIVE_DEEP,
                fontFamily: SERIF,
                fontSize: "18px",
                fontWeight: "bold",
                lineHeight: "1.2",
                align: "center",
              },
            },
            {
              id: "p-prod-p2",
              type: "text",
              props: {
                content: "R$ 245 · ~~R$ 350~~",
                color: MUTED,
                fontFamily: SANS,
                fontSize: "11px",
                letterSpacing: "1px",
                align: "center",
              },
            },
          ],
        },
        {
          id: "p-prod-c3",
          type: "column",
          props: { width: "33.34%", verticalAlign: "top" },
          children: [
            {
              id: "p-prod-i3",
              type: "image",
              props: {
                src: PROD_IMG_3,
                alt: "Item 03",
                width: "170px",
                align: "center",
              },
            },
            {
              id: "p-prod-n3",
              type: "text",
              props: {
                content: "*Trench oliva*",
                color: OLIVE_DEEP,
                fontFamily: SERIF,
                fontSize: "18px",
                fontWeight: "bold",
                lineHeight: "1.2",
                align: "center",
              },
            },
            {
              id: "p-prod-p3",
              type: "text",
              props: {
                content: "R$ 329 · ~~R$ 470~~",
                color: MUTED,
                fontFamily: SANS,
                fontSize: "11px",
                letterSpacing: "1px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "p-divider-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "24px 24px 8px" },
      children: [
        {
          id: "p-divider-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "p-divider",
              type: "divider",
              props: {
                borderColor: OLIVE,
                borderWidth: "1px",
                width: "120px",
              },
            },
          ],
        },
      ],
    },
    {
      id: "p-fine-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "8px 40px 24px" },
      children: [
        {
          id: "p-fine-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "p-fine-text",
              type: "text",
              props: {
                content:
                  "Frete grátis acima de R$ 199 · trocas em até 30 dias · acabamentos costurados à mão.",
                color: MUTED,
                fontFamily: SANS,
                fontSize: "10px",
                lineHeight: "1.7",
                letterSpacing: "1px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "p-outro-section",
      type: "section",
      props: { backgroundColor: OLIVE_SOFT, padding: "32px 24px" },
      children: [
        {
          id: "p-outro-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "p-outro-script",
              type: "text",
              props: {
                content: "*até domingo,*",
                color: CREAM,
                fontFamily: SCRIPT,
                fontSize: "38px",
                fontWeight: "normal",
                lineHeight: "1.0",
                align: "center",
              },
            },
            {
              id: "p-outro-name",
              type: "text",
              props: {
                content: "SUA MARCA",
                color: CREAM,
                fontFamily: SERIF,
                fontSize: "14px",
                fontWeight: "bold",
                letterSpacing: "5px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "p-footer-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "20px 30px 32px" },
      children: [
        {
          id: "p-footer-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "p-footer-text",
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
