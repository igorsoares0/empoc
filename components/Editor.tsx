"use client";

import { useEffect, useRef, useState } from "react";
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
import {
  renameProject,
  updateProjectTree,
  type ProjectFull,
} from "@/app/actions/projects";
import { BlocksPanel } from "./BlocksPanel";
import { Canvas } from "./Canvas";
import { PropertiesPanel } from "./PropertiesPanel";
import { Preview } from "./Preview";
import { Toolbar } from "./Toolbar";
import { TemplatePicker } from "./TemplatePicker";
import { EditorFonts } from "./EditorFonts";

export function Editor({ project }: { project: ProjectFull }) {
  const tree = useEditorStore((s) => s.tree);
  const addNode = useEditorStore((s) => s.addNode);
  const moveNode = useEditorStore((s) => s.moveNode);
  const duplicateNode = useEditorStore((s) => s.duplicateNode);
  const selectedId = useEditorStore((s) => s.selectedId);
  const undo = useEditorStore((s) => s.undo);
  const redo = useEditorStore((s) => s.redo);
  const past = useEditorStore((s) => s.past);
  const future = useEditorStore((s) => s.future);
  const loadTree = useEditorStore((s) => s.loadTree);

  const [view, setView] = useState<"edit" | "preview">("edit");
  const [showPicker, setShowPicker] = useState(false);
  const [activeDrag, setActiveDrag] = useState<{ label: string } | null>(null);
  const [projectName, setProjectName] = useState(project.name);
  const [hydrated, setHydrated] = useState(false);

  const hydratedForRef = useRef<string | null>(null);
  const lastSavedRef = useRef<string>("");

  useEffect(() => {
    if (hydratedForRef.current === project.id) return;
    hydratedForRef.current = project.id;
    loadTree(project.tree);
    lastSavedRef.current = JSON.stringify(project.tree);
    setHydrated(true);
  }, [project.id, project.tree, loadTree]);

  useEffect(() => {
    if (!hydrated || hydratedForRef.current !== project.id) return;
    const t = setTimeout(() => {
      const serialized = JSON.stringify(tree);
      if (serialized === lastSavedRef.current) return;
      lastSavedRef.current = serialized;
      updateProjectTree(project.id, tree).catch(() => {
        // swallow — user will see staleness on next reload; could surface a toast
      });
    }, 600);
    return () => clearTimeout(t);
  }, [tree, project.id, hydrated]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const cmd = e.ctrlKey || e.metaKey;
      if (!cmd) return;
      const target = e.target as HTMLElement | null;
      const isEditing =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable;
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
      } else if (e.key === "d" && !isEditing) {
        if (selectedId) {
          e.preventDefault();
          duplicateNode(selectedId);
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [undo, redo, duplicateNode, past.length, future.length, selectedId]);

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
    const validRoot = parentType === "root" && canBeRoot(childType);
    const validContainer =
      (parentType === "section" ||
        parentType === "column" ||
        parentType === "hero") &&
      canContain(parentType, childType);
    if (!validRoot && !validContainer) return;

    const targetParentId = overData.parentId;
    const targetIndex = overData.kind === "between" ? overData.index : undefined;

    if (activeData.source === "palette") {
      addNode(targetParentId, createNode(childType), targetIndex);
    } else if (activeData.source === "tree" && activeData.nodeId) {
      if (targetParentId === activeData.nodeId) return;
      moveNode(activeData.nodeId, targetParentId, targetIndex ?? 0);
    }
  }

  function handleRename(name: string) {
    const trimmed = name.trim();
    if (!trimmed || trimmed === projectName) return;
    setProjectName(trimmed);
    renameProject(project.id, trimmed).catch(() => {
      setProjectName(projectName);
    });
  }

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={() => setActiveDrag(null)}
    >
      <EditorFonts />
      <div className="flex h-screen flex-col bg-white">
        <Toolbar
          view={view}
          onViewChange={setView}
          onChangeTemplate={() => setShowPicker(true)}
          projectName={projectName}
          onRenameProject={handleRename}
        />
        <div className="flex flex-1 overflow-hidden">
          {view === "edit" ? <BlocksPanel /> : null}
          {view === "edit" ? <Canvas /> : <Preview />}
          {view === "edit" ? <PropertiesPanel /> : null}
        </div>
      </div>
      <DragOverlay>
        {activeDrag ? (
          <div className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm font-medium text-white shadow-lg">
            {activeDrag.label}
          </div>
        ) : null}
      </DragOverlay>
      {showPicker ? (
        <TemplatePicker onClose={() => setShowPicker(false)} />
      ) : null}
    </DndContext>
  );
}
