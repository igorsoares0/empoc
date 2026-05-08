"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { AppHeader } from "@/components/AppHeader";
import {
  addSubscriber,
  createList,
  deleteList,
  deleteSubscriber,
  renameList,
  toggleSubscriberList,
  updateSubscriberStatus,
  type ListRow,
  type SubscriberRow,
} from "@/app/actions/audience";

type Tab = "subscribers" | "lists";

const STATUS_LABEL: Record<SubscriberRow["status"], string> = {
  active: "Ativo",
  unsubscribed: "Descadastrado",
  bounced: "Bounce",
  complained: "Reclamado",
};

const STATUS_DOT: Record<SubscriberRow["status"], string> = {
  active: "bg-emerald-500",
  unsubscribed: "bg-zinc-300",
  bounced: "bg-amber-500",
  complained: "bg-red-500",
};

type Props = {
  initialSubscribers: SubscriberRow[];
  initialLists: ListRow[];
  userName: string;
  userEmail: string;
};

export function Audience({
  initialSubscribers,
  initialLists,
  userName,
  userEmail,
}: Props) {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("subscribers");
  const [subscribers, setSubscribers] =
    useState<SubscriberRow[]>(initialSubscribers);
  const [lists, setLists] = useState<ListRow[]>(initialLists);

  const stats = useMemo(
    () => ({
      total: subscribers.length,
      active: subscribers.filter((s) => s.status === "active").length,
      lists: lists.length,
    }),
    [subscribers, lists],
  );

  function refresh() {
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      <AppHeader userName={userName} userEmail={userEmail} />
      <main className="mx-auto w-full max-w-6xl px-6 py-10">
        <section className="mb-8 flex flex-col gap-2">
          <h1 className="text-[28px] font-semibold tracking-tight text-zinc-900">
            Audiência
          </h1>
          <p className="text-[15px] text-zinc-500">
            Gerencie seus inscritos e organize por lista.
          </p>
        </section>

        <section className="mb-8 grid grid-cols-3 gap-3">
          <Stat label="Inscritos" value={stats.total} />
          <Stat label="Ativos" value={stats.active} />
          <Stat label="Listas" value={stats.lists} />
        </section>

        <div className="mb-6 flex items-center gap-1 border-b border-zinc-200">
          <TabBtn
            active={tab === "subscribers"}
            onClick={() => setTab("subscribers")}
          >
            Inscritos
          </TabBtn>
          <TabBtn active={tab === "lists"} onClick={() => setTab("lists")}>
            Listas
          </TabBtn>
        </div>

        {tab === "subscribers" ? (
          <SubscribersTab
            subscribers={subscribers}
            lists={lists}
            setSubscribers={setSubscribers}
            onChange={refresh}
          />
        ) : (
          <ListsTab lists={lists} setLists={setLists} onChange={refresh} />
        )}
      </main>
    </div>
  );
}

function SubscribersTab({
  subscribers,
  lists,
  setSubscribers,
  onChange,
}: {
  subscribers: SubscriberRow[];
  lists: ListRow[];
  setSubscribers: React.Dispatch<React.SetStateAction<SubscriberRow[]>>;
  onChange: () => void;
}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return subscribers;
    const q = query.toLowerCase();
    return subscribers.filter(
      (s) =>
        s.email.toLowerCase().includes(q) ||
        (s.name?.toLowerCase().includes(q) ?? false),
    );
  }, [subscribers, query]);

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    const res = await addSubscriber({ email, name });
    setBusy(false);
    if (!res.ok) {
      setError(res.error);
      return;
    }
    setEmail("");
    setName("");
    onChange();
  }

  return (
    <div className="flex flex-col gap-6">
      <form
        onSubmit={handleAdd}
        className="flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-4 sm:flex-row sm:items-end"
      >
        <div className="flex-1">
          <label className="mb-1 block text-[11px] font-medium uppercase tracking-wide text-zinc-500">
            Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="contato@exemplo.com"
            className="h-9 w-full rounded-md border border-zinc-300 bg-white px-3 text-[13px] outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900"
          />
        </div>
        <div className="flex-1">
          <label className="mb-1 block text-[11px] font-medium uppercase tracking-wide text-zinc-500">
            Nome (opcional)
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome do inscrito"
            className="h-9 w-full rounded-md border border-zinc-300 bg-white px-3 text-[13px] outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900"
          />
        </div>
        <button
          type="submit"
          disabled={busy}
          className="h-9 rounded-md bg-zinc-900 px-4 text-[13px] font-medium text-white hover:bg-zinc-800 disabled:opacity-60"
        >
          {busy ? "Adicionando…" : "Adicionar"}
        </button>
      </form>
      {error && (
        <p className="rounded-md bg-red-50 px-3 py-2 text-xs text-red-700">
          {error}
        </p>
      )}

      <div className="flex items-center gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por email ou nome…"
          className="h-9 w-full max-w-xs rounded-md border border-zinc-200 bg-white px-3 text-[13px] outline-none focus:border-zinc-400 focus:ring-2 focus:ring-zinc-100"
        />
        <span className="text-[12px] text-zinc-500">
          {filtered.length} de {subscribers.length}
        </span>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-zinc-200 bg-white py-16 text-center text-[13px] text-zinc-500">
          {subscribers.length === 0
            ? "Você ainda não tem inscritos. Adicione o primeiro acima."
            : "Nenhum inscrito corresponde à busca."}
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50 text-left text-[11px] font-medium uppercase tracking-wide text-zinc-500">
                <th className="px-4 py-2.5">Email</th>
                <th className="px-4 py-2.5">Nome</th>
                <th className="px-4 py-2.5">Status</th>
                <th className="px-4 py-2.5">Listas</th>
                <th className="w-1 px-4 py-2.5"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((s) => (
                <SubscriberRow
                  key={s.id}
                  subscriber={s}
                  allLists={lists}
                  setSubscribers={setSubscribers}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function SubscriberRow({
  subscriber,
  allLists,
  setSubscribers,
}: {
  subscriber: SubscriberRow;
  allLists: ListRow[];
  setSubscribers: React.Dispatch<React.SetStateAction<SubscriberRow[]>>;
}) {
  const [open, setOpen] = useState(false);
  const [, startTransition] = useTransition();

  function toggleStatus() {
    const next: SubscriberRow["status"] =
      subscriber.status === "active" ? "unsubscribed" : "active";
    setSubscribers((prev) =>
      prev.map((s) => (s.id === subscriber.id ? { ...s, status: next } : s)),
    );
    startTransition(async () => {
      await updateSubscriberStatus(subscriber.id, next);
    });
  }

  function onDelete() {
    if (!confirm(`Remover ${subscriber.email}?`)) return;
    setSubscribers((prev) => prev.filter((s) => s.id !== subscriber.id));
    startTransition(async () => {
      await deleteSubscriber(subscriber.id);
    });
  }

  function toggleList(listId: string, listName: string, attached: boolean) {
    setSubscribers((prev) =>
      prev.map((s) => {
        if (s.id !== subscriber.id) return s;
        return {
          ...s,
          lists: attached
            ? s.lists.filter((l) => l.id !== listId)
            : [...s.lists, { id: listId, name: listName }],
        };
      }),
    );
    startTransition(async () => {
      await toggleSubscriberList(subscriber.id, listId, !attached);
    });
  }

  return (
    <tr className="border-b border-zinc-100 last:border-b-0">
      <td className="px-4 py-3 text-zinc-900">{subscriber.email}</td>
      <td className="px-4 py-3 text-zinc-700">{subscriber.name ?? "—"}</td>
      <td className="px-4 py-3">
        <button
          type="button"
          onClick={toggleStatus}
          className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-2 py-0.5 text-[11px] text-zinc-600 hover:border-zinc-300"
          title="Alternar status"
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[subscriber.status]}`}
          />
          {STATUS_LABEL[subscriber.status]}
        </button>
      </td>
      <td className="px-4 py-3">
        <div className="flex flex-wrap items-center gap-1">
          {subscriber.lists.map((l) => (
            <span
              key={l.id}
              className="inline-flex items-center rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-700"
            >
              {l.name}
            </span>
          ))}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-dashed border-zinc-300 text-[11px] text-zinc-500 hover:border-zinc-400 hover:text-zinc-700"
              aria-label="Gerenciar listas"
            >
              +
            </button>
            {open && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setOpen(false)}
                />
                <div className="absolute left-0 z-20 mt-1 w-56 rounded-md border border-zinc-200 bg-white p-1 shadow-lg">
                  {allLists.length === 0 ? (
                    <p className="px-2 py-1.5 text-[12px] text-zinc-500">
                      Nenhuma lista. Crie uma na aba Listas.
                    </p>
                  ) : (
                    allLists.map((l) => {
                      const attached = subscriber.lists.some(
                        (x) => x.id === l.id,
                      );
                      return (
                        <button
                          key={l.id}
                          type="button"
                          onClick={() => {
                            toggleList(l.id, l.name, attached);
                            setOpen(false);
                          }}
                          className="flex w-full items-center justify-between rounded px-2 py-1.5 text-left text-[12px] text-zinc-700 hover:bg-zinc-50"
                        >
                          <span>{l.name}</span>
                          {attached && (
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </button>
                      );
                    })
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </td>
      <td className="px-4 py-3">
        <button
          type="button"
          onClick={onDelete}
          className="text-zinc-400 hover:text-red-600"
          title="Remover"
          aria-label="Remover"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6" />
            <path d="M10 11v6M14 11v6" />
          </svg>
        </button>
      </td>
    </tr>
  );
}

function ListsTab({
  lists,
  setLists,
  onChange,
}: {
  lists: ListRow[];
  setLists: React.Dispatch<React.SetStateAction<ListRow[]>>;
  onChange: () => void;
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [busy, setBusy] = useState(false);
  const [, startTransition] = useTransition();

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    setBusy(true);
    await createList({ name, description });
    setBusy(false);
    setName("");
    setDescription("");
    onChange();
  }

  function onRename(id: string, newName: string) {
    setLists((prev) =>
      prev.map((l) => (l.id === id ? { ...l, name: newName } : l)),
    );
    startTransition(async () => {
      await renameList(id, newName);
    });
  }

  function onDelete(id: string, listName: string) {
    if (!confirm(`Excluir lista "${listName}"?`)) return;
    setLists((prev) => prev.filter((l) => l.id !== id));
    startTransition(async () => {
      await deleteList(id);
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <form
        onSubmit={handleCreate}
        className="flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-4 sm:flex-row sm:items-end"
      >
        <div className="flex-1">
          <label className="mb-1 block text-[11px] font-medium uppercase tracking-wide text-zinc-500">
            Nome da lista
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ex: Newsletter mensal"
            className="h-9 w-full rounded-md border border-zinc-300 bg-white px-3 text-[13px] outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900"
          />
        </div>
        <div className="flex-1">
          <label className="mb-1 block text-[11px] font-medium uppercase tracking-wide text-zinc-500">
            Descrição (opcional)
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Para que serve esta lista?"
            className="h-9 w-full rounded-md border border-zinc-300 bg-white px-3 text-[13px] outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900"
          />
        </div>
        <button
          type="submit"
          disabled={busy}
          className="h-9 rounded-md bg-zinc-900 px-4 text-[13px] font-medium text-white hover:bg-zinc-800 disabled:opacity-60"
        >
          {busy ? "Criando…" : "Criar lista"}
        </button>
      </form>

      {lists.length === 0 ? (
        <div className="rounded-xl border border-dashed border-zinc-200 bg-white py-16 text-center text-[13px] text-zinc-500">
          Você ainda não criou listas. Use o formulário acima.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {lists.map((l) => (
            <ListCard
              key={l.id}
              list={l}
              onRename={(name) => onRename(l.id, name)}
              onDelete={() => onDelete(l.id, l.name)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ListCard({
  list,
  onRename,
  onDelete,
}: {
  list: ListRow;
  onRename: (name: string) => void;
  onDelete: () => void;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(list.name);

  function commit() {
    setEditing(false);
    const trimmed = draft.trim();
    if (trimmed && trimmed !== list.name) onRename(trimmed);
    else setDraft(list.name);
  }

  return (
    <div className="group flex flex-col gap-2 rounded-xl border border-zinc-200 bg-white p-4 hover:border-zinc-300">
      <div className="flex items-start justify-between gap-2">
        {editing ? (
          <input
            type="text"
            autoFocus
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onBlur={commit}
            onKeyDown={(e) => {
              if (e.key === "Enter") commit();
              if (e.key === "Escape") {
                setDraft(list.name);
                setEditing(false);
              }
            }}
            className="flex-1 rounded border border-zinc-300 bg-white px-1.5 py-0.5 text-[14px] font-semibold text-zinc-900 outline-none focus:border-zinc-500"
          />
        ) : (
          <button
            type="button"
            onClick={() => setEditing(true)}
            className="text-left text-[14px] font-semibold text-zinc-900 hover:underline"
          >
            {list.name}
          </button>
        )}
        <button
          type="button"
          onClick={onDelete}
          className="text-zinc-400 opacity-0 transition-opacity hover:text-red-600 group-hover:opacity-100"
          aria-label="Excluir lista"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6" />
            <path d="M10 11v6M14 11v6" />
          </svg>
        </button>
      </div>
      {list.description && (
        <p className="text-[12px] text-zinc-500">{list.description}</p>
      )}
      <div className="text-[11px] text-zinc-400">
        {list.subscriberCount}{" "}
        {list.subscriberCount === 1 ? "inscrito" : "inscritos"}
      </div>
    </div>
  );
}

function TabBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`-mb-px border-b-2 px-4 py-2 text-[13px] font-medium transition-colors ${
        active
          ? "border-zinc-900 text-zinc-900"
          : "border-transparent text-zinc-500 hover:text-zinc-800"
      }`}
    >
      {children}
    </button>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white px-5 py-4">
      <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-zinc-400">
        {label}
      </div>
      <div className="mt-1 text-[26px] font-semibold tracking-tight text-zinc-900">
        {value}
      </div>
    </div>
  );
}
