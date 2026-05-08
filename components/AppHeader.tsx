"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { signOut } from "@/lib/auth-client";

type Props = {
  userName: string;
  userEmail: string;
  cta?: { label: string; onClick: () => void; disabled?: boolean };
};

const NAV = [
  { href: "/", label: "Emails" },
  { href: "/audience", label: "Audiência" },
];

export function AppHeader({ userName, userEmail, cta }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-zinc-900 text-[12px] font-bold text-white">
              e
            </div>
            <span className="text-[15px] font-semibold tracking-tight text-zinc-900">
              empoc
            </span>
            <span className="ml-1 rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-zinc-500">
              beta
            </span>
          </Link>
          <nav className="flex items-center gap-1">
            {NAV.map((n) => {
              const active =
                n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`rounded-md px-3 py-1.5 text-[13px] font-medium transition-colors ${
                    active
                      ? "bg-zinc-100 text-zinc-900"
                      : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          {cta && (
            <button
              type="button"
              onClick={cta.onClick}
              disabled={cta.disabled}
              className="inline-flex items-center gap-1.5 rounded-md bg-zinc-900 px-3 py-1.5 text-[13px] font-medium text-white transition-colors hover:bg-zinc-800 disabled:opacity-60"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
              {cta.label}
            </button>
          )}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-[12px] font-semibold text-zinc-600 hover:bg-zinc-200"
              aria-label="Conta"
            >
              {initial(userName, userEmail)}
            </button>
            {open && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setOpen(false)}
                />
                <div className="absolute right-0 z-20 mt-2 w-56 rounded-lg border border-zinc-200 bg-white p-1 shadow-lg">
                  <div className="px-3 py-2">
                    <div className="truncate text-[13px] font-medium text-zinc-900">
                      {userName}
                    </div>
                    <div className="truncate text-[11px] text-zinc-500">
                      {userEmail}
                    </div>
                  </div>
                  <div className="my-1 h-px bg-zinc-100" />
                  <button
                    type="button"
                    onClick={async () => {
                      await signOut();
                      router.replace("/sign-in");
                      router.refresh();
                    }}
                    className="flex w-full items-center rounded px-3 py-1.5 text-left text-[13px] text-zinc-700 hover:bg-zinc-50"
                  >
                    Sair
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

function initial(name: string, email: string): string {
  const source = name.trim() || email.trim();
  return (source[0] ?? "?").toUpperCase();
}
