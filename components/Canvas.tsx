"use client";

import { useDroppable } from "@dnd-kit/core";
import { useEditorStore } from "@/store/editorStore";
import { CanvasNode, DropZone } from "./CanvasNode";

export function Canvas() {
  const tree = useEditorStore((s) => s.tree);
  const selectNode = useEditorStore((s) => s.selectNode);

  const { setNodeRef, isOver, active } = useDroppable({
    id: "container:root",
    data: { kind: "container", parentId: null, nodeType: "root" },
  });

  return (
    <main
      onClick={() => selectNode(null)}
      className="relative flex flex-1 flex-col overflow-hidden bg-zinc-100"
    >
      <div
        className="flex h-11 shrink-0 items-center justify-center border-b border-zinc-200 bg-white px-4 text-[11px] font-medium text-zinc-400"
      >
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Canvas · 600px
        </span>
      </div>
      <div className="flex flex-1 justify-center overflow-auto p-8">
        <div
          ref={setNodeRef}
          className={`relative h-fit w-[600px] max-w-full rounded-xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.08)] ring-1 ring-zinc-200 transition-all ${
            isOver && active ? "ring-2 ring-zinc-900" : ""
          }`}
          style={{ minHeight: "calc(100% - 1px)" }}
        >
          {tree.length === 0 ? (
            <EmptyState />
          ) : (
            <div>
              <DropZone parentId={null} index={0} />
              {tree.map((node, i) => (
                <div key={node.id}>
                  <CanvasNode node={node} />
                  <DropZone parentId={null} index={i + 1} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function EmptyState() {
  return (
    <div className="flex h-[480px] flex-col items-center justify-center gap-4 px-6 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-400">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium text-zinc-700">
          Comece arrastando uma seção
        </p>
        <p className="text-[12px] text-zinc-400">
          Ou escolha um template no menu superior.
        </p>
      </div>
    </div>
  );
}
