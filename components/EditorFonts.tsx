"use client";

import { useEffect } from "react";
import { FONTS } from "@/lib/fonts";

/**
 * Carrega Google Fonts no <head> do editor (não do iframe de preview),
 * pra fontFamily aplicada inline nos nodes ser visível no canvas.
 */
export function EditorFonts() {
  useEffect(() => {
    for (const f of FONTS) {
      if (!f.googleHref) continue;
      const existing = document.querySelector(
        `link[data-empoc-font="${f.name}"]`,
      );
      if (existing) continue;
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = f.googleHref;
      link.dataset.empocFont = f.name;
      document.head.appendChild(link);
    }
  }, []);

  return null;
}
