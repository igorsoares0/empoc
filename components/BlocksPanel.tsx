"use client";

import { useDraggable } from "@dnd-kit/core";
import type { NodeType } from "@/types/email";
import { BLOCK_LABELS, BLOCK_ICONS } from "@/lib/defaults";

type BlockGroup = {
  title: string;
  blocks: NodeType[];
};

const GROUPS: BlockGroup[] = [
  { title: "Estrutura", blocks: ["section", "column", "hero"] },
  { title: "Conteúdo", blocks: ["text", "button", "navbar"] },
  { title: "Mídia & espaço", blocks: ["image", "spacer", "divider"] },
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
      className={`group flex flex-col items-center justify-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-2 py-3 text-center text-[11px] font-medium text-zinc-600 transition-all hover:border-zinc-900 hover:text-zinc-900 hover:shadow-sm active:cursor-grabbing ${
        isDragging ? "opacity-40" : ""
      }`}
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-zinc-100 text-sm text-zinc-700 transition-colors group-hover:bg-zinc-900 group-hover:text-white">
        {BLOCK_ICONS[type]}
      </span>
      <span className="leading-tight">{BLOCK_LABELS[type]}</span>
    </button>
  );
}

export function BlocksPanel() {
  return (
    <aside className="flex h-full w-60 shrink-0 flex-col border-r border-zinc-200 bg-white">
      <div className="flex h-11 shrink-0 items-center border-b border-zinc-200 px-4">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.08em] text-zinc-400">
          Blocos
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto px-3 py-3">
        <div className="flex flex-col gap-5">
          {GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="mb-2 px-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-zinc-400">
                {group.title}
              </h3>
              <div className="grid grid-cols-2 gap-1.5">
                {group.blocks.map((type) => (
                  <PaletteItem key={type} type={type} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-zinc-200 px-4 py-3">
        <p className="text-[11px] leading-relaxed text-zinc-400">
          Arraste para o canvas. Seções no nível raiz; colunas dentro de seções.
        </p>
      </div>
    </aside>
  );
}
