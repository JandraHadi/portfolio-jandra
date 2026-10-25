"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { Mail } from "lucide-react";
import { profile } from "@/data/profile";
import TrackedLink from "@/components/TrackedLink";
import { GithubIcon, LinkedinIcon, InstagramIcon, FacebookIcon, MediumIcon } from "@/components/BrandIcons";
import { REOPEN_CONSENT_EVENT } from "@/components/Analytics";
import { analyticsEnabled } from "@/lib/analytics";

const subscribe = () => () => {};
const iconLink = "inline-flex size-11 items-center justify-center rounded-md transition-colors hover:text-foreground";

export default function Footer() {
  // false on the server and first render, real value on the client (no hydration mismatch)
  const analyticsOn = useSyncExternalStore(subscribe, analyticsEnabled, () => false);

  return (
    <footer className="mt-auto bg-muted">
      <div className="container-page flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted-foreground sm:flex-row">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
          <span className="flex items-center">
            {profile.email && (
              <TrackedLink href={`mailto:${profile.email}`} event="contact_click" params={{ method: "email_footer" }} aria-label="Email" className={iconLink}>
                <Mail className="size-[18px]" aria-hidden="true" strokeWidth={1.75} />
              </TrackedLink>
            )}
            {profile.github && (
              <TrackedLink href={profile.github} event="social_click" params={{ network: "github_footer" }} aria-label="GitHub (opens in a new tab)" className={iconLink}>
                <GithubIcon className="size-[18px]" />
              </TrackedLink>
            )}
            {profile.linkedin && (
              <TrackedLink href={profile.linkedin} event="social_click" params={{ network: "linkedin_footer" }} aria-label="LinkedIn (opens in a new tab)" className={iconLink}>
                <LinkedinIcon className="size-[18px]" />
              </TrackedLink>
            )}
            {profile.instagram && (
              <TrackedLink href={profile.instagram} event="social_click" params={{ network: "instagram_footer" }} aria-label="Instagram (opens in a new tab)" className={iconLink}>
                <InstagramIcon className="size-[18px]" />
              </TrackedLink>
            )}
            {profile.facebook && (
              <TrackedLink href={profile.facebook} event="social_click" params={{ network: "facebook_footer" }} aria-label="Facebook (opens in a new tab)" className={iconLink}>
                <FacebookIcon className="size-[18px]" />
              </TrackedLink>
            )}
            {profile.medium && (
              <TrackedLink href={profile.medium} event="social_click" params={{ network: "medium_footer" }} aria-label="Medium (opens in a new tab)" className={iconLink}>
                <MediumIcon className="size-[18px]" />
              </TrackedLink>
            )}
          </span>
          <Link href="/privacy" className="inline-flex min-h-11 items-center transition-colors hover:text-foreground">
            Privacy
          </Link>
          {analyticsOn && (
            <button
              onClick={() => window.dispatchEvent(new Event(REOPEN_CONSENT_EVENT))}
              className="inline-flex min-h-11 cursor-pointer items-center transition-colors hover:text-foreground"
            >
              Cookie settings
            </button>
          )}
        </span>
      </div>
    </footer>
  );
}
