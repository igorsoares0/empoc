"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import { useEditorStore } from "@/store/editorStore";
import { canBeRoot, canContain, findNode } from "@/lib/treeOps";
import { createNode, BLOCK_LABELS } from "@/lib/defaults";
import type { NodeType } from "@/types/email";
import { BlocksPanel } from "./BlocksPanel";
import { Canvas } from "./Canvas";
import { PropertiesPanel } from "./PropertiesPanel";
import { Preview } from "./Preview";
import { Toolbar } from "./Toolbar";
import { TemplatePicker } from "./TemplatePicker";

export function Editor() {
  const tree = useEditorStore((s) => s.tree);
  const addNode = useEditorStore((s) => s.addNode);
  const moveNode = useEditorStore((s) => s.moveNode);
  const undo = useEditorStore((s) => s.undo);
  const redo = useEditorStore((s) => s.redo);
  const past = useEditorStore((s) => s.past);
  const future = useEditorStore((s) => s.future);

  const [view, setView] = useState<"edit" | "preview">("edit");
  const [pickerDismissed, setPickerDismissed] = useState(false);
  const [activeDrag, setActiveDrag] = useState<{
    label: string;
  } | null>(null);

  const hydrated = useSyncExternalStore(
    (cb) => useEditorStore.persist.onFinishHydration(cb),
    () => useEditorStore.persist.hasHydrated(),
    () => false,
  );

  const showTemplatePicker =
    hydrated && tree.length === 0 && !pickerDismissed;

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const cmd = e.ctrlKey || e.metaKey;
      if (!cmd) return;
      if (e.key === "z" && !e.shiftKey) {
        if (past.length > 0) {
          e.preventDefault();
          undo();
        }
      } else if ((e.key === "z" && e.shiftKey) || e.key === "y") {
        if (future.length > 0) {
          e.preventDefault();
          redo();
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [undo, redo, past.length, future.length]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
  );

  function handleDragStart(event: DragStartEvent) {
    const data = event.active.data.current as
      | { source: "palette"; nodeType: NodeType }
      | { source: "tree"; nodeType: NodeType }
      | undefined;
    if (data) setActiveDrag({ label: BLOCK_LABELS[data.nodeType] });
  }

  function handleDragEnd(event: DragEndEvent) {
    setActiveDrag(null);
    const { active, over } = event;
    if (!over) return;

    const activeData = active.data.current as
      | {
          source: "palette" | "tree";
          nodeType: NodeType;
          nodeId?: string;
        }
      | undefined;
    const overData = over.data.current as
      | {
          kind: "container" | "between";
          parentId: string | null;
          nodeType?: NodeType | "root";
          index?: number;
        }
      | undefined;
    if (!activeData || !overData) return;

    // Determine target parent type
    let parentType: NodeType | "root" = "root";
    if (overData.kind === "container") {
      parentType = overData.nodeType ?? "root";
    } else if (overData.parentId === null) {
      parentType = "root";
    } else {
      const found = findNode(tree, overData.parentId);
      parentType = found?.node.type ?? "root";
    }

    const childType = activeData.nodeType;

    // Validation
    const validRoot = parentType === "root" && canBeRoot(childType);
    const validContainer =
      (parentType === "section" || parentType === "column") &&
      canContain(parentType, childType);
    if (!validRoot && !validContainer) return;

    const targetParentId =
      overData.kind === "container" && overData.parentId !== null
        ? overData.parentId
        : overData.parentId; // null for root, or parentId for between
    const targetIndex = overData.kind === "between" ? overData.index : undefined;

    if (activeData.source === "palette") {
      addNode(targetParentId, createNode(childType), targetIndex);
    } else if (activeData.source === "tree" && activeData.nodeId) {
      // Avoid moving onto self/descendant
      if (targetParentId === activeData.nodeId) return;
      moveNode(activeData.nodeId, targetParentId, targetIndex ?? 0);
    }
  }

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={() => setActiveDrag(null)}
    >
      <div className="flex h-screen flex-col bg-white">
        <Toolbar
          view={view}
          onViewChange={setView}
          onChangeTemplate={() => setPickerDismissed(false)}
        />
        <div className="flex flex-1 overflow-hidden">
          {view === "edit" ? <BlocksPanel /> : null}
          {view === "edit" ? <Canvas /> : <Preview />}
          {view === "edit" ? <PropertiesPanel /> : null}
        </div>
      </div>
      <DragOverlay>
        {activeDrag ? (
          <div className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white shadow-lg">
            {activeDrag.label}
          </div>
        ) : null}
      </DragOverlay>
      {showTemplatePicker ? (
        <TemplatePicker onClose={() => setPickerDismissed(true)} />
      ) : null}
    </DndContext>
  );
}
