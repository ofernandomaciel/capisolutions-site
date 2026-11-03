import type {PortableTextBlock} from '@portabletext/types'

export type EditorialImage = {
  url: string
  alt?: string
  caption?: string
  credit?: string
  width?: number
  height?: number
}

export type EditorialPerson = {
  name: string
  role?: string
  slug?: string
}

export type EditorialTaxonomy = {
  title: string
  slug?: string
}

export type ArticleSummary = {
  _id: string
  title: string
  slug: string
  format: string
  excerpt: string
  publishedAt: string
  featured?: boolean
  author?: EditorialPerson
  category?: EditorialTaxonomy
  image?: EditorialImage
}

export type ArticleDetail = ArticleSummary & {
  updatedAt?: string
  body: PortableTextBlock[]
  sources?: Array<{_key: string; title: string; url: string; publisher?: string}>
  seo?: {title?: string; description?: string; noIndex?: boolean; image?: EditorialImage}
}

export type InterviewSummary = {
  _id: string
  title: string
  slug: string
  introduction: string
  publishedAt: string
  guest?: EditorialPerson
  interviewer?: EditorialPerson
  image?: EditorialImage
}

export type InterviewDetail = InterviewSummary & {
  conversation: Array<{_key: string; question: string; answer: PortableTextBlock[]}>
  seo?: {title?: string; description?: string; noIndex?: boolean; image?: EditorialImage}
}
