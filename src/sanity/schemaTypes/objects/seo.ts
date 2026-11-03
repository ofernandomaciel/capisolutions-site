import {defineField, defineType} from 'sanity'

export const seoType = defineType({
  name: 'seo',
  title: 'SEO e compartilhamento',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Título para buscadores',
      type: 'string',
      description: 'Se vazio, o título principal será utilizado.',
      validation: (Rule) => Rule.max(60).warning('Prefira até 60 caracteres.'),
    }),
    defineField({
      name: 'description',
      title: 'Descrição para buscadores',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(160).warning('Prefira até 160 caracteres.'),
    }),
    defineField({
      name: 'image',
      title: 'Imagem para compartilhamento',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({name: 'alt', title: 'Texto alternativo', type: 'string', validation: (Rule) => Rule.required()}),
      ],
    }),
    defineField({
      name: 'noIndex',
      title: 'Não indexar esta página',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
