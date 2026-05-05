import type { Template } from "@/types/email";

const DISPLAY = "'Playfair Display', Georgia, serif";
const SCRIPT = "'Pinyon Script', cursive";
const BODY = "Lora, Georgia, serif";
const SANS = "Inter, sans-serif";

const IVORY = "#faf3eb";
const IVORY_SOFT = "#fdf8f1";
const ROSE = "#e9b8a6";
const DUSTY = "#c98b76";
const COCOA = "#3a2620";
const BUTTER = "#f0d89a";
const MUTED = "#9a7e72";

const HERO_IMG =
  "https://placehold.co/1100x780/e9b8a6/3a2620?text=";
const POST_IMG =
  "https://placehold.co/640x480/c98b76/faf3eb?text=";
const EDIT_IMG_1 =
  "https://placehold.co/520x680/e9b8a6/3a2620?text=01";
const EDIT_IMG_2 =
  "https://placehold.co/520x680/f0d89a/3a2620?text=02";
const EDIT_IMG_3 =
  "https://placehold.co/520x680/c98b76/faf3eb?text=03";

export const influencer: Template = {
  id: "influencer",
  name: "Creator / influencer",
  category: "Editorial",
  description:
    "Newsletter pessoal de criadora — paleta rosa empoeirado + cacau, com edit afiliado e tom íntimo.",
  tree: [
    {
      id: "in-top-section",
      type: "section",
      props: { backgroundColor: COCOA, padding: "14px 24px" },
      children: [
        {
          id: "in-top-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "in-top-text",
              type: "text",
              props: {
                content: "FROM CHARLOTTE  ·  ISSUE Nº 07  ·  MAY",
                color: ROSE,
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
      id: "in-eyebrow-section",
      type: "section",
      props: { backgroundColor: IVORY, padding: "44px 24px 4px" },
      children: [
        {
          id: "in-eyebrow-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "in-eyebrow-text",
              type: "text",
              props: {
                content: "A LITTLE LETTER",
                color: DUSTY,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "normal",
                letterSpacing: "5px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "in-hello-section",
      type: "section",
      props: { backgroundColor: IVORY, padding: "8px 24px 0" },
      children: [
        {
          id: "in-hello-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "in-hello-text",
              type: "text",
              props: {
                content: "hi, friend",
                color: DUSTY,
                fontFamily: SCRIPT,
                fontSize: "82px",
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
      id: "in-headline-section",
      type: "section",
      props: { backgroundColor: IVORY, padding: "10px 24px 28px" },
      children: [
        {
          id: "in-headline-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "in-headline-text",
              type: "text",
              props: {
                content: "WELCOME BACK.",
                color: COCOA,
                fontFamily: DISPLAY,
                fontSize: "44px",
                fontWeight: "normal",
                letterSpacing: "6px",
                lineHeight: "1.1",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "in-hero-section",
      type: "section",
      props: { backgroundColor: IVORY, padding: "0 30px 28px" },
      children: [
        {
          id: "in-hero-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "in-hero-img",
              type: "image",
              props: {
                src: HERO_IMG,
                alt: "From the studio this week",
                width: "560px",
                align: "center",
              },
            },
            {
              id: "in-hero-cap-spacer",
              type: "spacer",
              props: { height: "10px" },
            },
            {
              id: "in-hero-cap",
              type: "text",
              props: {
                content: "*from the studio · tuesday morning*",
                color: MUTED,
                fontFamily: BODY,
                fontSize: "12px",
                lineHeight: "1.6",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "in-intro-section",
      type: "section",
      props: { backgroundColor: IVORY, padding: "8px 60px 32px" },
      children: [
        {
          id: "in-intro-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "in-intro-text",
              type: "text",
              props: {
                content:
                  "It has been a *slow, golden week* — the kind that asks you to put your phone down and notice the small things. I made coffee twice. I read a chapter at lunch. I want to write to you the way I'd write to a friend, so that's exactly what this is.",
                color: COCOA,
                fontFamily: BODY,
                fontSize: "17px",
                lineHeight: "1.75",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "in-rule-section",
      type: "section",
      props: { backgroundColor: IVORY, padding: "0 24px 16px" },
      children: [
        {
          id: "in-rule-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "in-rule",
              type: "divider",
              props: {
                borderColor: DUSTY,
                borderWidth: "1px",
                width: "120px",
              },
            },
          ],
        },
      ],
    },
    {
      id: "in-edit-eyebrow-section",
      type: "section",
      props: { backgroundColor: IVORY, padding: "32px 24px 0" },
      children: [
        {
          id: "in-edit-eyebrow-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "in-edit-eyebrow-text",
              type: "text",
              props: {
                content: "WHAT I'M LOVING",
                color: DUSTY,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "normal",
                letterSpacing: "5px",
                align: "center",
              },
            },
            {
              id: "in-edit-spacer",
              type: "spacer",
              props: { height: "8px" },
            },
            {
              id: "in-edit-title",
              type: "text",
              props: {
                content: "*a few finds*",
                color: COCOA,
                fontFamily: DISPLAY,
                fontSize: "44px",
                fontWeight: "normal",
                lineHeight: "1.1",
                align: "center",
              },
            },
            {
              id: "in-edit-sub-spacer",
              type: "spacer",
              props: { height: "10px" },
            },
            {
              id: "in-edit-sub",
              type: "text",
              props: {
                content:
                  "Three things on heavy rotation lately — links you can shop below.",
                color: MUTED,
                fontFamily: BODY,
                fontSize: "14px",
                lineHeight: "1.65",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "in-edit-section",
      type: "section",
      props: { backgroundColor: IVORY, padding: "28px 16px 16px" },
      children: [
        {
          id: "in-edit-c1",
          type: "column",
          props: { width: "33.33%", verticalAlign: "top" },
          children: [
            {
              id: "in-edit-i1",
              type: "image",
              props: {
                src: EDIT_IMG_1,
                alt: "Linen tunic",
                width: "180px",
                align: "center",
              },
            },
            {
              id: "in-edit-spc-1",
              type: "spacer",
              props: { height: "10px" },
            },
            {
              id: "in-edit-num-1",
              type: "text",
              props: {
                content: "01",
                color: DUSTY,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "normal",
                letterSpacing: "3px",
                align: "center",
              },
            },
            {
              id: "in-edit-name-1",
              type: "text",
              props: {
                content: "*the linen tunic*",
                color: COCOA,
                fontFamily: DISPLAY,
                fontSize: "20px",
                fontWeight: "normal",
                lineHeight: "1.3",
                align: "center",
              },
            },
            {
              id: "in-edit-desc-1",
              type: "text",
              props: {
                content: "Lived-in, lazy, perfect.\n[shop it](https://example.com/1)",
                color: MUTED,
                fontFamily: BODY,
                fontSize: "12px",
                lineHeight: "1.7",
                align: "center",
              },
            },
          ],
        },
        {
          id: "in-edit-c2",
          type: "column",
          props: { width: "33.33%", verticalAlign: "top" },
          children: [
            {
              id: "in-edit-i2",
              type: "image",
              props: {
                src: EDIT_IMG_2,
                alt: "Honey candle",
                width: "180px",
                align: "center",
              },
            },
            {
              id: "in-edit-spc-2",
              type: "spacer",
              props: { height: "10px" },
            },
            {
              id: "in-edit-num-2",
              type: "text",
              props: {
                content: "02",
                color: DUSTY,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "normal",
                letterSpacing: "3px",
                align: "center",
              },
            },
            {
              id: "in-edit-name-2",
              type: "text",
              props: {
                content: "*the honey candle*",
                color: COCOA,
                fontFamily: DISPLAY,
                fontSize: "20px",
                fontWeight: "normal",
                lineHeight: "1.3",
                align: "center",
              },
            },
            {
              id: "in-edit-desc-2",
              type: "text",
              props: {
                content: "Smells like sunday.\n[shop it](https://example.com/2)",
                color: MUTED,
                fontFamily: BODY,
                fontSize: "12px",
                lineHeight: "1.7",
                align: "center",
              },
            },
          ],
        },
        {
          id: "in-edit-c3",
          type: "column",
          props: { width: "33.34%", verticalAlign: "top" },
          children: [
            {
              id: "in-edit-i3",
              type: "image",
              props: {
                src: EDIT_IMG_3,
                alt: "Brass earrings",
                width: "180px",
                align: "center",
              },
            },
            {
              id: "in-edit-spc-3",
              type: "spacer",
              props: { height: "10px" },
            },
            {
              id: "in-edit-num-3",
              type: "text",
              props: {
                content: "03",
                color: DUSTY,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "normal",
                letterSpacing: "3px",
                align: "center",
              },
            },
            {
              id: "in-edit-name-3",
              type: "text",
              props: {
                content: "*the brass hoops*",
                color: COCOA,
                fontFamily: DISPLAY,
                fontSize: "20px",
                fontWeight: "normal",
                lineHeight: "1.3",
                align: "center",
              },
            },
            {
              id: "in-edit-desc-3",
              type: "text",
              props: {
                content: "I wear them with everything.\n[shop it](https://example.com/3)",
                color: MUTED,
                fontFamily: BODY,
                fontSize: "12px",
                lineHeight: "1.7",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "in-disclosure-section",
      type: "section",
      props: { backgroundColor: IVORY, padding: "0 60px 36px" },
      children: [
        {
          id: "in-disclosure-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "in-disclosure-text",
              type: "text",
              props: {
                content:
                  "Some links are affiliate — if you shop through them I earn a tiny commission, at no extra cost to you.",
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
    {
      id: "in-blog-section",
      type: "section",
      props: { backgroundColor: IVORY_SOFT, padding: "48px 30px 16px" },
      children: [
        {
          id: "in-blog-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "in-blog-eyebrow",
              type: "text",
              props: {
                content: "ON THE BLOG",
                color: DUSTY,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "normal",
                letterSpacing: "5px",
                align: "center",
              },
            },
            {
              id: "in-blog-spc",
              type: "spacer",
              props: { height: "16px" },
            },
            {
              id: "in-blog-img",
              type: "image",
              props: {
                src: POST_IMG,
                alt: "On the blog",
                width: "540px",
                align: "center",
              },
            },
            {
              id: "in-blog-spc-2",
              type: "spacer",
              props: { height: "16px" },
            },
            {
              id: "in-blog-meta",
              type: "text",
              props: {
                content: "ESSAY  ·  6 MIN READ",
                color: DUSTY,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "normal",
                letterSpacing: "3.5px",
                align: "center",
              },
            },
            {
              id: "in-blog-title",
              type: "text",
              props: {
                content: "On growing slowly\n*on purpose.*",
                color: COCOA,
                fontFamily: DISPLAY,
                fontSize: "34px",
                fontWeight: "normal",
                lineHeight: "1.2",
                align: "center",
              },
            },
            {
              id: "in-blog-lead",
              type: "text",
              props: {
                content:
                  "I wrote a piece this week about why I keep choosing the smaller room — fewer followers, fewer launches, more attention. Maybe you'll see yourself in it.",
                color: COCOA,
                fontFamily: BODY,
                fontSize: "15px",
                lineHeight: "1.7",
                align: "center",
              },
            },
            {
              id: "in-blog-spc-3",
              type: "spacer",
              props: { height: "20px" },
            },
            {
              id: "in-blog-btn",
              type: "button",
              props: {
                label: "read the essay",
                href: "https://example.com/essay",
                backgroundColor: IVORY_SOFT,
                color: COCOA,
                align: "center",
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "normal",
                letterSpacing: "3px",
                border: `1px solid ${COCOA}`,
                borderRadius: "999px",
                innerPadding: "14px 32px",
              },
            },
          ],
        },
      ],
    },
    {
      id: "in-dms-section",
      type: "section",
      props: { backgroundColor: BUTTER, padding: "48px 60px" },
      children: [
        {
          id: "in-dms-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "in-dms-eyebrow",
              type: "text",
              props: {
                content: "FROM THE DMS",
                color: COCOA,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "normal",
                letterSpacing: "5px",
                align: "center",
              },
            },
            {
              id: "in-dms-spc",
              type: "spacer",
              props: { height: "12px" },
            },
            {
              id: "in-dms-q",
              type: "text",
              props: {
                content: "*“how do you stay consistent\nwithout burning out?”*",
                color: COCOA,
                fontFamily: DISPLAY,
                fontSize: "26px",
                fontWeight: "normal",
                lineHeight: "1.35",
                align: "center",
              },
            },
            {
              id: "in-dms-spc-2",
              type: "spacer",
              props: { height: "16px" },
            },
            {
              id: "in-dms-a",
              type: "text",
              props: {
                content:
                  "Honestly? I lower the bar on bad days and forgive myself for taking weekends off. Showing up *imperfectly* is still showing up — and the people who care don't keep score.",
                color: COCOA,
                fontFamily: BODY,
                fontSize: "15px",
                lineHeight: "1.75",
                align: "center",
              },
            },
            {
              id: "in-dms-spc-3",
              type: "spacer",
              props: { height: "12px" },
            },
            {
              id: "in-dms-from",
              type: "text",
              props: {
                content: "— ASKED BY MAYA, 24",
                color: COCOA,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "normal",
                letterSpacing: "3px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "in-follow-section",
      type: "section",
      props: { backgroundColor: DUSTY, padding: "56px 24px" },
      children: [
        {
          id: "in-follow-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "in-follow-eyebrow",
              type: "text",
              props: {
                content: "FOLLOW ALONG",
                color: ROSE,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "normal",
                letterSpacing: "5px",
                align: "center",
              },
            },
            {
              id: "in-follow-spc",
              type: "spacer",
              props: { height: "10px" },
            },
            {
              id: "in-follow-title",
              type: "text",
              props: {
                content: "*the rest of my week\nlives on instagram.*",
                color: IVORY,
                fontFamily: DISPLAY,
                fontSize: "30px",
                fontWeight: "normal",
                lineHeight: "1.25",
                align: "center",
              },
            },
            {
              id: "in-follow-spc-2",
              type: "spacer",
              props: { height: "20px" },
            },
            {
              id: "in-follow-btn",
              type: "button",
              props: {
                label: "@charlotte.daily",
                href: "https://instagram.com/",
                backgroundColor: IVORY,
                color: COCOA,
                align: "center",
                fontFamily: SANS,
                fontSize: "12px",
                fontWeight: "normal",
                letterSpacing: "2px",
                borderRadius: "999px",
                innerPadding: "14px 36px",
              },
            },
          ],
        },
      ],
    },
    {
      id: "in-signoff-section",
      type: "section",
      props: { backgroundColor: IVORY, padding: "48px 24px 8px" },
      children: [
        {
          id: "in-signoff-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "in-signoff-pre",
              type: "text",
              props: {
                content: "*until next sunday,*",
                color: MUTED,
                fontFamily: BODY,
                fontSize: "15px",
                lineHeight: "1.6",
                align: "center",
              },
            },
            {
              id: "in-signoff-spc",
              type: "spacer",
              props: { height: "4px" },
            },
            {
              id: "in-signoff-name",
              type: "text",
              props: {
                content: "Charlotte",
                color: DUSTY,
                fontFamily: SCRIPT,
                fontSize: "62px",
                fontWeight: "normal",
                lineHeight: "1.0",
                align: "center",
              },
            },
            {
              id: "in-signoff-handle",
              type: "text",
              props: {
                content: "xx · @charlotte.daily",
                color: MUTED,
                fontFamily: SANS,
                fontSize: "10px",
                letterSpacing: "3px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "in-footer-section",
      type: "section",
      props: { backgroundColor: IVORY_SOFT, padding: "32px 30px" },
      children: [
        {
          id: "in-footer-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "in-footer-links",
              type: "text",
              props: {
                content:
                  "[instagram](https://instagram.com/) · [tiktok](https://tiktok.com/) · [the blog](https://example.com/) · [shop](https://example.com/shop)",
                color: COCOA,
                fontFamily: SANS,
                fontSize: "11px",
                letterSpacing: "1.5px",
                align: "center",
              },
            },
            {
              id: "in-footer-spc",
              type: "spacer",
              props: { height: "16px" },
            },
            {
              id: "in-footer-text",
              type: "text",
              props: {
                content:
                  "© 2026 Charlotte Daily. Written from a kitchen table in Lisbon.\nYou're getting this because you signed up at charlottedaily.co\n[update preferences](https://example.com/prefs)  ·  [unsubscribe](https://example.com/unsub)",
                color: MUTED,
                fontFamily: SANS,
                fontSize: "10px",
                lineHeight: "1.8",
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
