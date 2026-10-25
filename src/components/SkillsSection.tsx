import { skillGroups } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="grid gap-8 lg:grid-cols-[14rem_1fr] lg:gap-16">
        <h2 className="section-title">Skills</h2>
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map(({ title, Icon, items }) => (
            <div key={title}>
              <h3 className="flex items-center gap-2 text-base font-medium text-foreground">
                <Icon className="size-[18px] text-accent" aria-hidden="true" strokeWidth={1.75} />
                {title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <li key={item} className="rounded-md bg-card px-3 py-1.5 text-sm text-soft">
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
