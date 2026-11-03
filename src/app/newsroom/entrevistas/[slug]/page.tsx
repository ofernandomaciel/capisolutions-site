import type {Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {notFound} from 'next/navigation'
import {ArrowUpRight} from '@/components/icons'
import {PageShell} from '@/components/page-shell'
import {PortableContent} from '@/components/portable-content'
import {client} from '@/sanity/lib/client'
import {interviewBySlugQuery} from '@/sanity/lib/queries'
import type {InterviewDetail} from '@/sanity/lib/types'

type InterviewPageProps = {params: Promise<{slug: string}>}
export const revalidate = 60

async function getInterview(slug: string) {
  return client.fetch<InterviewDetail | null>(interviewBySlugQuery, {slug}, {next: {revalidate}})
}

export async function generateMetadata({params}: InterviewPageProps): Promise<Metadata> {
  const {slug} = await params
  const interview = await getInterview(slug)
  if (!interview) return {}
  const title = interview.seo?.title || interview.title
  const description = interview.seo?.description || interview.introduction
  const image = interview.seo?.image?.url || interview.image?.url
  return {
    title,
    description,
    alternates: {canonical: `/newsroom/entrevistas/${slug}`},
    robots: interview.seo?.noIndex ? {index: false, follow: true} : undefined,
    openGraph: {title, description, type: 'article', publishedTime: interview.publishedAt, images: image ? [{url: image}] : undefined},
  }
}

export default async function InterviewPage({params}: InterviewPageProps) {
  const {slug} = await params
  const interview = await getInterview(slug)
  if (!interview) notFound()

  return (
    <PageShell kicker="Capi Newsroom · Entrevista" title={interview.title} description={interview.introduction}>
      <article className="editorial-detail">
        <div className="editorial-detail__meta">
          <span>{interview.guest?.name || 'Convidado'}</span>
          <time dateTime={interview.publishedAt}>{new Intl.DateTimeFormat('pt-BR', {dateStyle: 'long'}).format(new Date(interview.publishedAt))}</time>
        </div>
        {interview.image?.url && <Image className="editorial-detail__hero" src={interview.image.url} alt={interview.image.alt || ''} width={interview.image.width || 1400} height={interview.image.height || 788} priority />}
        <div className="interview-conversation">
          {interview.conversation.map((item) => <section key={item._key}><h2>{item.question}</h2><PortableContent value={item.answer} /></section>)}
        </div>
        <Link className="text-link" href="/newsroom/entrevistas">Ver todas as entrevistas <ArrowUpRight /></Link>
      </article>
    </PageShell>
  )
}
