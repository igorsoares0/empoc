import type { Template } from "@/types/email";
import { welcome } from "./welcome";
import { newsletter } from "./newsletter";
import { promotional } from "./promotional";
import { thankYou } from "./thank-you";
import { workshops } from "./workshops";

export const templates: Template[] = [
  welcome,
  newsletter,
  promotional,
  thankYou,
  workshops,
];

export function getTemplate(id: string): Template | undefined {
  return templates.find((t) => t.id === id);
}
