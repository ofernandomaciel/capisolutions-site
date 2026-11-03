import {defineArrayMember, defineField, defineType} from 'sanity'

export const articleType = defineType({
  name: 'article',
  title: 'Artigos',
  type: 'document',
  groups: [
    {name: 'content', title: 'Conteúdo', default: true},
    {name: 'organization', title: 'Organização'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({name: 'title', title: 'Título', type: 'string', group: 'content', validation: (Rule) => Rule.required().min(10).max(120)}),
    defineField({name: 'slug', title: 'URL', type: 'slug', group: 'content', options: {source: 'title', maxLength: 96}, validation: (Rule) => Rule.required()}),
    defineField({
      name: 'format',
      title: 'Formato editorial',
      type: 'string',
      group: 'organization',
      options: {list: ['Artigo', 'Análise', 'Explicador', 'Curadoria'], layout: 'radio'},
      initialValue: 'Artigo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'excerpt', title: 'Resumo', type: 'text', rows: 4, group: 'content', validation: (Rule) => Rule.required().min(80).max(280)}),
    defineField({name: 'body', title: 'Texto', type: 'richText', group: 'content', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'featuredImage',
      title: 'Imagem principal',
      type: 'image',
      group: 'content',
      options: {hotspot: true},
      fields: [
        defineField({name: 'alt', title: 'Texto alternativo', type: 'string', validation: (Rule) => Rule.required()}),
        defineField({name: 'caption', title: 'Legenda', type: 'string'}),
        defineField({name: 'credit', title: 'Crédito', type: 'string'}),
      ],
    }),
    defineField({name: 'author', title: 'Autor', type: 'reference', to: [{type: 'person'}], group: 'organization', validation: (Rule) => Rule.required()}),
    defineField({name: 'category', title: 'Categoria', type: 'reference', to: [{type: 'category'}], group: 'organization', validation: (Rule) => Rule.required()}),
    defineField({name: 'tags', title: 'Tags', type: 'array', group: 'organization', of: [defineArrayMember({type: 'reference', to: [{type: 'tag'}]})]}),
    defineField({name: 'publishedAt', title: 'Data de publicação', type: 'datetime', group: 'organization', validation: (Rule) => Rule.required()}),
    defineField({name: 'updatedAt', title: 'Data de atualização', type: 'datetime', group: 'organization'}),
    defineField({name: 'featured', title: 'Destacar na Newsroom', type: 'boolean', group: 'organization', initialValue: false}),
    defineField({name: 'sources', title: 'Fontes', type: 'array', group: 'content', of: [defineArrayMember({type: 'source'})]}),
    defineField({name: 'seo', title: 'SEO e compartilhamento', type: 'seo', group: 'seo'}),
  ],
  orderings: [{title: 'Mais recentes', name: 'publishedAtDesc', by: [{field: 'publishedAt', direction: 'desc'}]}],
  preview: {select: {title: 'title', subtitle: 'category.title', media: 'featuredImage'}},
})
