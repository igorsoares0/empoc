"use client";

import { nanoid } from "nanoid";
import { useEditorStore } from "@/store/editorStore";
import { findNode } from "@/lib/treeOps";
import { BLOCK_LABELS } from "@/lib/defaults";
import { FONTS } from "@/lib/fonts";
import type { EmailNode, NavbarLink } from "@/types/email";

function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-zinc-600">
        {label}
      </span>
      {children}
      {hint ? (
        <span className="mt-1 block text-[11px] text-zinc-400">{hint}</span>
      ) : null}
    </label>
  );
}

const inputClass =
  "w-full rounded-md border border-zinc-300 bg-white px-2.5 py-1.5 text-sm text-zinc-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

function ColorInput({
  value,
  onChange,
}: {
  value: string | undefined;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="color"
        value={value ?? "#000000"}
        onChange={(e) => onChange(e.target.value)}
        className="h-8 w-12 cursor-pointer rounded border border-zinc-300"
      />
      <input
        type="text"
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        className={inputClass}
      />
    </div>
  );
}

function FontSelect({
  value,
  onChange,
}: {
  value: string | undefined;
  onChange: (v: string) => void;
}) {
  return (
    <select
      value={value ?? ""}
      onChange={(e) => onChange(e.target.value)}
      className={inputClass}
    >
      <option value="">Padrão</option>
      {FONTS.map((f) => (
        <option key={f.name} value={f.family}>
          {f.name}
          {f.googleHref ? " ✦" : ""}
        </option>
      ))}
    </select>
  );
}

function NodeForm({ node }: { node: EmailNode }) {
  const updateNode = useEditorStore((s) => s.updateNode);
  const update = (patch: Record<string, unknown>) => updateNode(node.id, patch);

  if (node.type === "text") {
    return (
      <div className="flex flex-col gap-3">
        <Field
          label="Conteúdo"
          hint="Suporta **negrito**, *itálico* e [texto](https://url)."
        >
          <textarea
            value={node.props.content}
            onChange={(e) => update({ content: e.target.value })}
            rows={5}
            className={inputClass}
          />
        </Field>
        <Field label="Fonte">
          <FontSelect
            value={node.props.fontFamily}
            onChange={(v) => update({ fontFamily: v || undefined })}
          />
        </Field>
        <Field label="Cor">
          <ColorInput
            value={node.props.color}
            onChange={(v) => update({ color: v })}
          />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Tamanho">
            <input
              type="text"
              value={node.props.fontSize ?? ""}
              onChange={(e) => update({ fontSize: e.target.value })}
              placeholder="16px"
              className={inputClass}
            />
          </Field>
          <Field label="Peso">
            <select
              value={node.props.fontWeight ?? "normal"}
              onChange={(e) => update({ fontWeight: e.target.value })}
              className={inputClass}
            >
              <option value="normal">Normal</option>
              <option value="bold">Negrito</option>
            </select>
          </Field>
          <Field label="Espaç. letra">
            <input
              type="text"
              value={node.props.letterSpacing ?? ""}
              onChange={(e) => update({ letterSpacing: e.target.value })}
              placeholder="0"
              className={inputClass}
            />
          </Field>
          <Field label="Altura linha">
            <input
              type="text"
              value={node.props.lineHeight ?? ""}
              onChange={(e) => update({ lineHeight: e.target.value })}
              placeholder="1.5"
              className={inputClass}
            />
          </Field>
        </div>
        <Field label="Alinhamento">
          <select
            value={node.props.align ?? "left"}
            onChange={(e) => update({ align: e.target.value })}
            className={inputClass}
          >
            <option value="left">Esquerda</option>
            <option value="center">Centro</option>
            <option value="right">Direita</option>
          </select>
        </Field>
      </div>
    );
  }

  if (node.type === "image") {
    return (
      <div className="flex flex-col gap-3">
        <Field label="URL da imagem">
          <input
            type="url"
            value={node.props.src}
            onChange={(e) => update({ src: e.target.value })}
            className={inputClass}
          />
        </Field>
        <Field label="Texto alternativo">
          <input
            type="text"
            value={node.props.alt ?? ""}
            onChange={(e) => update({ alt: e.target.value })}
            className={inputClass}
          />
        </Field>
        <Field label="Largura">
          <input
            type="text"
            value={node.props.width ?? ""}
            onChange={(e) => update({ width: e.target.value })}
            placeholder="600px"
            className={inputClass}
          />
        </Field>
        <Field label="Link (opcional)">
          <input
            type="url"
            value={node.props.href ?? ""}
            onChange={(e) => update({ href: e.target.value })}
            className={inputClass}
          />
        </Field>
      </div>
    );
  }

  if (node.type === "button") {
    return (
      <div className="flex flex-col gap-3">
        <Field label="Texto">
          <input
            type="text"
            value={node.props.label}
            onChange={(e) => update({ label: e.target.value })}
            className={inputClass}
          />
        </Field>
        <Field label="Link">
          <input
            type="url"
            value={node.props.href}
            onChange={(e) => update({ href: e.target.value })}
            className={inputClass}
          />
        </Field>
        <Field label="Fonte">
          <FontSelect
            value={node.props.fontFamily}
            onChange={(v) => update({ fontFamily: v || undefined })}
          />
        </Field>
        <Field label="Cor de fundo">
          <ColorInput
            value={node.props.backgroundColor}
            onChange={(v) => update({ backgroundColor: v })}
          />
        </Field>
        <Field label="Cor do texto">
          <ColorInput
            value={node.props.color}
            onChange={(v) => update({ color: v })}
          />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Tamanho">
            <input
              type="text"
              value={node.props.fontSize ?? ""}
              onChange={(e) => update({ fontSize: e.target.value })}
              placeholder="14px"
              className={inputClass}
            />
          </Field>
          <Field label="Peso">
            <select
              value={node.props.fontWeight ?? "normal"}
              onChange={(e) => update({ fontWeight: e.target.value })}
              className={inputClass}
            >
              <option value="normal">Normal</option>
              <option value="bold">Negrito</option>
            </select>
          </Field>
          <Field label="Espaç. letra">
            <input
              type="text"
              value={node.props.letterSpacing ?? ""}
              onChange={(e) => update({ letterSpacing: e.target.value })}
              placeholder="0"
              className={inputClass}
            />
          </Field>
          <Field label="Padding interno">
            <input
              type="text"
              value={node.props.innerPadding ?? ""}
              onChange={(e) => update({ innerPadding: e.target.value })}
              placeholder="12px 24px"
              className={inputClass}
            />
          </Field>
        </div>
        <Field label="Borda" hint="Ex.: 1px solid #000 — vazio = sem borda">
          <input
            type="text"
            value={node.props.border ?? ""}
            onChange={(e) => update({ border: e.target.value })}
            placeholder="1px solid #000"
            className={inputClass}
          />
        </Field>
        <Field label="Border radius">
          <input
            type="text"
            value={node.props.borderRadius ?? ""}
            onChange={(e) => update({ borderRadius: e.target.value })}
            placeholder="4px"
            className={inputClass}
          />
        </Field>
        <Field label="Alinhamento">
          <select
            value={node.props.align ?? "center"}
            onChange={(e) => update({ align: e.target.value })}
            className={inputClass}
          >
            <option value="left">Esquerda</option>
            <option value="center">Centro</option>
            <option value="right">Direita</option>
          </select>
        </Field>
      </div>
    );
  }

  if (node.type === "section") {
    return (
      <div className="flex flex-col gap-3">
        <Field label="Cor de fundo">
          <ColorInput
            value={node.props.backgroundColor}
            onChange={(v) => update({ backgroundColor: v })}
          />
        </Field>
        <Field label="Padding">
          <input
            type="text"
            value={node.props.padding ?? ""}
            onChange={(e) => update({ padding: e.target.value })}
            placeholder="20px 0"
            className={inputClass}
          />
        </Field>
      </div>
    );
  }

  if (node.type === "column") {
    return (
      <div className="flex flex-col gap-3">
        <Field label="Largura">
          <input
            type="text"
            value={node.props.width ?? ""}
            onChange={(e) => update({ width: e.target.value })}
            placeholder="auto"
            className={inputClass}
          />
        </Field>
        <Field label="Alinhamento vertical">
          <select
            value={node.props.verticalAlign ?? "top"}
            onChange={(e) => update({ verticalAlign: e.target.value })}
            className={inputClass}
          >
            <option value="top">Topo</option>
            <option value="middle">Meio</option>
            <option value="bottom">Fundo</option>
          </select>
        </Field>
      </div>
    );
  }

  if (node.type === "spacer") {
    return (
      <Field label="Altura">
        <input
          type="text"
          value={node.props.height ?? ""}
          onChange={(e) => update({ height: e.target.value })}
          placeholder="24px"
          className={inputClass}
        />
      </Field>
    );
  }

  if (node.type === "divider") {
    return (
      <div className="flex flex-col gap-3">
        <Field label="Cor">
          <ColorInput
            value={node.props.borderColor}
            onChange={(v) => update({ borderColor: v })}
          />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Espessura">
            <input
              type="text"
              value={node.props.borderWidth ?? ""}
              onChange={(e) => update({ borderWidth: e.target.value })}
              placeholder="1px"
              className={inputClass}
            />
          </Field>
          <Field label="Estilo">
            <select
              value={node.props.borderStyle ?? "solid"}
              onChange={(e) => update({ borderStyle: e.target.value })}
              className={inputClass}
            >
              <option value="solid">Sólida</option>
              <option value="dashed">Tracejada</option>
              <option value="dotted">Pontilhada</option>
            </select>
          </Field>
        </div>
        <Field label="Largura">
          <input
            type="text"
            value={node.props.width ?? ""}
            onChange={(e) => update({ width: e.target.value })}
            placeholder="100%"
            className={inputClass}
          />
        </Field>
        <Field label="Padding">
          <input
            type="text"
            value={node.props.padding ?? ""}
            onChange={(e) => update({ padding: e.target.value })}
            placeholder="10px 0"
            className={inputClass}
          />
        </Field>
      </div>
    );
  }

  if (node.type === "navbar") {
    const links = node.props.links;
    const updateLinks = (next: NavbarLink[]) => update({ links: next });
    return (
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-medium text-zinc-600">Links</span>
          {links.map((link, i) => (
            <div
              key={link.id}
              className="flex flex-col gap-1.5 rounded-md border border-zinc-200 bg-white p-2"
            >
              <input
                type="text"
                value={link.label}
                onChange={(e) =>
                  updateLinks(
                    links.map((l, j) =>
                      j === i ? { ...l, label: e.target.value } : l,
                    ),
                  )
                }
                placeholder="Label"
                className={inputClass}
              />
              <input
                type="url"
                value={link.href}
                onChange={(e) =>
                  updateLinks(
                    links.map((l, j) =>
                      j === i ? { ...l, href: e.target.value } : l,
                    ),
                  )
                }
                placeholder="https://"
                className={inputClass}
              />
              <button
                type="button"
                onClick={() => updateLinks(links.filter((_, j) => j !== i))}
                className="self-end text-xs text-red-600 hover:underline"
              >
                remover
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              updateLinks([
                ...links,
                { id: nanoid(8), label: "Novo link", href: "https://" },
              ])
            }
            className="rounded-md border border-dashed border-zinc-300 bg-white py-1.5 text-xs font-medium text-zinc-600 hover:border-blue-400 hover:text-blue-700"
          >
            + Adicionar link
          </button>
        </div>
        <Field label="Fonte">
          <FontSelect
            value={node.props.fontFamily}
            onChange={(v) => update({ fontFamily: v || undefined })}
          />
        </Field>
        <Field label="Cor">
          <ColorInput
            value={node.props.color}
            onChange={(v) => update({ color: v })}
          />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Tamanho">
            <input
              type="text"
              value={node.props.fontSize ?? ""}
              onChange={(e) => update({ fontSize: e.target.value })}
              placeholder="14px"
              className={inputClass}
            />
          </Field>
          <Field label="Peso">
            <select
              value={node.props.fontWeight ?? "normal"}
              onChange={(e) => update({ fontWeight: e.target.value })}
              className={inputClass}
            >
              <option value="normal">Normal</option>
              <option value="bold">Negrito</option>
            </select>
          </Field>
          <Field label="Espaç. letra">
            <input
              type="text"
              value={node.props.letterSpacing ?? ""}
              onChange={(e) => update({ letterSpacing: e.target.value })}
              placeholder="1px"
              className={inputClass}
            />
          </Field>
          <Field label="Padding">
            <input
              type="text"
              value={node.props.padding ?? ""}
              onChange={(e) => update({ padding: e.target.value })}
              placeholder="10px 0"
              className={inputClass}
            />
          </Field>
        </div>
        <Field label="Alinhamento">
          <select
            value={node.props.align ?? "center"}
            onChange={(e) => update({ align: e.target.value })}
            className={inputClass}
          >
            <option value="left">Esquerda</option>
            <option value="center">Centro</option>
            <option value="right">Direita</option>
          </select>
        </Field>
      </div>
    );
  }

  return null;
}

export function PropertiesPanel() {
  const tree = useEditorStore((s) => s.tree);
  const selectedId = useEditorStore((s) => s.selectedId);
  const deleteNode = useEditorStore((s) => s.deleteNode);

  const found = selectedId ? findNode(tree, selectedId) : null;

  return (
    <aside className="flex h-full w-72 flex-col border-l border-zinc-200 bg-zinc-50">
      <div className="border-b border-zinc-200 p-4">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
          Propriedades
        </h2>
        {found ? (
          <p className="mt-1 text-sm font-medium text-zinc-800">
            {BLOCK_LABELS[found.node.type]}
          </p>
        ) : (
          <p className="mt-1 text-xs text-zinc-400">Nenhum bloco selecionado</p>
        )}
      </div>
      <div className="flex-1 overflow-auto p-4">
        {found ? (
          <NodeForm node={found.node} />
        ) : (
          <p className="text-xs text-zinc-500">
            Clique em um bloco no canvas para editar suas propriedades.
          </p>
        )}
      </div>
      {found ? (
        <div className="border-t border-zinc-200 p-3">
          <button
            type="button"
            onClick={() => deleteNode(found.node.id)}
            className="w-full rounded-md border border-red-200 bg-white px-3 py-2 text-sm font-medium text-red-700 hover:bg-red-50"
          >
            Excluir bloco
          </button>
        </div>
      ) : null}
    </aside>
  );
}
