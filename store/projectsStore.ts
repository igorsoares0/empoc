import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { nanoid } from "nanoid";
import type { EmailNode } from "@/types/email";
import { cloneTree } from "@/lib/treeOps";

export type Project = {
  id: string;
  name: string;
  templateId: string | null;
  tree: EmailNode[];
  createdAt: number;
  updatedAt: number;
};

type ProjectsState = {
  projects: Project[];
  createProject: (input?: {
    name?: string;
    templateId?: string | null;
    tree?: EmailNode[];
  }) => string;
  updateProjectTree: (id: string, tree: EmailNode[]) => void;
  renameProject: (id: string, name: string) => void;
  deleteProject: (id: string) => void;
  duplicateProject: (id: string) => string | null;
  getProject: (id: string) => Project | undefined;
};

export const useProjectsStore = create<ProjectsState>()(
  persist(
    (set, get) => ({
      projects: [],

      createProject: (input) => {
        const id = nanoid(10);
        const now = Date.now();
        const project: Project = {
          id,
          name: input?.name ?? "Email sem título",
          templateId: input?.templateId ?? null,
          tree: input?.tree ? cloneTree(input.tree) : [],
          createdAt: now,
          updatedAt: now,
        };
        set((s) => ({ projects: [project, ...s.projects] }));
        return id;
      },

      updateProjectTree: (id, tree) =>
        set((s) => ({
          projects: s.projects.map((p) =>
            p.id === id
              ? { ...p, tree: cloneTree(tree), updatedAt: Date.now() }
              : p,
          ),
        })),

      renameProject: (id, name) =>
        set((s) => ({
          projects: s.projects.map((p) =>
            p.id === id ? { ...p, name, updatedAt: Date.now() } : p,
          ),
        })),

      deleteProject: (id) =>
        set((s) => ({ projects: s.projects.filter((p) => p.id !== id) })),

      duplicateProject: (id) => {
        const source = get().projects.find((p) => p.id === id);
        if (!source) return null;
        const newId = nanoid(10);
        const now = Date.now();
        const copy: Project = {
          ...source,
          id: newId,
          name: `Cópia de ${source.name}`,
          tree: cloneTree(source.tree),
          createdAt: now,
          updatedAt: now,
        };
        set((s) => ({ projects: [copy, ...s.projects] }));
        return newId;
      },

      getProject: (id) => get().projects.find((p) => p.id === id),
    }),
    {
      name: "empoc-projects",
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({ projects: s.projects }),
    },
  ),
);
