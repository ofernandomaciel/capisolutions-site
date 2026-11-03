import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { EditorialCard } from "@/components/editorial-card";
import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/metadata";
import { client } from "@/sanity/lib/client";
import { articlesQuery, interviewsQuery } from "@/sanity/lib/queries";
import type { ArticleSummary, InterviewSummary } from "@/sanity/lib/types";

export const metadata = pageMetadata({ title: "Capi Newsroom", description: "Análises e conversas sobre inteligência artificial, dados, tecnologia e carreira.", path: "/newsroom" });
export const revalidate = 60;

export default async function NewsroomPage() {
  const [articles, interviews] = await Promise.all([
    client.fetch<ArticleSummary[]>(articlesQuery, {}, { next: { revalidate } }),
    client.fetch<InterviewSummary[]>(interviewsQuery, {}, { next: { revalidate } }),
  ]);
  const latest = [
    ...articles.map((item) => ({ kind: "article" as const, item })),
    ...interviews.map((item) => ({ kind: "interview" as const, item })),
  ].sort((a, b) => Date.parse(b.item.publishedAt) - Date.parse(a.item.publishedAt)).slice(0, 4);

  return (
    <PageShell kicker="Capi Newsroom" title="Histórias, ideias e conversas oportunas." description="Um espaço editorial para acompanhar tecnologia, IA e dados — e, sobretudo, as pessoas que estão construindo esse futuro.">
      <nav className="editorial-nav" aria-label="Seções da Newsroom">
        <span>Explorar</span>
        <Link href="/newsroom/artigos">Artigos</Link>
        <Link href="/newsroom/entrevistas">Entrevistas</Link>
      </nav>
      {latest.length ? (
        <section className="editorial-latest" aria-labelledby="latest-title">
          <p className="eyebrow eyebrow--dark">Publicações recentes</p>
          <h2 id="latest-title">Conteúdo com contexto, fontes e tempo para pensar.</h2>
          <div className="editorial-grid">
            {latest.map((entry) => entry.kind === "article"
              ? <EditorialCard key={`article-${entry.item._id}`} kind="article" item={entry.item} />
              : <EditorialCard key={`interview-${entry.item._id}`} kind="interview" item={entry.item} />)}
          </div>
        </section>
      ) : (
        <section className="editorial-lead">
          <div><p className="eyebrow">Edição de lançamento</p><h2>Conteúdo com contexto, fontes e tempo para pensar.</h2><p>A estrutura editorial está pronta. Os primeiros conteúdos serão publicados depois da revisão, com autoria e fontes completas.</p></div>
          <aside><span>00</span><p>Publicações fictícias não serão usadas para preencher espaço.</p></aside>
        </section>
      )}
      <section className="editorial-paths">
        <article><span>01</span><p>Análises e artigos</p><h2>Separar sinal de ruído.</h2><p>Textos autorais, explicadores e leituras críticas sobre o que realmente muda.</p><Link href="/newsroom/artigos">Ver artigos <ArrowUpRight /></Link></article>
        <article><span>02</span><p>Entrevistas</p><h2>Boas perguntas abrem boas conversas.</h2><p>Encontros com pessoas que constroem tecnologia, conhecimento e novas trajetórias.</p><Link href="/newsroom/entrevistas">Ver entrevistas <ArrowUpRight /></Link></article>
        <article><span>03</span><p>Radar</p><h2>Uma curadoria para acompanhar o movimento.</h2><p>Notícias selecionadas e contextualizadas, sem transformar velocidade em ruído.</p><span className="status-pill">Em preparação</span></article>
      </section>
    </PageShell>
  );
}
