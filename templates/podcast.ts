import type { Template } from "@/types/email";

const DISPLAY = "'Playfair Display', Georgia, serif";
const SERIF = "'Cormorant Garamond', Georgia, serif";
const BODY = "Lora, Georgia, serif";
const SANS = "Inter, sans-serif";

const INK = "#0e0d0c";
const CHARCOAL = "#1c1a17";
const BONE = "#e8e0d2";
const GOLD = "#c9a663";
const GOLD_SOFT = "#d8bd83";
const MUTED = "#8a8275";
const DIM = "#3a352e";

const COVER_IMG =
  "https://placehold.co/640x640/0e0d0c/c9a663?text=EP+042";
const GUEST_IMG =
  "https://placehold.co/320x320/1c1a17/d8bd83?text=";

export const podcast: Template = {
  id: "podcast",
  name: "Podcast / episode",
  category: "Editorial",
  description:
    "Lançamento de episódio em paleta noturna preto + dourado, com timestamps e capa quadrada.",
  tree: [
    {
      id: "pc-top-section",
      type: "section",
      props: { backgroundColor: INK, padding: "16px 24px" },
      children: [
        {
          id: "pc-top-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "pc-top-text",
              type: "text",
              props: {
                content: "NEW EPISODE  ·  TUESDAY  ·  MAY 12",
                color: GOLD,
                fontFamily: SANS,
                fontSize: "10px",
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
      id: "pc-eyebrow-section",
      type: "section",
      props: { backgroundColor: INK, padding: "44px 24px 4px" },
      children: [
        {
          id: "pc-eyebrow-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "pc-eyebrow-text",
              type: "text",
              props: {
                content: "THE PODCAST",
                color: GOLD_SOFT,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "normal",
                letterSpacing: "6px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "pc-epno-section",
      type: "section",
      props: { backgroundColor: INK, padding: "12px 24px 0" },
      children: [
        {
          id: "pc-epno-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "pc-epno-text",
              type: "text",
              props: {
                content: "*Episode 042*",
                color: GOLD,
                fontFamily: SERIF,
                fontSize: "30px",
                fontWeight: "normal",
                letterSpacing: "2px",
                lineHeight: "1.0",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "pc-title-section",
      type: "section",
      props: { backgroundColor: INK, padding: "12px 30px 14px" },
      children: [
        {
          id: "pc-title-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "pc-title-text",
              type: "text",
              props: {
                content: "On building\nsomething *slow.*",
                color: BONE,
                fontFamily: DISPLAY,
                fontSize: "60px",
                fontWeight: "normal",
                letterSpacing: "-0.5px",
                lineHeight: "1.1",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "pc-tag-section",
      type: "section",
      props: { backgroundColor: INK, padding: "0 60px 28px" },
      children: [
        {
          id: "pc-tag-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "pc-tag-text",
              type: "text",
              props: {
                content:
                  "A conversation with Iris Madeira on patience, restraint, and what it really takes to build a brand that lasts a decade.",
                color: MUTED,
                fontFamily: BODY,
                fontSize: "16px",
                lineHeight: "1.7",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "pc-meta-section",
      type: "section",
      props: { backgroundColor: INK, padding: "0 24px 32px" },
      children: [
        {
          id: "pc-meta-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "pc-meta-text",
              type: "text",
              props: {
                content: "52 MIN  ·  RECORDED IN LISBON",
                color: GOLD_SOFT,
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
      id: "pc-cover-section",
      type: "section",
      props: { backgroundColor: INK, padding: "0 24px 32px" },
      children: [
        {
          id: "pc-cover-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "pc-cover-img",
              type: "image",
              props: {
                src: COVER_IMG,
                alt: "Episode 042 cover",
                width: "440px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "pc-listen-section",
      type: "section",
      props: { backgroundColor: INK, padding: "0 24px 16px" },
      children: [
        {
          id: "pc-listen-c1",
          type: "column",
          props: { width: "33.33%", verticalAlign: "middle" },
          children: [
            {
              id: "pc-listen-b1",
              type: "button",
              props: {
                label: "Spotify",
                href: "https://spotify.com/",
                backgroundColor: INK,
                color: BONE,
                align: "center",
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "normal",
                letterSpacing: "3px",
                border: `1px solid ${DIM}`,
                borderRadius: "999px",
                innerPadding: "12px 24px",
              },
            },
          ],
        },
        {
          id: "pc-listen-c2",
          type: "column",
          props: { width: "33.33%", verticalAlign: "middle" },
          children: [
            {
              id: "pc-listen-b2",
              type: "button",
              props: {
                label: "Apple",
                href: "https://podcasts.apple.com/",
                backgroundColor: INK,
                color: BONE,
                align: "center",
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "normal",
                letterSpacing: "3px",
                border: `1px solid ${DIM}`,
                borderRadius: "999px",
                innerPadding: "12px 24px",
              },
            },
          ],
        },
        {
          id: "pc-listen-c3",
          type: "column",
          props: { width: "33.34%", verticalAlign: "middle" },
          children: [
            {
              id: "pc-listen-b3",
              type: "button",
              props: {
                label: "YouTube",
                href: "https://youtube.com/",
                backgroundColor: INK,
                color: BONE,
                align: "center",
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "normal",
                letterSpacing: "3px",
                border: `1px solid ${DIM}`,
                borderRadius: "999px",
                innerPadding: "12px 24px",
              },
            },
          ],
        },
      ],
    },
    {
      id: "pc-rule-section",
      type: "section",
      props: { backgroundColor: INK, padding: "20px 220px 0" },
      children: [
        {
          id: "pc-rule-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "pc-rule",
              type: "divider",
              props: {
                borderColor: GOLD,
                borderWidth: "1px",
                width: "100%",
              },
            },
          ],
        },
      ],
    },
    {
      id: "pc-guest-eyebrow-section",
      type: "section",
      props: { backgroundColor: INK, padding: "44px 24px 4px" },
      children: [
        {
          id: "pc-guest-eyebrow-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "pc-guest-eyebrow-text",
              type: "text",
              props: {
                content: "MEET THE GUEST",
                color: GOLD_SOFT,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "normal",
                letterSpacing: "6px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "pc-guest-section",
      type: "section",
      props: { backgroundColor: INK, padding: "20px 24px 12px" },
      children: [
        {
          id: "pc-guest-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "pc-guest-img",
              type: "image",
              props: {
                src: GUEST_IMG,
                alt: "Iris Madeira",
                width: "180px",
                align: "center",
              },
            },
            {
              id: "pc-guest-spc",
              type: "spacer",
              props: { height: "16px" },
            },
            {
              id: "pc-guest-name",
              type: "text",
              props: {
                content: "Iris Madeira",
                color: BONE,
                fontFamily: DISPLAY,
                fontSize: "32px",
                fontWeight: "normal",
                letterSpacing: "-0.3px",
                align: "center",
              },
            },
            {
              id: "pc-guest-role",
              type: "text",
              props: {
                content: "FOUNDER  ·  ATELIER MADEIRA  ·  EST. 2014",
                color: GOLD_SOFT,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "normal",
                letterSpacing: "3.5px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "pc-quote-section",
      type: "section",
      props: { backgroundColor: CHARCOAL, padding: "56px 60px" },
      children: [
        {
          id: "pc-quote-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "pc-quote-mark",
              type: "text",
              props: {
                content: "“",
                color: GOLD,
                fontFamily: DISPLAY,
                fontSize: "96px",
                fontWeight: "normal",
                lineHeight: "0.8",
                align: "center",
              },
            },
            {
              id: "pc-quote-spc",
              type: "spacer",
              props: { height: "8px" },
            },
            {
              id: "pc-quote-text",
              type: "text",
              props: {
                content:
                  "*The thing nobody tells you is that the slow years are the ones that compound. You just have to be willing to be invisible for longer than feels reasonable.*",
                color: BONE,
                fontFamily: DISPLAY,
                fontSize: "26px",
                fontWeight: "normal",
                lineHeight: "1.5",
                align: "center",
              },
            },
            {
              id: "pc-quote-spc-2",
              type: "spacer",
              props: { height: "20px" },
            },
            {
              id: "pc-quote-attr",
              type: "text",
              props: {
                content: "— IRIS, AT 22:14",
                color: GOLD,
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
      id: "pc-chapters-eyebrow-section",
      type: "section",
      props: { backgroundColor: INK, padding: "56px 24px 4px" },
      children: [
        {
          id: "pc-chapters-eyebrow-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "pc-chapters-eyebrow-text",
              type: "text",
              props: {
                content: "WHAT WE TALK ABOUT",
                color: GOLD_SOFT,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "normal",
                letterSpacing: "6px",
                align: "center",
              },
            },
            {
              id: "pc-chapters-spc",
              type: "spacer",
              props: { height: "8px" },
            },
            {
              id: "pc-chapters-title",
              type: "text",
              props: {
                content: "*chapter marks*",
                color: BONE,
                fontFamily: DISPLAY,
                fontSize: "40px",
                fontWeight: "normal",
                lineHeight: "1.1",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "pc-chapters-section",
      type: "section",
      props: { backgroundColor: INK, padding: "32px 60px 16px" },
      children: [
        {
          id: "pc-chapters-col",
          type: "column",
          props: { verticalAlign: "top" },
          children: [
            {
              id: "pc-ch-1-time",
              type: "text",
              props: {
                content: "04:12",
                color: GOLD,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "2px",
                align: "left",
              },
            },
            {
              id: "pc-ch-1-title",
              type: "text",
              props: {
                content: "*The myth of overnight success.*",
                color: BONE,
                fontFamily: DISPLAY,
                fontSize: "20px",
                fontWeight: "normal",
                lineHeight: "1.4",
                align: "left",
              },
            },
            {
              id: "pc-ch-1-spc",
              type: "spacer",
              props: { height: "20px" },
            },
            {
              id: "pc-ch-1-div",
              type: "divider",
              props: {
                borderColor: DIM,
                borderWidth: "1px",
                width: "100%",
              },
            },
            {
              id: "pc-ch-1-spc-2",
              type: "spacer",
              props: { height: "20px" },
            },
            {
              id: "pc-ch-2-time",
              type: "text",
              props: {
                content: "18:30",
                color: GOLD,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "2px",
                align: "left",
              },
            },
            {
              id: "pc-ch-2-title",
              type: "text",
              props: {
                content: "*Why she said no to investors — twice.*",
                color: BONE,
                fontFamily: DISPLAY,
                fontSize: "20px",
                fontWeight: "normal",
                lineHeight: "1.4",
                align: "left",
              },
            },
            {
              id: "pc-ch-2-spc",
              type: "spacer",
              props: { height: "20px" },
            },
            {
              id: "pc-ch-2-div",
              type: "divider",
              props: {
                borderColor: DIM,
                borderWidth: "1px",
                width: "100%",
              },
            },
            {
              id: "pc-ch-2-spc-2",
              type: "spacer",
              props: { height: "20px" },
            },
            {
              id: "pc-ch-3-time",
              type: "text",
              props: {
                content: "31:45",
                color: GOLD,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "2px",
                align: "left",
              },
            },
            {
              id: "pc-ch-3-title",
              type: "text",
              props: {
                content: "*The hiring mistake she'd make again.*",
                color: BONE,
                fontFamily: DISPLAY,
                fontSize: "20px",
                fontWeight: "normal",
                lineHeight: "1.4",
                align: "left",
              },
            },
            {
              id: "pc-ch-3-spc",
              type: "spacer",
              props: { height: "20px" },
            },
            {
              id: "pc-ch-3-div",
              type: "divider",
              props: {
                borderColor: DIM,
                borderWidth: "1px",
                width: "100%",
              },
            },
            {
              id: "pc-ch-3-spc-2",
              type: "spacer",
              props: { height: "20px" },
            },
            {
              id: "pc-ch-4-time",
              type: "text",
              props: {
                content: "44:08",
                color: GOLD,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "2px",
                align: "left",
              },
            },
            {
              id: "pc-ch-4-title",
              type: "text",
              props: {
                content: "*The morning ritual that changed everything.*",
                color: BONE,
                fontFamily: DISPLAY,
                fontSize: "20px",
                fontWeight: "normal",
                lineHeight: "1.4",
                align: "left",
              },
            },
          ],
        },
      ],
    },
    {
      id: "pc-cta-section",
      type: "section",
      props: { backgroundColor: GOLD, padding: "56px 30px" },
      children: [
        {
          id: "pc-cta-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "pc-cta-eyebrow",
              type: "text",
              props: {
                content: "PRESS PLAY",
                color: INK,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "normal",
                letterSpacing: "5px",
                align: "center",
              },
            },
            {
              id: "pc-cta-spc",
              type: "spacer",
              props: { height: "10px" },
            },
            {
              id: "pc-cta-title",
              type: "text",
              props: {
                content: "*one hour of\nthe good kind of quiet.*",
                color: INK,
                fontFamily: DISPLAY,
                fontSize: "34px",
                fontWeight: "normal",
                lineHeight: "1.2",
                align: "center",
              },
            },
            {
              id: "pc-cta-spc-2",
              type: "spacer",
              props: { height: "24px" },
            },
            {
              id: "pc-cta-btn",
              type: "button",
              props: {
                label: "listen to episode 042",
                href: "https://example.com/listen",
                backgroundColor: INK,
                color: BONE,
                align: "center",
                fontFamily: SANS,
                fontSize: "12px",
                fontWeight: "normal",
                letterSpacing: "2.5px",
                borderRadius: "999px",
                innerPadding: "16px 38px",
              },
            },
          ],
        },
      ],
    },
    {
      id: "pc-archive-eyebrow-section",
      type: "section",
      props: { backgroundColor: INK, padding: "56px 24px 4px" },
      children: [
        {
          id: "pc-archive-eyebrow-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "pc-archive-eyebrow-text",
              type: "text",
              props: {
                content: "FROM THE ARCHIVE",
                color: GOLD_SOFT,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "normal",
                letterSpacing: "6px",
                align: "center",
              },
            },
            {
              id: "pc-archive-spc",
              type: "spacer",
              props: { height: "8px" },
            },
            {
              id: "pc-archive-title",
              type: "text",
              props: {
                content: "*if you liked this one*",
                color: BONE,
                fontFamily: DISPLAY,
                fontSize: "30px",
                fontWeight: "normal",
                lineHeight: "1.2",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "pc-archive-section",
      type: "section",
      props: { backgroundColor: INK, padding: "28px 12px 48px" },
      children: [
        {
          id: "pc-arc-c1",
          type: "column",
          props: { width: "33.33%", verticalAlign: "top" },
          children: [
            {
              id: "pc-arc-1-num",
              type: "text",
              props: {
                content: "EP 037",
                color: GOLD,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "normal",
                letterSpacing: "3px",
                align: "center",
              },
            },
            {
              id: "pc-arc-1-name",
              type: "text",
              props: {
                content: "*The art of pricing what you make.*",
                color: BONE,
                fontFamily: DISPLAY,
                fontSize: "17px",
                fontWeight: "normal",
                lineHeight: "1.35",
                align: "center",
              },
            },
            {
              id: "pc-arc-1-meta",
              type: "text",
              props: {
                content: "WITH MAYA TORRES  ·  47 MIN",
                color: MUTED,
                fontFamily: SANS,
                fontSize: "9px",
                lineHeight: "1.7",
                letterSpacing: "1.5px",
                align: "center",
              },
            },
          ],
        },
        {
          id: "pc-arc-c2",
          type: "column",
          props: { width: "33.33%", verticalAlign: "top" },
          children: [
            {
              id: "pc-arc-2-num",
              type: "text",
              props: {
                content: "EP 029",
                color: GOLD,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "normal",
                letterSpacing: "3px",
                align: "center",
              },
            },
            {
              id: "pc-arc-2-name",
              type: "text",
              props: {
                content: "*Letting your work speak first.*",
                color: BONE,
                fontFamily: DISPLAY,
                fontSize: "17px",
                fontWeight: "normal",
                lineHeight: "1.35",
                align: "center",
              },
            },
            {
              id: "pc-arc-2-meta",
              type: "text",
              props: {
                content: "WITH JUNO LEE  ·  53 MIN",
                color: MUTED,
                fontFamily: SANS,
                fontSize: "9px",
                lineHeight: "1.7",
                letterSpacing: "1.5px",
                align: "center",
              },
            },
          ],
        },
        {
          id: "pc-arc-c3",
          type: "column",
          props: { width: "33.34%", verticalAlign: "top" },
          children: [
            {
              id: "pc-arc-3-num",
              type: "text",
              props: {
                content: "EP 014",
                color: GOLD,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "normal",
                letterSpacing: "3px",
                align: "center",
              },
            },
            {
              id: "pc-arc-3-name",
              type: "text",
              props: {
                content: "*A studio of one — and how to keep it that way.*",
                color: BONE,
                fontFamily: DISPLAY,
                fontSize: "17px",
                fontWeight: "normal",
                lineHeight: "1.35",
                align: "center",
              },
            },
            {
              id: "pc-arc-3-meta",
              type: "text",
              props: {
                content: "WITH AVA REIS  ·  41 MIN",
                color: MUTED,
                fontFamily: SANS,
                fontSize: "9px",
                lineHeight: "1.7",
                letterSpacing: "1.5px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "pc-signoff-section",
      type: "section",
      props: { backgroundColor: CHARCOAL, padding: "40px 24px 32px" },
      children: [
        {
          id: "pc-signoff-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "pc-signoff-text",
              type: "text",
              props: {
                content: "*hosted by*",
                color: MUTED,
                fontFamily: BODY,
                fontSize: "13px",
                lineHeight: "1.6",
                align: "center",
              },
            },
            {
              id: "pc-signoff-name",
              type: "text",
              props: {
                content: "Helena Costa",
                color: BONE,
                fontFamily: DISPLAY,
                fontSize: "26px",
                fontWeight: "normal",
                letterSpacing: "1px",
                align: "center",
              },
            },
            {
              id: "pc-signoff-role",
              type: "text",
              props: {
                content: "THE SLOW HOURS  ·  NEW EPISODES EVERY TUESDAY",
                color: GOLD_SOFT,
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
      id: "pc-footer-section",
      type: "section",
      props: { backgroundColor: INK, padding: "28px 30px 40px" },
      children: [
        {
          id: "pc-footer-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "pc-footer-links",
              type: "text",
              props: {
                content:
                  "[spotify](https://spotify.com/) · [apple podcasts](https://apple.com/) · [youtube](https://youtube.com/) · [transcripts](https://example.com/transcripts)",
                color: GOLD_SOFT,
                fontFamily: SANS,
                fontSize: "10px",
                letterSpacing: "2px",
                align: "center",
              },
            },
            {
              id: "pc-footer-spc",
              type: "spacer",
              props: { height: "16px" },
            },
            {
              id: "pc-footer-text",
              type: "text",
              props: {
                content:
                  "© 2026 The Slow Hours. Recorded in Lisbon.\n[update preferences](https://example.com/prefs)  ·  [unsubscribe](https://example.com/unsub)",
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
