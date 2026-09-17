import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function PageShell({ kicker, title, description, children }: { kicker: string; title: string; description: string; children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>
        <header className="page-hero">
          <div className="shell">
            <p className="eyebrow">{kicker}</p>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </header>
        <div className="page-content"><div className="shell">{children}</div></div>
      </main>
      <SiteFooter />
    </>
  );
}
