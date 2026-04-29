import type { Template } from "@/types/email";

const SERIF = "'Playfair Display', Georgia, serif";
const SANS = "Inter, sans-serif";

const BG_LIGHT = "#ece5db";
const BG_MEDIUM = "#dcd3c4";
const TEXT = "#2a2725";
const MUTED = "#8a8278";
const BTN_BG = "#2a2725";
const BTN_FG = "#ebe5dd";

const IMG_PORTRAIT =
  "https://placehold.co/520x620/3a3733/ddd5c6?text=Retrato";
const IMG_FLOWERS =
  "https://placehold.co/520x620/d8c8a8/8c7a52?text=Flores+secas";

export const qna: Template = {
  id: "qna",
  name: "Q&A Editorial",
  category: "Newsletter",
  description: "Layout editorial com perguntas, imagens e CTA escuro.",
  tree: [
    {
      id: "qa-hero",
      type: "section",
      props: { backgroundColor: BG_LIGHT, padding: "40px 30px 50px" },
      children: [
        {
          id: "qa-hero-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "qa-hero-eyebrow",
              type: "text",
              props: {
                content: "HAPPY NEW GOAL",
                color: TEXT,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "3px",
                lineHeight: "1.4",
                align: "center",
              },
            },
            {
              id: "qa-hero-spacer",
              type: "spacer",
              props: { height: "20px" },
            },
            {
              id: "qa-hero-title",
              type: "text",
              props: {
                content: "Q&A: Creative Ways to\nLive More Sustainably",
                color: TEXT,
                fontFamily: SERIF,
                fontSize: "34px",
                fontWeight: "normal",
                letterSpacing: "0",
                lineHeight: "1.2",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "qa-card-1",
      type: "section",
      props: { backgroundColor: BG_MEDIUM, padding: "40px 30px" },
      children: [
        {
          id: "qa-card-1-text-col",
          type: "column",
          props: { width: "50%", verticalAlign: "middle" },
          children: [
            {
              id: "qa-card-1-num",
              type: "text",
              props: {
                content: "01",
                color: TEXT,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "3px",
                lineHeight: "1.4",
                align: "left",
              },
            },
            {
              id: "qa-card-1-eyebrow",
              type: "text",
              props: {
                content: "HAPPY NEW GOAL",
                color: TEXT,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "3px",
                lineHeight: "1.4",
                align: "left",
              },
            },
            {
              id: "qa-card-1-spacer-1",
              type: "spacer",
              props: { height: "16px" },
            },
            {
              id: "qa-card-1-title",
              type: "text",
              props: {
                content: "Reduce Ocean\nPlastic Pollution",
                color: TEXT,
                fontFamily: SERIF,
                fontSize: "26px",
                fontWeight: "normal",
                lineHeight: "1.2",
                align: "left",
              },
            },
            {
              id: "qa-card-1-spacer-2",
              type: "spacer",
              props: { height: "12px" },
            },
            {
              id: "qa-card-1-body",
              type: "text",
              props: {
                content:
                  "THREE HUNDRED\nMILLION TONS OF\nPLASTIC ARE\nPRODUCED EVERY\nYEAR",
                color: MUTED,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "bold",
                letterSpacing: "2px",
                lineHeight: "1.7",
                align: "left",
              },
            },
          ],
        },
        {
          id: "qa-card-1-img-col",
          type: "column",
          props: { width: "50%", verticalAlign: "middle" },
          children: [
            {
              id: "qa-card-1-img",
              type: "image",
              props: {
                src: IMG_PORTRAIT,
                alt: "Retrato",
                width: "260px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "qa-gap-1",
      type: "section",
      props: { backgroundColor: BG_LIGHT, padding: "12px 0" },
      children: [
        {
          id: "qa-gap-1-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "qa-gap-1-spacer",
              type: "spacer",
              props: { height: "1px" },
            },
          ],
        },
      ],
    },
    {
      id: "qa-card-2",
      type: "section",
      props: { backgroundColor: BG_MEDIUM, padding: "40px 30px" },
      children: [
        {
          id: "qa-card-2-img-col",
          type: "column",
          props: { width: "50%", verticalAlign: "middle" },
          children: [
            {
              id: "qa-card-2-img",
              type: "image",
              props: {
                src: IMG_FLOWERS,
                alt: "Flores secas",
                width: "260px",
                align: "center",
              },
            },
          ],
        },
        {
          id: "qa-card-2-text-col",
          type: "column",
          props: { width: "50%", verticalAlign: "middle" },
          children: [
            {
              id: "qa-card-2-num",
              type: "text",
              props: {
                content: "02",
                color: TEXT,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "3px",
                lineHeight: "1.4",
                align: "left",
              },
            },
            {
              id: "qa-card-2-eyebrow",
              type: "text",
              props: {
                content: "HAPPY NEW GOAL",
                color: TEXT,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "3px",
                lineHeight: "1.4",
                align: "left",
              },
            },
            {
              id: "qa-card-2-spacer-1",
              type: "spacer",
              props: { height: "16px" },
            },
            {
              id: "qa-card-2-title",
              type: "text",
              props: {
                content: "Reduce Ocean\nPlastic Pollution",
                color: TEXT,
                fontFamily: SERIF,
                fontSize: "26px",
                fontWeight: "normal",
                lineHeight: "1.2",
                align: "left",
              },
            },
            {
              id: "qa-card-2-spacer-2",
              type: "spacer",
              props: { height: "12px" },
            },
            {
              id: "qa-card-2-body",
              type: "text",
              props: {
                content:
                  "THREE HUNDRED\nMILLION TONS OF\nPLASTIC ARE\nPRODUCED EVERY\nYEAR",
                color: MUTED,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "bold",
                letterSpacing: "2px",
                lineHeight: "1.7",
                align: "left",
              },
            },
          ],
        },
      ],
    },
    {
      id: "qa-cta",
      type: "section",
      props: { backgroundColor: BG_LIGHT, padding: "60px 30px 50px" },
      children: [
        {
          id: "qa-cta-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "qa-cta-title",
              type: "text",
              props: {
                content: "New Year's Zero\nWaste Resolutions",
                color: TEXT,
                fontFamily: SERIF,
                fontSize: "26px",
                fontWeight: "normal",
                lineHeight: "1.25",
                align: "center",
              },
            },
            {
              id: "qa-cta-spacer",
              type: "spacer",
              props: { height: "24px" },
            },
            {
              id: "qa-cta-button",
              type: "button",
              props: {
                label: "HOW TO START",
                href: "https://example.com/start",
                backgroundColor: BTN_BG,
                color: BTN_FG,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "2px",
                borderRadius: "32px",
                innerPadding: "14px 28px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "qa-footer",
      type: "section",
      props: { backgroundColor: BG_LIGHT, padding: "20px 30px 40px" },
      children: [
        {
          id: "qa-footer-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "qa-footer-text",
              type: "text",
              props: {
                content:
                  "© 2025 Sua Marca. Todos os direitos reservados.\nEndereço da empresa, Cidade, Estado, CEP\n[Cancelar inscrição](https://example.com/unsubscribe)",
                color: MUTED,
                fontFamily: SANS,
                fontSize: "11px",
                lineHeight: "1.7",
                align: "center",
              },
            },
          ],
        },
      ],
    },
  ],
};
