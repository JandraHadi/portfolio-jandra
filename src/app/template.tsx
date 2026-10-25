/** Re-mounts on every route change, giving a light opacity fade between pages. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-fade flex flex-1 flex-col">{children}</div>;
}
