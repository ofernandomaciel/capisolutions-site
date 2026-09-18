import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";

const nav = [["Soluções", "/#solucoes"], ["Conteúdo", "/#conteudo"], ["Sobre", "/#sobre"], ["Contato", "/contato"]] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link className="brand-word" href="/" aria-label="CapiSolutions — Início"><span>Capi</span>Solutions</Link>
        <nav className="site-nav" aria-label="Navegação principal">
          {nav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
          <Link className="site-nav__cta" href="/#nexo">Fale com o Nexo <ArrowUpRight /></Link>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Abrir menu"><span className="mobile-menu-icon" aria-hidden="true">☰</span></summary>
          <nav className="mobile-nav__panel" aria-label="Navegação móvel">
            {nav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
            <Link href="/#nexo">Fale com o Nexo</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
