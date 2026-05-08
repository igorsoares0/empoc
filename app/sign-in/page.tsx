import Link from "next/link";
import { Suspense } from "react";
import { AuthShell } from "@/components/AuthShell";
import { SignInForm } from "@/components/SignInForm";

export default function SignInPage() {
  return (
    <AuthShell
      title="Bem-vinda de volta"
      subtitle="Entre na sua conta para continuar."
      footer={
        <>
          Ainda não tem conta?{" "}
          <Link
            href="/sign-up"
            className="font-medium text-zinc-900 hover:underline"
          >
            Criar conta
          </Link>
        </>
      }
    >
      <Suspense>
        <SignInForm />
      </Suspense>
    </AuthShell>
  );
}
