import type { Template } from "@/types/email";

const SERIF = "'Cormorant Garamond', Georgia, serif";
const SCRIPT = "'Pinyon Script', cursive";
const SANS = "Inter, sans-serif";

const CREAM = "#efeeea";
const CREAM_SOFT = "#f6f4ef";
const DARK = "#3a2c22";
const WARM = "#8a6f54";
const MUTED = "#7a6f63";

const HERO_IMG =
  "https://placehold.co/1100x620/d8c4a5/8a6f54?text=Bem-vinda";

export const welcome: Template = {
  id: "welcome",
  name: "Boas-vindas",
  category: "Onboarding",
  description:
    "Boas-vindas pessoal em tons terrosos, com script + serif e lista do que esperar.",
  tree: [
    {
      id: "w-eyebrow-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "44px 24px 4px" },
      children: [
        {
          id: "w-eyebrow-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "w-eyebrow-text",
              type: "text",
              props: {
                content: "— WELCOME TO THE FAMILY —",
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
      id: "w-hero-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "8px 24px 4px" },
      children: [
        {
          id: "w-hero-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "w-hero-script",
              type: "text",
              props: {
                content: "hello,",
                color: WARM,
                fontFamily: SCRIPT,
                fontSize: "72px",
                fontWeight: "normal",
                lineHeight: "1.0",
                align: "center",
              },
            },
            {
              id: "w-hero-bold",
              type: "text",
              props: {
                content: "FRIEND",
                color: DARK,
                fontFamily: SERIF,
                fontSize: "68px",
                fontWeight: "bold",
                letterSpacing: "3px",
                lineHeight: "1.0",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "w-image-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "28px 24px 12px" },
      children: [
        {
          id: "w-image-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "w-image-img",
              type: "image",
              props: {
                src: HERO_IMG,
                alt: "Boas-vindas",
                width: "560px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "w-intro-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "20px 40px 24px" },
      children: [
        {
          id: "w-intro-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "w-intro-text",
              type: "text",
              props: {
                content:
                  "Que alegria ter você por aqui. Este é um espaço pequeno e cuidado — feito pra te entregar conteúdo que importa, sem ruído. Antes de qualquer coisa, *obrigada* por confiar no seu inbox comigo.",
                color: DARK,
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
      id: "w-divider-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "8px 220px 8px" },
      children: [
        {
          id: "w-divider-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "w-divider",
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
      id: "w-expect-eyebrow-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "20px 24px 4px" },
      children: [
        {
          id: "w-expect-eyebrow-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "w-expect-eyebrow-text",
              type: "text",
              props: {
                content: "WHAT TO EXPECT",
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
      id: "w-expect-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "16px 16px 8px" },
      children: [
        {
          id: "w-expect-c1",
          type: "column",
          props: { width: "33.33%", verticalAlign: "top" },
          children: [
            {
              id: "w-expect-num-1",
              type: "text",
              props: {
                content: "01",
                color: WARM,
                fontFamily: SERIF,
                fontSize: "32px",
                fontWeight: "bold",
                lineHeight: "1.0",
                align: "center",
              },
            },
            {
              id: "w-expect-title-1",
              type: "text",
              props: {
                content: "*Cartas semanais*",
                color: DARK,
                fontFamily: SERIF,
                fontSize: "20px",
                fontWeight: "bold",
                align: "center",
              },
            },
            {
              id: "w-expect-body-1",
              type: "text",
              props: {
                content:
                  "Toda quinta, uma nota curta com uma ideia, um aprendizado e um recurso.",
                color: MUTED,
                fontFamily: SANS,
                fontSize: "11px",
                lineHeight: "1.8",
                align: "center",
              },
            },
          ],
        },
        {
          id: "w-expect-c2",
          type: "column",
          props: { width: "33.33%", verticalAlign: "top" },
          children: [
            {
              id: "w-expect-num-2",
              type: "text",
              props: {
                content: "02",
                color: WARM,
                fontFamily: SERIF,
                fontSize: "32px",
                fontWeight: "bold",
                lineHeight: "1.0",
                align: "center",
              },
            },
            {
              id: "w-expect-title-2",
              type: "text",
              props: {
                content: "*Bastidores*",
                color: DARK,
                fontFamily: SERIF,
                fontSize: "20px",
                fontWeight: "bold",
                align: "center",
              },
            },
            {
              id: "w-expect-body-2",
              type: "text",
              props: {
                content:
                  "Processos, tentativas, erros e o que está sendo construído por aqui.",
                color: MUTED,
                fontFamily: SANS,
                fontSize: "11px",
                lineHeight: "1.8",
                align: "center",
              },
            },
          ],
        },
        {
          id: "w-expect-c3",
          type: "column",
          props: { width: "33.34%", verticalAlign: "top" },
          children: [
            {
              id: "w-expect-num-3",
              type: "text",
              props: {
                content: "03",
                color: WARM,
                fontFamily: SERIF,
                fontSize: "32px",
                fontWeight: "bold",
                lineHeight: "1.0",
                align: "center",
              },
            },
            {
              id: "w-expect-title-3",
              type: "text",
              props: {
                content: "*Mimos da casa*",
                color: DARK,
                fontFamily: SERIF,
                fontSize: "20px",
                fontWeight: "bold",
                align: "center",
              },
            },
            {
              id: "w-expect-body-3",
              type: "text",
              props: {
                content:
                  "Recursos, descontos e novidades que só quem está aqui recebe primeiro.",
                color: MUTED,
                fontFamily: SANS,
                fontSize: "11px",
                lineHeight: "1.8",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "w-cta-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "28px 24px 16px" },
      children: [
        {
          id: "w-cta-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "w-cta-btn",
              type: "button",
              props: {
                label: "começar a leitura",
                href: "https://example.com/start",
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
      id: "w-sign-section",
      type: "section",
      props: { backgroundColor: CREAM_SOFT, padding: "32px 24px 24px" },
      children: [
        {
          id: "w-sign-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "w-sign-line",
              type: "text",
              props: {
                content: "*com carinho,*",
                color: MUTED,
                fontFamily: SERIF,
                fontSize: "16px",
                lineHeight: "1.2",
                align: "center",
              },
            },
            {
              id: "w-sign-name",
              type: "text",
              props: {
                content: "Sua Marca",
                color: DARK,
                fontFamily: SCRIPT,
                fontSize: "44px",
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
      id: "w-footer-section",
      type: "section",
      props: { backgroundColor: CREAM_SOFT, padding: "12px 30px 32px" },
      children: [
        {
          id: "w-footer-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "w-footer-text",
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
