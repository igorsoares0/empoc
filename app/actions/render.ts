"use server";

import mjml2html from "mjml";
import { treeToMjml } from "@/lib/treeToMjml";
import type { EmailNode } from "@/types/email";

export type RenderResult = {
  html: string;
  errors: string[];
};

export async function renderTreeToHtml(
  tree: EmailNode[],
): Promise<RenderResult> {
  if (tree.length === 0) {
    return {
      html: "<!doctype html><html><body style=\"font-family:system-ui;color:#9ca3af;text-align:center;padding:80px 20px\"><p>Arraste um bloco para começar</p></body></html>",
      errors: [],
    };
  }

  const mjmlSource = treeToMjml(tree);
  const result = await mjml2html(mjmlSource, {
    validationLevel: "soft",
    keepComments: false,
  });

  return {
    html: result.html,
    errors: (result.errors ?? []).map(
      (e: { message: string; formattedMessage?: string }) =>
        e.formattedMessage ?? e.message,
    ),
  };
}
