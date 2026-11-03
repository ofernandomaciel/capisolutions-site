import Link from "next/link";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "@/components/icons";

const socialLinks = [
  { href: "https://www.linkedin.com/in/ofernandomaciel/", label: "Fernando Maciel no LinkedIn", Icon: LinkedInIcon },
  { href: "https://www.instagram.com/ofernandomaciel/", label: "Fernando Maciel no Instagram", Icon: InstagramIcon },
  { href: "https://github.com/ofernandomaciel", label: "Fernando Maciel no GitHub", Icon: GitHubIcon },
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__compact">
        <Link className="brand-word" href="/"><span>Capi</span>Solutions</Link>
        <p>Tecnologia, comunicação e conteúdo para um futuro mais humano.</p>
        <nav aria-label="Rodapé"><Link href="/#solucoes">Soluções</Link><Link href="/#conteudo">Conteúdo</Link><Link href="/#sobre">Sobre</Link><Link href="/contato">Contato</Link><Link href="/privacidade">Privacidade</Link></nav>
        <nav className="site-footer__social" aria-label="Redes sociais de Fernando Maciel">
          {socialLinks.map(({ href, label, Icon }) => (
            <a href={href} aria-label={label} key={href} rel="noopener noreferrer" target="_blank"><Icon /></a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
