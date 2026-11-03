import type { Metadata } from "next";
import Image from "next/image";

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
            <a href="mailto:contato@capisolutions.com">contato@capisolutions.com</a>
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
          <span>Tecnologia com propósito.</span>
        </footer>
      </section>
    </main>
  );
}
