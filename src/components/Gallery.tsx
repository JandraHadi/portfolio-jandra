"use client";

import { useState } from "react";
import Image from "next/image";
import { ImagePlus } from "lucide-react";
import type { Photo } from "@/lib/hobbyPhotos";

type Props = {
  photos: Photo[];
  aspect: "landscape" | "portrait";
  pageSize: number;
  /** Folder shown on the empty placeholder, e.g. "public/images/riding". */
  folder: string;
  label: string;
  /** CSS object-position, default centered. */
  position?: string;
};

const ratio = { landscape: "aspect-[3/2]", portrait: "aspect-[4/5]" } as const;

function columns(aspect: Props["aspect"], count: number) {
  if (aspect === "portrait") {
    if (count === 1) return "grid-cols-1 max-w-sm";
    return count === 2 ? "grid-cols-2" : "grid-cols-2 md:grid-cols-3";
  }
  return count === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2";
}

/**
 * Uniformly cropped photo grid with "Load more". Photos come from the folder scan, so every
 * file exists; one that still fails to load is dropped instead of showing a broken image.
 */
export default function Gallery({ photos, aspect, pageSize, folder, label, position = "50% 50%" }: Props) {
  const [shown, setShown] = useState(pageSize);
  const [failed, setFailed] = useState<string[]>([]);
  const list = photos.filter((p) => !failed.includes(p.src));

  if (list.length === 0) {
    return (
      <div
        className={`flex ${ratio[aspect]} max-w-md flex-col items-center justify-center gap-2 bg-card/60 px-4 text-center text-sm text-muted-foreground`}
      >
        <ImagePlus className="size-5 text-accent/70" aria-hidden="true" strokeWidth={1.5} />
        <span>{label} photos coming soon</span>
        <span className="break-all font-mono text-xs">{folder}</span>
      </div>
    );
  }

  return (
    <div>
      <ul className={`grid gap-3 sm:gap-4 ${columns(aspect, Math.min(list.length, shown))}`}>
        {list.slice(0, shown).map((p) => (
          <li key={p.src} className={`relative ${ratio[aspect]} overflow-hidden bg-card`}>
            <Image
              src={p.src}
              alt={p.alt}
              fill
              loading="lazy"
              quality={75}
              sizes={aspect === "portrait" ? "(min-width: 1024px) 22vw, (min-width: 768px) 30vw, 50vw" : "(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw"}
              onError={() => setFailed((f) => [...f, p.src])}
              style={{ objectPosition: position }}
              className="object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </li>
        ))}
      </ul>
      {shown < list.length && (
        <button type="button" onClick={() => setShown((n) => n + pageSize)} className="btn btn-quiet mt-6">
          Load more
        </button>
      )}
    </div>
  );
}
