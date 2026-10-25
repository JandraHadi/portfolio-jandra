"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, House, User, Wrench, FolderGit2, Compass, Mail } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { name: "Home", href: "/#home", id: "home", Icon: House },
  { name: "About", href: "/#about", id: "about", Icon: User },
  { name: "Skills", href: "/#skills", id: "skills", Icon: Wrench },
  { name: "Projects", href: "/#projects", id: "projects", Icon: FolderGit2 },
  { name: "Hobbies", href: "/hobbies", id: "hobbies", Icon: Compass },
  { name: "Contact", href: "/#contact", id: "contact", Icon: Mail },
];

const sectionIds = links.filter((l) => l.href.startsWith("/#")).map((l) => l.id);

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState("home");

  // Scroll-spy for the one-page sections on the home route
  useEffect(() => {
    if (pathname !== "/") return;
    const els = sectionIds.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setSection(e.target.id);
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const activeId = pathname === "/hobbies" ? "hobbies" : pathname === "/" ? section : null;

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          href="/#home"
          onClick={() => setOpen(false)}
          className="text-base font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
        >
          {profile.name.split(" ")[0]}
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center">
            {links.map(({ name, href, id }) => (
              <li key={id}>
                <Link
                  href={href}
                  aria-current={activeId === id ? "page" : undefined}
                  className="nav-link inline-flex min-h-11 items-center rounded-md px-3 text-sm"
                >
                  {name}
                </Link>
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
          className="-mr-2 inline-flex size-11 cursor-pointer items-center justify-center rounded-md text-soft transition-colors hover:text-foreground md:hidden"
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="menu-fade bg-background md:hidden">
          <ul className="container-page pb-3">
            {links.map(({ name, href, id, Icon }) => (
              <li key={id}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  aria-current={activeId === id ? "page" : undefined}
                  className="flex min-h-12 items-center gap-3 text-base text-soft transition-colors hover:text-foreground aria-[current]:text-foreground"
                >
                  <Icon className="size-[18px] text-accent" aria-hidden="true" strokeWidth={1.75} />
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
