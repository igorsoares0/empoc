"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { useEditorStore } from "@/store/editorStore";
import { renderTreeToHtml } from "@/app/actions/render";

export function Preview() {
  const tree = useEditorStore((s) => s.tree);
  const [html, setHtml] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      startTransition(async () => {
        const result = await renderTreeToHtml(tree);
        setHtml(result.html);
        setErrors(result.errors);
      });
    }, 300);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [tree]);

  return (
    <main className="relative flex flex-1 flex-col overflow-hidden bg-zinc-100">
      {errors.length > 0 ? (
        <div className="border-b border-amber-300 bg-amber-50 px-4 py-2 text-xs text-amber-900">
          <strong>Aviso MJML:</strong> {errors.slice(0, 3).join(" · ")}
          {errors.length > 3 ? ` (+${errors.length - 3})` : ""}
        </div>
      ) : null}
      {isPending ? (
        <div className="absolute right-4 top-4 z-10 rounded bg-zinc-900/80 px-2 py-1 text-xs text-white">
          Renderizando…
        </div>
      ) : null}
      <iframe
        srcDoc={html}
        sandbox="allow-same-origin"
        title="Preview do email"
        className="h-full w-full border-0 bg-white"
      />
    </main>
  );
}
