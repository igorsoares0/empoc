import type { Template } from "@/types/email";

export const welcome: Template = {
  id: "welcome",
  name: "Boas-vindas",
  category: "Onboarding",
  description: "Mensagem de boas-vindas para novos usuários.",
  tree: [
    {
      id: "w-section-1",
      type: "section",
      props: { backgroundColor: "#1e40af", padding: "40px 0" },
      children: [
        {
          id: "w-col-1",
          type: "column",
          props: { verticalAlign: "middle" },
          children: [
            {
              id: "w-text-1",
              type: "text",
              props: {
                content: "Bem-vindo!",
                color: "#ffffff",
                fontSize: "32px",
                align: "center",
                fontWeight: "bold",
              },
            },
            {
              id: "w-text-2",
              type: "text",
              props: {
                content: "Que bom ter você conosco.",
                color: "#dbeafe",
                fontSize: "16px",
                align: "center",
                fontWeight: "normal",
              },
            },
          ],
        },
      ],
    },
    {
      id: "w-section-2",
      type: "section",
      props: { backgroundColor: "#ffffff", padding: "40px 20px" },
      children: [
        {
          id: "w-col-2",
          type: "column",
          props: { verticalAlign: "top" },
          children: [
            {
              id: "w-text-3",
              type: "text",
              props: {
                content:
                  "Olá! Estamos felizes em ter você por aqui. Comece explorando os recursos da plataforma e configure sua conta em poucos minutos.",
                color: "#374151",
                fontSize: "16px",
                align: "left",
                fontWeight: "normal",
              },
            },
            {
              id: "w-btn-1",
              type: "button",
              props: {
                label: "Configurar minha conta",
                href: "https://example.com/setup",
                backgroundColor: "#1e40af",
                color: "#ffffff",
                align: "center",
              },
            },
          ],
        },
      ],
    },
  ],
};
