import { ArrowDown, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import ProfilePhoto from "@/components/ProfilePhoto";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="grid items-center gap-8 pt-28 pb-16 lg:min-h-[min(100svh,50rem)] lg:grid-cols-[1.25fr_1fr] lg:gap-16 lg:pt-24 lg:pb-12"
    >
      <ProfilePhoto className="w-36 sm:w-44 lg:order-2 lg:w-full lg:max-w-sm lg:justify-self-end" />

      <div className="lg:order-1">
        <p className="font-mono text-sm text-accent">Hello, I&apos;m</p>
        <h1 className="mt-2 text-[clamp(2.25rem,5.5vw,4.25rem)] font-bold leading-[1.05] tracking-tight text-foreground">
          {profile.name}
        </h1>
        <p className="mt-4 text-[clamp(1.125rem,2vw,1.5rem)] text-soft">{profile.headline}</p>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">{profile.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-accent px-5 text-sm font-semibold text-on-accent transition-opacity hover:opacity-90"
          >
            View projects
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-border-strong px-5 text-sm font-semibold text-foreground transition-colors hover:bg-card"
          >
            <Mail className="size-4" aria-hidden="true" />
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}
