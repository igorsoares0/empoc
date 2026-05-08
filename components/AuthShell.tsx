import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
};

export function AuthShell({ title, subtitle, children, footer }: Props) {
  return (
    <div className="flex min-h-svh items-center justify-center bg-zinc-50 px-4 py-12">
      <div className="w-full max-w-sm">
        <Link
          href="/"
          className="mb-8 flex items-center justify-center gap-2 text-zinc-900"
        >
          <span className="grid h-8 w-8 place-items-center rounded-md bg-zinc-900 text-sm font-semibold text-white">
            e
          </span>
          <span className="text-base font-semibold tracking-tight">empoc</span>
        </Link>
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h1 className="text-xl font-semibold tracking-tight text-zinc-900">
            {title}
          </h1>
          <p className="mt-1 text-sm text-zinc-600">{subtitle}</p>
          <div className="mt-6">{children}</div>
        </div>
        <p className="mt-4 text-center text-sm text-zinc-600">{footer}</p>
      </div>
    </div>
  );
}
