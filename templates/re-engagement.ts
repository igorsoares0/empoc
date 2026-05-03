import type { Template } from "@/types/email";

const DISPLAY = "'Playfair Display', Georgia, serif";
const BODY = "Lora, Georgia, serif";
const SANS = "Montserrat, sans-serif";

const RUST = "#7a4530";
const AMBER = "#c4825a";
const CORAL_SOFT = "#f5d0bb";
const CREAM = "#faeede";
const CREAM_SOFT = "#fdf6ec";
const MUTED = "#9a7a68";

const HERO_IMG =
  "https://placehold.co/1100x620/f5d0bb/7a4530?text=Senti+sua+falta";
const PICK_IMG_1 =
  "https://placehold.co/520x520/e8a988/7a4530?text=Lan%C3%A7amento";
const PICK_IMG_2 =
  "https://placehold.co/520x520/c4825a/faeede?text=Editorial";
const PICK_IMG_3 =
  "https://placehold.co/520x520/f5d0bb/9a7a68?text=Bestseller";

export const reEngagement: Template = {
  id: "re-engagement",
  name: "Senti sua falta",
  category: "Retenção",
  description:
    "Reativação calorosa em peach e amber, tipografia Playfair + Lora, com cupom de retorno.",
  tree: [
    {
      id: "re-band-section",
      type: "section",
      props: { backgroundColor: RUST, padding: "12px 16px" },
      children: [
        {
          id: "re-band-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "re-band-text",
              type: "text",
              props: {
                content: "— UM CONVITE PRA VOLTAR —",
                color: CORAL_SOFT,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "bold",
                letterSpacing: "3.5px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "re-eyebrow-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "48px 24px 4px" },
      children: [
        {
          id: "re-eyebrow-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "re-eyebrow-text",
              type: "text",
              props: {
                content: "JÁ FAZ UM TEMPINHO",
                color: AMBER,
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
      id: "re-hero-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "12px 24px 4px" },
      children: [
        {
          id: "re-hero-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "re-hero-italic",
              type: "text",
              props: {
                content: "*senti*",
                color: AMBER,
                fontFamily: DISPLAY,
                fontSize: "56px",
                fontWeight: "normal",
                lineHeight: "1.0",
                align: "center",
              },
            },
            {
              id: "re-hero-bold",
              type: "text",
              props: {
                content: "SUA FALTA",
                color: RUST,
                fontFamily: DISPLAY,
                fontSize: "70px",
                fontWeight: "bold",
                letterSpacing: "5px",
                lineHeight: "1.0",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "re-tagline-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "20px 56px 24px" },
      children: [
        {
          id: "re-tagline-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "re-tagline-text",
              type: "text",
              props: {
                content:
                  "Faz um tempo que você não aparece por aqui — e o inbox tava esperando *uma boa razão* pra te chamar de volta. Acho que achamos uma.",
                color: RUST,
                fontFamily: BODY,
                fontSize: "19px",
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
      id: "re-image-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "0 24px 16px" },
      children: [
        {
          id: "re-image-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "re-image-img",
              type: "image",
              props: {
                src: HERO_IMG,
                alt: "Senti sua falta",
                width: "560px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "re-offer-section",
      type: "section",
      props: { backgroundColor: CORAL_SOFT, padding: "48px 24px 44px" },
      children: [
        {
          id: "re-offer-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "re-offer-eyebrow",
              type: "text",
              props: {
                content: "PRESENTE DE BOAS-VINDAS",
                color: RUST,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "bold",
                letterSpacing: "3px",
                align: "center",
              },
            },
            {
              id: "re-offer-num",
              type: "text",
              props: {
                content: "15% OFF",
                color: RUST,
                fontFamily: DISPLAY,
                fontSize: "70px",
                fontWeight: "bold",
                letterSpacing: "3px",
                lineHeight: "1.0",
                align: "center",
              },
            },
            {
              id: "re-offer-italic",
              type: "text",
              props: {
                content: "*na sua próxima compra,*",
                color: RUST,
                fontFamily: DISPLAY,
                fontSize: "22px",
                lineHeight: "1.2",
                align: "center",
              },
            },
            {
              id: "re-offer-spacer",
              type: "spacer",
              props: { height: "20px" },
            },
            {
              id: "re-offer-codelabel",
              type: "text",
              props: {
                content: "USE O CÓDIGO",
                color: AMBER,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "bold",
                letterSpacing: "3px",
                align: "center",
              },
            },
            {
              id: "re-offer-code",
              type: "text",
              props: {
                content: "VOLTA15",
                color: RUST,
                fontFamily: DISPLAY,
                fontSize: "32px",
                fontWeight: "bold",
                letterSpacing: "8px",
                lineHeight: "1.1",
                align: "center",
              },
            },
            {
              id: "re-offer-fine",
              type: "text",
              props: {
                content: "válido até 30 de maio · sem mínimo de pedido",
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
      id: "re-cta-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "32px 24px 24px" },
      children: [
        {
          id: "re-cta-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "re-cta-btn",
              type: "button",
              props: {
                label: "voltar pra loja",
                href: "https://example.com/shop",
                backgroundColor: RUST,
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
      id: "re-divider-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "8px 220px 16px" },
      children: [
        {
          id: "re-divider-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "re-divider",
              type: "divider",
              props: {
                borderColor: AMBER,
                borderWidth: "1px",
                width: "100%",
              },
            },
          ],
        },
      ],
    },
    {
      id: "re-missed-eyebrow-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "16px 24px 4px" },
      children: [
        {
          id: "re-missed-eyebrow-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "re-missed-eyebrow-text",
              type: "text",
              props: {
                content: "ENQUANTO VOCÊ NÃO ESTAVA",
                color: RUST,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "3px",
                align: "center",
              },
            },
            {
              id: "re-missed-sub",
              type: "text",
              props: {
                content: "*algumas coisas que apareceram*",
                color: AMBER,
                fontFamily: DISPLAY,
                fontSize: "22px",
                lineHeight: "1.3",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "re-missed-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "20px 12px 24px" },
      children: [
        {
          id: "re-missed-c1",
          type: "column",
          props: { width: "33.33%", verticalAlign: "top" },
          children: [
            {
              id: "re-missed-i1",
              type: "image",
              props: {
                src: PICK_IMG_1,
                alt: "Lançamento",
                width: "170px",
                align: "center",
              },
            },
            {
              id: "re-missed-eb1",
              type: "text",
              props: {
                content: "NOVO",
                color: AMBER,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "bold",
                letterSpacing: "2.5px",
                align: "center",
              },
            },
            {
              id: "re-missed-t1",
              type: "text",
              props: {
                content: "*A cápsula\nde maio*",
                color: RUST,
                fontFamily: DISPLAY,
                fontSize: "20px",
                fontWeight: "bold",
                lineHeight: "1.15",
                align: "center",
              },
            },
            {
              id: "re-missed-l1",
              type: "text",
              props: {
                content: "[ver →](https://example.com/capsula)",
                color: RUST,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "bold",
                letterSpacing: "2px",
                align: "center",
              },
            },
          ],
        },
        {
          id: "re-missed-c2",
          type: "column",
          props: { width: "33.33%", verticalAlign: "top" },
          children: [
            {
              id: "re-missed-i2",
              type: "image",
              props: {
                src: PICK_IMG_2,
                alt: "Editorial",
                width: "170px",
                align: "center",
              },
            },
            {
              id: "re-missed-eb2",
              type: "text",
              props: {
                content: "EDITORIAL",
                color: AMBER,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "bold",
                letterSpacing: "2.5px",
                align: "center",
              },
            },
            {
              id: "re-missed-t2",
              type: "text",
              props: {
                content: "*Notas\nde ateliê*",
                color: RUST,
                fontFamily: DISPLAY,
                fontSize: "20px",
                fontWeight: "bold",
                lineHeight: "1.15",
                align: "center",
              },
            },
            {
              id: "re-missed-l2",
              type: "text",
              props: {
                content: "[ler →](https://example.com/atelie)",
                color: RUST,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "bold",
                letterSpacing: "2px",
                align: "center",
              },
            },
          ],
        },
        {
          id: "re-missed-c3",
          type: "column",
          props: { width: "33.34%", verticalAlign: "top" },
          children: [
            {
              id: "re-missed-i3",
              type: "image",
              props: {
                src: PICK_IMG_3,
                alt: "Bestseller",
                width: "170px",
                align: "center",
              },
            },
            {
              id: "re-missed-eb3",
              type: "text",
              props: {
                content: "QUERIDINHO",
                color: AMBER,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "bold",
                letterSpacing: "2.5px",
                align: "center",
              },
            },
            {
              id: "re-missed-t3",
              type: "text",
              props: {
                content: "*De volta\nao estoque*",
                color: RUST,
                fontFamily: DISPLAY,
                fontSize: "20px",
                fontWeight: "bold",
                lineHeight: "1.15",
                align: "center",
              },
            },
            {
              id: "re-missed-l3",
              type: "text",
              props: {
                content: "[comprar →](https://example.com/restock)",
                color: RUST,
                fontFamily: SANS,
                fontSize: "10px",
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
      id: "re-stay-section",
      type: "section",
      props: { backgroundColor: CREAM_SOFT, padding: "40px 48px 36px" },
      children: [
        {
          id: "re-stay-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "re-stay-eyebrow",
              type: "text",
              props: {
                content: "AINDA QUER OUVIR DA GENTE?",
                color: RUST,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "3px",
                align: "center",
              },
            },
            {
              id: "re-stay-text",
              type: "text",
              props: {
                content:
                  "Sem stress se a resposta for *não*. Você pode receber só uma carta por mês — ou se despedir aqui, e a gente entende.",
                color: RUST,
                fontFamily: BODY,
                fontSize: "16px",
                lineHeight: "1.6",
                align: "center",
              },
            },
            {
              id: "re-stay-spacer",
              type: "spacer",
              props: { height: "12px" },
            },
            {
              id: "re-stay-links",
              type: "text",
              props: {
                content:
                  "[reduzir frequência](https://example.com/preferences)  ·  [me despedir](https://example.com/unsub)",
                color: AMBER,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "1.5px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "re-footer-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "20px 30px 32px" },
      children: [
        {
          id: "re-footer-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "re-footer-text",
              type: "text",
              props: {
                content:
                  "© 2026 Sua Marca. Todos os direitos reservados.\nEndereço da empresa, Cidade, Estado, CEP",
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
