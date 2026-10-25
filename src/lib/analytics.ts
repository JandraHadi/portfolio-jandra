// Trim whitespace/quotes: a pasted value like " G-ABC123 " would otherwise silently disable analytics.
export const GA_ID = (process.env.NEXT_PUBLIC_GA_ID ?? "").trim().replace(/^["']|["']$/g, "");
export const CONSENT_KEY = "analytics-consent";
export type Consent = "granted" | "denied";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const isLocalHost = (host: string) =>
  host === "localhost" || host === "127.0.0.1" || host === "[::1]" || host.endsWith(".local");

/**
 * GA runs only with a valid measurement ID, in production builds, and off
 * localhost. NEXT_PUBLIC_GA_ENABLE_DEV=true lets you test DebugView locally.
 */
export function analyticsEnabled(): boolean {
  if (!/^G-[A-Z0-9]{4,}$/.test(GA_ID)) return false;
  if (process.env.NEXT_PUBLIC_GA_ENABLE_DEV === "true") return true;
  if (process.env.NODE_ENV !== "production") return false;
  return typeof window === "undefined" || !isLocalHost(window.location.hostname);
}

export function getConsent(): Consent | null {
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function setConsent(value: Consent) {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* storage unavailable: the choice lasts for this page view only */
  }
}

/** No-op unless analytics is enabled and the visitor accepted. */
export function trackEvent(name: string, params: Record<string, string | number | boolean> = {}) {
  if (typeof window === "undefined" || !window.gtag) return;
  if (!analyticsEnabled() || getConsent() !== "granted") return;
  window.gtag("event", name, params);
}
