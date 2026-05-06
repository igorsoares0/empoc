"use client";

import { useState } from "react";
import { useEditorStore } from "@/store/editorStore";
import { renderTreeToHtml } from "@/app/actions/render";

type Props = {
  view: "edit" | "preview";
  onViewChange: (view: "edit" | "preview") => void;
  onChangeTemplate: () => void;
};

export function Toolbar({ view, onViewChange, onChangeTemplate }: Props) {
  const tree = useEditorStore((s) => s.tree);
  const undo = useEditorStore((s) => s.undo);
  const redo = useEditorStore((s) => s.redo);
  const past = useEditorStore((s) => s.past);
  const future = useEditorStore((s) => s.future);
  const [isExporting, setIsExporting] = useState(false);

  async function exportHtml() {
    setIsExporting(true);
    try {
      const result = await renderTreeToHtml(tree);
      const blob = new Blob([result.html], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "email.html";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } finally {
      setIsExporting(false);
    }
  }

  const iconBtn =
    "inline-flex h-8 w-8 items-center justify-center rounded-md text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent";

  return (
    <header className="flex h-14 shrink-0 items-center justify-between gap-4 border-b border-zinc-200 bg-white px-4">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-zinc-900 text-[11px] font-bold text-white">
            e
          </div>
          <span className="text-[15px] font-semibold tracking-tight text-zinc-900">
            empoc
          </span>
        </div>
        <span className="h-5 w-px bg-zinc-200" />
        <div className="flex items-center gap-0.5">
          <button
            type="button"
            onClick={undo}
            disabled={past.length === 0}
            title="Desfazer (⌘Z)"
            className={iconBtn}
            aria-label="Desfazer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 7v6h6" />
              <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6.7 2.95L3 13" />
            </svg>
          </button>
          <button
            type="button"
            onClick={redo}
            disabled={future.length === 0}
            title="Refazer (⌘⇧Z)"
            className={iconBtn}
            aria-label="Refazer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 7v6h-6" />
              <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6.7 2.95L21 13" />
            </svg>
          </button>
        </div>
      </div>

      <div className="inline-flex items-center rounded-lg border border-zinc-200 bg-zinc-50 p-0.5 text-sm">
        <button
          type="button"
          onClick={() => onViewChange("edit")}
          className={`rounded-md px-3 py-1 font-medium transition-all ${
            view === "edit"
              ? "bg-white text-zinc-900 shadow-sm ring-1 ring-zinc-200/60"
              : "text-zinc-500 hover:text-zinc-900"
          }`}
        >
          Editar
        </button>
        <button
          type="button"
          onClick={() => onViewChange("preview")}
          className={`rounded-md px-3 py-1 font-medium transition-all ${
            view === "preview"
              ? "bg-white text-zinc-900 shadow-sm ring-1 ring-zinc-200/60"
              : "text-zinc-500 hover:text-zinc-900"
          }`}
        >
          Preview
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onChangeTemplate}
          className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
          Templates
        </button>
        <button
          type="button"
          onClick={exportHtml}
          disabled={isExporting || tree.length === 0}
          className="inline-flex items-center gap-1.5 rounded-md bg-zinc-900 px-3.5 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          {isExporting ? "Exportando…" : "Exportar"}
        </button>
      </div>
    </header>
  );
}
