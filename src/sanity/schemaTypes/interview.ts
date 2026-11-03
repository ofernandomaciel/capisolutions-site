import {defineArrayMember, defineField, defineType} from 'sanity'

export const interviewType = defineType({
  name: 'interview',
  title: 'Entrevistas',
  type: 'document',
  groups: [
    {name: 'content', title: 'Conteúdo', default: true},
    {name: 'approval', title: 'Aprovação'},
    {name: 'organization', title: 'Organização'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({name: 'title', title: 'Título', type: 'string', group: 'content', validation: (Rule) => Rule.required().min(10).max(120)}),
    defineField({name: 'slug', title: 'URL', type: 'slug', group: 'content', options: {source: 'title', maxLength: 96}, validation: (Rule) => Rule.required()}),
    defineField({name: 'guest', title: 'Convidado', type: 'reference', to: [{type: 'person'}], group: 'content', validation: (Rule) => Rule.required()}),
    defineField({name: 'introduction', title: 'Introdução', type: 'text', rows: 5, group: 'content', validation: (Rule) => Rule.required().min(80).max(600)}),
    defineField({
      name: 'conversation',
      title: 'Conversa',
      type: 'array',
      group: 'content',
      validation: (Rule) => Rule.required().min(1),
      of: [
        defineArrayMember({
          name: 'questionAnswer',
          title: 'Pergunta e resposta',
          type: 'object',
          fields: [
            defineField({name: 'question', title: 'Pergunta', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'answer', title: 'Resposta', type: 'richText', validation: (Rule) => Rule.required()}),
          ],
          preview: {select: {title: 'question'}},
        }),
      ],
    }),
    defineField({
      name: 'featuredImage',
      title: 'Imagem principal',
      type: 'image',
      group: 'content',
      options: {hotspot: true},
      fields: [
        defineField({name: 'alt', title: 'Texto alternativo', type: 'string', validation: (Rule) => Rule.required()}),
        defineField({name: 'credit', title: 'Crédito', type: 'string'}),
      ],
    }),
    defineField({name: 'interviewer', title: 'Entrevistador', type: 'reference', to: [{type: 'person'}], group: 'organization', validation: (Rule) => Rule.required()}),
    defineField({name: 'tags', title: 'Tags', type: 'array', group: 'organization', of: [defineArrayMember({type: 'reference', to: [{type: 'tag'}]})]}),
    defineField({name: 'publishedAt', title: 'Data de publicação', type: 'datetime', group: 'organization'}),
    defineField({
      name: 'approvalStatus',
      title: 'Aprovação do convidado',
      type: 'string',
      group: 'approval',
      options: {list: [{title: 'Pendente', value: 'pending'}, {title: 'Aprovada', value: 'approved'}, {title: 'Revisão solicitada', value: 'changes'}], layout: 'radio'},
      initialValue: 'pending',
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'approvedBy', title: 'Aprovado por', type: 'string', group: 'approval', hidden: ({parent}) => parent?.approvalStatus !== 'approved'}),
    defineField({name: 'approvedAt', title: 'Data da aprovação', type: 'datetime', group: 'approval', hidden: ({parent}) => parent?.approvalStatus !== 'approved'}),
    defineField({name: 'seo', title: 'SEO e compartilhamento', type: 'seo', group: 'seo'}),
  ],
  validation: (Rule) => Rule.custom((document) => {
    if (document?.publishedAt && document?.approvalStatus !== 'approved') {
      return 'Uma entrevista com data de publicação precisa estar aprovada pelo convidado.'
    }
    return true
  }),
  orderings: [{title: 'Mais recentes', name: 'publishedAtDesc', by: [{field: 'publishedAt', direction: 'desc'}]}],
  preview: {select: {title: 'title', subtitle: 'guest.name', media: 'featuredImage'}},
})
