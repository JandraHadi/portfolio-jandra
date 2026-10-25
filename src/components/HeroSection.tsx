import { ArrowDown, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import ProfilePhoto from "@/components/ProfilePhoto";

export default function HeroSection() {
  return (
    <section id="home" className="grid pt-16 lg:min-h-svh lg:grid-cols-2 lg:pt-0">
      <div className="hero-copy flex flex-col justify-center py-14 lg:py-28">
        <p className="eyebrow">Hello, I&apos;m</p>
        <h1 className="mt-3 text-[clamp(2.5rem,5vw,4.25rem)] font-bold leading-[1.05] tracking-tight text-foreground">
          {profile.name}
        </h1>
        <p className="mt-4 text-[clamp(1.125rem,1.8vw,1.5rem)] leading-snug text-accent">{profile.headline}</p>
        <div className="mt-6 max-w-[34rem] space-y-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
          <p>{profile.intro}</p>
          <p>{profile.personal}</p>
        </div>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#projects" className="btn btn-primary">
            View projects
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
          <a href="#contact" className="btn btn-quiet">
            <Mail className="size-4" aria-hidden="true" />
            Contact me
          </a>
        </div>
      </div>

      <div className="relative h-[min(70svh,32rem)] lg:h-auto lg:min-h-[40rem]">
        <ProfilePhoto />
        {/* Soft blend into the page background on desktop, no frame */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 bg-linear-to-r from-background to-transparent lg:block"
        />
      </div>
    </section>
  );
}
