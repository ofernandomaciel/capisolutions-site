import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Sobre", description: "Conheça Fernando Maciel e a proposta da CapiSolutions." };

export default function AboutPage() {
  return (
    <PageShell kicker="Sobre" title="Uma trajetória multidisciplinar, sem perder o fio da meada." description="Tecnologia, conteúdo e comunicação se encontram na maneira como eu observo problemas, organizo conhecimento e construo soluções.">
      <div className="about-grid">
        <Image className="about-image" src="/images/fernando.jpeg" alt="Fernando Maciel" width={1199} height={1600} />
        <div className="prose"><p>A CapiSolutions reúne essas frentes em um só lugar. É onde apresento meu trabalho e compartilho o que acompanho e aprendo sobre tecnologia, dados e comunicação.</p><p>O objetivo não é oferecer uma lista infinita de competências. É conectar os conhecimentos certos ao contexto certo, com clareza sobre escopo, processo e resultado esperado.</p><h2>Como eu trabalho</h2><p>Primeiro, entendo o contexto. Depois, combinamos o escopo, os entregáveis e como verificar o resultado. A execução inclui testes e documentação proporcionais ao projeto.</p></div>
      </div>
    </PageShell>
  );
}
