import Link from 'next/link'
import {ArrowUpRight} from '@/components/icons'
import {EditorialCard} from '@/components/editorial-card'
import {PageShell} from '@/components/page-shell'
import {pageMetadata} from '@/lib/metadata'
import {client} from '@/sanity/lib/client'
import {articlesQuery} from '@/sanity/lib/queries'
import type {ArticleSummary} from '@/sanity/lib/types'

export const metadata = pageMetadata({title: 'Artigos — Capi Newsroom', description: 'Artigos e análises da Capi Newsroom.', path: '/newsroom/artigos'})
export const revalidate = 60

export default async function ArticlesPage() {
  const articles = await client.fetch<ArticleSummary[]>(articlesQuery, {}, {next: {revalidate}})

  return (
    <PageShell kicker="Newsroom · Artigos" title="Análises para compreender o que muda." description="Artigos, explicadores e curadorias com contexto, fontes e espaço para pensar.">
      {articles.length ? (
        <section className="editorial-grid" aria-label="Artigos publicados">
          {articles.map((article) => <EditorialCard key={article._id} kind="article" item={article} />)}
        </section>
      ) : (
        <section className="editorial-empty">
          <span>00</span><h2>A primeira edição está em preparação.</h2>
          <p>O conteúdo será publicado apenas quando estiver revisado, com autoria, fontes e metadados completos.</p>
          <Link className="text-link" href="/newsroom">Voltar para a Newsroom <ArrowUpRight /></Link>
        </section>
      )}
    </PageShell>
  )
}
