import "server-only";
import { readdirSync } from "node:fs";
import path from "node:path";
import type { Hobby } from "@/data/hobbies";

export type Photo = { src: string; alt: string };

const IMAGE_EXT = /\.(jpe?g|png|webp|avif)$/i;
const collator = new Intl.Collator("en", { numeric: true, sensitivity: "base" });

/**
 * Lists the images in public/images/<hobby.folder> (runs at build time, so only files
 * that really exist are returned). Natural sort: riding2 comes before riding10.
 */
export function getHobbyPhotos(hobby: Hobby): Photo[] {
  const dir = path.join(process.cwd(), "public", "images", hobby.folder);
  let files: string[];
  try {
    files = readdirSync(dir);
  } catch {
    return [];
  }
  return files
    .filter((f) => IMAGE_EXT.test(f))
    .sort(collator.compare)
    .map((f, i) => ({
      src: `/images/${hobby.folder}/${encodeURIComponent(f)}`,
      alt: hobby.alts?.[f] ?? `${hobby.title}, photo ${i + 1}`,
    }));
}
