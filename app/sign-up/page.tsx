import Link from "next/link";
import { AuthShell } from "@/components/AuthShell";
import { SignUpForm } from "@/components/SignUpForm";

export default function SignUpPage() {
  return (
    <AuthShell
      title="Criar conta"
      subtitle="Comece a montar seus emails em minutos."
      footer={
        <>
          Já tem conta?{" "}
          <Link
            href="/sign-in"
            className="font-medium text-zinc-900 hover:underline"
          >
            Entrar
          </Link>
        </>
      }
    >
      <SignUpForm />
    </AuthShell>
  );
}
