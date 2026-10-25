import { Download, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import TrackedLink from "@/components/TrackedLink";
import { GithubIcon, LinkedinIcon, InstagramIcon, FacebookIcon, MediumIcon } from "@/components/BrandIcons";

const btn = "btn btn-quiet";

export default function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="grid gap-4 lg:grid-cols-[14rem_1fr] lg:gap-16">
        <h2 className="section-title">Contact</h2>
        <div>
          <p className="max-w-[40rem] text-lg text-soft lg:text-xl">Open to opportunities and conversations. Say hello.</p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {profile.email && (
              <li>
                <TrackedLink
                  href={`mailto:${profile.email}`}
                  event="contact_click"
                  params={{ method: "email" }}
                  className="btn btn-primary"
                >
                  <Mail className="size-4" aria-hidden="true" />
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
            {profile.instagram && (
              <li>
                <TrackedLink
                  href={profile.instagram}
                  event="social_click"
                  params={{ network: "instagram" }}
                  aria-label="Instagram profile (opens in a new tab)"
                  className={btn}
                >
                  <InstagramIcon className="size-4 text-accent" />
                  Instagram
                </TrackedLink>
              </li>
            )}
            {profile.facebook && (
              <li>
                <TrackedLink
                  href={profile.facebook}
                  event="social_click"
                  params={{ network: "facebook" }}
                  aria-label="Facebook profile (opens in a new tab)"
                  className={btn}
                >
                  <FacebookIcon className="size-4 text-accent" />
                  Facebook
                </TrackedLink>
              </li>
            )}
            {profile.medium && (
              <li>
                <TrackedLink
                  href={profile.medium}
                  event="social_click"
                  params={{ network: "medium" }}
                  aria-label="Medium profile (opens in a new tab)"
                  className={btn}
                >
                  <MediumIcon className="size-4 text-accent" />
                  Medium
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
