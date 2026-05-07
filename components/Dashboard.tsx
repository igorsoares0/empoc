"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import { templates } from "@/templates";
import { useProjectsStore } from "@/store/projectsStore";
import { gradientForTemplate, iconForTemplate } from "@/lib/templateVisuals";

const CATEGORIES = ["Todos", ...new Set(templates.map((t) => t.category))];

export function Dashboard() {
  const router = useRouter();
  const projects = useProjectsStore((s) => s.projects);
  const createProject = useProjectsStore((s) => s.createProject);
  const deleteProject = useProjectsStore((s) => s.deleteProject);
  const duplicateProject = useProjectsStore((s) => s.duplicateProject);
  const renameProject = useProjectsStore((s) => s.renameProject);

  const [category, setCategory] = useState<string>("Todos");
  const [query, setQuery] = useState("");

  const hydrated = useSyncExternalStore(
    (cb) => useProjectsStore.persist.onFinishHydration(cb),
    () => useProjectsStore.persist.hasHydrated(),
    () => false,
  );

  const visibleTemplates = useMemo(() => {
    return templates.filter((t) => {
      if (category !== "Todos" && t.category !== category) return false;
      if (query.trim()) {
        const q = query.toLowerCase();
        if (
          !t.name.toLowerCase().includes(q) &&
          !t.description.toLowerCase().includes(q)
        )
          return false;
      }
      return true;
    });
  }, [category, query]);

  const sortedProjects = useMemo(
    () => [...projects].sort((a, b) => b.updatedAt - a.updatedAt),
    [projects],
  );

  function openBlank() {
    const id = createProject({ name: "Email sem título" });
    router.push(`/editor/${id}`);
  }

  function openTemplate(templateId: string) {
    const template = templates.find((t) => t.id === templateId);
    if (!template) return;
    const id = createProject({
      name: template.name,
      templateId: template.id,
      tree: template.tree,
    });
    router.push(`/editor/${id}`);
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      <DashboardHeader onNew={openBlank} />

      <main className="mx-auto w-full max-w-6xl px-6 py-10">
        <section className="mb-10 flex flex-col gap-2">
          <h1 className="text-[28px] font-semibold tracking-tight text-zinc-900">
            Bem-vinda de volta.
          </h1>
          <p className="text-[15px] text-zinc-500">
            Continue de onde parou ou comece algo novo a partir de um template.
          </p>
        </section>

        <section className="mb-10 grid grid-cols-3 gap-3">
          <Stat
            label="Seus emails"
            value={hydrated ? sortedProjects.length : "—"}
          />
          <Stat label="Templates" value={templates.length} />
          <Stat
            label="Última edição"
            value={
              hydrated && sortedProjects[0]
                ? formatRelative(sortedProjects[0].updatedAt)
                : "—"
            }
            small
          />
        </section>

        <section className="mb-12">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-[18px] font-semibold text-zinc-900">
              Seus emails
            </h2>
            <button
              type="button"
              onClick={openBlank}
              className="inline-flex items-center gap-1.5 rounded-md bg-zinc-900 px-3 py-1.5 text-[13px] font-medium text-white transition-colors hover:bg-zinc-800"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
              Novo email
            </button>
          </div>

          {!hydrated ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="h-[200px] animate-pulse rounded-xl bg-white ring-1 ring-zinc-200"
                />
              ))}
            </div>
          ) : sortedProjects.length === 0 ? (
            <EmptyProjects onNew={openBlank} />
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sortedProjects.map((p) => (
                <ProjectCard
                  key={p.id}
                  project={p}
                  onOpen={() => router.push(`/editor/${p.id}`)}
                  onRename={(name) => renameProject(p.id, name)}
                  onDuplicate={() => {
                    const newId = duplicateProject(p.id);
                    if (newId) router.push(`/editor/${newId}`);
                  }}
                  onDelete={() => {
                    if (confirm(`Excluir "${p.name}"?`)) deleteProject(p.id);
                  }}
                />
              ))}
            </div>
          )}
        </section>

        <section>
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-[18px] font-semibold text-zinc-900">
              Templates
            </h2>
            <div className="relative w-full max-w-xs">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar template…"
                className="w-full rounded-md border border-zinc-200 bg-white py-1.5 pl-8 pr-3 text-[13px] text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-2 focus:ring-zinc-100"
              />
            </div>
          </div>

          <div className="mb-4 flex flex-wrap gap-1.5">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={`rounded-full border px-3 py-1 text-[12px] font-medium transition-colors ${
                  category === c
                    ? "border-zinc-900 bg-zinc-900 text-white"
                    : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:text-zinc-900"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {visibleTemplates.length === 0 ? (
            <p className="rounded-lg border border-dashed border-zinc-200 bg-white py-12 text-center text-sm text-zinc-400">
              Nenhum template encontrado.
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {visibleTemplates.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => openTemplate(t.id)}
                  className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white text-left transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
                >
                  <div
                    className="flex h-28 items-center justify-center text-3xl"
                    style={{ background: gradientForTemplate(t.id) }}
                  >
                    <span>{iconForTemplate(t.id)}</span>
                  </div>
                  <div className="flex flex-1 flex-col gap-0.5 p-3">
                    <span className="text-[10px] font-medium uppercase tracking-[0.06em] text-zinc-400">
                      {t.category}
                    </span>
                    <span className="text-[14px] font-semibold text-zinc-900">
                      {t.name}
                    </span>
                    <span className="line-clamp-2 text-[12px] text-zinc-500">
                      {t.description}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </section>

        <footer className="mt-16 border-t border-zinc-200 pt-6 pb-12 text-center text-[12px] text-zinc-400">
          empoc · email builder · v0.1
        </footer>
      </main>
    </div>
  );
}

function DashboardHeader({ onNew }: { onNew: () => void }) {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-zinc-900 text-[12px] font-bold text-white">
            e
          </div>
          <span className="text-[15px] font-semibold tracking-tight text-zinc-900">
            empoc
          </span>
          <span className="ml-1 rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-zinc-500">
            beta
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onNew}
            className="inline-flex items-center gap-1.5 rounded-md bg-zinc-900 px-3 py-1.5 text-[13px] font-medium text-white transition-colors hover:bg-zinc-800"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
            Novo email
          </button>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-[12px] font-semibold text-zinc-600">
            I
          </div>
        </div>
      </div>
    </header>
  );
}

function Stat({
  label,
  value,
  small,
}: {
  label: string;
  value: string | number;
  small?: boolean;
}) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white px-5 py-4">
      <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-zinc-400">
        {label}
      </div>
      <div
        className={`mt-1 font-semibold tracking-tight text-zinc-900 ${
          small ? "text-[18px]" : "text-[26px]"
        }`}
      >
        {value}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  onOpen,
  onRename,
  onDuplicate,
  onDelete,
}: {
  project: { id: string; name: string; templateId: string | null; updatedAt: number };
  onOpen: () => void;
  onRename: (name: string) => void;
  onDuplicate: () => void;
  onDelete: () => void;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(project.name);

  function commitRename() {
    setEditing(false);
    const trimmed = draft.trim();
    if (trimmed && trimmed !== project.name) onRename(trimmed);
    else setDraft(project.name);
  }

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all hover:border-zinc-300 hover:shadow-md">
      <button
        type="button"
        onClick={onOpen}
        className="flex h-32 cursor-pointer items-center justify-center text-3xl"
        style={{
          background: gradientForTemplate(project.templateId ?? "default"),
        }}
        aria-label={`Abrir ${project.name}`}
      >
        <span>{iconForTemplate(project.templateId ?? "default")}</span>
      </button>
      <div className="flex flex-1 flex-col gap-1 p-3">
        {editing ? (
          <input
            type="text"
            autoFocus
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onBlur={commitRename}
            onKeyDown={(e) => {
              if (e.key === "Enter") commitRename();
              if (e.key === "Escape") {
                setDraft(project.name);
                setEditing(false);
              }
            }}
            className="rounded border border-zinc-300 bg-white px-1.5 py-0.5 text-[14px] font-semibold text-zinc-900 outline-none focus:border-zinc-500"
          />
        ) : (
          <button
            type="button"
            onClick={() => setEditing(true)}
            className="text-left text-[14px] font-semibold text-zinc-900 hover:underline"
          >
            {project.name}
          </button>
        )}
        <div className="flex items-center justify-between text-[11px] text-zinc-400">
          <span>Editado {formatRelative(project.updatedAt)}</span>
          <div className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
            <IconButton onClick={onDuplicate} label="Duplicar">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            </IconButton>
            <IconButton onClick={onDelete} label="Excluir" danger>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6" />
                <path d="M10 11v6M14 11v6" />
              </svg>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconButton({
  onClick,
  label,
  danger,
  children,
}: {
  onClick: () => void;
  label: string;
  danger?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={label}
      aria-label={label}
      className={`flex h-6 w-6 items-center justify-center rounded transition-colors ${
        danger
          ? "text-zinc-400 hover:bg-red-50 hover:text-red-600"
          : "text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700"
      }`}
    >
      {children}
    </button>
  );
}

function EmptyProjects({ onNew }: { onNew: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-zinc-200 bg-white py-16 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      </div>
      <p className="mt-3 text-[14px] font-medium text-zinc-700">
        Você ainda não tem emails salvos.
      </p>
      <p className="mt-1 text-[12px] text-zinc-500">
        Comece em branco ou escolha um template abaixo.
      </p>
      <button
        type="button"
        onClick={onNew}
        className="mt-4 inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-[13px] font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-50"
      >
        + Novo email em branco
      </button>
    </div>
  );
}

function formatRelative(timestamp: number): string {
  const diff = Date.now() - timestamp;
  const minutes = Math.floor(diff / 60_000);
  if (minutes < 1) return "agora";
  if (minutes < 60) return `há ${minutes} min`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `há ${hours} h`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `há ${days} d`;
  return new Date(timestamp).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
  });
}
