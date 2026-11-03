import {defineField, defineType} from 'sanity'

export const personType = defineType({
  name: 'person',
  title: 'Pessoas',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Nome', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'slug', title: 'Identificador da URL', type: 'slug', options: {source: 'name', maxLength: 96}, validation: (Rule) => Rule.required()}),
    defineField({name: 'role', title: 'Função ou especialidade', type: 'string'}),
    defineField({name: 'bio', title: 'Biografia', type: 'text', rows: 5, validation: (Rule) => Rule.max(800)}),
    defineField({
      name: 'photo',
      title: 'Foto',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: 'Texto alternativo', type: 'string', validation: (Rule) => Rule.required()})],
    }),
    defineField({name: 'linkedin', title: 'LinkedIn', type: 'url'}),
    defineField({name: 'website', title: 'Site', type: 'url'}),
  ],
  preview: {select: {title: 'name', subtitle: 'role', media: 'photo'}},
})
