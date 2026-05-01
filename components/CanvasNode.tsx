"use client";

import { useEffect, useRef } from "react";
import { useDroppable, useDraggable } from "@dnd-kit/core";
import type { EmailNode } from "@/types/email";
import { useEditorStore } from "@/store/editorStore";
import { inlineMarkdownToHtml } from "@/lib/inlineMarkdown";

function InlineTextEditor({
  initialValue,
  align,
  onChange,
  onCommit,
}: {
  initialValue: string;
  align: "left" | "center" | "right" | undefined;
  onChange: (v: string) => void;
  onCommit: () => void;
}) {
  const ref = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.focus();
    el.setSelectionRange(el.value.length, el.value.length);
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }, []);

  return (
    <textarea
      ref={ref}
      defaultValue={initialValue}
      onChange={(e) => {
        onChange(e.target.value);
        const el = e.currentTarget;
        el.style.height = "auto";
        el.style.height = `${el.scrollHeight}px`;
      }}
      onBlur={onCommit}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          e.preventDefault();
          e.currentTarget.blur();
        }
        e.stopPropagation();
      }}
      onClick={(e) => e.stopPropagation()}
      onPointerDown={(e) => e.stopPropagation()}
      style={{
        textAlign: align,
        font: "inherit",
        color: "inherit",
        letterSpacing: "inherit",
        lineHeight: "inherit",
        fontWeight: "inherit",
      }}
      className="block w-full resize-none overflow-hidden border-0 bg-transparent p-0 outline-none"
      rows={1}
    />
  );
}

type Props = {
  node: EmailNode;
};

function DropZone({
  parentId,
  index,
}: {
  parentId: string | null;
  index: number;
}) {
  const { setNodeRef, isOver, active } = useDroppable({
    id: `drop:${parentId ?? "root"}:${index}`,
    data: { kind: "between", parentId, index },
  });
  const isDragging = !!active;
  const isActive = isDragging && isOver;
  return (
    <div className="relative h-0">
      {/* hit area: só ativa durante drag */}
      {isDragging ? (
        <div
          ref={setNodeRef}
          className="absolute inset-x-0 -top-2 z-10 h-4"
        />
      ) : (
        <div ref={setNodeRef} className="absolute inset-x-0 top-0 h-0" />
      )}
      {/* indicador visual só quando hovering */}
      {isActive ? (
        <div className="pointer-events-none absolute inset-x-0 -top-px z-20 h-0.5 rounded bg-blue-500" />
      ) : null}
    </div>
  );
}

export function CanvasNode({ node }: Props) {
  const selectedId = useEditorStore((s) => s.selectedId);
  const editingId = useEditorStore((s) => s.editingId);
  const selectNode = useEditorStore((s) => s.selectNode);
  const setEditingId = useEditorStore((s) => s.setEditingId);
  const updateNode = useEditorStore((s) => s.updateNode);
  const isSelected = selectedId === node.id;
  const isEditing = editingId === node.id;
  const imgRef = useRef<HTMLImageElement | null>(null);

  const { setNodeRef: setDragRef, attributes, listeners, isDragging } =
    useDraggable({
      id: node.id,
      data: { source: "tree", nodeId: node.id, nodeType: node.type },
    });

  const { setNodeRef: setDropRef, isOver, active } = useDroppable({
    id: `container:${node.id}`,
    data: { kind: "container", parentId: node.id, nodeType: node.type },
    disabled: node.type !== "section" && node.type !== "column",
  });

  const containerActive = isOver && active;

  function ref(el: HTMLDivElement | null) {
    setDragRef(el);
    if (node.type === "section" || node.type === "column") setDropRef(el);
  }

  function handleClick(e: React.MouseEvent) {
    e.stopPropagation();
    selectNode(node.id);
  }

  const baseRing = isSelected
    ? "ring-2 ring-blue-500"
    : "ring-1 ring-transparent hover:ring-blue-300";

  if (node.type === "section") {
    return (
      <div
        ref={ref}
        {...attributes}
        {...listeners}
        onClick={handleClick}
        style={{
          backgroundColor: node.props.backgroundColor,
          padding: node.props.padding,
        }}
        className={`relative cursor-pointer ${baseRing} ${
          isDragging ? "opacity-40" : ""
        } ${containerActive ? "outline outline-2 outline-blue-500" : ""}`}
      >
        <div className="absolute -top-3 left-2 z-10 rounded bg-blue-600 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white opacity-0 transition-opacity group-hover:opacity-100 peer-hover:opacity-100">
          Seção
        </div>
        <div className="flex flex-row gap-0">
          <DropZone parentId={node.id} index={0} />
          {node.children.length === 0 ? (
            <div className="m-2 flex-1 rounded border-2 border-dashed border-zinc-300 px-4 py-8 text-center text-xs text-zinc-400">
              Solte uma coluna aqui
            </div>
          ) : (
            node.children.map((child) => (
              <div key={child.id} className="flex-1">
                <CanvasNode node={child} />
              </div>
            ))
          )}
        </div>
      </div>
    );
  }

  if (node.type === "hero") {
    const justify =
      node.props.verticalAlign === "top"
        ? "flex-start"
        : node.props.verticalAlign === "bottom"
          ? "flex-end"
          : "center";
    const minHeight =
      node.props.mode === "fixed-height" ? node.props.height : "240px";
    return (
      <div
        ref={ref}
        {...attributes}
        {...listeners}
        onClick={handleClick}
        style={{
          backgroundImage: node.props.backgroundUrl
            ? `url(${node.props.backgroundUrl})`
            : undefined,
          backgroundColor: node.props.backgroundColor,
          backgroundSize: "cover",
          backgroundPosition: node.props.backgroundPosition ?? "center center",
          padding: node.props.padding,
          minHeight,
          display: "flex",
          flexDirection: "column",
          justifyContent: justify,
        }}
        className={`relative cursor-pointer ${baseRing} ${
          isDragging ? "opacity-40" : ""
        } ${containerActive ? "outline outline-2 outline-blue-500" : ""}`}
      >
        <div className="absolute -top-3 left-2 z-10 rounded bg-purple-600 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
          Hero
        </div>
        {node.children.length === 0 ? (
          <div className="rounded border-2 border-dashed border-white/60 bg-black/20 px-4 py-6 text-center text-xs text-white/80">
            Solte texto, imagem ou botão sobre a imagem
          </div>
        ) : (
          <div>
            <DropZone parentId={node.id} index={0} />
            {node.children.map((child, i) => (
              <div key={child.id}>
                <CanvasNode node={child} />
                <DropZone parentId={node.id} index={i + 1} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (node.type === "column") {
    return (
      <div
        ref={ref}
        {...attributes}
        {...listeners}
        onClick={handleClick}
        style={{ verticalAlign: node.props.verticalAlign }}
        className={`relative min-h-12 cursor-pointer rounded p-2 ${baseRing} ${
          isDragging ? "opacity-40" : ""
        } ${containerActive ? "outline outline-2 outline-blue-500" : ""}`}
      >
        {node.children.length === 0 ? (
          <div className="rounded border-2 border-dashed border-zinc-300 px-3 py-6 text-center text-xs text-zinc-400">
            Solte texto, imagem ou botão
          </div>
        ) : (
          <div>
            <DropZone parentId={node.id} index={0} />
            {node.children.map((child, i) => (
              <div key={child.id}>
                <CanvasNode node={child} />
                <DropZone parentId={node.id} index={i + 1} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (node.type === "text") {
    const sharedStyle = {
      color: node.props.color,
      fontSize: node.props.fontSize,
      fontFamily: node.props.fontFamily,
      fontWeight: node.props.fontWeight,
      letterSpacing: node.props.letterSpacing,
      lineHeight: node.props.lineHeight,
      textAlign: node.props.align,
    } as const;

    if (isEditing) {
      return (
        <div
          onClick={(e) => e.stopPropagation()}
          style={sharedStyle}
          className="my-1 rounded px-2 py-1 ring-2 ring-blue-500"
        >
          <InlineTextEditor
            initialValue={node.props.content}
            align={node.props.align}
            onChange={(v) => updateNode(node.id, { content: v })}
            onCommit={() => setEditingId(null)}
          />
        </div>
      );
    }

    return (
      <div
        ref={setDragRef}
        {...attributes}
        {...listeners}
        onClick={handleClick}
        onDoubleClick={(e) => {
          e.stopPropagation();
          selectNode(node.id);
          setEditingId(node.id);
        }}
        style={sharedStyle}
        className={`my-1 cursor-pointer rounded px-2 py-1 ${baseRing} ${
          isDragging ? "opacity-40" : ""
        }`}
        title="Duplo clique para editar"
        dangerouslySetInnerHTML={{
          __html: inlineMarkdownToHtml(node.props.content) || "&nbsp;",
        }}
      />
    );
  }


  if (node.type === "image") {
    function startResize(
      mode: "w" | "h" | "corner",
      e: React.PointerEvent<HTMLDivElement>,
    ) {
      e.preventDefault();
      e.stopPropagation();
      const el = imgRef.current;
      if (!el) return;
      const startX = e.clientX;
      const startY = e.clientY;
      const startW = el.offsetWidth;
      const startH = el.offsetHeight;
      const ratio = startW > 0 ? startH / startW : 1;

      function onMove(ev: PointerEvent) {
        const dx = ev.clientX - startX;
        const dy = ev.clientY - startY;
        if (mode === "w") {
          const w = Math.max(20, Math.round(startW + dx));
          updateNode(node.id, { width: `${w}px` });
        } else if (mode === "h") {
          const h = Math.max(20, Math.round(startH + dy));
          updateNode(node.id, { height: `${h}px` });
        } else {
          const w = Math.max(20, Math.round(startW + dx));
          const h = Math.max(20, Math.round(w * ratio));
          updateNode(node.id, { width: `${w}px`, height: `${h}px` });
        }
      }
      function onUp() {
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
      }
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
    }

    const align = node.props.align ?? "center";
    return (
      <div
        ref={setDragRef}
        {...attributes}
        {...listeners}
        onClick={handleClick}
        style={{ textAlign: align }}
        className={`my-1 cursor-pointer rounded p-1 ${baseRing} ${
          isDragging ? "opacity-40" : ""
        }`}
      >
        <span className="relative inline-block align-top">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={imgRef}
            src={node.props.src}
            alt={node.props.alt ?? ""}
            style={{
              width: node.props.width,
              height: node.props.height,
              maxWidth: "100%",
            }}
            className="block"
          />
          {isSelected ? (
            <>
              <div
                onPointerDown={(e) => startResize("w", e)}
                onClick={(e) => e.stopPropagation()}
                className="absolute right-0 top-1/2 z-30 h-3 w-3 -translate-y-1/2 translate-x-1/2 cursor-ew-resize rounded-sm border border-white bg-blue-500 shadow"
                title="Redimensionar largura"
              />
              <div
                onPointerDown={(e) => startResize("h", e)}
                onClick={(e) => e.stopPropagation()}
                className="absolute bottom-0 left-1/2 z-30 h-3 w-3 -translate-x-1/2 translate-y-1/2 cursor-ns-resize rounded-sm border border-white bg-blue-500 shadow"
                title="Redimensionar altura"
              />
              <div
                onPointerDown={(e) => startResize("corner", e)}
                onClick={(e) => e.stopPropagation()}
                className="absolute bottom-0 right-0 z-30 h-3 w-3 translate-x-1/2 translate-y-1/2 cursor-nwse-resize rounded-sm border border-white bg-blue-500 shadow"
                title="Redimensionar proporcional"
              />
            </>
          ) : null}
        </span>
      </div>
    );
  }

  if (node.type === "button") {
    return (
      <div
        ref={setDragRef}
        {...attributes}
        {...listeners}
        onClick={handleClick}
        style={{ textAlign: node.props.align }}
        className={`my-2 cursor-pointer rounded px-2 py-1 ${baseRing} ${
          isDragging ? "opacity-40" : ""
        }`}
      >
        <span
          style={{
            backgroundColor: node.props.backgroundColor,
            color: node.props.color,
            fontFamily: node.props.fontFamily,
            fontSize: node.props.fontSize,
            fontWeight: node.props.fontWeight,
            letterSpacing: node.props.letterSpacing,
            border: node.props.border,
            borderRadius: node.props.borderRadius,
            padding: node.props.innerPadding ?? "10px 24px",
          }}
          className="inline-block text-sm font-semibold"
        >
          {node.props.label}
        </span>
      </div>
    );
  }

  if (node.type === "spacer") {
    return (
      <div
        ref={setDragRef}
        {...attributes}
        {...listeners}
        onClick={handleClick}
        className={`my-1 cursor-pointer rounded ${baseRing} ${
          isDragging ? "opacity-40" : ""
        }`}
      >
        <div
          style={{ height: node.props.height ?? "24px" }}
          className="flex items-center justify-center bg-zinc-50 text-[10px] uppercase tracking-wider text-zinc-400"
        >
          espaço · {node.props.height ?? "24px"}
        </div>
      </div>
    );
  }

  if (node.type === "divider") {
    return (
      <div
        ref={setDragRef}
        {...attributes}
        {...listeners}
        onClick={handleClick}
        style={{ padding: node.props.padding ?? "10px 0" }}
        className={`my-1 cursor-pointer rounded ${baseRing} ${
          isDragging ? "opacity-40" : ""
        }`}
      >
        <hr
          style={{
            borderTopColor: node.props.borderColor ?? "#e5e7eb",
            borderTopWidth: node.props.borderWidth ?? "1px",
            borderTopStyle: node.props.borderStyle ?? "solid",
            width: node.props.width ?? "100%",
            margin: "0 auto",
          }}
        />
      </div>
    );
  }

  if (node.type === "navbar") {
    return (
      <div
        ref={setDragRef}
        {...attributes}
        {...listeners}
        onClick={handleClick}
        style={{
          textAlign: node.props.align ?? "center",
          padding: node.props.padding ?? "10px 0",
        }}
        className={`my-1 cursor-pointer rounded ${baseRing} ${
          isDragging ? "opacity-40" : ""
        }`}
      >
        <div
          style={{
            color: node.props.color,
            fontFamily: node.props.fontFamily,
            fontSize: node.props.fontSize,
            fontWeight: node.props.fontWeight,
            letterSpacing: node.props.letterSpacing,
            display: "flex",
            justifyContent:
              node.props.align === "left"
                ? "flex-start"
                : node.props.align === "right"
                  ? "flex-end"
                  : "center",
            gap: "32px",
            flexWrap: "wrap",
          }}
        >
          {node.props.links.length === 0 ? (
            <span className="text-xs italic text-zinc-400">
              Adicione links em propriedades
            </span>
          ) : (
            node.props.links.map((link) => (
              <span key={link.id}>{link.label}</span>
            ))
          )}
        </div>
      </div>
    );
  }

  return null;
}

export { DropZone };
