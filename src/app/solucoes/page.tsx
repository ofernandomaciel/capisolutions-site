import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { InteriorCta } from "@/components/interior-cta";
import { PageShell } from "@/components/page-shell";
import { solutionFronts } from "@/content/site";

export const metadata: Metadata = { title: "Soluções", description: "Conheça as três frentes de atuação da CapiSolutions." };

export default function SolutionsPage() {
  return (
    <PageShell kicker="Soluções" title="Conhecimento conectado a problemas reais." description="Tecnologia, conteúdo e comunicação não vivem em caixas separadas. Cada projeto combina somente o que ajuda a chegar a um resultado claro, útil e sustentável.">
      <div className="solution-hub">
        {solutionFronts.map((front, index) => (
          <article className="solution-hub__card" key={front.slug}>
            <span>0{index + 1}</span>
            <p>{front.label}</p>
            <h2>{front.title}</h2>
            <p>{front.description}</p>
            <ul>{front.items.map((item) => <li key={item}>{item}</li>)}</ul>
            <Link href={`/solucoes/${front.slug}`}>Conhecer esta frente <ArrowUpRight /></Link>
          </article>
        ))}
      </div>
      <section className="working-principles">
        <p className="eyebrow eyebrow--dark">Como os projetos começam</p>
        <div><strong>01</strong><h2>Contexto antes de ferramenta.</h2><p>Entendemos o problema, as pessoas e as restrições antes de recomendar uma solução.</p></div>
        <div><strong>02</strong><h2>Escopo que cabe na realidade.</h2><p>Entregáveis, responsabilidades e critérios de sucesso ficam claros desde o início.</p></div>
        <div><strong>03</strong><h2>Evolução com evidências.</h2><p>Testamos, documentamos e usamos o aprendizado para decidir o próximo passo.</p></div>
      </section>
      <InteriorCta />
    </PageShell>
  );
}
