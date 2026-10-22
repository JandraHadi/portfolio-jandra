"use client";

import { useEffect, useState } from "react";
import { Menu, X, User, Wrench, FolderGit2, Mail } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { name: "About", href: "#about", Icon: User },
  { name: "Skills", href: "#skills", Icon: Wrench },
  { name: "Projects", href: "#projects", Icon: FolderGit2 },
  { name: "Contact", href: "#contact", Icon: Mail },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#home" className="text-base font-semibold text-foreground transition-colors hover:text-accent">
          {profile.name.split(" ")[0]}
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-2">
            {links.map(({ name, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="inline-flex min-h-10 items-center rounded-md px-3 text-sm text-soft transition-colors hover:text-foreground"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 inline-flex size-11 cursor-pointer items-center justify-center rounded-md text-soft hover:text-foreground md:hidden"
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-border bg-background md:hidden">
          <ul className="container-page py-2">
            {links.map(({ name, href, Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center gap-3 text-base text-soft hover:text-foreground"
                >
                  <Icon className="size-[18px] text-accent" aria-hidden="true" strokeWidth={1.75} />
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
