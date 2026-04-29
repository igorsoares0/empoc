"use client";

import { useDraggable } from "@dnd-kit/core";
import type { NodeType } from "@/types/email";
import { BLOCK_LABELS, BLOCK_ICONS } from "@/lib/defaults";

const BLOCKS: NodeType[] = [
  "section",
  "column",
  "text",
  "image",
  "button",
  "spacer",
  "divider",
  "navbar",
];

function PaletteItem({ type }: { type: NodeType }) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `palette:${type}`,
    data: { source: "palette", nodeType: type },
  });

  return (
    <button
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      type="button"
      className={`flex w-full items-center gap-3 rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-left text-sm font-medium text-zinc-700 transition-all hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 active:cursor-grabbing ${
        isDragging ? "opacity-40" : ""
      }`}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-100 text-base text-zinc-600">
        {BLOCK_ICONS[type]}
      </span>
      <span>{BLOCK_LABELS[type]}</span>
    </button>
  );
}

export function BlocksPanel() {
  return (
    <aside className="flex h-full w-60 flex-col border-r border-zinc-200 bg-zinc-50 p-4">
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
        Blocos
      </h2>
      <div className="flex flex-col gap-2">
        {BLOCKS.map((type) => (
          <PaletteItem key={type} type={type} />
        ))}
      </div>
      <p className="mt-auto text-xs leading-relaxed text-zinc-500">
        Arraste para o canvas. Seções no nível raiz; colunas dentro de seções; texto, imagem e botão dentro de colunas.
      </p>
    </aside>
  );
}
