import Image from 'next/image'
import Link from 'next/link'
import {ArrowUpRight} from '@/components/icons'
import type {ArticleSummary, InterviewSummary} from '@/sanity/lib/types'

type EditorialCardProps =
  | {kind: 'article'; item: ArticleSummary}
  | {kind: 'interview'; item: InterviewSummary}

export function EditorialCard({kind, item}: EditorialCardProps) {
  const href = kind === 'article' ? `/newsroom/artigos/${item.slug}` : `/newsroom/entrevistas/${item.slug}`
  const eyebrow = kind === 'article'
    ? `${item.format}${item.category ? ` · ${item.category.title}` : ''}`
    : `Entrevista${item.guest ? ` · ${item.guest.name}` : ''}`
  const summary = kind === 'article' ? item.excerpt : item.introduction

  return (
    <article className="editorial-card">
      {item.image?.url ? (
        <Image
          src={item.image.url}
          alt={item.image.alt || ''}
          width={item.image.width || 1200}
          height={item.image.height || 675}
        />
      ) : <div className="editorial-card__placeholder" aria-hidden="true" />}
      <div>
        <p>{eyebrow}</p>
        <h2>{item.title}</h2>
        <p>{summary}</p>
        <Link href={href}>Ler publicação <ArrowUpRight /></Link>
      </div>
    </article>
  )
}
