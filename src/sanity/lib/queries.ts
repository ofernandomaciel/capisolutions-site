import {defineQuery} from 'next-sanity'

const imageProjection = `{
  "url": asset->url,
  "width": asset->metadata.dimensions.width,
  "height": asset->metadata.dimensions.height,
  alt,
  caption,
  credit
}`

export const articlesQuery = defineQuery(`
  *[_type == "article" && defined(slug.current) && defined(publishedAt) && publishedAt <= now()]
  | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    format,
    excerpt,
    publishedAt,
    featured,
    "author": author->{name, role, "slug": slug.current},
    "category": category->{title, "slug": slug.current},
    "image": featuredImage ${imageProjection}
  }
`)

export const articleBySlugQuery = defineQuery(`
  *[_type == "article" && slug.current == $slug && defined(publishedAt) && publishedAt <= now()][0] {
    _id,
    title,
    "slug": slug.current,
    format,
    excerpt,
    publishedAt,
    updatedAt,
    featured,
    body[]{...,
      _type == "image" => ${imageProjection}
    },
    sources,
    "author": author->{name, role, "slug": slug.current},
    "category": category->{title, "slug": slug.current},
    "image": featuredImage ${imageProjection},
    "seo": seo{title, description, noIndex, "image": image ${imageProjection}}
  }
`)

export const interviewsQuery = defineQuery(`
  *[_type == "interview" && approvalStatus == "approved" && defined(slug.current) && defined(publishedAt) && publishedAt <= now()]
  | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    introduction,
    publishedAt,
    "guest": guest->{name, role, "slug": slug.current},
    "interviewer": interviewer->{name, role, "slug": slug.current},
    "image": featuredImage ${imageProjection}
  }
`)

export const interviewBySlugQuery = defineQuery(`
  *[_type == "interview" && approvalStatus == "approved" && slug.current == $slug && defined(publishedAt) && publishedAt <= now()][0] {
    _id,
    title,
    "slug": slug.current,
    introduction,
    publishedAt,
    conversation[]{_key, question, answer},
    "guest": guest->{name, role, "slug": slug.current},
    "interviewer": interviewer->{name, role, "slug": slug.current},
    "image": featuredImage ${imageProjection},
    "seo": seo{title, description, noIndex, "image": image ${imageProjection}}
  }
`)
