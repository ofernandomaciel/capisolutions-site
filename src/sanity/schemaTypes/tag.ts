import {defineField, defineType} from 'sanity'

export const tagType = defineType({
  name: 'tag',
  title: 'Tags',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Nome', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'slug', title: 'Identificador', type: 'slug', options: {source: 'title', maxLength: 64}, validation: (Rule) => Rule.required()}),
  ],
})
