import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="flex-1 flex flex-col items-center justify-center gap-4 px-4 py-24 text-center">
      <p className="font-mono text-accent text-sm">404</p>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">Page not found</h1>
      <p className="text-soft text-sm max-w-md">The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="px-5 py-2.5 rounded-xl bg-accent text-on-accent hover:bg-accent/90 text-sm font-medium transition-colors"
      >
        Back to home
      </Link>
    </main>
  );
}
