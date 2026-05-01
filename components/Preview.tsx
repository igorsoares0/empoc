"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { useEditorStore } from "@/store/editorStore";
import { renderTreeToHtml } from "@/app/actions/render";

type Device = "desktop" | "mobile";

const MOBILE_WIDTH = 375;

export function Preview() {
  const tree = useEditorStore((s) => s.tree);
  const [html, setHtml] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();
  const [device, setDevice] = useState<Device>("desktop");
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
      <div className="flex items-center justify-center border-b border-zinc-200 bg-white px-4 py-2">
        <div className="inline-flex rounded-md border border-zinc-200 bg-zinc-50 p-0.5 text-xs font-medium">
          <button
            type="button"
            onClick={() => setDevice("desktop")}
            className={`rounded px-3 py-1 transition ${
              device === "desktop"
                ? "bg-white text-zinc-900 shadow-sm"
                : "text-zinc-500 hover:text-zinc-700"
            }`}
          >
            Desktop
          </button>
          <button
            type="button"
            onClick={() => setDevice("mobile")}
            className={`rounded px-3 py-1 transition ${
              device === "mobile"
                ? "bg-white text-zinc-900 shadow-sm"
                : "text-zinc-500 hover:text-zinc-700"
            }`}
          >
            Mobile · 375px
          </button>
        </div>
      </div>
      {isPending ? (
        <div className="absolute right-4 top-14 z-10 rounded bg-zinc-900/80 px-2 py-1 text-xs text-white">
          Renderizando…
        </div>
      ) : null}
      <div className="flex flex-1 items-start justify-center overflow-auto p-4">
        <iframe
          srcDoc={html}
          sandbox="allow-same-origin"
          title="Preview do email"
          style={
            device === "mobile"
              ? { width: `${MOBILE_WIDTH}px` }
              : { width: "100%" }
          }
          className={`h-full border-0 bg-white ${
            device === "mobile"
              ? "rounded-[28px] border-8 border-zinc-900 shadow-xl"
              : ""
          }`}
        />
      </div>
    </main>
  );
}
