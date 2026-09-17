import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="site-footer__top">
          <div>
            <Link className="brand" href="/">
              <Image src="/images/logo.png" alt="" width={31} height={31} />
              <span>CapiSolutions</span>
            </Link>
            <p className="site-footer__statement">Clareza para transformar complexidade em movimento.</p>
          </div>
          <div className="site-footer__column">
            <strong>Navegar</strong>
            <Link href="/solucoes">Soluções</Link>
            <Link href="/newsroom">Capi Newsroom</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/contato">Contato</Link>
          </div>
          <div className="site-footer__column">
            <strong>Conectar</strong>
            <span>Instagram · em configuração</span>
            <span>LinkedIn · em configuração</span>
            <Link href="/privacidade">Privacidade</Link>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>© 2026 CapiSolutions</span>
          <span>Editorial · Tecnológica · Humana</span>
        </div>
      </div>
    </footer>
  );
}
