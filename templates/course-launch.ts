import type { Template } from "@/types/email";

const SERIF = "'Cormorant Garamond', Georgia, serif";
const SCRIPT = "'Pinyon Script', cursive";
const SANS = "Inter, sans-serif";

const INK = "#2e2622";
const TERRA = "#b87856";
const CLAY = "#d9b89a";
const CREAM = "#f5ede2";
const CREAM_SOFT = "#faf4eb";
const MUTED = "#8a7866";

const HERO_IMG =
  "https://placehold.co/1100x620/d9b89a/4a3328?text=The+Masterclass";
const TESTI_AVATAR =
  "https://placehold.co/180x180/d9b89a/4a3328?text=A.M.";

export const courseLaunch: Template = {
  id: "course-launch",
  name: "Course launch",
  category: "Lançamento",
  description:
    "Editorial masterclass announcement with modules, testimonial and enrolment CTA.",
  tree: [
    {
      id: "cl-band-section",
      type: "section",
      props: { backgroundColor: INK, padding: "12px 16px" },
      children: [
        {
          id: "cl-band-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "cl-band-text",
              type: "text",
              props: {
                content: "— DOORS ARE OPEN · ENROLMENT CLOSES MAY 18 —",
                color: CLAY,
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
      id: "cl-eyebrow-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "44px 24px 4px" },
      children: [
        {
          id: "cl-eyebrow-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "cl-eyebrow-text",
              type: "text",
              props: {
                content: "A SIX-WEEK MASTERCLASS",
                color: TERRA,
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
      id: "cl-hero-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "8px 24px 4px" },
      children: [
        {
          id: "cl-hero-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "cl-hero-script",
              type: "text",
              props: {
                content: "the art of",
                color: TERRA,
                fontFamily: SCRIPT,
                fontSize: "60px",
                fontWeight: "normal",
                lineHeight: "1.0",
                align: "center",
              },
            },
            {
              id: "cl-hero-bold",
              type: "text",
              props: {
                content: "SLOW CRAFT",
                color: INK,
                fontFamily: SERIF,
                fontSize: "72px",
                fontWeight: "bold",
                letterSpacing: "4px",
                lineHeight: "1.0",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "cl-tagline-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "16px 60px 24px" },
      children: [
        {
          id: "cl-tagline-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "cl-tagline-text",
              type: "text",
              props: {
                content:
                  "*A six-week masterclass on building a creative practice that lasts — without burning out, without performing, without losing yourself in the algorithm.*",
                color: INK,
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
      id: "cl-image-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "0 24px 24px" },
      children: [
        {
          id: "cl-image-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "cl-image-img",
              type: "image",
              props: {
                src: HERO_IMG,
                alt: "The Masterclass",
                width: "560px",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "cl-modules-eyebrow-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "12px 24px 8px" },
      children: [
        {
          id: "cl-modules-eyebrow-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "cl-modules-eyebrow-text",
              type: "text",
              props: {
                content: "WHAT YOU WILL LEARN",
                color: INK,
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
      id: "cl-modules-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "20px 12px 16px" },
      children: [
        {
          id: "cl-mod-c1",
          type: "column",
          props: { width: "33.33%", verticalAlign: "top" },
          children: [
            {
              id: "cl-mod-n1",
              type: "text",
              props: {
                content: "01",
                color: TERRA,
                fontFamily: SERIF,
                fontSize: "36px",
                fontWeight: "bold",
                lineHeight: "1.0",
                align: "center",
              },
            },
            {
              id: "cl-mod-t1",
              type: "text",
              props: {
                content: "*Foundations*",
                color: INK,
                fontFamily: SERIF,
                fontSize: "20px",
                fontWeight: "bold",
                align: "center",
              },
            },
            {
              id: "cl-mod-b1",
              type: "text",
              props: {
                content:
                  "Define your voice, your medium and the rhythm that fits the life you actually live.",
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
          id: "cl-mod-c2",
          type: "column",
          props: { width: "33.33%", verticalAlign: "top" },
          children: [
            {
              id: "cl-mod-n2",
              type: "text",
              props: {
                content: "02",
                color: TERRA,
                fontFamily: SERIF,
                fontSize: "36px",
                fontWeight: "bold",
                lineHeight: "1.0",
                align: "center",
              },
            },
            {
              id: "cl-mod-t2",
              type: "text",
              props: {
                content: "*Practice*",
                color: INK,
                fontFamily: SERIF,
                fontSize: "20px",
                fontWeight: "bold",
                align: "center",
              },
            },
            {
              id: "cl-mod-b2",
              type: "text",
              props: {
                content:
                  "Build a weekly studio routine, finish what you start and ship without flinching.",
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
          id: "cl-mod-c3",
          type: "column",
          props: { width: "33.34%", verticalAlign: "top" },
          children: [
            {
              id: "cl-mod-n3",
              type: "text",
              props: {
                content: "03",
                color: TERRA,
                fontFamily: SERIF,
                fontSize: "36px",
                fontWeight: "bold",
                lineHeight: "1.0",
                align: "center",
              },
            },
            {
              id: "cl-mod-t3",
              type: "text",
              props: {
                content: "*Audience*",
                color: INK,
                fontFamily: SERIF,
                fontSize: "20px",
                fontWeight: "bold",
                align: "center",
              },
            },
            {
              id: "cl-mod-b3",
              type: "text",
              props: {
                content:
                  "Find the readers who already love what you make — and build a quiet, devoted home for them.",
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
      id: "cl-divider-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "16px 24px 16px" },
      children: [
        {
          id: "cl-divider-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "cl-divider",
              type: "divider",
              props: {
                borderColor: TERRA,
                borderWidth: "1px",
                width: "120px",
              },
            },
          ],
        },
      ],
    },
    {
      id: "cl-testi-section",
      type: "section",
      props: { backgroundColor: CREAM_SOFT, padding: "44px 36px 40px" },
      children: [
        {
          id: "cl-testi-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "cl-testi-mark",
              type: "text",
              props: {
                content: "“",
                color: TERRA,
                fontFamily: SERIF,
                fontSize: "72px",
                fontWeight: "bold",
                lineHeight: "0.7",
                align: "center",
              },
            },
            {
              id: "cl-testi-quote",
              type: "text",
              props: {
                content:
                  "*This is the first course that respected my time as much as my craft. Six weeks in, I had a body of work I was proud of — and a calmer relationship with the work itself.*",
                color: INK,
                fontFamily: SERIF,
                fontSize: "20px",
                lineHeight: "1.5",
                align: "center",
              },
            },
            {
              id: "cl-testi-spacer",
              type: "spacer",
              props: { height: "16px" },
            },
            {
              id: "cl-testi-avatar",
              type: "image",
              props: {
                src: TESTI_AVATAR,
                alt: "Student",
                width: "60px",
                align: "center",
              },
            },
            {
              id: "cl-testi-name",
              type: "text",
              props: {
                content: "ANA M. · COHORT 03",
                color: TERRA,
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
      id: "cl-details-eyebrow-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "40px 24px 8px" },
      children: [
        {
          id: "cl-details-eyebrow-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "cl-details-eyebrow-text",
              type: "text",
              props: {
                content: "THE DETAILS",
                color: INK,
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
      id: "cl-details-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "16px 12px 24px" },
      children: [
        {
          id: "cl-det-c1",
          type: "column",
          props: { width: "33.33%", verticalAlign: "top" },
          children: [
            {
              id: "cl-det-l1",
              type: "text",
              props: {
                content: "STARTS",
                color: TERRA,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "bold",
                letterSpacing: "2.5px",
                align: "center",
              },
            },
            {
              id: "cl-det-v1",
              type: "text",
              props: {
                content: "May 27\n2026",
                color: INK,
                fontFamily: SERIF,
                fontSize: "22px",
                fontWeight: "bold",
                lineHeight: "1.15",
                align: "center",
              },
            },
          ],
        },
        {
          id: "cl-det-c2",
          type: "column",
          props: { width: "33.33%", verticalAlign: "top" },
          children: [
            {
              id: "cl-det-l2",
              type: "text",
              props: {
                content: "FORMAT",
                color: TERRA,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "bold",
                letterSpacing: "2.5px",
                align: "center",
              },
            },
            {
              id: "cl-det-v2",
              type: "text",
              props: {
                content: "Six weeks\nlive + replay",
                color: INK,
                fontFamily: SERIF,
                fontSize: "22px",
                fontWeight: "bold",
                lineHeight: "1.15",
                align: "center",
              },
            },
          ],
        },
        {
          id: "cl-det-c3",
          type: "column",
          props: { width: "33.34%", verticalAlign: "top" },
          children: [
            {
              id: "cl-det-l3",
              type: "text",
              props: {
                content: "SEATS",
                color: TERRA,
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: "bold",
                letterSpacing: "2.5px",
                align: "center",
              },
            },
            {
              id: "cl-det-v3",
              type: "text",
              props: {
                content: "Only 40\nper cohort",
                color: INK,
                fontFamily: SERIF,
                fontSize: "22px",
                fontWeight: "bold",
                lineHeight: "1.15",
                align: "center",
              },
            },
          ],
        },
      ],
    },
    {
      id: "cl-price-section",
      type: "section",
      props: { backgroundColor: INK, padding: "40px 24px 36px" },
      children: [
        {
          id: "cl-price-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "cl-price-eyebrow",
              type: "text",
              props: {
                content: "EARLY ENROLMENT",
                color: CLAY,
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "3px",
                align: "center",
              },
            },
            {
              id: "cl-price-num",
              type: "text",
              props: {
                content: "$ 480",
                color: CREAM,
                fontFamily: SERIF,
                fontSize: "60px",
                fontWeight: "bold",
                letterSpacing: "2px",
                lineHeight: "1.0",
                align: "center",
              },
            },
            {
              id: "cl-price-fine",
              type: "text",
              props: {
                content: "or 4 × $ 125 — full price $ 580 after May 18",
                color: CLAY,
                fontFamily: SANS,
                fontSize: "11px",
                letterSpacing: "1px",
                align: "center",
              },
            },
            {
              id: "cl-price-spacer",
              type: "spacer",
              props: { height: "20px" },
            },
            {
              id: "cl-price-btn",
              type: "button",
              props: {
                label: "save my seat",
                href: "https://example.com/enrol",
                backgroundColor: CREAM,
                color: INK,
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
      id: "cl-sign-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "36px 24px 16px" },
      children: [
        {
          id: "cl-sign-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "cl-sign-line",
              type: "text",
              props: {
                content: "*see you inside,*",
                color: MUTED,
                fontFamily: SERIF,
                fontSize: "16px",
                lineHeight: "1.2",
                align: "center",
              },
            },
            {
              id: "cl-sign-name",
              type: "text",
              props: {
                content: "Your Name",
                color: INK,
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
      id: "cl-footer-section",
      type: "section",
      props: { backgroundColor: CREAM, padding: "8px 30px 32px" },
      children: [
        {
          id: "cl-footer-col",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "cl-footer-text",
              type: "text",
              props: {
                content:
                  "© 2026 Your Brand. All rights reserved.\nCompany address, City, State, Zip\n[Unsubscribe](https://example.com/unsub).",
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
