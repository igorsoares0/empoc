"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { requireUserId } from "@/lib/session";
import type { EmailNode } from "@/types/email";

export type ProjectSummary = {
  id: string;
  name: string;
  templateId: string | null;
  createdAt: number;
  updatedAt: number;
};

export type ProjectFull = ProjectSummary & {
  tree: EmailNode[];
};

function toSummary(p: {
  id: string;
  name: string;
  templateId: string | null;
  createdAt: Date;
  updatedAt: Date;
}): ProjectSummary {
  return {
    id: p.id,
    name: p.name,
    templateId: p.templateId,
    createdAt: p.createdAt.getTime(),
    updatedAt: p.updatedAt.getTime(),
  };
}

export async function listProjects(): Promise<ProjectSummary[]> {
  const userId = await requireUserId();
  const projects = await prisma.project.findMany({
    where: { userId },
    orderBy: { updatedAt: "desc" },
    select: {
      id: true,
      name: true,
      templateId: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return projects.map(toSummary);
}

export async function getProject(id: string): Promise<ProjectFull | null> {
  const userId = await requireUserId();
  const project = await prisma.project.findFirst({
    where: { id, userId },
  });
  if (!project) return null;
  return {
    ...toSummary(project),
    tree: (project.tree as unknown as EmailNode[]) ?? [],
  };
}

export async function createProject(input?: {
  name?: string;
  templateId?: string | null;
  tree?: EmailNode[];
}): Promise<string> {
  const userId = await requireUserId();
  const project = await prisma.project.create({
    data: {
      userId,
      name: input?.name ?? "Email sem título",
      templateId: input?.templateId ?? null,
      tree: (input?.tree ?? []) as never,
    },
    select: { id: true },
  });
  revalidatePath("/");
  return project.id;
}

export async function updateProjectTree(
  id: string,
  tree: EmailNode[],
): Promise<void> {
  const userId = await requireUserId();
  await prisma.project.updateMany({
    where: { id, userId },
    data: { tree: tree as never },
  });
}

export async function renameProject(id: string, name: string): Promise<void> {
  const userId = await requireUserId();
  await prisma.project.updateMany({
    where: { id, userId },
    data: { name },
  });
  revalidatePath("/");
}

export async function deleteProject(id: string): Promise<void> {
  const userId = await requireUserId();
  await prisma.project.deleteMany({ where: { id, userId } });
  revalidatePath("/");
}

export async function duplicateProject(id: string): Promise<string | null> {
  const userId = await requireUserId();
  const source = await prisma.project.findFirst({ where: { id, userId } });
  if (!source) return null;
  const copy = await prisma.project.create({
    data: {
      userId,
      name: `Cópia de ${source.name}`,
      templateId: source.templateId,
      tree: source.tree as never,
    },
    select: { id: true },
  });
  revalidatePath("/");
  return copy.id;
}
