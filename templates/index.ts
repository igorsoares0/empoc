import type { Template } from "@/types/email";
import { welcome } from "./welcome";
import { newsletter } from "./newsletter";
import { promotional } from "./promotional";
import { thankYou } from "./thank-you";
import { workshops } from "./workshops";
import { qna } from "./qna";
import { backInStock } from "./back-in-stock";
import { giveaway } from "./giveaway";

export const templates: Template[] = [
  welcome,
  newsletter,
  promotional,
  thankYou,
  workshops,
  qna,
  backInStock,
  giveaway,
];

export function getTemplate(id: string): Template | undefined {
  return templates.find((t) => t.id === id);
}
