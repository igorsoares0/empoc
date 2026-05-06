"use client";

import { useState } from "react";

const inputBase =
  "w-full rounded-md border border-zinc-300 bg-white px-2.5 py-1.5 text-sm text-zinc-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

type Sides = { top: number; right: number; bottom: number; left: number };

function parseShorthand(value: string | undefined): Sides {
  if (!value) return { top: 0, right: 0, bottom: 0, left: 0 };
  const parts = value
    .trim()
    .split(/\s+/)
    .map((p) => {
      const n = parseFloat(p);
      return Number.isFinite(n) ? n : 0;
    });
  if (parts.length === 0) return { top: 0, right: 0, bottom: 0, left: 0 };
  if (parts.length === 1)
    return { top: parts[0], right: parts[0], bottom: parts[0], left: parts[0] };
  if (parts.length === 2)
    return { top: parts[0], right: parts[1], bottom: parts[0], left: parts[1] };
  if (parts.length === 3)
    return { top: parts[0], right: parts[1], bottom: parts[2], left: parts[1] };
  return { top: parts[0], right: parts[1], bottom: parts[2], left: parts[3] };
}

function formatShorthand(s: Sides): string {
  const { top, right, bottom, left } = s;
  if (top === right && right === bottom && bottom === left) return `${top}px`;
  if (top === bottom && right === left) return `${top}px ${right}px`;
  if (right === left) return `${top}px ${right}px ${bottom}px`;
  return `${top}px ${right}px ${bottom}px ${left}px`;
}

function isAllEqual(s: Sides) {
  return s.top === s.right && s.right === s.bottom && s.bottom === s.left;
}

export function PaddingInput({
  value,
  onChange,
  max = 200,
}: {
  value: string | undefined;
  onChange: (v: string) => void;
  max?: number;
}) {
  const sides = parseShorthand(value);
  const [linked, setLinked] = useState(() => isAllEqual(sides));

  function setSide(key: keyof Sides, raw: number) {
    const n = Math.max(0, Math.min(max, Math.round(raw)));
    if (linked) {
      onChange(formatShorthand({ top: n, right: n, bottom: n, left: n }));
    } else {
      onChange(formatShorthand({ ...sides, [key]: n }));
    }
  }

  function toggleLinked(next: boolean) {
    setLinked(next);
    if (next) {
      const avg = Math.round(
        (sides.top + sides.right + sides.bottom + sides.left) / 4,
      );
      onChange(formatShorthand({ top: avg, right: avg, bottom: avg, left: avg }));
    }
  }

  if (linked) {
    return (
      <div className="rounded-md border border-zinc-200 bg-white p-2">
        <div className="flex items-center gap-2">
          <NumberStepper
            value={sides.top}
            min={0}
            max={max}
            step={2}
            onChange={(n) => setSide("top", n)}
            suffix="px"
            className="flex-1"
          />
          <button
            type="button"
            onClick={() => toggleLinked(false)}
            title="Desvincular lados"
            className="rounded border border-zinc-300 bg-zinc-50 px-2 py-1 text-[11px] text-zinc-600 hover:bg-zinc-100"
          >
            ⛓
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-md border border-zinc-200 bg-white p-2">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-1.5">
        <div className="col-start-2">
          <SideInput
            label="T"
            value={sides.top}
            max={max}
            onChange={(n) => setSide("top", n)}
          />
        </div>
        <div className="col-start-1 row-start-2">
          <SideInput
            label="L"
            value={sides.left}
            max={max}
            onChange={(n) => setSide("left", n)}
          />
        </div>
        <button
          type="button"
          onClick={() => toggleLinked(true)}
          title="Vincular lados"
          className="col-start-2 row-start-2 self-stretch rounded border border-dashed border-zinc-300 bg-zinc-50 text-[11px] text-zinc-400 hover:border-blue-400 hover:text-blue-600"
        >
          ⛓̸
        </button>
        <div className="col-start-3 row-start-2">
          <SideInput
            label="R"
            value={sides.right}
            max={max}
            onChange={(n) => setSide("right", n)}
          />
        </div>
        <div className="col-start-2 row-start-3">
          <SideInput
            label="B"
            value={sides.bottom}
            max={max}
            onChange={(n) => setSide("bottom", n)}
          />
        </div>
      </div>
    </div>
  );
}

function SideInput({
  label,
  value,
  max,
  onChange,
}: {
  label: string;
  value: number;
  max: number;
  onChange: (n: number) => void;
}) {
  return (
    <div className="flex items-center gap-1 rounded border border-zinc-200 bg-zinc-50 px-1.5 py-1">
      <span className="text-[10px] font-semibold text-zinc-400">{label}</span>
      <input
        type="number"
        min={0}
        max={max}
        value={value}
        onChange={(e) => {
          const n = parseInt(e.target.value, 10);
          if (!Number.isNaN(n)) onChange(n);
          else onChange(0);
        }}
        className="w-full bg-transparent text-center text-sm text-zinc-900 outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
    </div>
  );
}

export function NumberStepper({
  value,
  onChange,
  min = 0,
  max = 999,
  step = 1,
  suffix,
  className,
  placeholder,
}: {
  value: number | undefined;
  onChange: (n: number) => void;
  min?: number;
  max?: number;
  step?: number;
  suffix?: string;
  className?: string;
  placeholder?: string;
}) {
  const v = value ?? 0;
  const clamp = (n: number) => Math.max(min, Math.min(max, n));
  return (
    <div
      className={`flex items-stretch overflow-hidden rounded-md border border-zinc-300 bg-white ${className ?? ""}`}
    >
      <button
        type="button"
        onClick={() => onChange(clamp(v - step))}
        className="px-2 text-zinc-500 hover:bg-zinc-100"
        aria-label="diminuir"
      >
        −
      </button>
      <input
        type="number"
        value={value ?? ""}
        min={min}
        max={max}
        step={step}
        placeholder={placeholder}
        onChange={(e) => {
          const n = parseFloat(e.target.value);
          if (Number.isFinite(n)) onChange(clamp(n));
        }}
        className="w-full bg-transparent px-1 text-center text-sm text-zinc-900 outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
      {suffix ? (
        <span className="flex select-none items-center pr-2 text-[11px] text-zinc-400">
          {suffix}
        </span>
      ) : null}
      <button
        type="button"
        onClick={() => onChange(clamp(v + step))}
        className="px-2 text-zinc-500 hover:bg-zinc-100"
        aria-label="aumentar"
      >
        +
      </button>
    </div>
  );
}

function parsePxValue(value: string | undefined): number | undefined {
  if (!value) return undefined;
  const n = parseFloat(value);
  return Number.isFinite(n) ? n : undefined;
}

export function PxInput({
  value,
  onChange,
  min = 0,
  max = 200,
  step = 1,
  placeholder,
}: {
  value: string | undefined;
  onChange: (v: string | undefined) => void;
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
}) {
  const n = parsePxValue(value);
  return (
    <NumberStepper
      value={n}
      min={min}
      max={max}
      step={step}
      suffix="px"
      placeholder={placeholder}
      onChange={(next) => onChange(`${next}px`)}
    />
  );
}

export function NumberInput({
  value,
  onChange,
  min = 1,
  max = 3,
  step = 0.05,
  placeholder,
}: {
  value: string | undefined;
  onChange: (v: string | undefined) => void;
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
}) {
  const n =
    value && Number.isFinite(parseFloat(value)) ? parseFloat(value) : undefined;
  const fmt = (next: number) => {
    const r = Math.round(next * 100) / 100;
    return `${r}`;
  };
  return (
    <NumberStepper
      value={n}
      min={min}
      max={max}
      step={step}
      placeholder={placeholder}
      onChange={(next) => onChange(fmt(next))}
    />
  );
}

type WidthUnit = "px" | "%" | "auto";

function detectUnit(value: string | undefined): WidthUnit {
  if (!value || value === "auto") return "auto";
  if (value.includes("%")) return "%";
  return "px";
}

export function WidthInput({
  value,
  onChange,
  pxMax = 800,
  allowAuto = false,
}: {
  value: string | undefined;
  onChange: (v: string | undefined) => void;
  pxMax?: number;
  allowAuto?: boolean;
}) {
  const unit = detectUnit(value);
  const numeric = parseFloat(value ?? "");

  function setUnit(next: WidthUnit) {
    if (next === "auto") {
      onChange(allowAuto ? "auto" : undefined);
      return;
    }
    if (next === "%") {
      const n = Number.isFinite(numeric) ? Math.min(100, numeric) : 100;
      onChange(`${n}%`);
    } else {
      const n = Number.isFinite(numeric) ? numeric : 600;
      onChange(`${Math.round(n)}px`);
    }
  }

  return (
    <div className="flex items-center gap-2">
      {unit === "auto" ? (
        <span className="flex-1 rounded-md border border-dashed border-zinc-300 bg-zinc-50 px-2.5 py-1.5 text-center text-sm text-zinc-500">
          automático
        </span>
      ) : (
        <NumberStepper
          value={Number.isFinite(numeric) ? numeric : undefined}
          min={0}
          max={unit === "%" ? 100 : pxMax}
          step={unit === "%" ? 1 : 4}
          suffix={unit}
          className="flex-1"
          onChange={(n) => onChange(`${n}${unit}`)}
        />
      )}
      <div className="flex overflow-hidden rounded-md border border-zinc-300 bg-white text-[11px]">
        {(allowAuto ? (["auto", "px", "%"] as const) : (["px", "%"] as const)).map(
          (u) => (
            <button
              key={u}
              type="button"
              onClick={() => setUnit(u)}
              className={`px-2 py-1.5 ${
                unit === u
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-500 hover:bg-zinc-100"
              }`}
            >
              {u}
            </button>
          ),
        )}
      </div>
    </div>
  );
}

type BorderParts = {
  width: number;
  style: "solid" | "dashed" | "dotted";
  color: string;
};

function parseBorder(value: string | undefined): BorderParts | null {
  if (!value || !value.trim()) return null;
  const parts = value.trim().split(/\s+/);
  if (parts.length < 3) return null;
  const width = parseFloat(parts[0]);
  const style = parts[1] as BorderParts["style"];
  const color = parts.slice(2).join(" ");
  if (!Number.isFinite(width)) return null;
  if (style !== "solid" && style !== "dashed" && style !== "dotted") return null;
  return { width, style, color };
}

function formatBorder(b: BorderParts) {
  return `${b.width}px ${b.style} ${b.color}`;
}

const DEFAULT_BORDER: BorderParts = {
  width: 1,
  style: "solid",
  color: "#000000",
};

export function BorderInput({
  value,
  onChange,
}: {
  value: string | undefined;
  onChange: (v: string | undefined) => void;
}) {
  const parsed = parseBorder(value);

  function update(next: Partial<BorderParts>) {
    const base = parsed ?? DEFAULT_BORDER;
    onChange(formatBorder({ ...base, ...next }));
  }

  if (!parsed) {
    return (
      <button
        type="button"
        onClick={() => onChange(formatBorder(DEFAULT_BORDER))}
        className="w-full rounded-md border border-dashed border-zinc-300 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-500 hover:border-blue-400 hover:text-blue-700"
      >
        + Adicionar borda
      </button>
    );
  }

  return (
    <div className="flex flex-col gap-2 rounded-md border border-zinc-200 bg-white p-2">
      <div className="flex items-center gap-2">
        <NumberStepper
          value={parsed.width}
          min={0}
          max={20}
          step={1}
          suffix="px"
          className="flex-1"
          onChange={(n) => update({ width: n })}
        />
        <select
          value={parsed.style}
          onChange={(e) =>
            update({ style: e.target.value as BorderParts["style"] })
          }
          className={inputBase + " w-28"}
        >
          <option value="solid">Sólida</option>
          <option value="dashed">Tracejada</option>
          <option value="dotted">Pontilhada</option>
        </select>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="color"
          value={parsed.color}
          onChange={(e) => update({ color: e.target.value })}
          className="h-8 w-12 cursor-pointer rounded border border-zinc-300"
        />
        <input
          type="text"
          value={parsed.color}
          onChange={(e) => update({ color: e.target.value })}
          className={inputBase + " flex-1"}
        />
        <button
          type="button"
          onClick={() => onChange(undefined)}
          className="rounded border border-zinc-300 bg-white px-2 py-1 text-[11px] text-zinc-500 hover:bg-zinc-50"
          title="Remover borda"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export function BackgroundPositionInput({
  value,
  onChange,
}: {
  value: string | undefined;
  onChange: (v: string | undefined) => void;
}) {
  const positions = [
    ["top left", "↖"],
    ["top center", "↑"],
    ["top right", "↗"],
    ["center left", "←"],
    ["center center", "●"],
    ["center right", "→"],
    ["bottom left", "↙"],
    ["bottom center", "↓"],
    ["bottom right", "↘"],
  ] as const;
  const current = value || "center center";
  return (
    <div className="grid grid-cols-3 gap-1 rounded-md border border-zinc-200 bg-white p-1.5">
      {positions.map(([pos, icon]) => (
        <button
          key={pos}
          type="button"
          onClick={() => onChange(pos)}
          title={pos}
          className={`flex h-8 items-center justify-center rounded text-sm transition ${
            current === pos
              ? "bg-zinc-900 text-white"
              : "bg-zinc-50 text-zinc-500 hover:bg-zinc-100"
          }`}
        >
          {icon}
        </button>
      ))}
    </div>
  );
}
