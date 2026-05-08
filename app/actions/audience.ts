"use server";

import { revalidatePath } from "next/cache";
import { Prisma, type SubscriberStatus } from "@prisma/client";
import { prisma } from "@/lib/db";
import { requireUserId } from "@/lib/session";

export type SubscriberRow = {
  id: string;
  email: string;
  name: string | null;
  status: SubscriberStatus;
  createdAt: number;
  lists: { id: string; name: string }[];
};

export type ListRow = {
  id: string;
  name: string;
  description: string | null;
  subscriberCount: number;
  updatedAt: number;
};

export async function listSubscribers(): Promise<SubscriberRow[]> {
  const userId = await requireUserId();
  const subs = await prisma.subscriber.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    include: {
      memberships: { include: { list: { select: { id: true, name: true } } } },
    },
  });
  return subs.map((s) => ({
    id: s.id,
    email: s.email,
    name: s.name,
    status: s.status,
    createdAt: s.createdAt.getTime(),
    lists: s.memberships.map((m) => ({ id: m.list.id, name: m.list.name })),
  }));
}

export async function addSubscriber(input: {
  email: string;
  name?: string;
  listIds?: string[];
}): Promise<{ ok: true } | { ok: false; error: string }> {
  const userId = await requireUserId();
  const email = input.email.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Email inválido." };
  }
  try {
    const sub = await prisma.subscriber.create({
      data: {
        userId,
        email,
        name: input.name?.trim() || null,
      },
      select: { id: true },
    });
    if (input.listIds?.length) {
      await prisma.listSubscriber.createMany({
        data: input.listIds.map((listId) => ({
          listId,
          subscriberId: sub.id,
        })),
        skipDuplicates: true,
      });
    }
  } catch (e) {
    if (
      e instanceof Prisma.PrismaClientKnownRequestError &&
      e.code === "P2002"
    ) {
      return { ok: false, error: "Já existe um inscrito com esse email." };
    }
    throw e;
  }
  revalidatePath("/audience");
  return { ok: true };
}

export async function updateSubscriberStatus(
  id: string,
  status: SubscriberStatus,
): Promise<void> {
  const userId = await requireUserId();
  await prisma.subscriber.updateMany({
    where: { id, userId },
    data: { status },
  });
  revalidatePath("/audience");
}

export async function deleteSubscriber(id: string): Promise<void> {
  const userId = await requireUserId();
  await prisma.subscriber.deleteMany({ where: { id, userId } });
  revalidatePath("/audience");
}

export async function toggleSubscriberList(
  subscriberId: string,
  listId: string,
  attach: boolean,
): Promise<void> {
  const userId = await requireUserId();
  const [sub, list] = await Promise.all([
    prisma.subscriber.findFirst({
      where: { id: subscriberId, userId },
      select: { id: true },
    }),
    prisma.list.findFirst({
      where: { id: listId, userId },
      select: { id: true },
    }),
  ]);
  if (!sub || !list) return;
  if (attach) {
    await prisma.listSubscriber.upsert({
      where: { listId_subscriberId: { listId, subscriberId } },
      update: {},
      create: { listId, subscriberId },
    });
  } else {
    await prisma.listSubscriber.deleteMany({
      where: { listId, subscriberId },
    });
  }
  revalidatePath("/audience");
}

export async function listLists(): Promise<ListRow[]> {
  const userId = await requireUserId();
  const lists = await prisma.list.findMany({
    where: { userId },
    orderBy: { updatedAt: "desc" },
    include: { _count: { select: { memberships: true } } },
  });
  return lists.map((l) => ({
    id: l.id,
    name: l.name,
    description: l.description,
    subscriberCount: l._count.memberships,
    updatedAt: l.updatedAt.getTime(),
  }));
}

export async function createList(input: {
  name: string;
  description?: string;
}): Promise<{ id: string }> {
  const userId = await requireUserId();
  const list = await prisma.list.create({
    data: {
      userId,
      name: input.name.trim() || "Nova lista",
      description: input.description?.trim() || null,
    },
    select: { id: true },
  });
  revalidatePath("/audience");
  return { id: list.id };
}

export async function renameList(id: string, name: string): Promise<void> {
  const userId = await requireUserId();
  await prisma.list.updateMany({
    where: { id, userId },
    data: { name: name.trim() || "Lista" },
  });
  revalidatePath("/audience");
}

export async function deleteList(id: string): Promise<void> {
  const userId = await requireUserId();
  await prisma.list.deleteMany({ where: { id, userId } });
  revalidatePath("/audience");
}
