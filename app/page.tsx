import { redirect } from "next/navigation";
import { Dashboard } from "@/components/Dashboard";
import { getSession } from "@/lib/session";
import { listProjects } from "@/app/actions/projects";

export default async function Home() {
  const session = await getSession();
  if (!session?.user) redirect("/sign-in");

  const projects = await listProjects();

  return (
    <Dashboard
      initialProjects={projects}
      userName={session.user.name}
      userEmail={session.user.email}
    />
  );
}
