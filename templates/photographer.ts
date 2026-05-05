import type { Template } from "@/types/email";

const DISPLAY = "'Playfair Display', Georgia, serif";
const SERIF = "'Cormorant Garamond', Georgia, serif";
const BODY = "Lora, Georgia, serif";
const SANS = "Inter, sans-serif";

const PAPER = "#f5f1e8";
const PAPER_SOFT = "#fbf8f1";
const GRAPHITE = "#1f1d1a";
const SEPIA = "#7c5b3a";
const SEPIA_SOFT = "#a47d54";
const MUTED = "#7a7268";

const HERO_IMG =
  "https://placehold.co/1200x800/aea69a/1f1d1a?text=";
const FRAME_IMG_1 =
  "https://placehold.co/640x480/d4cdc0/1f1d1a?text=01";
const FRAME_IMG_2 =
  "https://placehold.co/640x480/aea69a/f5f1e8?text=02";
const FRAME_IMG_3 =
  "https://placehold.co/640x480/7c5b3a/f5f1e8?text=03";
const FRAME_IMG_4 =
  "https://placehold.co/640x480/1f1d1a/d4cdc0?text=04";
const PRINT_IMG =
  "https://placehold.co/720x900/aea69a/1f1d1a?text=";

export const photographer: Template = {
  id: "photographer",
  name: "Photographer / studio",
  category: "Editorial",
  description:
    "Despacho trimestral de fotógrafa em paleta papel + grafite + sépia, com galeria 2×2 e bookings.",
  tree: [
    {
      id: "ph-top-section",
      type: "section",
      props: { backgroundColor: GRAPHITE, padding: "14px 24px" },
      children: [
        {
          id: "ph-top-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "ph-top-text",
              type: "text",
              props: {
                content: "QUARTERLY DISPATCH  ·  SPRING 2026",
                color: PAPER,
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
      id: "ph-mark-section",
      type: "section",
      props: { backgroundColor: PAPER, padding: "44px 24px 0" },
      children: [
        {
          id: "ph-mark-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "ph-mark-text",
              type: "text",
              props: {
                content: "—  E. M.  —",
                color: GRAPHITE,
                fontFamily: SERIF,
                fontSize: "20px",
                fontWeight: "normal",
                letterSpacing: "8px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "ph-issue-section",
      type: "section",
      props: { backgroundColor: PAPER, padding: "20px 24px 4px" },
      children: [
        {
          id: "ph-issue-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "ph-issue-text",
              type: "text",
              props: {
                content: "ISSUE Nº 04  ·  FROM THE STUDIO",
                color: SEPIA,
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
      id: "ph-headline-section",
      type: "section",
      props: { backgroundColor: PAPER, padding: "12px 30px 14px" },
      children: [
        {
          id: "ph-headline-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "ph-headline-text",
              type: "text",
              props: {
                content: "*From the\nfield.*",
                color: GRAPHITE,
                fontFamily: DISPLAY,
                fontSize: "72px",
                fontWeight: "normal",
                letterSpacing: "-1px",
                lineHeight: "1.05",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "ph-tag-section",
      type: "section",
      props: { backgroundColor: PAPER, padding: "0 60px 36px" },
      children: [
        {
          id: "ph-tag-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "ph-tag-text",
              type: "text",
              props: {
                content:
                  "Three months of light, three rolls of film, one quiet morning at the river. A short letter from where I've been.",
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
      id: "ph-hero-section",
      type: "section",
      props: { backgroundColor: PAPER, padding: "0" },
      children: [
        {
          id: "ph-hero-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "ph-hero-img",
              type: "image",
              props: {
                src: HERO_IMG,
                alt: "Tagus, March light",
                width: "600px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "ph-cap-section",
      type: "section",
      props: { backgroundColor: PAPER, padding: "16px 60px 8px" },
      children: [
        {
          id: "ph-cap-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "ph-cap-num",
              type: "text",
              props: {
                content: "PLATE 01  ·  KODAK PORTRA 400",
                color: SEPIA,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "normal",
                letterSpacing: "3.5px",
                align: "center",
              },
            },
            {
              id: "ph-cap-spc",
              type: "spacer",
              props: { height: "6px" },
            },
            {
              id: "ph-cap-text",
              type: "text",
              props: {
                content: "*Tagus river, Lisbon — 06:42, March 14*",
                color: GRAPHITE,
                fontFamily: BODY,
                fontSize: "14px",
                lineHeight: "1.6",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "ph-body-section",
      type: "section",
      props: { backgroundColor: PAPER, padding: "28px 60px 36px" },
      children: [
        {
          id: "ph-body-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "ph-body-text",
              type: "text",
              props: {
                content:
                  "I drove out at five-thirty so I could be alone with the light. The film never quite captures what it felt like — the particular *cool blue-grey* of the river before the sun lifts — but it gets close enough that I can remember.",
                color: GRAPHITE,
                fontFamily: BODY,
                fontSize: "16px",
                lineHeight: "1.8",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "ph-rule-section",
      type: "section",
      props: { backgroundColor: PAPER, padding: "0 220px 32px" },
      children: [
        {
          id: "ph-rule-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "ph-rule",
              type: "divider",
              props: {
                borderColor: GRAPHITE,
                borderWidth: "1px",
                width: "100%",
              },
            },
          ],
        },
      ],
    },
    {
      id: "ph-frames-eyebrow-section",
      type: "section",
      props: { backgroundColor: PAPER, padding: "0 24px 4px" },
      children: [
        {
          id: "ph-frames-eyebrow-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "ph-frames-eyebrow-text",
              type: "text",
              props: {
                content: "SELECTED FRAMES",
                color: SEPIA,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "normal",
                letterSpacing: "5px",
                align: "center",
              },
            },
            {
              id: "ph-frames-spc",
              type: "spacer",
              props: { height: "10px" },
            },
            {
              id: "ph-frames-title",
              type: "text",
              props: {
                content: "*from this season*",
                color: GRAPHITE,
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
      id: "ph-frames-row-1",
      type: "section",
      props: { backgroundColor: PAPER, padding: "32px 24px 12px" },
      children: [
        {
          id: "ph-fr-c1",
          type: "column",
          props: { width: "50%", verticalAlign: "top" },
          children: [
            {
              id: "ph-fr-i1",
              type: "image",
              props: {
                src: FRAME_IMG_1,
                alt: "Frame 01",
                width: "260px",
                align: "center",
              },
            },
            {
              id: "ph-fr-spc-1",
              type: "spacer",
              props: { height: "10px" },
            },
            {
              id: "ph-fr-num-1",
              type: "text",
              props: {
                content: "01",
                color: SEPIA,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "normal",
                letterSpacing: "3px",
                align: "center",
              },
            },
            {
              id: "ph-fr-name-1",
              type: "text",
              props: {
                content: "*Atelier hands.*",
                color: GRAPHITE,
                fontFamily: DISPLAY,
                fontSize: "20px",
                fontWeight: "normal",
                lineHeight: "1.3",
                align: "center",
              },
            },
            {
              id: "ph-fr-cap-1",
              type: "text",
              props: {
                content: "Porto · February",
                color: MUTED,
                fontFamily: BODY,
                fontSize: "12px",
                lineHeight: "1.6",
                align: "center",
              },
            },
          ],
        },
        {
          id: "ph-fr-c2",
          type: "column",
          props: { width: "50%", verticalAlign: "top" },
          children: [
            {
              id: "ph-fr-i2",
              type: "image",
              props: {
                src: FRAME_IMG_2,
                alt: "Frame 02",
                width: "260px",
                align: "center",
              },
            },
            {
              id: "ph-fr-spc-2",
              type: "spacer",
              props: { height: "10px" },
            },
            {
              id: "ph-fr-num-2",
              type: "text",
              props: {
                content: "02",
                color: SEPIA,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "normal",
                letterSpacing: "3px",
                align: "center",
              },
            },
            {
              id: "ph-fr-name-2",
              type: "text",
              props: {
                content: "*A still kitchen.*",
                color: GRAPHITE,
                fontFamily: DISPLAY,
                fontSize: "20px",
                fontWeight: "normal",
                lineHeight: "1.3",
                align: "center",
              },
            },
            {
              id: "ph-fr-cap-2",
              type: "text",
              props: {
                content: "Sintra · March",
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
      id: "ph-frames-row-2",
      type: "section",
      props: { backgroundColor: PAPER, padding: "20px 24px 32px" },
      children: [
        {
          id: "ph-fr-c3",
          type: "column",
          props: { width: "50%", verticalAlign: "top" },
          children: [
            {
              id: "ph-fr-i3",
              type: "image",
              props: {
                src: FRAME_IMG_3,
                alt: "Frame 03",
                width: "260px",
                align: "center",
              },
            },
            {
              id: "ph-fr-spc-3",
              type: "spacer",
              props: { height: "10px" },
            },
            {
              id: "ph-fr-num-3",
              type: "text",
              props: {
                content: "03",
                color: SEPIA,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "normal",
                letterSpacing: "3px",
                align: "center",
              },
            },
            {
              id: "ph-fr-name-3",
              type: "text",
              props: {
                content: "*Mother & daughter.*",
                color: GRAPHITE,
                fontFamily: DISPLAY,
                fontSize: "20px",
                fontWeight: "normal",
                lineHeight: "1.3",
                align: "center",
              },
            },
            {
              id: "ph-fr-cap-3",
              type: "text",
              props: {
                content: "Comporta · April",
                color: MUTED,
                fontFamily: BODY,
                fontSize: "12px",
                lineHeight: "1.6",
                align: "center",
              },
            },
          ],
        },
        {
          id: "ph-fr-c4",
          type: "column",
          props: { width: "50%", verticalAlign: "top" },
          children: [
            {
              id: "ph-fr-i4",
              type: "image",
              props: {
                src: FRAME_IMG_4,
                alt: "Frame 04",
                width: "260px",
                align: "center",
              },
            },
            {
              id: "ph-fr-spc-4",
              type: "spacer",
              props: { height: "10px" },
            },
            {
              id: "ph-fr-num-4",
              type: "text",
              props: {
                content: "04",
                color: SEPIA,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "normal",
                letterSpacing: "3px",
                align: "center",
              },
            },
            {
              id: "ph-fr-name-4",
              type: "text",
              props: {
                content: "*Last light.*",
                color: GRAPHITE,
                fontFamily: DISPLAY,
                fontSize: "20px",
                fontWeight: "normal",
                lineHeight: "1.3",
                align: "center",
              },
            },
            {
              id: "ph-fr-cap-4",
              type: "text",
              props: {
                content: "Alentejo · May",
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
      id: "ph-diary-section",
      type: "section",
      props: { backgroundColor: PAPER_SOFT, padding: "56px 60px" },
      children: [
        {
          id: "ph-diary-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "ph-diary-eyebrow",
              type: "text",
              props: {
                content: "BEHIND THE LENS",
                color: SEPIA,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "normal",
                letterSpacing: "5px",
                align: "center",
              },
            },
            {
              id: "ph-diary-spc",
              type: "spacer",
              props: { height: "12px" },
            },
            {
              id: "ph-diary-quote",
              type: "text",
              props: {
                content:
                  "*“Half of this job is patience. The light decides when, and you just have to be there with the camera ready.”*",
                color: GRAPHITE,
                fontFamily: DISPLAY,
                fontSize: "26px",
                fontWeight: "normal",
                lineHeight: "1.45",
                align: "center",
              },
            },
            {
              id: "ph-diary-spc-2",
              type: "spacer",
              props: { height: "16px" },
            },
            {
              id: "ph-diary-from",
              type: "text",
              props: {
                content: "— FROM THE STUDIO JOURNAL, APRIL 22",
                color: SEPIA,
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
      id: "ph-booking-eyebrow-section",
      type: "section",
      props: { backgroundColor: PAPER, padding: "56px 24px 4px" },
      children: [
        {
          id: "ph-booking-eyebrow-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "ph-booking-eyebrow-text",
              type: "text",
              props: {
                content: "NOW BOOKING",
                color: SEPIA,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "normal",
                letterSpacing: "5px",
                align: "center",
              },
            },
            {
              id: "ph-booking-spc",
              type: "spacer",
              props: { height: "10px" },
            },
            {
              id: "ph-booking-title",
              type: "text",
              props: {
                content: "*summer light, sept – nov*",
                color: GRAPHITE,
                fontFamily: DISPLAY,
                fontSize: "36px",
                fontWeight: "normal",
                lineHeight: "1.15",
                align: "center",
              },
            },
            {
              id: "ph-booking-sub-spc",
              type: "spacer",
              props: { height: "10px" },
            },
            {
              id: "ph-booking-sub",
              type: "text",
              props: {
                content:
                  "Three commission slots open this season — film + digital, on location.",
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
      id: "ph-services-section",
      type: "section",
      props: { backgroundColor: PAPER, padding: "32px 30px 16px" },
      children: [
        {
          id: "ph-srv-c1",
          type: "column",
          props: { width: "33.33%", verticalAlign: "top" },
          children: [
            {
              id: "ph-srv-1-name",
              type: "text",
              props: {
                content: "EDITORIAL",
                color: GRAPHITE,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "3px",
                align: "center",
              },
            },
            {
              id: "ph-srv-1-spc",
              type: "spacer",
              props: { height: "8px" },
            },
            {
              id: "ph-srv-1-desc",
              type: "text",
              props: {
                content:
                  "*Magazines, print, and slow-form storytelling for brands with patience.*",
                color: MUTED,
                fontFamily: BODY,
                fontSize: "13px",
                lineHeight: "1.7",
                align: "center",
              },
            },
            {
              id: "ph-srv-1-from",
              type: "text",
              props: {
                content: "FROM € 2,400",
                color: SEPIA,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "normal",
                letterSpacing: "2.5px",
                align: "center",
              },
            },
          ],
        },
        {
          id: "ph-srv-c2",
          type: "column",
          props: { width: "33.33%", verticalAlign: "top" },
          children: [
            {
              id: "ph-srv-2-name",
              type: "text",
              props: {
                content: "WEDDINGS",
                color: GRAPHITE,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "3px",
                align: "center",
              },
            },
            {
              id: "ph-srv-2-spc",
              type: "spacer",
              props: { height: "8px" },
            },
            {
              id: "ph-srv-2-desc",
              type: "text",
              props: {
                content:
                  "*Documentary-leaning. I shoot the day as it actually happens.*",
                color: MUTED,
                fontFamily: BODY,
                fontSize: "13px",
                lineHeight: "1.7",
                align: "center",
              },
            },
            {
              id: "ph-srv-2-from",
              type: "text",
              props: {
                content: "FROM € 3,800",
                color: SEPIA,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "normal",
                letterSpacing: "2.5px",
                align: "center",
              },
            },
          ],
        },
        {
          id: "ph-srv-c3",
          type: "column",
          props: { width: "33.34%", verticalAlign: "top" },
          children: [
            {
              id: "ph-srv-3-name",
              type: "text",
              props: {
                content: "PORTRAIT",
                color: GRAPHITE,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "3px",
                align: "center",
              },
            },
            {
              id: "ph-srv-3-spc",
              type: "spacer",
              props: { height: "8px" },
            },
            {
              id: "ph-srv-3-desc",
              type: "text",
              props: {
                content:
                  "*Founders, families, single sittings. Two hours, one roll.*",
                color: MUTED,
                fontFamily: BODY,
                fontSize: "13px",
                lineHeight: "1.7",
                align: "center",
              },
            },
            {
              id: "ph-srv-3-from",
              type: "text",
              props: {
                content: "FROM € 720",
                color: SEPIA,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "normal",
                letterSpacing: "2.5px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "ph-cta-section",
      type: "section",
      props: { backgroundColor: PAPER, padding: "16px 24px 56px" },
      children: [
        {
          id: "ph-cta-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "ph-cta-btn",
              type: "button",
              props: {
                label: "request a commission",
                href: "https://example.com/commission",
                backgroundColor: GRAPHITE,
                color: PAPER,
                align: "center",
                fontFamily: SANS,
                fontSize: "12px",
                fontWeight: "normal",
                letterSpacing: "3px",
                borderRadius: "0px",
                innerPadding: "16px 36px",
              },
            },
          ],
        },
      ],
    },
    {
      id: "ph-print-section",
      type: "section",
      props: { backgroundColor: GRAPHITE, padding: "56px 30px" },
      children: [
        {
          id: "ph-print-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "ph-print-eyebrow",
              type: "text",
              props: {
                content: "PRINT OF THE SEASON",
                color: SEPIA_SOFT,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "normal",
                letterSpacing: "5px",
                align: "center",
              },
            },
            {
              id: "ph-print-spc",
              type: "spacer",
              props: { height: "20px" },
            },
            {
              id: "ph-print-img",
              type: "image",
              props: {
                src: PRINT_IMG,
                alt: "Limited print",
                width: "300px",
                align: "center",
              },
            },
            {
              id: "ph-print-spc-2",
              type: "spacer",
              props: { height: "20px" },
            },
            {
              id: "ph-print-name",
              type: "text",
              props: {
                content: "*Tagus, March.*",
                color: PAPER,
                fontFamily: DISPLAY,
                fontSize: "32px",
                fontWeight: "normal",
                lineHeight: "1.2",
                align: "center",
              },
            },
            {
              id: "ph-print-meta",
              type: "text",
              props: {
                content: "ARCHIVAL PIGMENT  ·  30 × 40 CM  ·  EDITION OF 25",
                color: SEPIA_SOFT,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "normal",
                letterSpacing: "3px",
                align: "center",
              },
            },
            {
              id: "ph-print-spc-3",
              type: "spacer",
              props: { height: "12px" },
            },
            {
              id: "ph-print-price",
              type: "text",
              props: {
                content: "€ 280",
                color: PAPER,
                fontFamily: SERIF,
                fontSize: "32px",
                fontWeight: "normal",
                letterSpacing: "1px",
                align: "center",
              },
            },
            {
              id: "ph-print-spc-4",
              type: "spacer",
              props: { height: "20px" },
            },
            {
              id: "ph-print-btn",
              type: "button",
              props: {
                label: "buy a print",
                href: "https://example.com/print",
                backgroundColor: PAPER,
                color: GRAPHITE,
                align: "center",
                fontFamily: SANS,
                fontSize: "12px",
                fontWeight: "normal",
                letterSpacing: "2.5px",
                borderRadius: "0px",
                innerPadding: "14px 32px",
              },
            },
          ],
        },
      ],
    },
    {
      id: "ph-signoff-section",
      type: "section",
      props: { backgroundColor: PAPER, padding: "48px 24px 16px" },
      children: [
        {
          id: "ph-signoff-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "ph-signoff-pre",
              type: "text",
              props: {
                content: "*from behind the camera,*",
                color: MUTED,
                fontFamily: BODY,
                fontSize: "15px",
                lineHeight: "1.6",
                align: "center",
              },
            },
            {
              id: "ph-signoff-spc",
              type: "spacer",
              props: { height: "10px" },
            },
            {
              id: "ph-signoff-name",
              type: "text",
              props: {
                content: "Eva Madeira",
                color: GRAPHITE,
                fontFamily: DISPLAY,
                fontSize: "30px",
                fontWeight: "normal",
                letterSpacing: "1px",
                align: "center",
              },
            },
            {
              id: "ph-signoff-role",
              type: "text",
              props: {
                content: "PHOTOGRAPHER  ·  LISBON & ALENTEJO",
                color: SEPIA,
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
      id: "ph-footer-section",
      type: "section",
      props: { backgroundColor: PAPER_SOFT, padding: "32px 30px" },
      children: [
        {
          id: "ph-footer-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "ph-footer-links",
              type: "text",
              props: {
                content:
                  "[portfolio](https://example.com/) · [instagram](https://instagram.com/) · [print shop](https://example.com/shop) · [commissions](https://example.com/commission)",
                color: GRAPHITE,
                fontFamily: SANS,
                fontSize: "10px",
                letterSpacing: "2px",
                align: "center",
              },
            },
            {
              id: "ph-footer-spc",
              type: "spacer",
              props: { height: "16px" },
            },
            {
              id: "ph-footer-text",
              type: "text",
              props: {
                content:
                  "© 2026 Eva Madeira Photography. Lisbon, Portugal.\n[update preferences](https://example.com/prefs)  ·  [unsubscribe](https://example.com/unsub)",
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
