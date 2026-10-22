import { Download, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import TrackedLink from "@/components/TrackedLink";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

const btn =
  "inline-flex min-h-12 items-center gap-2 rounded-lg border border-border-strong px-4 text-sm font-medium text-foreground transition-colors hover:bg-card";

export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-border py-16 lg:py-20">
      <div className="grid gap-4 lg:grid-cols-[12rem_1fr] lg:gap-12">
        <h2 className="font-mono text-sm uppercase tracking-wider text-accent">Contact</h2>
        <div>
          <p className="max-w-xl text-lg text-soft">Open to opportunities and conversations. Say hello.</p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {profile.email && (
              <li>
                <TrackedLink
                  href={`mailto:${profile.email}`}
                  event="contact_click"
                  params={{ method: "email" }}
                  className={`${btn} border-accent/60`}
                >
                  <Mail className="size-4 text-accent" aria-hidden="true" />
                  {profile.email}
                </TrackedLink>
              </li>
            )}
            {profile.github && (
              <li>
                <TrackedLink
                  href={profile.github}
                  event="social_click"
                  params={{ network: "github" }}
                  aria-label="GitHub profile (opens in a new tab)"
                  className={btn}
                >
                  <GithubIcon className="size-4 text-accent" />
                  GitHub
                </TrackedLink>
              </li>
            )}
            {profile.linkedin && (
              <li>
                <TrackedLink
                  href={profile.linkedin}
                  event="social_click"
                  params={{ network: "linkedin" }}
                  aria-label="LinkedIn profile (opens in a new tab)"
                  className={btn}
                >
                  <LinkedinIcon className="size-4 text-accent" />
                  LinkedIn
                </TrackedLink>
              </li>
            )}
            {profile.cvUrl && (
              <li>
                <TrackedLink href={profile.cvUrl} download event="cv_download" className={btn}>
                  <Download className="size-4 text-accent" aria-hidden="true" />
                  Download CV
                </TrackedLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
