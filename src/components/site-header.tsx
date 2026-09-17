import Image from "next/image";
import Link from "next/link";

const nav = [
  ["Soluções", "/#solucoes"],
  ["Conteúdo", "/#conteudo"],
  ["Entrevistas", "/newsroom#entrevistas"],
  ["Sobre", "/sobre"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link className="brand" href="/" aria-label="CapiSolutions — Início">
          <Image src="/images/logo.png" alt="" width={31} height={31} priority />
          <span>CapiSolutions</span>
        </Link>
        <nav className="site-nav" aria-label="Navegação principal">
          {nav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
          <Link className="site-nav__cta" href="/#nexo">Conversar</Link>
        </nav>
        <details className="mobile-nav">
          <summary>Menu</summary>
          <nav className="mobile-nav__panel" aria-label="Navegação móvel">
            <Link href="/">Início</Link>
            {nav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
            <Link href="/#nexo">Conversar</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
