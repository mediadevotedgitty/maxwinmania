import { defineField, defineType } from 'sanity'

export const casino = defineType({
  name: 'casino',
  title: 'Casino',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Casino Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'minimumDeposit',
      title: 'Minimum Deposit',
      type: 'string',
      placeholder: 'e.g. £10',
    }),
    defineField({
      name: 'bonus',
      title: 'Bonus',
      type: 'string',
      placeholder: 'e.g. 100% up to £200 + 50 Free Spins',
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'url',
      description: 'Affiliate link for the "Visit Casino" button',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      description: 'Score from 1 to 5 — supports halves (e.g. 4.5)',
      options: {
        list: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((v) => ({
          title: `${v} ★`,
          value: v,
        })),
        layout: 'radio',
      },
      validation: (Rule) => Rule.min(1).max(5),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'bonus',
      media: 'logo',
    },
  },
})
