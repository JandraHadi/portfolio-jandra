import { profile } from "@/data/profile";

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="grid gap-6 lg:grid-cols-[14rem_1fr] lg:gap-16">
        <h2 className="section-title">About</h2>
        <p className="max-w-[40rem] text-lg leading-relaxed text-soft lg:text-xl">{profile.about}</p>
      </div>
    </section>
  );
}
