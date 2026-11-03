import Link from 'next/link'
import {ArrowUpRight} from '@/components/icons'
import {EditorialCard} from '@/components/editorial-card'
import {PageShell} from '@/components/page-shell'
import {pageMetadata} from '@/lib/metadata'
import {client} from '@/sanity/lib/client'
import {interviewsQuery} from '@/sanity/lib/queries'
import type {InterviewSummary} from '@/sanity/lib/types'

export const metadata = pageMetadata({title: 'Entrevistas — Capi Newsroom', description: 'Conversas da Capi Newsroom com quem está construindo o futuro.', path: '/newsroom/entrevistas'})
export const revalidate = 60

export default async function InterviewsPage() {
  const interviews = await client.fetch<InterviewSummary[]>(interviewsQuery, {}, {next: {revalidate}})

  return (
    <PageShell kicker="Newsroom · Entrevistas" title="Conversas com quem está construindo o futuro." description="Boas perguntas, contexto e revisão editorial antes de cada publicação.">
      {interviews.length ? (
        <section className="editorial-grid" aria-label="Entrevistas publicadas">
          {interviews.map((interview) => <EditorialCard key={interview._id} kind="interview" item={interview} />)}
        </section>
      ) : (
        <section className="editorial-empty editorial-empty--cyan">
          <span>00</span><h2>Nenhuma conversa publicada ainda.</h2>
          <p>As entrevistas entram no ar somente depois da revisão e da aprovação do convidado.</p>
          <Link className="text-link" href="/newsroom">Voltar para a Newsroom <ArrowUpRight /></Link>
        </section>
      )}
    </PageShell>
  )
}
