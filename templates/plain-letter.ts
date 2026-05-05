import type { Template } from "@/types/email";

const DISPLAY = "'Playfair Display', Georgia, serif";
const BODY = "Lora, Georgia, serif";
const SANS = "Inter, sans-serif";

const PAPER = "#fbf9f4";
const INK = "#1c1a17";
const MUTED = "#7a7268";

export const plainLetter: Template = {
  id: "plain-letter",
  name: "Plain letter",
  category: "Editorial",
  description:
    "Carta pessoal só em texto — sem imagens, sem blocos, só tipografia em papel.",
  tree: [
    {
      id: "pl-date-section",
      type: "section",
      props: { backgroundColor: PAPER, padding: "56px 60px 0" },
      children: [
        {
          id: "pl-date-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "pl-date-text",
              type: "text",
              props: {
                content: "TERÇA-FEIRA  ·  12 DE MAIO",
                color: MUTED,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "normal",
                letterSpacing: "4px",
                align: "left",
              },
            },
          ],
        },
      ],
    },
    {
      id: "pl-title-section",
      type: "section",
      props: { backgroundColor: PAPER, padding: "32px 60px 16px" },
      children: [
        {
          id: "pl-title-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "pl-title-text",
              type: "text",
              props: {
                content: "Sobre fazer pouco,\ne fazer *bem.*",
                color: INK,
                fontFamily: DISPLAY,
                fontSize: "44px",
                fontWeight: "normal",
                letterSpacing: "-0.5px",
                lineHeight: "1.15",
                align: "left",
              },
            },
          ],
        },
      ],
    },
    {
      id: "pl-sub-section",
      type: "section",
      props: { backgroundColor: PAPER, padding: "0 60px 36px" },
      children: [
        {
          id: "pl-sub-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "pl-sub-text",
              type: "text",
              props: {
                content:
                  "*Uma carta curta sobre por que escolhi reduzir — e o que aconteceu depois.*",
                color: MUTED,
                fontFamily: BODY,
                fontSize: "17px",
                lineHeight: "1.55",
                align: "left",
              },
            },
          ],
        },
      ],
    },
    {
      id: "pl-greeting-section",
      type: "section",
      props: { backgroundColor: PAPER, padding: "0 60px 8px" },
      children: [
        {
          id: "pl-greeting-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "pl-greeting-text",
              type: "text",
              props: {
                content: "Olá,",
                color: INK,
                fontFamily: BODY,
                fontSize: "17px",
                lineHeight: "1.8",
                align: "left",
              },
            },
          ],
        },
      ],
    },
    {
      id: "pl-p1-section",
      type: "section",
      props: { backgroundColor: PAPER, padding: "0 60px 20px" },
      children: [
        {
          id: "pl-p1-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "pl-p1-text",
              type: "text",
              props: {
                content:
                  "No início do ano, recortei muita coisa. Tirei dois projetos do calendário, devolvi um cliente, e parei de aceitar reuniões antes das dez. Achei que ia me sentir vazia. Não foi isso que aconteceu.",
                color: INK,
                fontFamily: BODY,
                fontSize: "17px",
                lineHeight: "1.85",
                align: "left",
              },
            },
          ],
        },
      ],
    },
    {
      id: "pl-p2-section",
      type: "section",
      props: { backgroundColor: PAPER, padding: "0 60px 20px" },
      children: [
        {
          id: "pl-p2-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "pl-p2-text",
              type: "text",
              props: {
                content:
                  "O que aconteceu foi mais simples — e mais difícil — do que eu esperava. *Sobrou tempo.* Sobrou tempo para olhar duas vezes para o que estava fazendo. Para reescrever um e-mail antes de enviar. Para sair sem o telefone numa quarta-feira de tarde.",
                color: INK,
                fontFamily: BODY,
                fontSize: "17px",
                lineHeight: "1.85",
                align: "left",
              },
            },
          ],
        },
      ],
    },
    {
      id: "pl-p3-section",
      type: "section",
      props: { backgroundColor: PAPER, padding: "0 60px 20px" },
      children: [
        {
          id: "pl-p3-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "pl-p3-text",
              type: "text",
              props: {
                content:
                  "Não estou dizendo que é a resposta para todo mundo. Estou dizendo que, na minha vida, a conta sempre foi essa: o trabalho que sobrevive é o trabalho que recebeu *atenção*, e atenção é uma coisa que se gasta — você não pode dar de tudo um pouco e esperar que a soma feche.",
                color: INK,
                fontFamily: BODY,
                fontSize: "17px",
                lineHeight: "1.85",
                align: "left",
              },
            },
          ],
        },
      ],
    },
    {
      id: "pl-p4-section",
      type: "section",
      props: { backgroundColor: PAPER, padding: "0 60px 24px" },
      children: [
        {
          id: "pl-p4-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "pl-p4-text",
              type: "text",
              props: {
                content:
                  "Se tem uma coisa que você está carregando há meses sem conseguir terminar — talvez não seja preguiça. Talvez seja só o peso de tudo o que está em volta. *Tira duas coisas da mesa esta semana.* Veja o que sobra.",
                color: INK,
                fontFamily: BODY,
                fontSize: "17px",
                lineHeight: "1.85",
                align: "left",
              },
            },
          ],
        },
      ],
    },
    {
      id: "pl-rule-section",
      type: "section",
      props: { backgroundColor: PAPER, padding: "16px 320px 24px" },
      children: [
        {
          id: "pl-rule-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "pl-rule",
              type: "divider",
              props: {
                borderColor: INK,
                borderWidth: "1px",
                width: "100%",
              },
            },
          ],
        },
      ],
    },
    {
      id: "pl-sign-section",
      type: "section",
      props: { backgroundColor: PAPER, padding: "0 60px 8px" },
      children: [
        {
          id: "pl-sign-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "pl-sign-pre",
              type: "text",
              props: {
                content: "*Com afeto,*",
                color: INK,
                fontFamily: BODY,
                fontSize: "17px",
                lineHeight: "1.6",
                align: "left",
              },
            },
            {
              id: "pl-sign-name",
              type: "text",
              props: {
                content: "Helena",
                color: INK,
                fontFamily: BODY,
                fontSize: "17px",
                lineHeight: "1.6",
                align: "left",
              },
            },
          ],
        },
      ],
    },
    {
      id: "pl-ps-section",
      type: "section",
      props: { backgroundColor: PAPER, padding: "32px 60px 56px" },
      children: [
        {
          id: "pl-ps-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "pl-ps-text",
              type: "text",
              props: {
                content:
                  "*P.S.* — Se essa carta te tocou em algo, [me responde](mailto:hello@example.com). Eu leio todas, mesmo que demore.",
                color: MUTED,
                fontFamily: BODY,
                fontSize: "14px",
                lineHeight: "1.75",
                align: "left",
              },
            },
          ],
        },
      ],
    },
    {
      id: "pl-footer-section",
      type: "section",
      props: { backgroundColor: PAPER, padding: "0 60px 40px" },
      children: [
        {
          id: "pl-footer-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "pl-footer-text",
              type: "text",
              props: {
                content:
                  "Você está recebendo esta carta porque assinou em helena.co.\n[descadastrar](https://example.com/unsub)",
                color: MUTED,
                fontFamily: SANS,
                fontSize: "10px",
                lineHeight: "1.8",
                letterSpacing: "0.5px",
                align: "left",
              },
            },
          ],
        },
      ],
    },
  ],
};
