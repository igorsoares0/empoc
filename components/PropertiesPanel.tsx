"use client";

import { useRef, useState } from "react";
import { nanoid } from "nanoid";
import { useEditorStore } from "@/store/editorStore";
import { findNode } from "@/lib/treeOps";
import { BLOCK_LABELS } from "@/lib/defaults";
import { FONTS } from "@/lib/fonts";
import { processImageFile, parsePx } from "@/lib/imageUpload";
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

function ImageForm({
  node,
}: {
  node: Extract<EmailNode, { type: "image" }>;
}) {
  const updateNode = useEditorStore((s) => s.updateNode);
  const update = (patch: Record<string, unknown>) => updateNode(node.id, patch);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [lockAspect, setLockAspect] = useState(true);

  const widthPx = parsePx(node.props.width);
  const heightPx = parsePx(node.props.height);
  const aspect =
    widthPx && heightPx && heightPx > 0 ? widthPx / heightPx : null;

  function setWidth(w: number) {
    const clamped = Math.max(20, Math.round(w));
    if (lockAspect && aspect) {
      const h = Math.max(1, Math.round(clamped / aspect));
      update({ width: `${clamped}px`, height: `${h}px` });
    } else {
      update({ width: `${clamped}px` });
    }
  }

  function setHeight(h: number) {
    const clamped = Math.max(20, Math.round(h));
    if (lockAspect && aspect) {
      const w = Math.max(1, Math.round(clamped * aspect));
      update({ width: `${w}px`, height: `${clamped}px` });
    } else {
      update({ height: `${clamped}px` });
    }
  }

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadError(null);
    setUploading(true);
    try {
      const result = await processImageFile(file);
      update({
        src: result.dataUrl,
        width: `${result.width}px`,
        height: `${result.height}px`,
      });
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : "Falha no upload");
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <Field label="Upload do computador">
        <div className="flex flex-col gap-2">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFile}
            className="hidden"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-700 hover:border-blue-400 hover:bg-blue-50 disabled:opacity-50"
          >
            {uploading ? "Processando…" : "Escolher imagem"}
          </button>
          {uploadError ? (
            <span className="text-[11px] text-red-600">{uploadError}</span>
          ) : (
            <span className="text-[11px] text-zinc-400">
              Imagens grandes são reduzidas para 1200px de largura.
            </span>
          )}
        </div>
      </Field>
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
      <label className="flex items-center gap-2 text-xs text-zinc-700">
        <input
          type="checkbox"
          checked={lockAspect}
          onChange={(e) => setLockAspect(e.target.checked)}
          className="h-3.5 w-3.5"
        />
        Manter proporção
      </label>
      <Field label={`Largura${widthPx ? ` · ${widthPx}px` : ""}`}>
        <div className="flex items-center gap-2">
          <input
            type="range"
            min={20}
            max={800}
            step={1}
            value={widthPx ?? 600}
            onChange={(e) => setWidth(parseInt(e.target.value, 10))}
            className="flex-1"
          />
          <input
            type="number"
            value={widthPx ?? ""}
            onChange={(e) => {
              const v = parseInt(e.target.value, 10);
              if (!Number.isNaN(v)) setWidth(v);
              else update({ width: undefined });
            }}
            placeholder="auto"
            className={`${inputClass} w-20`}
          />
        </div>
      </Field>
      <Field label={`Altura${heightPx ? ` · ${heightPx}px` : " · auto"}`}>
        <div className="flex items-center gap-2">
          <input
            type="range"
            min={20}
            max={800}
            step={1}
            value={heightPx ?? Math.round((widthPx ?? 600) / 2)}
            onChange={(e) => setHeight(parseInt(e.target.value, 10))}
            className="flex-1"
          />
          <input
            type="number"
            value={heightPx ?? ""}
            onChange={(e) => {
              const v = parseInt(e.target.value, 10);
              if (!Number.isNaN(v)) setHeight(v);
              else update({ height: undefined });
            }}
            placeholder="auto"
            className={`${inputClass} w-20`}
          />
        </div>
      </Field>
      {heightPx ? (
        <button
          type="button"
          onClick={() => update({ height: undefined })}
          className="self-start text-[11px] text-blue-600 hover:underline"
        >
          Limpar altura (manter proporção automática)
        </button>
      ) : null}
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
    return <ImageForm node={node} />;
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
