import type { Template } from "@/types/email";

const SERIF = "'Cormorant Garamond', Georgia, serif";
const SANS = "Inter, sans-serif";

const OLIVE = "#9a9c8a";
const CREAM = "#efeeea";
const DARK = "#352820";
const MUTED = "#7a6f63";

const IMG_1 =
  "https://placehold.co/360x420/e9dec3/8c7548?text=Dried+wheat";
const IMG_2 =
  "https://placehold.co/360x420/c8c8a8/3d4a2c?text=Botanical+prints";
const IMG_3 =
  "https://placehold.co/360x420/c89a78/5a3520?text=Vase+%2B+fruit";

function svgDataUri(svg: string): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const ICON_INSTAGRAM = svgDataUri(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' fill='none' stroke='${DARK}' stroke-width='2'><circle cx='24' cy='24' r='22'/><rect x='15' y='15' width='18' height='18' rx='4'/><circle cx='24' cy='24' r='4.5'/><circle cx='31' cy='17' r='1.4' fill='${DARK}' stroke='none'/></svg>`,
);

const ICON_FACEBOOK = svgDataUri(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><circle cx='24' cy='24' r='22' fill='none' stroke='${DARK}' stroke-width='2'/><path d='M26.6 17.5h2v-3h-2.6c-2.1 0-3.5 1.4-3.5 3.5v2.4h-2.5v3h2.5v9.6h3.5v-9.6h2.7l.3-3h-3v-2c0-.5.3-.9.9-.9z' fill='${DARK}'/></svg>`,
);

const ICON_YOUTUBE = svgDataUri(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' fill='none' stroke='${DARK}' stroke-width='2'><circle cx='24' cy='24' r='22'/><rect x='14' y='18' width='20' height='12' rx='2'/><polygon points='22,21 29,24 22,27' fill='${DARK}' stroke='none'/></svg>`,
);

export const giveaway: Template = {
  id: "giveaway",
  name: "Giveaway",
  category: "Marketing",
  description:
    "Editorial em sage com sorteio: hero, grid de produtos e ícones sociais.",
  tree: [
    {
      id: "gv-hero-section",
      type: "section",
      props: { backgroundColor: OLIVE, padding: "20px 24px 32px" },
      children: [
        {
          id: "gv-hero-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "gv-hero-link",
              type: "text",
              props: {
                content: "[Visit our website](https://example.com)",
                color: DARK,
                fontFamily: SANS,
                fontSize: "12px",
                letterSpacing: "0.5px",
                align: "center",
              },
            },
            {
              id: "gv-hero-title",
              type: "text",
              props: {
                content: "GIVEAWAY",
                color: DARK,
                fontFamily: SERIF,
                fontSize: "44px",
                fontWeight: "bold",
                letterSpacing: "1px",
                lineHeight: "1.05",
                align: "center",
              },
            },
            {
              id: "gv-hero-sub",
              type: "text",
              props: {
                content: "*to say thank you!*",
                color: DARK,
                fontFamily: SERIF,
                fontSize: "30px",
                fontWeight: "normal",
                lineHeight: "1.1",
                align: "center",
              },
            },
            {
              id: "gv-hero-btn",
              type: "button",
              props: {
                label: "TELL ME MORE",
                href: "https://example.com/giveaway",
                backgroundColor: CREAM,
                color: DARK,
                align: "center",
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "bold",
                letterSpacing: "2px",
                border: `1px solid ${DARK}`,
                borderRadius: "24px",
                innerPadding: "11px 24px",
              },
            },
          ],
        },
      ],
    },
    {
      id: "gv-body-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "32px 30px 12px" },
      children: [
        {
          id: "gv-body-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "gv-body-eyebrow",
              type: "text",
              props: {
                content: "CHECK IT OUT",
                color: DARK,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "3px",
                align: "center",
              },
            },
            {
              id: "gv-body-spacer",
              type: "spacer",
              props: { height: "12px" },
            },
            {
              id: "gv-body-text",
              type: "text",
              props: {
                content:
                  "Give-away closes Sunday 8/12 at 11:59pm\nDon't miss your chance to enter our giveaway,\nso make sure to get yours in before it's too late!",
                color: DARK,
                fontFamily: SERIF,
                fontSize: "17px",
                lineHeight: "1.5",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "gv-grid-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "24px 0 12px" },
      children: [
        {
          id: "gv-grid-c1",
          type: "column",
          props: { width: "33.33%", verticalAlign: "top" },
          children: [
            {
              id: "gv-grid-i1",
              type: "image",
              props: {
                src: IMG_1,
                alt: "Produto 1",
                width: "200px",
                align: "center",
              },
            },
          ],
        },
        {
          id: "gv-grid-c2",
          type: "column",
          props: { width: "33.33%", verticalAlign: "top" },
          children: [
            {
              id: "gv-grid-i2",
              type: "image",
              props: {
                src: IMG_2,
                alt: "Produto 2",
                width: "200px",
                align: "center",
              },
            },
          ],
        },
        {
          id: "gv-grid-c3",
          type: "column",
          props: { width: "33.34%", verticalAlign: "top" },
          children: [
            {
              id: "gv-grid-i3",
              type: "image",
              props: {
                src: IMG_3,
                alt: "Produto 3",
                width: "200px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "gv-pd-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "24px 24px 8px" },
      children: [
        {
          id: "gv-pd-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "gv-pd-text",
              type: "text",
              props: {
                content: "PRODUCT DETAILS",
                color: DARK,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "3px",
                align: "center",
              },
            },
            {
              id: "gv-pd-divider",
              type: "divider",
              props: {
                borderColor: DARK,
                borderWidth: "1px",
                borderStyle: "solid",
                width: "160px",
                padding: "8px 0 0",
              },
            },
          ],
        },
      ],
    },
    {
      id: "gv-social-divider-top",
      type: "section",
      props: { backgroundColor: CREAM, padding: "12px 0 0" },
      children: [
        {
          id: "gv-social-divider-top-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "gv-social-divider-top-line",
              type: "divider",
              props: {
                borderColor: DARK,
                borderWidth: "1px",
                borderStyle: "solid",
                width: "100%",
                padding: "0",
              },
            },
          ],
        },
      ],
    },
    {
      id: "gv-social-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "20px 24px" },
      children: [
        {
          id: "gv-social-c1",
          type: "column",
          props: { width: "33.33%", verticalAlign: "middle" },
          children: [
            {
              id: "gv-social-i1",
              type: "image",
              props: {
                src: ICON_INSTAGRAM,
                alt: "Instagram",
                width: "28px",
                href: "https://instagram.com",
                align: "center",
              },
            },
          ],
        },
        {
          id: "gv-social-c2",
          type: "column",
          props: { width: "33.33%", verticalAlign: "middle" },
          children: [
            {
              id: "gv-social-i2",
              type: "image",
              props: {
                src: ICON_FACEBOOK,
                alt: "Facebook",
                width: "28px",
                href: "https://facebook.com",
                align: "center",
              },
            },
          ],
        },
        {
          id: "gv-social-c3",
          type: "column",
          props: { width: "33.34%", verticalAlign: "middle" },
          children: [
            {
              id: "gv-social-i3",
              type: "image",
              props: {
                src: ICON_YOUTUBE,
                alt: "Youtube",
                width: "28px",
                href: "https://youtube.com",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "gv-social-divider-bottom",
      type: "section",
      props: { backgroundColor: CREAM, padding: "0 0 12px" },
      children: [
        {
          id: "gv-social-divider-bottom-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "gv-social-divider-bottom-line",
              type: "divider",
              props: {
                borderColor: DARK,
                borderWidth: "1px",
                borderStyle: "solid",
                width: "100%",
                padding: "0",
              },
            },
          ],
        },
      ],
    },
    {
      id: "gv-footer-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "16px 30px 32px" },
      children: [
        {
          id: "gv-footer-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "gv-footer-text",
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
