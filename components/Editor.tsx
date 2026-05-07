"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
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
import { useProjectsStore } from "@/store/projectsStore";
import { canBeRoot, canContain, findNode } from "@/lib/treeOps";
import { createNode, BLOCK_LABELS } from "@/lib/defaults";
import type { NodeType } from "@/types/email";
import { BlocksPanel } from "./BlocksPanel";
import { Canvas } from "./Canvas";
import { PropertiesPanel } from "./PropertiesPanel";
import { Preview } from "./Preview";
import { Toolbar } from "./Toolbar";
import { TemplatePicker } from "./TemplatePicker";
import { EditorFonts } from "./EditorFonts";

export function Editor({ projectId }: { projectId: string }) {
  const router = useRouter();
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

  const project = useProjectsStore((s) =>
    s.projects.find((p) => p.id === projectId),
  );
  const updateProjectTree = useProjectsStore((s) => s.updateProjectTree);
  const renameProject = useProjectsStore((s) => s.renameProject);

  const [view, setView] = useState<"edit" | "preview">("edit");
  const [showPicker, setShowPicker] = useState(false);
  const [activeDrag, setActiveDrag] = useState<{ label: string } | null>(null);
  const [hydrated, setHydrated] = useState(false);

  const hydratedForRef = useRef<string | null>(null);

  // Hydrate editor store from project on mount or projectId change
  useEffect(() => {
    if (!project) return;
    if (hydratedForRef.current === projectId) return;
    hydratedForRef.current = projectId;
    loadTree(project.tree);
    setHydrated(true);
  }, [projectId, project, loadTree]);

  // Redirect to dashboard if project doesn't exist (after stores hydrate)
  useEffect(() => {
    const unsub = useProjectsStore.persist.onFinishHydration(() => {
      const exists = useProjectsStore
        .getState()
        .projects.some((p) => p.id === projectId);
      if (!exists) router.replace("/");
    });
    if (useProjectsStore.persist.hasHydrated()) {
      const exists = useProjectsStore
        .getState()
        .projects.some((p) => p.id === projectId);
      if (!exists) router.replace("/");
    }
    return unsub;
  }, [projectId, router]);

  // Sync tree changes back to project (debounced)
  useEffect(() => {
    if (!hydrated || hydratedForRef.current !== projectId) return;
    const t = setTimeout(() => {
      updateProjectTree(projectId, tree);
    }, 400);
    return () => clearTimeout(t);
  }, [tree, projectId, hydrated, updateProjectTree]);

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
          projectName={project?.name ?? "Carregando…"}
          onRenameProject={(name) => renameProject(projectId, name)}
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
