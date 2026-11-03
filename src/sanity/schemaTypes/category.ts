import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Categorias',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Nome', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'slug', title: 'Identificador da URL', type: 'slug', options: {source: 'title', maxLength: 64}, validation: (Rule) => Rule.required()}),
    defineField({name: 'description', title: 'Descrição', type: 'text', rows: 3}),
    defineField({name: 'order', title: 'Ordem', type: 'number', validation: (Rule) => Rule.integer().min(0)}),
  ],
  orderings: [{title: 'Ordem editorial', name: 'editorialOrder', by: [{field: 'order', direction: 'asc'}]}],
})
