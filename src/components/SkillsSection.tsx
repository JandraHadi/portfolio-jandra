import { skillGroups } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="border-t border-border py-16 lg:py-20">
      <div className="grid gap-6 lg:grid-cols-[12rem_1fr] lg:gap-12">
        <h2 className="font-mono text-sm uppercase tracking-wider text-accent">Skills</h2>
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map(({ title, Icon, items }) => (
            <div key={title}>
              <h3 className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Icon className="size-[18px] text-accent" aria-hidden="true" strokeWidth={1.75} />
                {title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {items.map((item) => (
                  <li key={item} className="rounded-md border border-border px-2.5 py-1 text-sm text-soft">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
