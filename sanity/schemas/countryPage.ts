import { defineArrayMember, defineField, defineType } from 'sanity'

export const countryPage = defineType({
  name: 'countryPage',
  title: 'Country Page',
  type: 'document',
  fields: [
    defineField({
      name: 'country',
      title: 'Country Name',
      type: 'string',
      description: 'Display name shown in the sidebar, e.g. "United Kingdom"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Headline shown at the top of the country page, e.g. "Best Online Casinos in the UK"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: 'Short country code used in the URL — e.g. "uk" becomes /uk/',
      options: {
        source: 'country',
        slugify: (input: string) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]/g, '')
            .slice(0, 10),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'region',
      title: 'Region',
      type: 'string',
      description: 'Used to group countries on the homepage',
      options: {
        list: [
          { title: 'Europe', value: 'europe' },
          { title: 'North America', value: 'north-america' },
          { title: 'South America', value: 'south-america' },
          { title: 'Asia', value: 'asia' },
          { title: 'Oceania', value: 'oceania' },
          { title: 'Africa', value: 'africa' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'flag',
      title: 'Flag Image',
      type: 'image',
      description: 'Country flag shown on the homepage picker',
      options: { hotspot: true },
    }),
    defineField({
      name: 'casinos',
      title: 'Casinos',
      type: 'array',
      description: 'Add and reorder casinos for this country. Drag to change the display order.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'casinoEntry',
          title: 'Casino',
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
              validation: (Rule) =>
                Rule.uri({ scheme: ['http', 'https'] }),
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
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'country',
      subtitle: 'region',
    },
    prepare(selection: Record<string, string>) {
      const regionLabels: Record<string, string> = {
        europe: 'Europe',
        'north-america': 'North America',
        'south-america': 'South America',
        asia: 'Asia',
        oceania: 'Oceania',
        africa: 'Africa',
      }
      return {
        title: selection.title,
        subtitle: regionLabels[selection.subtitle] ?? selection.subtitle,
      }
    },
  },
})
