"use client";

import { templates } from "@/templates";
import { useEditorStore } from "@/store/editorStore";

type Props = {
  onClose: () => void;
};

export function TemplatePicker({ onClose }: Props) {
  const setTree = useEditorStore((s) => s.setTree);

  function pick(templateId: string) {
    const template = templates.find((t) => t.id === templateId);
    if (template) {
      setTree(template.tree);
    }
    onClose();
  }

  function startBlank() {
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900/60 backdrop-blur-sm">
      <div className="mx-4 w-full max-w-3xl rounded-2xl bg-white p-8 shadow-2xl">
        <h1 className="text-2xl font-bold text-zinc-900">
          Escolha um ponto de partida
        </h1>
        <p className="mt-1 text-sm text-zinc-600">
          Comece com um template pronto ou monte do zero.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {templates.map((t) => (
            <button
              key={t.id}
              onClick={() => pick(t.id)}
              type="button"
              className="group flex flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white text-left transition-all hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-md"
            >
              <div
                className="flex h-32 items-center justify-center text-3xl"
                style={{ background: gradientForTemplate(t.id) }}
              >
                <span>{iconForTemplate(t.id)}</span>
              </div>
              <div className="flex flex-1 flex-col gap-1 p-3">
                <span className="text-xs uppercase tracking-wider text-zinc-500">
                  {t.category}
                </span>
                <span className="text-base font-semibold text-zinc-900 group-hover:text-blue-700">
                  {t.name}
                </span>
                <span className="text-xs text-zinc-500">{t.description}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-zinc-200 pt-5">
          <p className="text-xs text-zinc-500">
            Você pode trocar de template a qualquer momento.
          </p>
          <button
            type="button"
            onClick={startBlank}
            className="rounded-md border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
          >
            Começar em branco
          </button>
        </div>
      </div>
    </div>
  );
}

function gradientForTemplate(id: string): string {
  switch (id) {
    case "welcome":
      return "linear-gradient(135deg,#3b82f6,#1e3a8a)";
    case "newsletter":
      return "linear-gradient(135deg,#0f172a,#0ea5e9)";
    case "promotional":
      return "linear-gradient(135deg,#dc2626,#f97316)";
    case "thank-you":
      return "linear-gradient(135deg,#f4f1ec,#c9a979)";
    default:
      return "linear-gradient(135deg,#71717a,#27272a)";
  }
}

function iconForTemplate(id: string): string {
  switch (id) {
    case "welcome":
      return "👋";
    case "newsletter":
      return "📰";
    case "promotional":
      return "🎯";
    case "thank-you":
      return "🛍️";
    default:
      return "✉️";
  }
}
