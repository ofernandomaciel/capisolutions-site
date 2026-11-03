import {defineField, defineType} from 'sanity'

export const sourceType = defineType({
  name: 'source',
  title: 'Fonte',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Título', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'url', title: 'URL', type: 'url', validation: (Rule) => Rule.required()}),
    defineField({name: 'publisher', title: 'Veículo ou autor', type: 'string'}),
    defineField({name: 'publishedAt', title: 'Data da publicação', type: 'date'}),
    defineField({name: 'accessedAt', title: 'Data de acesso', type: 'date'}),
  ],
  preview: {select: {title: 'title', subtitle: 'publisher'}},
})
