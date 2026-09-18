import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "@/components/icons";
import { InteriorCta } from "@/components/interior-cta";
import { PageShell } from "@/components/page-shell";
import { solutionPages, type SolutionSlug } from "@/content/site";

export function generateStaticParams() { return Object.keys(solutionPages).map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = solutionPages[slug as SolutionSlug];
  return page ? { title: page.kicker, description: page.introduction } : {};
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = solutionPages[slug as SolutionSlug];
  if (!page) notFound();

  return (
    <PageShell kicker={`${page.index} · ${page.kicker}`} title={page.title} description={page.introduction}>
      <section className="capability-grid">
        {page.capabilities.map(([title, description], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h2>{title}</h2><p>{description}</p></article>)}
      </section>
      <section className="process-section">
        <p className="eyebrow eyebrow--dark">Do contexto à entrega</p>
        <h2>Um processo visível, sem caixa-preta.</h2>
        <ol>{page.process.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol>
        <Link className="text-link" href="/solucoes">Voltar para todas as soluções <ArrowUpRight /></Link>
      </section>
      <InteriorCta title="Conte o problema. A combinação certa vem depois." />
    </PageShell>
  );
}
