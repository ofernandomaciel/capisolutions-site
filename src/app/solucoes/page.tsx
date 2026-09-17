import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { PageShell } from "@/components/page-shell";
import { offers, solutionFronts } from "@/content/site";

export const metadata: Metadata = { title: "Soluções", description: "Conheça as três frentes de atuação da CapiSolutions." };

export default function SolutionsPage() {
  return (
    <PageShell kicker="Soluções" title="Vamos entender o problema e encontrar o caminho." description="IA, automação, dados, conteúdo e comunicação entram conforme o contexto — com escopo claro e um próximo passo que faça sentido.">
      <div className="route-list">
        {solutionFronts.map((front) => <article className="route-card" id={front.slug} key={front.slug}><p className="eyebrow eyebrow--dark">{front.label}</p><h2>{front.title}</h2><p>{front.description}</p><ul>{front.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}
      </div>
      <section className="page-content">
        <p className="eyebrow eyebrow--dark">Ofertas prioritárias</p>
        <div className="route-list">
          {offers.map((offer) => <article className="route-card" id={offer.slug} key={offer.slug}><h3>{offer.title}</h3><p>{offer.description}</p><Link className="text-link" href="/#nexo">{offer.cta} <ArrowUpRight /></Link></article>)}
        </div>
      </section>
    </PageShell>
  );
}
