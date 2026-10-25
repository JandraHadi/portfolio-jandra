import type { Metadata } from "next";
import { hobbies } from "@/data/hobbies";
import Gallery from "@/components/Gallery";
import { getHobbyPhotos } from "@/lib/hobbyPhotos";

export const metadata: Metadata = {
  title: "Hobbies",
  description: "Motorcycle riding, guitar and singing, and mobile photography: the life beyond the code.",
  alternates: { canonical: "/hobbies" },
};

export default function HobbiesPage() {
  return (
    <main id="main" className="flex-1">
      <header className="container-page pt-32 pb-4 lg:pt-40">
        <p className="eyebrow">Hobbies</p>
        <h1 className="mt-3 max-w-[18ch] text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-foreground">
          Curious mind. Creative soul.
        </h1>
        <p className="mt-6 max-w-[36rem] text-lg leading-relaxed text-muted-foreground">
          Code is only part of who I am. These are the things I do to slow down, explore, and keep learning in a
          different way.
        </p>
      </header>

      <div className="container-page">
        {hobbies.map((h, i) => (
          <section key={h.id} id={h.id} aria-labelledby={`${h.id}-title`} className="section">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <p className="eyebrow">
                  {String(i + 1).padStart(2, "0")} · {h.kicker}
                </p>
                <h2 id={`${h.id}-title`} className="section-title mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)]">
                  {h.title}
                </h2>
                <div className="mt-5 max-w-[32rem] space-y-4 text-base leading-relaxed text-soft lg:text-lg">
                  {h.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                <p className="mt-6 font-mono text-sm text-accent">{h.words.join("  /  ")}</p>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <Gallery
                  photos={getHobbyPhotos(h)}
                  aspect={h.aspect}
                  pageSize={h.pageSize}
                  folder={`public/images/${h.folder}`}
                  label={h.title}
                  position={h.position}
                />
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
