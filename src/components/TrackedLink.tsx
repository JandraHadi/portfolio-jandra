"use client";

import type { AnchorHTMLAttributes } from "react";
import { trackEvent } from "@/lib/analytics";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: string;
  params?: Record<string, string | number | boolean>;
};

/** Anchor that reports a GA4 event on click (no-op without analytics consent). */
export default function TrackedLink({ event, params, onClick, href, target, rel, ...rest }: Props) {
  const external = !!href && /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      target={target ?? (external ? "_blank" : undefined)}
      rel={rel ?? (external ? "noopener noreferrer" : undefined)}
      onClick={(e) => {
        trackEvent(event, { link_url: href ?? "", ...params });
        onClick?.(e);
      }}
      {...rest}
    />
  );
}
