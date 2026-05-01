import type { Template } from "@/types/email";

export const promotional: Template = {
  id: "promotional",
  name: "Promocional",
  category: "Vendas",
  description: "Anúncio de oferta com call-to-action forte.",
  tree: [
    {
      id: "p-section-1",
      type: "section",
      props: { backgroundColor: "#dc2626", padding: "50px 20px" },
      children: [
        {
          id: "p-col-1",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "p-text-1",
              type: "text",
              props: {
                content: "OFERTA RELÂMPAGO",
                color: "#fef2f2",
                fontSize: "14px",
                align: "center",
                fontWeight: "bold",
              },
            },
            {
              id: "p-text-2",
              type: "text",
              props: {
                content: "50% OFF",
                color: "#ffffff",
                fontSize: "44px",
                align: "center",
                fontWeight: "bold",
              },
            },
            {
              id: "p-text-3",
              type: "text",
              props: {
                content: "Em todos os produtos. Apenas hoje.",
                color: "#fecaca",
                fontSize: "18px",
                align: "center",
                fontWeight: "normal",
              },
            },
          ],
        },
      ],
    },
    {
      id: "p-section-2",
      type: "section",
      props: { backgroundColor: "#ffffff", padding: "40px 20px" },
      children: [
        {
          id: "p-col-2",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "p-btn-1",
              type: "button",
              props: {
                label: "Aproveitar agora",
                href: "https://example.com/oferta",
                backgroundColor: "#dc2626",
                color: "#ffffff",
                align: "center",
              },
            },
            {
              id: "p-text-4",
              type: "text",
              props: {
                content: "Use o código PROMO50 no checkout.",
                color: "#6b7280",
                fontSize: "14px",
                align: "center",
                fontWeight: "normal",
              },
            },
          ],
        },
      ],
    },
  ],
};
