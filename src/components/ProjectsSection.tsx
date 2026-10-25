import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import TrackedLink from "@/components/TrackedLink";
import { GithubIcon } from "@/components/BrandIcons";

const linkClass =
  "inline-flex min-h-11 items-center gap-1.5 text-sm text-accent underline-offset-4 transition-colors hover:text-foreground hover:underline";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <ul className="mt-10 divide-y divide-border/60">
        {projects.map(({ id, title, description, tech, Icon, github, demo }) => (
          <li key={id} className="grid gap-4 py-8 first:pt-0 lg:grid-cols-[14rem_1fr] lg:gap-16">
            <div>
              <Icon className="size-5 text-accent" aria-hidden="true" strokeWidth={1.75} />
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">{title}</h3>
            </div>
            <div>
              <p className="max-w-[40rem] text-soft">{description}</p>
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted-foreground">
                {tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              {(github || demo) && (
                <div className="mt-3 flex gap-5">
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
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
