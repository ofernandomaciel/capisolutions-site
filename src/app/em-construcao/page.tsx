import type { Metadata } from "next";
import Image from "next/image";
import { GitHubIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon } from "@/components/icons";

const socialLinks = [
  { href: "https://www.linkedin.com/in/ofernandomaciel/", label: "Fernando Maciel no LinkedIn", icon: LinkedInIcon },
  { href: "https://www.instagram.com/ofernandomaciel/", label: "Fernando Maciel no Instagram", icon: InstagramIcon },
  { href: "https://github.com/ofernandomaciel", label: "Fernando Maciel no GitHub", icon: GitHubIcon },
];

const whatsappUrl = "https://wa.me/5548991880399?text=Ol%C3%A1%21%20Conheci%20a%20CapiSolutions%20pelo%20site%20e%20gostaria%20de%20conversar.";

export const metadata: Metadata = {
  title: "Em construção",
  description: "A CapiSolutions está preparando uma nova experiência editorial.",
  alternates: { canonical: "/" },
  robots: { index: false, follow: false, noarchive: true },
};

export default function MaintenancePage() {
  return (
    <main className="maintenance-page">
      <div className="maintenance-page__glow" aria-hidden="true" />
      <section className="maintenance-page__content" aria-labelledby="maintenance-title">
        <p className="maintenance-page__brand" aria-label="CapiSolutions">
          Capi<span>Solutions</span>
        </p>
        <div className="maintenance-page__grid">
          <div className="maintenance-page__copy">
            <p className="maintenance-page__eyebrow">Estamos construindo algo novo</p>
            <h1 id="maintenance-title">Voltamos em breve.</h1>
            <p>
              A CapiSolutions está preparando sua nova experiência editorial, com artigos,
              entrevistas e conteúdo sobre tecnologia, dados e inteligência artificial.
            </p>
            <div className="maintenance-page__actions">
              <a href="mailto:contato@capisolutions.com">Enviar e-mail</a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> Conversar no WhatsApp
              </a>
            </div>
          </div>
          <div className="maintenance-page__nexo">
            <Image
              src="/images/nexo-approved.webp"
              alt="Nexo, a capivara robô da CapiSolutions"
              width={520}
              height={520}
              priority
            />
            <p>O Nexo está ajudando a organizar tudo por aqui.</p>
          </div>
        </div>
        <footer>
          <span>© {new Date().getFullYear()} CapiSolutions</span>
          <nav aria-label="Redes sociais e canais da CapiSolutions">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} — abre em nova aba`}>
                <Icon />
              </a>
            ))}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="CapiSolutions no WhatsApp — abre em nova aba">
              <WhatsAppIcon />
            </a>
          </nav>
        </footer>
      </section>
    </main>
  );
}
