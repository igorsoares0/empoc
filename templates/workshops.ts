import type { Template } from "@/types/email";

const SERIF = "'Playfair Display', Georgia, serif";
const SANS = "Inter, sans-serif";

const OLIVE = "#494D3E";
const CREAM = "#EDE8E2";
const CREAM_SOFT = "#9a9b8e";
const BUTTON_BG = "#EDE8E2";
const BUTTON_TEXT = "#494D3E";

const IMG_1 =
  "https://placehold.co/540x540/d6cdb6/8a7a55?text=Dried+Flowers";
const IMG_2 =
  "https://placehold.co/540x540/c8c8a8/5d5d3f?text=Green+Vase";
const IMG_3 =
  "https://placehold.co/540x540/e3dcc4/6b6a47?text=Botanical+Prints";
const IMG_4 =
  "https://placehold.co/540x540/d8cdb0/7c6c4a?text=Wildflowers";

function svgDataUri(svg: string): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const ICON_INSTAGRAM = svgDataUri(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' fill='none' stroke='${CREAM}' stroke-width='2'><circle cx='24' cy='24' r='22'/><rect x='15' y='15' width='18' height='18' rx='4'/><circle cx='24' cy='24' r='4.5'/><circle cx='31' cy='17' r='1.4' fill='${CREAM}' stroke='none'/></svg>`,
);

const ICON_FACEBOOK = svgDataUri(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><circle cx='24' cy='24' r='22' fill='none' stroke='${CREAM}' stroke-width='2'/><path d='M26.6 17.5h2v-3h-2.6c-2.1 0-3.5 1.4-3.5 3.5v2.4h-2.5v3h2.5v9.6h3.5v-9.6h2.7l.3-3h-3v-2c0-.5.3-.9.9-.9z' fill='${CREAM}'/></svg>`,
);

const ICON_YOUTUBE = svgDataUri(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' fill='none' stroke='${CREAM}' stroke-width='2'><circle cx='24' cy='24' r='22'/><rect x='14' y='18' width='20' height='12' rx='2'/><polygon points='22,21 29,24 22,27' fill='${CREAM}' stroke='none'/></svg>`,
);

export const workshops: Template = {
  id: "workshops",
  name: "Convite Workshop",
  category: "Marketing",
  description:
    "Editorial em verde-oliva com grid de imagens, giveaway e redes sociais.",
  tree: [
    {
      id: "wk-header",
      type: "section",
      props: { backgroundColor: OLIVE, padding: "32px 30px 24px" },
      children: [
        {
          id: "wk-header-col-left",
          type: "column",
          props: { width: "65%", verticalAlign: "middle" },
          children: [
            {
              id: "wk-header-pre",
              type: "text",
              props: {
                content: "Enjoy our",
                color: CREAM,
                fontFamily: SERIF,
                fontSize: "20px",
                fontWeight: "normal",
                lineHeight: "1.1",
                align: "left",
              },
            },
            {
              id: "wk-header-title",
              type: "text",
              props: {
                content: "WORKSHOPS",
                color: CREAM,
                fontFamily: SERIF,
                fontSize: "34px",
                fontWeight: "bold",
                letterSpacing: "2px",
                lineHeight: "1.05",
                align: "left",
              },
            },
          ],
        },
        {
          id: "wk-header-col-right",
          type: "column",
          props: { width: "35%", verticalAlign: "top" },
          children: [
            {
              id: "wk-header-take",
              type: "text",
              props: {
                content: "Take a wait",
                color: CREAM,
                fontFamily: SERIF,
                fontSize: "13px",
                fontWeight: "normal",
                lineHeight: "1.3",
                align: "right",
              },
            },
            {
              id: "wk-header-cta",
              type: "text",
              props: {
                content: "[GUIDE NOW](https://example.com/guide)",
                color: CREAM,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "2px",
                lineHeight: "1.4",
                align: "right",
              },
            },
          ],
        },
      ],
    },
    {
      id: "wk-grid-row-1",
      type: "section",
      props: { backgroundColor: OLIVE, padding: "8px 24px 4px" },
      children: [
        {
          id: "wk-grid-1-col-1",
          type: "column",
          props: { width: "50%", verticalAlign: "top" },
          children: [
            {
              id: "wk-img-1",
              type: "image",
              props: {
                src: IMG_1,
                alt: "Vaso com flores secas",
                width: "260px",
                align: "center",
              },
            },
          ],
        },
        {
          id: "wk-grid-1-col-2",
          type: "column",
          props: { width: "50%", verticalAlign: "top" },
          children: [
            {
              id: "wk-img-2",
              type: "image",
              props: {
                src: IMG_2,
                alt: "Vaso de cerâmica verde",
                width: "260px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "wk-grid-row-2",
      type: "section",
      props: { backgroundColor: OLIVE, padding: "4px 24px 24px" },
      children: [
        {
          id: "wk-grid-2-col-1",
          type: "column",
          props: { width: "50%", verticalAlign: "top" },
          children: [
            {
              id: "wk-img-3",
              type: "image",
              props: {
                src: IMG_3,
                alt: "Quadros botânicos",
                width: "260px",
                align: "center",
              },
            },
          ],
        },
        {
          id: "wk-grid-2-col-2",
          type: "column",
          props: { width: "50%", verticalAlign: "top" },
          children: [
            {
              id: "wk-img-4",
              type: "image",
              props: {
                src: IMG_4,
                alt: "Buquê de flores secas",
                width: "260px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "wk-body",
      type: "section",
      props: { backgroundColor: OLIVE, padding: "20px 36px 28px" },
      children: [
        {
          id: "wk-body-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "wk-body-text",
              type: "text",
              props: {
                content:
                  "Give-away closes Sunday 8/12 at 11:59pm,\ndon't miss your chance to enter our giveaway,\nso make sure to get yours in before it's too late!",
                color: CREAM,
                fontFamily: SERIF,
                fontSize: "15px",
                fontWeight: "normal",
                lineHeight: "1.7",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "wk-cta",
      type: "section",
      props: { backgroundColor: OLIVE, padding: "0 30px 36px" },
      children: [
        {
          id: "wk-cta-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "wk-cta-button",
              type: "button",
              props: {
                label: "FIND THE GIFT",
                href: "https://example.com/giveaway",
                backgroundColor: BUTTON_BG,
                color: BUTTON_TEXT,
                fontFamily: SANS,
                fontSize: "12px",
                fontWeight: "bold",
                letterSpacing: "3px",
                borderRadius: "32px",
                innerPadding: "16px 36px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "wk-divider-top",
      type: "section",
      props: { backgroundColor: OLIVE, padding: "0 36px" },
      children: [
        {
          id: "wk-divider-top-col",
          type: "column",
          props: { verticalAlign: "top" },
          children: [
            {
              id: "wk-divider-top-line",
              type: "divider",
              props: {
                borderColor: CREAM_SOFT,
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
      id: "wk-social",
      type: "section",
      props: { backgroundColor: OLIVE, padding: "24px 36px 32px" },
      children: [
        {
          id: "wk-social-ig-col",
          type: "column",
          props: { width: "33.33%", verticalAlign: "middle" },
          children: [
            {
              id: "wk-social-ig",
              type: "image",
              props: {
                src: ICON_INSTAGRAM,
                alt: "Instagram",
                width: "28px",
                align: "center",
                href: "https://instagram.com/",
              },
            },
          ],
        },
        {
          id: "wk-social-fb-col",
          type: "column",
          props: { width: "33.33%", verticalAlign: "middle" },
          children: [
            {
              id: "wk-social-fb",
              type: "image",
              props: {
                src: ICON_FACEBOOK,
                alt: "Facebook",
                width: "28px",
                align: "center",
                href: "https://facebook.com/",
              },
            },
          ],
        },
        {
          id: "wk-social-yt-col",
          type: "column",
          props: { width: "33.34%", verticalAlign: "middle" },
          children: [
            {
              id: "wk-social-yt",
              type: "image",
              props: {
                src: ICON_YOUTUBE,
                alt: "Youtube",
                width: "28px",
                align: "center",
                href: "https://youtube.com/",
              },
            },
          ],
        },
      ],
    },
  ],
};
