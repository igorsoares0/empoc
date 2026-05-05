import type { Template } from "@/types/email";
import { welcome } from "./welcome";
import { newsletter } from "./newsletter";
import { promotional } from "./promotional";
import { thankYou } from "./thank-you";
import { workshops } from "./workshops";
import { qna } from "./qna";
import { backInStock } from "./back-in-stock";
import { giveaway } from "./giveaway";
import { welcomeEditorial } from "./welcome-editorial";
import { skincare } from "./skincare";
import { courseLaunch } from "./course-launch";
import { founderLetter } from "./founder-letter";
import { reEngagement } from "./re-engagement";
import { beautyMinimal } from "./beauty-minimal";
import { influencer } from "./influencer";

export const templates: Template[] = [
  welcome,
  newsletter,
  promotional,
  thankYou,
  workshops,
  qna,
  backInStock,
  giveaway,
  welcomeEditorial,
  skincare,
  courseLaunch,
  founderLetter,
  reEngagement,
  beautyMinimal,
  influencer,
];

export function getTemplate(id: string): Template | undefined {
  return templates.find((t) => t.id === id);
}
