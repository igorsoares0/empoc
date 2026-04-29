"use client";

import { useDroppable, useDraggable } from "@dnd-kit/core";
import type { EmailNode } from "@/types/email";
import { useEditorStore } from "@/store/editorStore";

type Props = {
  node: EmailNode;
};

function DropZone({
  parentId,
  index,
  label,
}: {
  parentId: string | null;
  index: number;
  label?: string;
}) {
  const { setNodeRef, isOver, active } = useDroppable({
    id: `drop:${parentId ?? "root"}:${index}`,
    data: { kind: "between", parentId, index },
  });
  const isActive = !!active && isOver;
  return (
    <div
      ref={setNodeRef}
      className={`my-0.5 h-1 rounded transition-all ${
        isActive ? "h-2 bg-blue-500" : "bg-transparent"
      }`}
    >
      {label && isActive ? (
        <span className="sr-only">{label}</span>
      ) : null}
    </div>
  );
}

export function CanvasNode({ node }: Props) {
  const selectedId = useEditorStore((s) => s.selectedId);
  const selectNode = useEditorStore((s) => s.selectNode);
  const isSelected = selectedId === node.id;

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
        className={`relative cursor-pointer rounded ${baseRing} ${
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
    return (
      <div
        ref={setDragRef}
        {...attributes}
        {...listeners}
        onClick={handleClick}
        style={{
          color: node.props.color,
          fontSize: node.props.fontSize,
          fontFamily: node.props.fontFamily,
          fontWeight: node.props.fontWeight,
          letterSpacing: node.props.letterSpacing,
          lineHeight: node.props.lineHeight,
          textAlign: node.props.align,
        }}
        className={`my-1 cursor-pointer rounded px-2 py-1 ${baseRing} ${
          isDragging ? "opacity-40" : ""
        }`}
      >
        {node.props.content.split("\n").map((line, i) => (
          <div key={i}>{line || " "}</div>
        ))}
      </div>
    );
  }

  if (node.type === "image") {
    return (
      <div
        ref={setDragRef}
        {...attributes}
        {...listeners}
        onClick={handleClick}
        className={`my-1 cursor-pointer rounded p-1 ${baseRing} ${
          isDragging ? "opacity-40" : ""
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={node.props.src}
          alt={node.props.alt ?? ""}
          style={{ width: node.props.width, maxWidth: "100%" }}
          className="block"
        />
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
