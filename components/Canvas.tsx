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
      className="flex flex-1 justify-center overflow-auto bg-zinc-100 p-8"
    >
      <div
        ref={setNodeRef}
        className={`relative w-full max-w-2xl rounded-lg bg-white shadow-sm ring-1 ring-zinc-200 transition-all ${
          isOver && active ? "ring-2 ring-blue-500" : ""
        }`}
        style={{ minHeight: "100%" }}
      >
        {tree.length === 0 ? (
          <div className="flex h-96 flex-col items-center justify-center gap-2 text-center text-sm text-zinc-400">
            <div className="text-4xl">✉️</div>
            <p>Arraste uma seção para começar</p>
          </div>
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
    </main>
  );
}
