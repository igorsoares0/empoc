import type { Template } from "@/types/email";

const SERIF = "'Cormorant Garamond', Georgia, serif";
const SANS = "Inter, sans-serif";

const DARK = "#352820";
const CREAM = "#efeeea";
const MUTED = "#7a6f63";

const IMG_1 =
  "https://placehold.co/360x500/d8c4a5/8a7560?text=Look+1";
const IMG_2 =
  "https://placehold.co/360x500/c9b496/7a6240?text=Look+2";
const IMG_3 =
  "https://placehold.co/360x500/b8a282/65503a?text=Look+3";

export const welcomeEditorial: Template = {
  id: "welcome-editorial",
  name: "Boas-vindas editorial",
  category: "Onboarding",
  description:
    "Boas-vindas com título gigante serif, categorias e grid de looks.",
  tree: [
    {
      id: "we-title-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "60px 20px 16px" },
      children: [
        {
          id: "we-title-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "we-title-text",
              type: "text",
              props: {
                content: "WELCOME",
                color: DARK,
                fontFamily: SERIF,
                fontSize: "80px",
                fontWeight: "normal",
                letterSpacing: "4px",
                lineHeight: "1.0",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "we-body-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "24px 36px 40px" },
      children: [
        {
          id: "we-body-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "we-body-text",
              type: "text",
              props: {
                content:
                  "NAM NEC ULTRICIES SEM. ETIAM SODALES NIBH VEL\nPURUS VARIUS ALIQUAM. NULLA RUTRUM MAGNA\nEGET ALIQUET PORTA. DONEC EGET MAGNA\nEUISMOD.\nPORTA EROS SED. NAM NEC ULTRICIES SEM. ETIAM\nSODALES NIBH VEL PURUS VARIUS ALIQUAM. NULLA\nRUTRUM MAGNA EGET ALIQUET PORTA. DONEC EGET\nMAGNA EUISMOD. PORTA EROS SED",
                color: DARK,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "normal",
                letterSpacing: "1.5px",
                lineHeight: "1.9",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "we-tabs-section",
      type: "section",
      props: { backgroundColor: DARK, padding: "16px 0" },
      children: [
        {
          id: "we-tabs-c1",
          type: "column",
          props: { width: "33.33%", verticalAlign: "middle" },
          children: [
            {
              id: "we-tab-1",
              type: "text",
              props: {
                content: "SHOES",
                color: CREAM,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "3px",
                align: "center",
              },
            },
          ],
        },
        {
          id: "we-tabs-c2",
          type: "column",
          props: { width: "33.33%", verticalAlign: "middle" },
          children: [
            {
              id: "we-tab-2",
              type: "text",
              props: {
                content: "OFFICE",
                color: CREAM,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "3px",
                align: "center",
              },
            },
          ],
        },
        {
          id: "we-tabs-c3",
          type: "column",
          props: { width: "33.34%", verticalAlign: "middle" },
          children: [
            {
              id: "we-tab-3",
              type: "text",
              props: {
                content: "WEAR",
                color: CREAM,
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
      id: "we-grid-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "24px 16px 8px" },
      children: [
        {
          id: "we-grid-c1",
          type: "column",
          props: { width: "33.33%", verticalAlign: "top" },
          children: [
            {
              id: "we-grid-i1",
              type: "image",
              props: {
                src: IMG_1,
                alt: "Look 1",
                width: "180px",
                href: "https://example.com/shoes",
                align: "center",
              },
            },
          ],
        },
        {
          id: "we-grid-c2",
          type: "column",
          props: { width: "33.33%", verticalAlign: "top" },
          children: [
            {
              id: "we-grid-i2",
              type: "image",
              props: {
                src: IMG_2,
                alt: "Look 2",
                width: "180px",
                href: "https://example.com/office",
                align: "center",
              },
            },
          ],
        },
        {
          id: "we-grid-c3",
          type: "column",
          props: { width: "33.34%", verticalAlign: "top" },
          children: [
            {
              id: "we-grid-i3",
              type: "image",
              props: {
                src: IMG_3,
                alt: "Look 3",
                width: "180px",
                href: "https://example.com/wear",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "we-cta-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "24px 24px 40px" },
      children: [
        {
          id: "we-cta-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "we-cta-btn",
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
                innerPadding: "11px 28px",
              },
            },
          ],
        },
      ],
    },
    {
      id: "we-footer-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "0 30px 32px" },
      children: [
        {
          id: "we-footer-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "we-footer-text",
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
