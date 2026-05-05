import type { Template } from "@/types/email";

const SANS = "Inter, sans-serif";
const ACCENT = "Lora, Georgia, serif";

const INK = "#1a1a1a";
const STONE = "#7a756f";
const SAND = "#d8d2c8";
const BONE = "#ebe6dd";
const BONE_SOFT = "#f4f0e8";
const MUTED = "#9a958d";

const HERO_IMG =
  "https://placehold.co/1100x720/d8d2c8/1a1a1a?text=";
const PROD_IMG_1 =
  "https://placehold.co/520x680/ebe6dd/7a756f?text=01";
const PROD_IMG_2 =
  "https://placehold.co/520x680/d8d2c8/1a1a1a?text=02";
const PROD_IMG_3 =
  "https://placehold.co/520x680/f4f0e8/9a958d?text=03";

export const beautyMinimal: Template = {
  id: "beauty-minimal",
  name: "Beauty / minimal",
  category: "Marketing",
  description:
    "Beleza minimalista contemporânea em greige + bone, tipografia sans só.",
  tree: [
    {
      id: "bm-mark-section",
      type: "section",
      props: { backgroundColor: BONE, padding: "32px 24px 16px" },
      children: [
        {
          id: "bm-mark-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "bm-mark-text",
              type: "text",
              props: {
                content: "Æ",
                color: INK,
                fontFamily: SANS,
                fontSize: "22px",
                fontWeight: "normal",
                letterSpacing: "1px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "bm-hero-eyebrow-section",
      type: "section",
      props: { backgroundColor: BONE, padding: "48px 24px 12px" },
      children: [
        {
          id: "bm-hero-eyebrow-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "bm-hero-eyebrow-text",
              type: "text",
              props: {
                content: "VOLUME 03",
                color: STONE,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "normal",
                letterSpacing: "4px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "bm-hero-section",
      type: "section",
      props: { backgroundColor: BONE, padding: "0 24px 24px" },
      children: [
        {
          id: "bm-hero-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "bm-hero-text",
              type: "text",
              props: {
                content: "Essentials.",
                color: INK,
                fontFamily: SANS,
                fontSize: "72px",
                fontWeight: "normal",
                letterSpacing: "-2px",
                lineHeight: "1.0",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "bm-hero-sub-section",
      type: "section",
      props: { backgroundColor: BONE, padding: "0 60px 32px" },
      children: [
        {
          id: "bm-hero-sub-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "bm-hero-sub-text",
              type: "text",
              props: {
                content:
                  "Three formulas. Nothing more. Designed to do one thing each — and do it well.",
                color: STONE,
                fontFamily: SANS,
                fontSize: "14px",
                fontWeight: "normal",
                lineHeight: "1.65",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "bm-image-section",
      type: "section",
      props: { backgroundColor: SAND, padding: "0" },
      children: [
        {
          id: "bm-image-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "bm-image-img",
              type: "image",
              props: {
                src: HERO_IMG,
                alt: "Essentials",
                width: "600px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "bm-rule-section",
      type: "section",
      props: { backgroundColor: BONE, padding: "56px 24px 0" },
      children: [
        {
          id: "bm-rule-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "bm-rule",
              type: "divider",
              props: {
                borderColor: INK,
                borderWidth: "1px",
                width: "100px",
              },
            },
          ],
        },
      ],
    },
    {
      id: "bm-pillar-section",
      type: "section",
      props: { backgroundColor: BONE, padding: "32px 60px 48px" },
      children: [
        {
          id: "bm-pillar-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "bm-pillar-eyebrow",
              type: "text",
              props: {
                content: "PHILOSOPHY",
                color: STONE,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "normal",
                letterSpacing: "4px",
                align: "center",
              },
            },
            {
              id: "bm-pillar-spacer",
              type: "spacer",
              props: { height: "16px" },
            },
            {
              id: "bm-pillar-text",
              type: "text",
              props: {
                content:
                  "We believe in *fewer, better things* — formulas that earn their place on your shelf, made with restraint and respect for what your skin actually needs.",
                color: INK,
                fontFamily: ACCENT,
                fontSize: "22px",
                fontWeight: "normal",
                lineHeight: "1.5",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "bm-products-eyebrow-section",
      type: "section",
      props: { backgroundColor: BONE_SOFT, padding: "48px 24px 4px" },
      children: [
        {
          id: "bm-products-eyebrow-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "bm-products-eyebrow-text",
              type: "text",
              props: {
                content: "THE THREE",
                color: STONE,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "normal",
                letterSpacing: "4px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "bm-products-section",
      type: "section",
      props: { backgroundColor: BONE_SOFT, padding: "24px 12px 32px" },
      children: [
        {
          id: "bm-prod-c1",
          type: "column",
          props: { width: "33.33%", verticalAlign: "top" },
          children: [
            {
              id: "bm-prod-i1",
              type: "image",
              props: {
                src: PROD_IMG_1,
                alt: "Cleanse",
                width: "180px",
                align: "center",
              },
            },
            {
              id: "bm-prod-spacer-1",
              type: "spacer",
              props: { height: "8px" },
            },
            {
              id: "bm-prod-num-1",
              type: "text",
              props: {
                content: "01",
                color: STONE,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "normal",
                letterSpacing: "3px",
                align: "center",
              },
            },
            {
              id: "bm-prod-name-1",
              type: "text",
              props: {
                content: "Cleanse",
                color: INK,
                fontFamily: SANS,
                fontSize: "16px",
                fontWeight: "normal",
                letterSpacing: "0.5px",
                align: "center",
              },
            },
            {
              id: "bm-prod-desc-1",
              type: "text",
              props: {
                content: "Gentle gel · 150ml",
                color: MUTED,
                fontFamily: SANS,
                fontSize: "11px",
                lineHeight: "1.6",
                align: "center",
              },
            },
            {
              id: "bm-prod-price-1",
              type: "text",
              props: {
                content: "$ 38",
                color: INK,
                fontFamily: SANS,
                fontSize: "12px",
                fontWeight: "bold",
                letterSpacing: "1px",
                align: "center",
              },
            },
          ],
        },
        {
          id: "bm-prod-c2",
          type: "column",
          props: { width: "33.33%", verticalAlign: "top" },
          children: [
            {
              id: "bm-prod-i2",
              type: "image",
              props: {
                src: PROD_IMG_2,
                alt: "Treat",
                width: "180px",
                align: "center",
              },
            },
            {
              id: "bm-prod-spacer-2",
              type: "spacer",
              props: { height: "8px" },
            },
            {
              id: "bm-prod-num-2",
              type: "text",
              props: {
                content: "02",
                color: STONE,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "normal",
                letterSpacing: "3px",
                align: "center",
              },
            },
            {
              id: "bm-prod-name-2",
              type: "text",
              props: {
                content: "Treat",
                color: INK,
                fontFamily: SANS,
                fontSize: "16px",
                fontWeight: "normal",
                letterSpacing: "0.5px",
                align: "center",
              },
            },
            {
              id: "bm-prod-desc-2",
              type: "text",
              props: {
                content: "Daily serum · 30ml",
                color: MUTED,
                fontFamily: SANS,
                fontSize: "11px",
                lineHeight: "1.6",
                align: "center",
              },
            },
            {
              id: "bm-prod-price-2",
              type: "text",
              props: {
                content: "$ 64",
                color: INK,
                fontFamily: SANS,
                fontSize: "12px",
                fontWeight: "bold",
                letterSpacing: "1px",
                align: "center",
              },
            },
          ],
        },
        {
          id: "bm-prod-c3",
          type: "column",
          props: { width: "33.34%", verticalAlign: "top" },
          children: [
            {
              id: "bm-prod-i3",
              type: "image",
              props: {
                src: PROD_IMG_3,
                alt: "Protect",
                width: "180px",
                align: "center",
              },
            },
            {
              id: "bm-prod-spacer-3",
              type: "spacer",
              props: { height: "8px" },
            },
            {
              id: "bm-prod-num-3",
              type: "text",
              props: {
                content: "03",
                color: STONE,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "normal",
                letterSpacing: "3px",
                align: "center",
              },
            },
            {
              id: "bm-prod-name-3",
              type: "text",
              props: {
                content: "Protect",
                color: INK,
                fontFamily: SANS,
                fontSize: "16px",
                fontWeight: "normal",
                letterSpacing: "0.5px",
                align: "center",
              },
            },
            {
              id: "bm-prod-desc-3",
              type: "text",
              props: {
                content: "Mineral SPF · 50ml",
                color: MUTED,
                fontFamily: SANS,
                fontSize: "11px",
                lineHeight: "1.6",
                align: "center",
              },
            },
            {
              id: "bm-prod-price-3",
              type: "text",
              props: {
                content: "$ 52",
                color: INK,
                fontFamily: SANS,
                fontSize: "12px",
                fontWeight: "bold",
                letterSpacing: "1px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "bm-bundle-section",
      type: "section",
      props: { backgroundColor: INK, padding: "56px 24px" },
      children: [
        {
          id: "bm-bundle-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "bm-bundle-eyebrow",
              type: "text",
              props: {
                content: "THE SET",
                color: SAND,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "normal",
                letterSpacing: "4px",
                align: "center",
              },
            },
            {
              id: "bm-bundle-spacer-1",
              type: "spacer",
              props: { height: "12px" },
            },
            {
              id: "bm-bundle-title",
              type: "text",
              props: {
                content: "All three. $ 134.",
                color: BONE,
                fontFamily: SANS,
                fontSize: "32px",
                fontWeight: "normal",
                letterSpacing: "-0.5px",
                lineHeight: "1.2",
                align: "center",
              },
            },
            {
              id: "bm-bundle-sub",
              type: "text",
              props: {
                content: "Save $ 20 when you take the full ritual.",
                color: SAND,
                fontFamily: SANS,
                fontSize: "13px",
                lineHeight: "1.6",
                align: "center",
              },
            },
            {
              id: "bm-bundle-spacer-2",
              type: "spacer",
              props: { height: "24px" },
            },
            {
              id: "bm-bundle-btn",
              type: "button",
              props: {
                label: "Shop the set",
                href: "https://example.com/set",
                backgroundColor: BONE,
                color: INK,
                align: "center",
                fontFamily: SANS,
                fontSize: "12px",
                fontWeight: "normal",
                letterSpacing: "1.5px",
                borderRadius: "0px",
                innerPadding: "14px 36px",
              },
            },
          ],
        },
      ],
    },
    {
      id: "bm-meta-section",
      type: "section",
      props: { backgroundColor: BONE, padding: "40px 24px 16px" },
      children: [
        {
          id: "bm-meta-c1",
          type: "column",
          props: { width: "33.33%", verticalAlign: "top" },
          children: [
            {
              id: "bm-meta-l1",
              type: "text",
              props: {
                content: "FREE SHIPPING",
                color: INK,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "normal",
                letterSpacing: "2.5px",
                align: "center",
              },
            },
            {
              id: "bm-meta-v1",
              type: "text",
              props: {
                content: "Orders over $ 50",
                color: STONE,
                fontFamily: SANS,
                fontSize: "11px",
                lineHeight: "1.6",
                align: "center",
              },
            },
          ],
        },
        {
          id: "bm-meta-c2",
          type: "column",
          props: { width: "33.33%", verticalAlign: "top" },
          children: [
            {
              id: "bm-meta-l2",
              type: "text",
              props: {
                content: "30-DAY RETURN",
                color: INK,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "normal",
                letterSpacing: "2.5px",
                align: "center",
              },
            },
            {
              id: "bm-meta-v2",
              type: "text",
              props: {
                content: "If it isn't right",
                color: STONE,
                fontFamily: SANS,
                fontSize: "11px",
                lineHeight: "1.6",
                align: "center",
              },
            },
          ],
        },
        {
          id: "bm-meta-c3",
          type: "column",
          props: { width: "33.34%", verticalAlign: "top" },
          children: [
            {
              id: "bm-meta-l3",
              type: "text",
              props: {
                content: "MADE IN",
                color: INK,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "normal",
                letterSpacing: "2.5px",
                align: "center",
              },
            },
            {
              id: "bm-meta-v3",
              type: "text",
              props: {
                content: "Lisbon, Portugal",
                color: STONE,
                fontFamily: SANS,
                fontSize: "11px",
                lineHeight: "1.6",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "bm-outro-section",
      type: "section",
      props: { backgroundColor: BONE, padding: "32px 24px 12px" },
      children: [
        {
          id: "bm-outro-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "bm-outro-text",
              type: "text",
              props: {
                content: "Æ",
                color: INK,
                fontFamily: SANS,
                fontSize: "22px",
                fontWeight: "normal",
                letterSpacing: "1px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "bm-footer-section",
      type: "section",
      props: { backgroundColor: BONE, padding: "8px 30px 32px" },
      children: [
        {
          id: "bm-footer-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "bm-footer-text",
              type: "text",
              props: {
                content:
                  "© 2026 Æ Studio. All rights reserved.\nLisbon, Portugal\n[Unsubscribe](https://example.com/unsub)",
                color: MUTED,
                fontFamily: SANS,
                fontSize: "10px",
                lineHeight: "1.7",
                letterSpacing: "0.5px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
  ],
};
