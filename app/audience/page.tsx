import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { listSubscribers, listLists } from "@/app/actions/audience";
import { Audience } from "@/components/Audience";

export default async function AudiencePage() {
  const session = await getSession();
  if (!session?.user) redirect("/sign-in");

  const [subscribers, lists] = await Promise.all([
    listSubscribers(),
    listLists(),
  ]);

  return (
    <Audience
      initialSubscribers={subscribers}
      initialLists={lists}
      userName={session.user.name}
      userEmail={session.user.email}
    />
  );
}
