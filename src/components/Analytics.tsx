"use client";

import Script from "next/script";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { GA_ID, analyticsEnabled, getConsent, setConsent, type Consent } from "@/lib/analytics";

export const REOPEN_CONSENT_EVENT = "consent:reopen";

/**
 * Loads GA4 only after the visitor accepts. page_view is sent manually once
 * per pathname (send_page_view is off), so there are no duplicates.
 */
export default function Analytics() {
  const pathname = usePathname();
  const [enabled, setEnabled] = useState(false);
  const [consent, setConsentState] = useState<Consent | null>(null);
  const [bannerOpen, setBannerOpen] = useState(false);
  const lastSent = useRef<string | null>(null);

  useEffect(() => {
    // Client-only values (hostname, localStorage) are read after mount.
    /* eslint-disable react-hooks/set-state-in-effect */
    const on = analyticsEnabled();
    const stored = getConsent();
    setEnabled(on);
    setConsentState(stored);
    setBannerOpen(on && stored === null);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  useEffect(() => {
    const reopen = () => setBannerOpen(true);
    window.addEventListener(REOPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(REOPEN_CONSENT_EVENT, reopen);
  }, []);

  useEffect(() => {
    if (!enabled || consent !== "granted" || lastSent.current === pathname) return;
    lastSent.current = pathname;
    window.gtag?.("event", "page_view", {
      page_path: pathname,
      page_location: window.location.origin + pathname,
      page_title: document.title,
    });
  }, [enabled, consent, pathname]);

  const choose = useCallback((value: Consent) => {
    setConsent(value);
    setConsentState(value);
    setBannerOpen(false);
    // GA's documented opt-out switch: stops any further hits in this session.
    (window as unknown as Record<string, boolean>)[`ga-disable-${GA_ID}`] = value === "denied";
  }, []);

  if (!enabled) return null;

  return (
    <>
      {consent === "granted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}',{send_page_view:false,allow_google_signals:false,allow_ad_personalization_signals:false});`}
          </Script>
        </>
      )}

      {bannerOpen && (
        <div
          role="dialog"
          aria-labelledby="consent-title"
          aria-describedby="consent-desc"
          className="fixed inset-x-3 bottom-3 z-70 mx-auto flex max-w-2xl flex-col gap-4 rounded-xl border border-border-strong bg-card p-4 shadow-lg sm:flex-row sm:items-center sm:p-5"
        >
          <div className="flex-1">
            <h2 id="consent-title" className="text-sm font-semibold text-foreground">
              Your privacy, your choice.
            </h2>
            <p id="consent-desc" className="mt-1 text-sm leading-relaxed text-soft">
              Choose whether to allow analytics cookies. They help me understand how people use this website.{" "}
              <Link href="/privacy" className="text-accent underline underline-offset-2">
                Privacy
              </Link>
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 min-[420px]:flex-row">
            <button
              onClick={() => choose("granted")}
              className="min-h-11 cursor-pointer rounded-lg bg-accent px-4 text-sm font-semibold text-on-accent hover:opacity-90"
            >
              Accept cookies
            </button>
            <button
              onClick={() => choose("denied")}
              className="min-h-11 cursor-pointer rounded-lg border border-border-strong px-4 text-sm font-medium text-foreground hover:bg-muted"
            >
              Decline cookies
            </button>
          </div>
        </div>
      )}
    </>
  );
}
