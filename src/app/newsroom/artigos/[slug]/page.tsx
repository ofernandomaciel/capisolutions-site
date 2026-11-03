import type {Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {notFound} from 'next/navigation'
import {ArrowUpRight} from '@/components/icons'
import {PageShell} from '@/components/page-shell'
import {PortableContent} from '@/components/portable-content'
import {client} from '@/sanity/lib/client'
import {articleBySlugQuery} from '@/sanity/lib/queries'
import type {ArticleDetail} from '@/sanity/lib/types'

type ArticlePageProps = {params: Promise<{slug: string}>}
export const revalidate = 60

async function getArticle(slug: string) {
  return client.fetch<ArticleDetail | null>(articleBySlugQuery, {slug}, {next: {revalidate}})
}

export async function generateMetadata({params}: ArticlePageProps): Promise<Metadata> {
  const {slug} = await params
  const article = await getArticle(slug)
  if (!article) return {}
  const title = article.seo?.title || article.title
  const description = article.seo?.description || article.excerpt
  const image = article.seo?.image?.url || article.image?.url
  return {
    title,
    description,
    alternates: {canonical: `/newsroom/artigos/${slug}`},
    robots: article.seo?.noIndex ? {index: false, follow: true} : undefined,
    openGraph: {title, description, type: 'article', publishedTime: article.publishedAt, modifiedTime: article.updatedAt, images: image ? [{url: image}] : undefined},
  }
}

export default async function ArticlePage({params}: ArticlePageProps) {
  const {slug} = await params
  const article = await getArticle(slug)
  if (!article) notFound()

  return (
    <PageShell kicker={`${article.format}${article.category ? ` · ${article.category.title}` : ''}`} title={article.title} description={article.excerpt}>
      <article className="editorial-detail">
        <div className="editorial-detail__meta">
          <span>{article.author?.name || 'CapiSolutions'}</span>
          <time dateTime={article.publishedAt}>{new Intl.DateTimeFormat('pt-BR', {dateStyle: 'long'}).format(new Date(article.publishedAt))}</time>
        </div>
        {article.image?.url && <Image className="editorial-detail__hero" src={article.image.url} alt={article.image.alt || ''} width={article.image.width || 1400} height={article.image.height || 788} priority />}
        <PortableContent value={article.body} />
        {article.sources?.length ? (
          <section className="editorial-sources">
            <h2>Fontes e referências</h2>
            <ul>{article.sources.map((source) => <li key={source._key}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.title}{source.publisher ? ` — ${source.publisher}` : ''}</a></li>)}</ul>
          </section>
        ) : null}
        <Link className="text-link" href="/newsroom/artigos">Ver todos os artigos <ArrowUpRight /></Link>
      </article>
    </PageShell>
  )
}
