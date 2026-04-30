import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { EmailNode, NodeId } from "@/types/email";
import {
  cloneNodeWithNewIds,
  cloneTree,
  findNode,
  insertNode,
  removeNode,
  updateNodeProps,
} from "@/lib/treeOps";

const HISTORY_CAP = 50;

type EditorState = {
  tree: EmailNode[];
  selectedId: NodeId | null;
  past: EmailNode[][];
  future: EmailNode[][];
  setTree: (tree: EmailNode[]) => void;
  addNode: (
    parentId: NodeId | null,
    node: EmailNode,
    index?: number,
  ) => void;
  updateNode: (id: NodeId, patch: Record<string, unknown>) => void;
  duplicateNode: (id: NodeId) => void;
  deleteNode: (id: NodeId) => void;
  moveNode: (
    id: NodeId,
    toParentId: NodeId | null,
    toIndex: number,
  ) => void;
  selectNode: (id: NodeId | null) => void;
  undo: () => void;
  redo: () => void;
  canUndo: () => boolean;
  canRedo: () => boolean;
  reset: () => void;
};

function pushHistory(state: EditorState): EmailNode[][] {
  const next = [...state.past, cloneTree(state.tree)];
  if (next.length > HISTORY_CAP) next.shift();
  return next;
}

export const useEditorStore = create<EditorState>()(
  persist(
    (set, get) => ({
      tree: [],
      selectedId: null,
      past: [],
      future: [],

      setTree: (tree) =>
        set((state) => ({
          past: pushHistory(state),
          future: [],
          tree: cloneTree(tree),
          selectedId: null,
        })),

      addNode: (parentId, node, index) =>
        set((state) => ({
          past: pushHistory(state),
          future: [],
          tree: insertNode(state.tree, parentId, node, index),
          selectedId: node.id,
        })),

      updateNode: (id, patch) =>
        set((state) => ({
          past: pushHistory(state),
          future: [],
          tree: updateNodeProps(state.tree, id, patch),
        })),

      duplicateNode: (id) =>
        set((state) => {
          const found = findNode(state.tree, id);
          if (!found) return state;
          const cloned = cloneNodeWithNewIds(found.node);
          const parentId = found.parent ? found.parent.id : null;
          return {
            past: pushHistory(state),
            future: [],
            tree: insertNode(state.tree, parentId, cloned, found.index + 1),
            selectedId: cloned.id,
          };
        }),

      deleteNode: (id) =>
        set((state) => ({
          past: pushHistory(state),
          future: [],
          tree: removeNode(state.tree, id),
          selectedId: state.selectedId === id ? null : state.selectedId,
        })),

      moveNode: (id, toParentId, toIndex) =>
        set((state) => {
          // find the node
          const findInTree = (
            tree: EmailNode[],
          ): EmailNode | null => {
            for (const n of tree) {
              if (n.id === id) return n;
              if (n.type === "section" || n.type === "column") {
                const found = findInTree(n.children);
                if (found) return found;
              }
            }
            return null;
          };
          const node = findInTree(state.tree);
          if (!node) return state;
          const detached = removeNode(state.tree, id);
          const inserted = insertNode(detached, toParentId, node, toIndex);
          return {
            past: pushHistory(state),
            future: [],
            tree: inserted,
            selectedId: id,
          };
        }),

      selectNode: (id) => set({ selectedId: id }),

      undo: () =>
        set((state) => {
          if (state.past.length === 0) return state;
          const previous = state.past[state.past.length - 1];
          const newPast = state.past.slice(0, -1);
          return {
            tree: previous,
            past: newPast,
            future: [cloneTree(state.tree), ...state.future].slice(
              0,
              HISTORY_CAP,
            ),
            selectedId: null,
          };
        }),

      redo: () =>
        set((state) => {
          if (state.future.length === 0) return state;
          const next = state.future[0];
          const newFuture = state.future.slice(1);
          return {
            tree: next,
            past: [...state.past, cloneTree(state.tree)].slice(-HISTORY_CAP),
            future: newFuture,
            selectedId: null,
          };
        }),

      canUndo: () => get().past.length > 0,
      canRedo: () => get().future.length > 0,

      reset: () => set({ tree: [], selectedId: null, past: [], future: [] }),
    }),
    {
      name: "empoc-editor",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ tree: state.tree }),
    },
  ),
);
