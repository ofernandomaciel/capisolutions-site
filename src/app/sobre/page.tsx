import type { Metadata } from "next";
import Image from "next/image";
import { InteriorCta } from "@/components/interior-cta";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Sobre", description: "Conheça Fernando Maciel e a proposta da CapiSolutions." };

export default function AboutPage() {
  return (
    <PageShell kicker="Sobre" title="Uma trajetória multidisciplinar com propósito." description="Tecnologia, conteúdo e comunicação se encontram na maneira como eu observo problemas, organizo conhecimento e construo soluções.">
      <section className="about-story">
        <div className="about-story__portrait"><Image src="/images/fernando-hero-approved.png" alt="Fernando Maciel" fill sizes="(max-width: 760px) 100vw, 42vw" /><span>Imagem provisória · novo ensaio em preparação</span></div>
        <div className="about-story__copy"><p className="eyebrow eyebrow--dark">Fernando Maciel</p><h2>Tecnologia só faz sentido quando aproxima pessoas.</h2><p>A CapiSolutions nasceu para reunir conhecimentos que normalmente aparecem separados. É um espaço para construir soluções, traduzir complexidade e compartilhar o que aprendo pelo caminho.</p><p>Minha trajetória atravessa tecnologia, comunicação, conteúdo e idiomas. Hoje, esse repertório também se conecta à Engenharia de Dados e à Inteligência Artificial.</p><p>Não se trata de oferecer uma lista infinita de competências. Trata-se de encontrar a combinação certa para cada contexto e explicar com clareza o que será feito, por quê e como saberemos se funcionou.</p></div>
      </section>
      <section className="timeline-section">
        <p className="eyebrow eyebrow--dark">O fio que conecta tudo</p>
        <div><span>01</span><h3>Comunicação</h3><p>Entender pessoas, contexto e intenção antes de formular uma resposta.</p></div>
        <div><span>02</span><h3>Conteúdo</h3><p>Organizar ideias para que conhecimento possa circular e produzir novas conversas.</p></div>
        <div><span>03</span><h3>Tecnologia</h3><p>Transformar problemas reais em sistemas, produtos e processos mais úteis.</p></div>
        <div><span>04</span><h3>Dados &amp; IA</h3><p>Criar bases confiáveis para decisões e experiências inteligentes.</p></div>
      </section>
      <InteriorCta title="Quer entender como essa combinação pode participar do seu projeto?" />
    </PageShell>
  );
}
