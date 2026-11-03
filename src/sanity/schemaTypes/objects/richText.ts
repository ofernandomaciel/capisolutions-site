import {defineArrayMember, defineField, defineType} from 'sanity'

export const richTextType = defineType({
  name: 'richText',
  title: 'Texto editorial',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'Título 2', value: 'h2'},
        {title: 'Título 3', value: 'h3'},
        {title: 'Citação', value: 'blockquote'},
      ],
      marks: {
        annotations: [
          defineArrayMember({
            name: 'link',
            title: 'Link',
            type: 'object',
            fields: [
              defineField({name: 'href', title: 'URL', type: 'url', validation: (Rule) => Rule.required()}),
              defineField({name: 'blank', title: 'Abrir em nova aba', type: 'boolean', initialValue: true}),
            ],
          }),
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({name: 'alt', title: 'Texto alternativo', type: 'string', validation: (Rule) => Rule.required()}),
        defineField({name: 'caption', title: 'Legenda', type: 'string'}),
        defineField({name: 'credit', title: 'Crédito', type: 'string'}),
      ],
    }),
  ],
})
