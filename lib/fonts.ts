export type FontDef = {
  name: string;
  family: string;
  googleHref: string | null;
};

export const FONTS: FontDef[] = [
  { name: "Sistema", family: "system-ui, sans-serif", googleHref: null },
  { name: "Arial", family: "Arial, sans-serif", googleHref: null },
  {
    name: "Helvetica",
    family: "Helvetica, Arial, sans-serif",
    googleHref: null,
  },
  { name: "Georgia", family: "Georgia, serif", googleHref: null },
  {
    name: "Times New Roman",
    family: "'Times New Roman', Times, serif",
    googleHref: null,
  },
  {
    name: "Courier New",
    family: "'Courier New', Courier, monospace",
    googleHref: null,
  },
  {
    name: "Inter",
    family: "Inter, sans-serif",
    googleHref:
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap",
  },
  {
    name: "Roboto",
    family: "Roboto, sans-serif",
    googleHref:
      "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",
  },
  {
    name: "Playfair Display",
    family: "'Playfair Display', Georgia, serif",
    googleHref:
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap",
  },
  {
    name: "Cormorant Garamond",
    family: "'Cormorant Garamond', Georgia, serif",
    googleHref:
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&display=swap",
  },
  {
    name: "Lora",
    family: "Lora, Georgia, serif",
    googleHref:
      "https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap",
  },
  {
    name: "Montserrat",
    family: "Montserrat, sans-serif",
    googleHref:
      "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap",
  },
  {
    name: "Pinyon Script",
    family: "'Pinyon Script', cursive",
    googleHref:
      "https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap",
  },
];

export function findFontByFamily(family: string): FontDef | undefined {
  return FONTS.find((f) => f.family === family);
}
