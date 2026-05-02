import type { Template } from "@/types/email";

const SERIF = "'Cormorant Garamond', Georgia, serif";
const SCRIPT = "'Pinyon Script', cursive";
const SANS = "Inter, sans-serif";

const CREAM = "#efeeea";
const CREAM_SOFT = "#f6f4ef";
const DARK = "#3a2c22";
const WARM = "#8a6f54";
const MUTED = "#7a6f63";

const FEATURE_IMG =
  "https://placehold.co/1100x620/d8c4a5/8a6f54?text=Destaque+do+m%C3%AAs";
const SUB_IMG_1 =
  "https://placehold.co/520x520/c9b496/7a6240?text=Artigo+02";
const SUB_IMG_2 =
  "https://placehold.co/520x520/b8a282/65503a?text=Artigo+03";

export const newsletter: Template = {
  id: "newsletter",
  name: "Newsletter",
  category: "Conteúdo",
  description:
    "Newsletter editorial mensal com destaque, artigos secundários e citação.",
  tree: [
    {
      id: "n-issue-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "40px 24px 4px" },
      children: [
        {
          id: "n-issue-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "n-issue-text",
              type: "text",
              props: {
                content: "ISSUE Nº 12 · MAIO 2026",
                color: WARM,
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
      id: "n-masthead-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "8px 24px 4px" },
      children: [
        {
          id: "n-masthead-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "n-masthead-script",
              type: "text",
              props: {
                content: "the",
                color: WARM,
                fontFamily: SCRIPT,
                fontSize: "52px",
                fontWeight: "normal",
                lineHeight: "1.0",
                align: "center",
              },
            },
            {
              id: "n-masthead-title",
              type: "text",
              props: {
                content: "JOURNAL",
                color: DARK,
                fontFamily: SERIF,
                fontSize: "76px",
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
      id: "n-tagline-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "12px 40px 24px" },
      children: [
        {
          id: "n-tagline-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "n-tagline-text",
              type: "text",
              props: {
                content: "— PALAVRAS, PROCESSOS E DESCOBERTAS DO MÊS —",
                color: MUTED,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "bold",
                letterSpacing: "2.5px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "n-feature-img-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "0 24px 16px" },
      children: [
        {
          id: "n-feature-img-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "n-feature-img",
              type: "image",
              props: {
                src: FEATURE_IMG,
                alt: "Destaque do mês",
                width: "560px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "n-feature-meta-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "8px 40px 4px" },
      children: [
        {
          id: "n-feature-meta-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "n-feature-eyebrow",
              type: "text",
              props: {
                content: "FEATURED · 8 MIN DE LEITURA",
                color: WARM,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "bold",
                letterSpacing: "2.5px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "n-feature-title-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "8px 40px 8px" },
      children: [
        {
          id: "n-feature-title-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "n-feature-title-text",
              type: "text",
              props: {
                content: "O ofício de criar\ndevagar.",
                color: DARK,
                fontFamily: SERIF,
                fontSize: "44px",
                fontWeight: "bold",
                lineHeight: "1.05",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "n-feature-body-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "8px 48px 16px" },
      children: [
        {
          id: "n-feature-body-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "n-feature-body-text",
              type: "text",
              props: {
                content:
                  "Esse mês passei pensando muito sobre ritmo. Sobre o que fica quando a pressa sai de cena, e o que aparece quando damos espaço pro processo respirar. *Um convite pra desacelerar* — sem culpa, sem urgência.",
                color: DARK,
                fontFamily: SERIF,
                fontSize: "18px",
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
      id: "n-feature-cta-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "8px 24px 32px" },
      children: [
        {
          id: "n-feature-cta-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "n-feature-link",
              type: "text",
              props: {
                content: "[ler a edição completa →](https://example.com/feature)",
                color: DARK,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "2.5px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "n-divider-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "0 220px 24px" },
      children: [
        {
          id: "n-divider-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "n-divider",
              type: "divider",
              props: {
                borderColor: WARM,
                borderWidth: "1px",
                width: "100%",
              },
            },
          ],
        },
      ],
    },
    {
      id: "n-also-eyebrow-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "8px 24px 16px" },
      children: [
        {
          id: "n-also-eyebrow-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "n-also-eyebrow-text",
              type: "text",
              props: {
                content: "ALSO IN THIS ISSUE",
                color: DARK,
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
      id: "n-also-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "0 16px 24px" },
      children: [
        {
          id: "n-also-c1",
          type: "column",
          props: { width: "50%", verticalAlign: "top" },
          children: [
            {
              id: "n-also-i1",
              type: "image",
              props: {
                src: SUB_IMG_1,
                alt: "Artigo 02",
                width: "240px",
                align: "center",
              },
            },
            {
              id: "n-also-eb1",
              type: "text",
              props: {
                content: "PROCESSO · 4 MIN",
                color: WARM,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "bold",
                letterSpacing: "2.5px",
                align: "center",
              },
            },
            {
              id: "n-also-t1",
              type: "text",
              props: {
                content: "Notas de\nateliê",
                color: DARK,
                fontFamily: SERIF,
                fontSize: "26px",
                fontWeight: "bold",
                lineHeight: "1.1",
                align: "center",
              },
            },
            {
              id: "n-also-b1",
              type: "text",
              props: {
                content:
                  "Pequenos rituais que sustentam meses de trabalho criativo.",
                color: MUTED,
                fontFamily: SANS,
                fontSize: "11px",
                lineHeight: "1.8",
                align: "center",
              },
            },
            {
              id: "n-also-l1",
              type: "text",
              props: {
                content: "[ler →](https://example.com/02)",
                color: DARK,
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
          id: "n-also-c2",
          type: "column",
          props: { width: "50%", verticalAlign: "top" },
          children: [
            {
              id: "n-also-i2",
              type: "image",
              props: {
                src: SUB_IMG_2,
                alt: "Artigo 03",
                width: "240px",
                align: "center",
              },
            },
            {
              id: "n-also-eb2",
              type: "text",
              props: {
                content: "DESCOBERTAS · 3 MIN",
                color: WARM,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "bold",
                letterSpacing: "2.5px",
                align: "center",
              },
            },
            {
              id: "n-also-t2",
              type: "text",
              props: {
                content: "Cinco coisas\nque amei",
                color: DARK,
                fontFamily: SERIF,
                fontSize: "26px",
                fontWeight: "bold",
                lineHeight: "1.1",
                align: "center",
              },
            },
            {
              id: "n-also-b2",
              type: "text",
              props: {
                content:
                  "Livros, lugares e objetos que entraram pro caderno esse mês.",
                color: MUTED,
                fontFamily: SANS,
                fontSize: "11px",
                lineHeight: "1.8",
                align: "center",
              },
            },
            {
              id: "n-also-l2",
              type: "text",
              props: {
                content: "[ler →](https://example.com/03)",
                color: DARK,
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
      id: "n-quote-section",
      type: "section",
      props: { backgroundColor: CREAM_SOFT, padding: "44px 48px 44px" },
      children: [
        {
          id: "n-quote-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "n-quote-mark",
              type: "text",
              props: {
                content: "“",
                color: WARM,
                fontFamily: SERIF,
                fontSize: "72px",
                fontWeight: "bold",
                lineHeight: "0.7",
                align: "center",
              },
            },
            {
              id: "n-quote-text",
              type: "text",
              props: {
                content:
                  "*A pressa é inimiga\ndo cuidado.*",
                color: DARK,
                fontFamily: SERIF,
                fontSize: "26px",
                lineHeight: "1.3",
                align: "center",
              },
            },
            {
              id: "n-quote-author",
              type: "text",
              props: {
                content: "— ANOTAÇÃO DO MÊS",
                color: WARM,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "bold",
                letterSpacing: "2.5px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "n-cta-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "32px 24px 16px" },
      children: [
        {
          id: "n-cta-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "n-cta-btn",
              type: "button",
              props: {
                label: "explorar o arquivo",
                href: "https://example.com/archive",
                backgroundColor: CREAM,
                color: DARK,
                align: "center",
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "2.5px",
                border: `1px solid ${DARK}`,
                borderRadius: "26px",
                innerPadding: "13px 32px",
              },
            },
          ],
        },
      ],
    },
    {
      id: "n-sign-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "16px 24px 8px" },
      children: [
        {
          id: "n-sign-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "n-sign-line",
              type: "text",
              props: {
                content: "*até a próxima edição,*",
                color: MUTED,
                fontFamily: SERIF,
                fontSize: "16px",
                lineHeight: "1.2",
                align: "center",
              },
            },
            {
              id: "n-sign-name",
              type: "text",
              props: {
                content: "Sua Marca",
                color: DARK,
                fontFamily: SCRIPT,
                fontSize: "40px",
                fontWeight: "normal",
                lineHeight: "1.0",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "n-footer-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "16px 30px 32px" },
      children: [
        {
          id: "n-footer-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "n-footer-text",
              type: "text",
              props: {
                content:
                  "Você recebe esta carta porque assinou The Journal.\nEndereço da empresa, Cidade, Estado, CEP\n[Cancelar inscrição](https://example.com/unsub).",
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
