import { profile } from "@/data/profile";

export default function AboutSection() {
  return (
    <section id="about" className="border-t border-border py-16 lg:py-20">
      <div className="grid gap-4 lg:grid-cols-[12rem_1fr] lg:gap-12">
        <h2 className="font-mono text-sm uppercase tracking-wider text-accent">About</h2>
        <p className="max-w-2xl text-lg leading-relaxed text-soft">{profile.about}</p>
      </div>
    </section>
  );
}
