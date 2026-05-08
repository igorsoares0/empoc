import { redirect } from "next/navigation";
import { Editor } from "@/components/Editor";
import { getSession } from "@/lib/session";
import { getProject } from "@/app/actions/projects";

export default async function EditorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await getSession();
  if (!session?.user) redirect("/sign-in");

  const { id } = await params;
  const project = await getProject(id);
  if (!project) redirect("/");

  return <Editor project={project} />;
}
