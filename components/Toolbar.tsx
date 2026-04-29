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

  const btn =
    "inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-40";

  return (
    <header className="flex items-center justify-between gap-4 border-b border-zinc-200 bg-white px-4 py-2.5">
      <div className="flex items-center gap-3">
        <span className="text-sm font-bold text-zinc-900">Email Builder</span>
        <span className="h-5 w-px bg-zinc-200" />
        <button
          type="button"
          onClick={undo}
          disabled={past.length === 0}
          title="Desfazer (Ctrl+Z)"
          className={`${btn} text-zinc-700 hover:bg-zinc-100`}
        >
          ↶ Desfazer
        </button>
        <button
          type="button"
          onClick={redo}
          disabled={future.length === 0}
          title="Refazer (Ctrl+Shift+Z)"
          className={`${btn} text-zinc-700 hover:bg-zinc-100`}
        >
          ↷ Refazer
        </button>
      </div>

      <div className="flex items-center gap-1 rounded-lg bg-zinc-100 p-0.5">
        <button
          type="button"
          onClick={() => onViewChange("edit")}
          className={`${btn} ${
            view === "edit"
              ? "bg-white text-zinc-900 shadow-sm"
              : "text-zinc-600 hover:text-zinc-900"
          }`}
        >
          Editar
        </button>
        <button
          type="button"
          onClick={() => onViewChange("preview")}
          className={`${btn} ${
            view === "preview"
              ? "bg-white text-zinc-900 shadow-sm"
              : "text-zinc-600 hover:text-zinc-900"
          }`}
        >
          Preview
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onChangeTemplate}
          className={`${btn} text-zinc-700 hover:bg-zinc-100`}
        >
          Templates
        </button>
        <button
          type="button"
          onClick={exportHtml}
          disabled={isExporting || tree.length === 0}
          className={`${btn} bg-blue-600 text-white hover:bg-blue-700`}
        >
          {isExporting ? "Exportando…" : "⤓ Export HTML"}
        </button>
      </div>
    </header>
  );
}
