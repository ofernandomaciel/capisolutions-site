import Image from 'next/image'
import {PortableText, type PortableTextComponents} from '@portabletext/react'
import type {PortableTextBlock} from '@portabletext/types'

type PortableImageValue = {url?: string; alt?: string; caption?: string; credit?: string; width?: number; height?: number}

const components: PortableTextComponents = {
  marks: {
    link: ({children, value}) => {
      const href = typeof value?.href === 'string' ? value.href : '#'
      const external = href.startsWith('http')
      return <a href={href} target={external && value?.blank !== false ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>{children}</a>
    },
  },
  types: {
    image: ({value}: {value: PortableImageValue}) => value.url ? (
      <figure>
        <Image src={value.url} alt={value.alt || ''} width={value.width || 1200} height={value.height || 675} />
        {(value.caption || value.credit) && <figcaption>{[value.caption, value.credit].filter(Boolean).join(' · ')}</figcaption>}
      </figure>
    ) : null,
  },
}

export function PortableContent({value}: {value: PortableTextBlock[]}) {
  return <div className="editorial-prose"><PortableText value={value} components={components} /></div>
}
