import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__compact">
        <Link className="brand-word" href="/"><span>Capi</span>Solutions</Link>
        <p>Tecnologia, comunicação e conteúdo para um futuro mais humano.</p>
        <nav aria-label="Rodapé"><Link href="/#solucoes">Soluções</Link><Link href="/#conteudo">Conteúdo</Link><Link href="/#sobre">Sobre</Link><Link href="/contato">Contato</Link></nav>
        <div className="site-footer__social" aria-label="Redes sociais"><span>in</span><span>◎</span><span>▶</span></div>
      </div>
    </footer>
  );
}
