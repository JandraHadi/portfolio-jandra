"use client";

import { useState } from "react";
import Image from "next/image";
import { profile } from "@/data/profile";
import profileImage from "@/images/profile.jpeg";

/**
 * Fills its (relatively positioned) parent. The photo is a static import, so
 * the build fails loudly if the file is missing and next/image serves a
 * resized WebP/AVIF on Vercel. Initials show only if the image fails to load.
 */
export default function ProfilePhoto({ className = "" }: { className?: string }) {
  const [failed, setFailed] = useState(false);
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  if (failed) {
    return (
      <div
        role="img"
        aria-label={`Photo placeholder for ${profile.name}`}
        className="flex h-full w-full items-center justify-center bg-card font-mono text-6xl text-accent/70"
      >
        {initials}
      </div>
    );
  }

  return (
    <Image
      src={profileImage}
      alt={`Portrait of ${profile.name}`}
      fill
      priority
      sizes="(min-width: 1024px) 50vw, 100vw"
      quality={80}
      placeholder="blur"
      onError={() => setFailed(true)}
      className={`object-cover object-[50%_55%] ${className}`}
    />
  );
}
