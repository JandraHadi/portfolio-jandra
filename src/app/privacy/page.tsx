import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How this portfolio uses analytics.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <main id="main" className="container-page max-w-3xl space-y-6 pt-28 pb-16 leading-relaxed text-soft">
        <Link href="/" className="text-sm text-accent underline underline-offset-2">
          ← Back to home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Privacy</h1>

        <p>
          If you accept, this site uses Google Analytics 4 to understand aggregate visits: which pages are viewed,
          where visitors come from, and device, browser and approximate location trends (country or city level),
          plus clicks on project, contact, CV and social links.
        </p>
        <p>
          This is not anonymous: Google Analytics sets cookies and processes technical data such as an IP address
          to derive approximate location. Google does not show raw IP addresses in reports, and this site neither
          stores nor displays individual visitors. Google Signals and ad personalization are turned off.
        </p>
        <p>
          Analytics loads only after you press “Accept cookies”. You can change your choice at any time with “Cookie
          settings” in the footer. Declining does not affect the site.
        </p>
        {profile.email && (
          <p>
            Questions:{" "}
            <a className="text-accent underline underline-offset-2" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </p>
        )}
      </main>
    </>
  );
}
