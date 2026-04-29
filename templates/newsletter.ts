import type { Template } from "@/types/email";

export const newsletter: Template = {
  id: "newsletter",
  name: "Newsletter",
  category: "Conteúdo",
  description: "Edição mensal com destaques e artigos.",
  tree: [
    {
      id: "n-section-1",
      type: "section",
      props: { backgroundColor: "#0f172a", padding: "30px 0" },
      children: [
        {
          id: "n-col-1",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "n-text-1",
              type: "text",
              props: {
                content: "📰 Newsletter Mensal",
                color: "#f8fafc",
                fontSize: "24px",
                align: "center",
                fontWeight: "bold",
              },
            },
          ],
        },
      ],
    },
    {
      id: "n-section-2",
      type: "section",
      props: { backgroundColor: "#ffffff", padding: "30px 20px" },
      children: [
        {
          id: "n-col-2",
          type: "column",
          props: { verticalAlign: "top" },
          children: [
            {
              id: "n-img-1",
              type: "image",
              props: {
                src: "https://placehold.co/600x300/0f172a/f8fafc?text=Destaque+do+m%C3%AAs",
                alt: "Destaque do mês",
                width: "560px",
              },
            },
            {
              id: "n-text-2",
              type: "text",
              props: {
                content: "Destaque do mês",
                color: "#0f172a",
                fontSize: "22px",
                align: "left",
                fontWeight: "bold",
              },
            },
            {
              id: "n-text-3",
              type: "text",
              props: {
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat nibh sit amet odio iaculis, eget cursus eros maximus.",
                color: "#475569",
                fontSize: "15px",
                align: "left",
                fontWeight: "normal",
              },
            },
            {
              id: "n-btn-1",
              type: "button",
              props: {
                label: "Ler artigo completo",
                href: "https://example.com/article",
                backgroundColor: "#0ea5e9",
                color: "#ffffff",
                align: "left",
              },
            },
          ],
        },
      ],
    },
    {
      id: "n-section-3",
      type: "section",
      props: { backgroundColor: "#f1f5f9", padding: "20px 20px" },
      children: [
        {
          id: "n-col-3",
          type: "column",
          props: { verticalAlign: "top" },
          children: [
            {
              id: "n-text-4",
              type: "text",
              props: {
                content:
                  "Você está recebendo este email porque assinou a nossa newsletter.",
                color: "#64748b",
                fontSize: "12px",
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
