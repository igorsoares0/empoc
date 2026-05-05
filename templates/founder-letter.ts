import type { Template } from "@/types/email";

const SERIF = "'Cormorant Garamond', Georgia, serif";
const SCRIPT = "'Pinyon Script', cursive";
const SANS = "Inter, sans-serif";

const PLUM = "#3a2a30";
const MAUVE = "#a07a82";
const BLUSH = "#e9d4d2";
const BLUSH_SOFT = "#f4e4e2";
const CREAM = "#f4ece4";
const CREAM_SOFT = "#faf3ec";
const MUTED = "#8a7672";

const PORTRAIT =
  "https://placehold.co/520x620/e9d4d2/3a2a30?text=Retrato";

export const founderLetter: Template = {
  id: "founder-letter",
  name: "Carta da fundadora",
  category: "Marca",
  description:
    "Carta editorial pessoal em mauve e blush, com retrato e citação destacada.",
  tree: [
    {
      id: "fl-band-section",
      type: "section",
      props: { backgroundColor: PLUM, padding: "12px 16px" },
      children: [
        {
          id: "fl-band-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "fl-band-text",
              type: "text",
              props: {
                content: "— UMA CARTA · MAIO 2026 —",
                color: BLUSH,
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
      id: "fl-eyebrow-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "44px 24px 4px" },
      children: [
        {
          id: "fl-eyebrow-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "fl-eyebrow-text",
              type: "text",
              props: {
                content: "DA FUNDADORA",
                color: MAUVE,
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
      id: "fl-hero-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "8px 24px 4px" },
      children: [
        {
          id: "fl-hero-script",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "fl-hero-script-text",
              type: "text",
              props: {
                content: "uma",
                color: MAUVE,
                fontFamily: SCRIPT,
                fontSize: "60px",
                fontWeight: "normal",
                lineHeight: "1.0",
                align: "center",
              },
            },
            {
              id: "fl-hero-bold-text",
              type: "text",
              props: {
                content: "CARTA",
                color: PLUM,
                fontFamily: SERIF,
                fontSize: "82px",
                fontWeight: "bold",
                letterSpacing: "8px",
                lineHeight: "1.0",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "fl-portrait-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "32px 24px 16px" },
      children: [
        {
          id: "fl-portrait-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "fl-portrait-img",
              type: "image",
              props: {
                src: PORTRAIT,
                alt: "Retrato da fundadora",
                width: "320px",
                align: "center",
              },
            },
            {
              id: "fl-portrait-caption",
              type: "text",
              props: {
                content: "*ateliê, terça de manhã*",
                color: MUTED,
                fontFamily: SERIF,
                fontSize: "13px",
                lineHeight: "1.4",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "fl-greeting-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "24px 48px 8px" },
      children: [
        {
          id: "fl-greeting-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "fl-greeting-text",
              type: "text",
              props: {
                content: "*Querida amiga,*",
                color: PLUM,
                fontFamily: SERIF,
                fontSize: "26px",
                lineHeight: "1.3",
                align: "left",
              },
            },
          ],
        },
      ],
    },
    {
      id: "fl-body-1-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "8px 48px 16px" },
      children: [
        {
          id: "fl-body-1-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "fl-body-1-text",
              type: "text",
              props: {
                content:
                  "Há cinco anos eu comecei essa marca em cima de uma mesa de cozinha, com um caderno cheio de ideias mal-acabadas e uma única pergunta: *seria possível fazer isso devagar?* Sem promessas grandes, sem cronograma de lançamento, sem performar uma versão de mim que não cabia mais.",
                color: PLUM,
                fontFamily: SERIF,
                fontSize: "18px",
                lineHeight: "1.65",
                align: "left",
              },
            },
          ],
        },
      ],
    },
    {
      id: "fl-quote-section",
      type: "section",
      props: { backgroundColor: BLUSH_SOFT, padding: "44px 56px 44px" },
      children: [
        {
          id: "fl-quote-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "fl-quote-mark",
              type: "text",
              props: {
                content: "“",
                color: MAUVE,
                fontFamily: SERIF,
                fontSize: "84px",
                fontWeight: "bold",
                lineHeight: "0.7",
                align: "center",
              },
            },
            {
              id: "fl-quote-text",
              type: "text",
              props: {
                content:
                  "*Cinco anos depois, isso continua sendo o coração de tudo: a coragem de fazer uma coisa por vez, com cuidado, sem pressa de provar nada.*",
                color: PLUM,
                fontFamily: SERIF,
                fontSize: "24px",
                lineHeight: "1.4",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "fl-body-2-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "32px 48px 8px" },
      children: [
        {
          id: "fl-body-2-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "fl-body-2-text",
              type: "text",
              props: {
                content:
                  "Hoje somos uma equipe pequena de quatro pessoas, costurando peça por peça num ateliê iluminado em São Paulo. Nada do que você recebe aqui foi terceirizado. Nada do que aparece no nosso site foi feito pra escalar — foi feito pra durar. *E foi feito por nós, pra você.*",
                color: PLUM,
                fontFamily: SERIF,
                fontSize: "18px",
                lineHeight: "1.65",
                align: "left",
              },
            },
          ],
        },
      ],
    },
    {
      id: "fl-body-3-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "8px 48px 16px" },
      children: [
        {
          id: "fl-body-3-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "fl-body-3-text",
              type: "text",
              props: {
                content:
                  "Esse mês celebramos os cinco anos com uma cápsula nova — três peças que resumem tudo que aprendemos sobre o que importa pra você. Espero que goste. E mais: *espero que dure.*",
                color: PLUM,
                fontFamily: SERIF,
                fontSize: "18px",
                lineHeight: "1.65",
                align: "left",
              },
            },
          ],
        },
      ],
    },
    {
      id: "fl-sign-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "16px 48px 8px" },
      children: [
        {
          id: "fl-sign-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "fl-sign-line",
              type: "text",
              props: {
                content: "*com carinho,*",
                color: MUTED,
                fontFamily: SERIF,
                fontSize: "18px",
                lineHeight: "1.2",
                align: "left",
              },
            },
            {
              id: "fl-sign-name",
              type: "text",
              props: {
                content: "Helena",
                color: PLUM,
                fontFamily: SCRIPT,
                fontSize: "52px",
                fontWeight: "normal",
                lineHeight: "1.0",
                align: "left",
              },
            },
            {
              id: "fl-sign-role",
              type: "text",
              props: {
                content: "FUNDADORA · SUA MARCA",
                color: MAUVE,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "bold",
                letterSpacing: "2.5px",
                align: "left",
              },
            },
          ],
        },
      ],
    },
    {
      id: "fl-divider-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "32px 24px 24px" },
      children: [
        {
          id: "fl-divider-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "fl-divider",
              type: "divider",
              props: {
                borderColor: MAUVE,
                borderWidth: "1px",
                width: "120px",
              },
            },
          ],
        },
      ],
    },
    {
      id: "fl-ps-eyebrow-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "0 24px 4px" },
      children: [
        {
          id: "fl-ps-eyebrow-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "fl-ps-eyebrow-text",
              type: "text",
              props: {
                content: "P.S. — TRÊS COISAS",
                color: PLUM,
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
      id: "fl-links-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "16px 16px 16px" },
      children: [
        {
          id: "fl-l-c1",
          type: "column",
          props: { width: "33.33%", verticalAlign: "top" },
          children: [
            {
              id: "fl-l-n1",
              type: "text",
              props: {
                content: "01",
                color: MAUVE,
                fontFamily: SERIF,
                fontSize: "32px",
                fontWeight: "bold",
                lineHeight: "1.0",
                align: "center",
              },
            },
            {
              id: "fl-l-t1",
              type: "text",
              props: {
                content: "*A cápsula nova*",
                color: PLUM,
                fontFamily: SERIF,
                fontSize: "18px",
                fontWeight: "bold",
                align: "center",
              },
            },
            {
              id: "fl-l-b1",
              type: "text",
              props: {
                content: "Três peças, vinte unidades cada. Disponível agora.",
                color: MUTED,
                fontFamily: SANS,
                fontSize: "11px",
                lineHeight: "1.8",
                align: "center",
              },
            },
            {
              id: "fl-l-link1",
              type: "text",
              props: {
                content: "[ver →](https://example.com/capsula)",
                color: PLUM,
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
          id: "fl-l-c2",
          type: "column",
          props: { width: "33.33%", verticalAlign: "top" },
          children: [
            {
              id: "fl-l-n2",
              type: "text",
              props: {
                content: "02",
                color: MAUVE,
                fontFamily: SERIF,
                fontSize: "32px",
                fontWeight: "bold",
                lineHeight: "1.0",
                align: "center",
              },
            },
            {
              id: "fl-l-t2",
              type: "text",
              props: {
                content: "*Bastidores*",
                color: PLUM,
                fontFamily: SERIF,
                fontSize: "18px",
                fontWeight: "bold",
                align: "center",
              },
            },
            {
              id: "fl-l-b2",
              type: "text",
              props: {
                content: "Um mini-doc de cinco minutos sobre o ateliê.",
                color: MUTED,
                fontFamily: SANS,
                fontSize: "11px",
                lineHeight: "1.8",
                align: "center",
              },
            },
            {
              id: "fl-l-link2",
              type: "text",
              props: {
                content: "[assistir →](https://example.com/atelie)",
                color: PLUM,
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
          id: "fl-l-c3",
          type: "column",
          props: { width: "33.34%", verticalAlign: "top" },
          children: [
            {
              id: "fl-l-n3",
              type: "text",
              props: {
                content: "03",
                color: MAUVE,
                fontFamily: SERIF,
                fontSize: "32px",
                fontWeight: "bold",
                lineHeight: "1.0",
                align: "center",
              },
            },
            {
              id: "fl-l-t3",
              type: "text",
              props: {
                content: "*Responda*",
                color: PLUM,
                fontFamily: SERIF,
                fontSize: "18px",
                fontWeight: "bold",
                align: "center",
              },
            },
            {
              id: "fl-l-b3",
              type: "text",
              props: {
                content: "Conta o que você gostaria de ler aqui. Eu leio tudo.",
                color: MUTED,
                fontFamily: SANS,
                fontSize: "11px",
                lineHeight: "1.8",
                align: "center",
              },
            },
            {
              id: "fl-l-link3",
              type: "text",
              props: {
                content: "[escrever →](mailto:helena@example.com)",
                color: PLUM,
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
      id: "fl-cta-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "16px 24px 40px" },
      children: [
        {
          id: "fl-cta-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "fl-cta-btn",
              type: "button",
              props: {
                label: "ver a cápsula",
                href: "https://example.com/capsula",
                backgroundColor: PLUM,
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
      id: "fl-footer-section",
      type: "section",
      props: { backgroundColor: CREAM_SOFT, padding: "20px 30px 32px" },
      children: [
        {
          id: "fl-footer-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "fl-footer-text",
              type: "text",
              props: {
                content:
                  "© 2026 Sua Marca. Todos os direitos reservados.\nEndereço da empresa, Cidade, Estado, CEP\n[Cancelar inscrição](https://example.com/unsub).",
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
