"use client";

import { useRef, useState } from "react";
import { nanoid } from "nanoid";
import { useEditorStore } from "@/store/editorStore";
import { findNode } from "@/lib/treeOps";
import { BLOCK_LABELS, BLOCK_ICONS } from "@/lib/defaults";
import { FONTS } from "@/lib/fonts";
import { processImageFile, parsePx } from "@/lib/imageUpload";
import {
  PaddingInput,
  PxInput,
  NumberInput,
  WidthInput,
  BorderInput,
  BackgroundPositionInput,
} from "./PropertyInputs";
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
      <span className="mb-1.5 block text-[11px] font-medium text-zinc-500">
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

function HeroForm({
  node,
}: {
  node: Extract<EmailNode, { type: "hero" }>;
}) {
  const updateNode = useEditorStore((s) => s.updateNode);
  const update = (patch: Record<string, unknown>) => updateNode(node.id, patch);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadError(null);
    setUploading(true);
    try {
      const result = await processImageFile(file);
      update({ backgroundUrl: result.dataUrl });
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : "Falha no upload");
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <Field label="Imagem de fundo (upload)">
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
          ) : null}
        </div>
      </Field>
      <Field label="URL da imagem de fundo">
        <input
          type="url"
          value={node.props.backgroundUrl ?? ""}
          onChange={(e) => update({ backgroundUrl: e.target.value })}
          className={inputClass}
        />
      </Field>
      <Field label="Cor de fundo (fallback)">
        <ColorInput
          value={node.props.backgroundColor}
          onChange={(v) => update({ backgroundColor: v })}
        />
      </Field>
      <Field label="Posição do fundo">
        <BackgroundPositionInput
          value={node.props.backgroundPosition}
          onChange={(v) => update({ backgroundPosition: v })}
        />
      </Field>
      <div className="grid grid-cols-2 gap-3">
        <Field label="Modo">
          <select
            value={node.props.mode ?? "fluid-height"}
            onChange={(e) => update({ mode: e.target.value })}
            className={inputClass}
          >
            <option value="fluid-height">Fluido</option>
            <option value="fixed-height">Altura fixa</option>
          </select>
        </Field>
        <Field label="Altura">
          <PxInput
            value={node.props.height}
            onChange={(v) => update({ height: v })}
            min={80}
            max={1000}
            step={10}
            placeholder="400"
          />
        </Field>
      </div>
      <Field label="Alinhamento vertical">
        <select
          value={node.props.verticalAlign ?? "middle"}
          onChange={(e) => update({ verticalAlign: e.target.value })}
          className={inputClass}
        >
          <option value="top">Topo</option>
          <option value="middle">Meio</option>
          <option value="bottom">Fundo</option>
        </select>
      </Field>
      <Field label="Padding">
        <PaddingInput
          value={node.props.padding}
          onChange={(v) => update({ padding: v })}
          max={300}
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
            <PxInput
              value={node.props.fontSize}
              onChange={(v) => update({ fontSize: v })}
              min={8}
              max={140}
              step={1}
              placeholder="16"
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
            <PxInput
              value={node.props.letterSpacing}
              onChange={(v) => update({ letterSpacing: v })}
              min={-5}
              max={20}
              step={0.5}
              placeholder="0"
            />
          </Field>
          <Field label="Altura linha">
            <NumberInput
              value={node.props.lineHeight}
              onChange={(v) => update({ lineHeight: v })}
              min={0.8}
              max={3}
              step={0.05}
              placeholder="1.5"
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
            <PxInput
              value={node.props.fontSize}
              onChange={(v) => update({ fontSize: v })}
              min={8}
              max={48}
              step={1}
              placeholder="14"
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
            <PxInput
              value={node.props.letterSpacing}
              onChange={(v) => update({ letterSpacing: v })}
              min={-5}
              max={20}
              step={0.5}
              placeholder="0"
            />
          </Field>
          <Field label="Border radius">
            <PxInput
              value={node.props.borderRadius}
              onChange={(v) => update({ borderRadius: v })}
              min={0}
              max={60}
              step={1}
              placeholder="4"
            />
          </Field>
        </div>
        <Field label="Padding interno">
          <PaddingInput
            value={node.props.innerPadding}
            onChange={(v) => update({ innerPadding: v })}
            max={60}
          />
        </Field>
        <Field label="Borda">
          <BorderInput
            value={node.props.border}
            onChange={(v) => update({ border: v })}
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
          <PaddingInput
            value={node.props.padding}
            onChange={(v) => update({ padding: v })}
            max={300}
          />
        </Field>
      </div>
    );
  }

  if (node.type === "hero") {
    return <HeroForm node={node} />;
  }

  if (node.type === "column") {
    return (
      <div className="flex flex-col gap-3">
        <Field label="Largura">
          <WidthInput
            value={node.props.width}
            onChange={(v) => update({ width: v })}
            allowAuto
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
        <PxInput
          value={node.props.height}
          onChange={(v) => update({ height: v })}
          min={4}
          max={200}
          step={2}
          placeholder="24"
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
            <PxInput
              value={node.props.borderWidth}
              onChange={(v) => update({ borderWidth: v })}
              min={0}
              max={20}
              step={1}
              placeholder="1"
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
          <WidthInput
            value={node.props.width}
            onChange={(v) => update({ width: v })}
            pxMax={600}
          />
        </Field>
        <Field label="Padding">
          <PaddingInput
            value={node.props.padding}
            onChange={(v) => update({ padding: v })}
            max={100}
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
            <PxInput
              value={node.props.fontSize}
              onChange={(v) => update({ fontSize: v })}
              min={8}
              max={32}
              step={1}
              placeholder="14"
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
            <PxInput
              value={node.props.letterSpacing}
              onChange={(v) => update({ letterSpacing: v })}
              min={-2}
              max={10}
              step={0.5}
              placeholder="1"
            />
          </Field>
        </div>
        <Field label="Padding">
          <PaddingInput
            value={node.props.padding}
            onChange={(v) => update({ padding: v })}
            max={100}
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

  return null;
}

export function PropertiesPanel() {
  const tree = useEditorStore((s) => s.tree);
  const selectedId = useEditorStore((s) => s.selectedId);
  const deleteNode = useEditorStore((s) => s.deleteNode);
  const duplicateNode = useEditorStore((s) => s.duplicateNode);

  const found = selectedId ? findNode(tree, selectedId) : null;

  return (
    <aside className="flex h-full w-72 shrink-0 flex-col border-l border-zinc-200 bg-white">
      <div className="flex h-11 shrink-0 items-center justify-between border-b border-zinc-200 px-4">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.08em] text-zinc-400">
          Propriedades
        </h2>
        {found ? (
          <span className="inline-flex items-center gap-1.5 rounded-md bg-zinc-100 px-1.5 py-0.5 text-[11px] font-medium text-zinc-600">
            <span className="text-xs">{BLOCK_ICONS[found.node.type]}</span>
            {BLOCK_LABELS[found.node.type]}
          </span>
        ) : null}
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {found ? (
          <NodeForm node={found.node} />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 px-4 text-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-400">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7l9-4 9 4-9 4-9-4z" />
                <path d="M3 12l9 4 9-4" />
                <path d="M3 17l9 4 9-4" />
              </svg>
            </div>
            <p className="text-[12px] text-zinc-500">
              Selecione um bloco no canvas para editar.
            </p>
          </div>
        )}
      </div>
      {found ? (
        <div className="flex shrink-0 items-center gap-2 border-t border-zinc-200 px-3 py-2.5">
          <button
            type="button"
            onClick={() => duplicateNode(found.node.id)}
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-[12px] font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            Duplicar
          </button>
          <button
            type="button"
            onClick={() => deleteNode(found.node.id)}
            title="Excluir"
            aria-label="Excluir bloco"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-500 transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-600"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6" />
              <path d="M10 11v6M14 11v6" />
              <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
            </svg>
          </button>
        </div>
      ) : null}
    </aside>
  );
}
