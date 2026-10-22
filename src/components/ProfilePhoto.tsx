"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";

/**
 * Shows public/images/profile.jpg. If the file is missing or fails to load,
 * a quiet initials tile is shown instead, so the layout never breaks.
 */
export default function ProfilePhoto({ className = "" }: { className?: string }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  useEffect(() => {
    // A load error can happen before hydration; catch it here.
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div
      className={`relative aspect-[4/5] overflow-hidden rounded-2xl border border-border-strong bg-card ${className}`}
    >
      {failed ? (
        <div
          role="img"
          aria-label={`Photo placeholder for ${profile.name}`}
          className="flex h-full w-full items-center justify-center font-mono text-5xl text-accent/70"
        >
          {initials}
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={ref}
          src="/images/profile.jpg"
          alt={`Portrait of ${profile.name}`}
          width={640}
          height={800}
          fetchPriority="high"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover object-[50%_20%]"
        />
      )}
    </div>
  );
}
