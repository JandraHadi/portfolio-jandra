import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import TrackedLink from "@/components/TrackedLink";
import { GithubIcon } from "@/components/BrandIcons";

const linkClass =
  "inline-flex min-h-10 items-center gap-1.5 text-sm text-accent underline-offset-4 hover:underline";

export default function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-border py-16 lg:py-20">
      <h2 className="font-mono text-sm uppercase tracking-wider text-accent">Projects</h2>
      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ id, title, description, tech, Icon, github, demo }) => (
          <li key={id} className="flex flex-col rounded-xl border border-border bg-card p-6">
            <Icon className="size-5 text-accent" aria-hidden="true" strokeWidth={1.75} />
            <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-soft">{description}</p>
            <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
              {tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            {(github || demo) && (
              <div className="mt-auto flex gap-5 pt-5">
                {github && (
                  <TrackedLink
                    href={github}
                    event="project_link_click"
                    params={{ project_id: id, link_type: "github" }}
                    aria-label={`${title} on GitHub (opens in a new tab)`}
                    className={linkClass}
                  >
                    <GithubIcon className="size-4" />
                    GitHub
                  </TrackedLink>
                )}
                {demo && (
                  <TrackedLink
                    href={demo}
                    event="project_link_click"
                    params={{ project_id: id, link_type: "demo" }}
                    aria-label={`${title} live demo (opens in a new tab)`}
                    className={linkClass}
                  >
                    <ExternalLink className="size-4" aria-hidden="true" />
                    Live demo
                  </TrackedLink>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
