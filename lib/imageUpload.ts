export type UploadedImage = {
  dataUrl: string;
  width: number;
  height: number;
};

const DEFAULT_MAX_WIDTH = 1200;
const DEFAULT_QUALITY = 0.85;

function readAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error ?? new Error("Falha ao ler arquivo"));
    reader.readAsDataURL(file);
  });
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Falha ao decodificar imagem"));
    img.src = src;
  });
}

export async function processImageFile(
  file: File,
  maxWidth: number = DEFAULT_MAX_WIDTH,
  quality: number = DEFAULT_QUALITY,
): Promise<UploadedImage> {
  if (!file.type.startsWith("image/")) {
    throw new Error("O arquivo selecionado não é uma imagem");
  }
  const original = await readAsDataUrl(file);
  const img = await loadImage(original);
  const { naturalWidth: w, naturalHeight: h } = img;

  if (w <= maxWidth) {
    return { dataUrl: original, width: w, height: h };
  }

  const ratio = maxWidth / w;
  const targetW = maxWidth;
  const targetH = Math.round(h * ratio);

  const canvas = document.createElement("canvas");
  canvas.width = targetW;
  canvas.height = targetH;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas não suportado");
  ctx.drawImage(img, 0, 0, targetW, targetH);

  const mime = file.type === "image/png" ? "image/png" : "image/jpeg";
  const dataUrl = canvas.toDataURL(mime, quality);
  return { dataUrl, width: targetW, height: targetH };
}

export function parsePx(value: string | undefined): number | null {
  if (!value) return null;
  const m = value.match(/^(\d+(?:\.\d+)?)\s*px$/i);
  if (!m) return null;
  return parseFloat(m[1]);
}
