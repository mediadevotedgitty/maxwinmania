import { defineField, defineType } from 'sanity'

export const landingPage = defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main headline shown on the landing page, e.g. "Claim Your 100 Free Spins"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: 'Used in the URL — e.g. "uk-free-spins" becomes /lp/uk-free-spins/',
      options: {
        source: 'title',
        slugify: (input: string) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]/g, '')
            .slice(0, 50),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Casino Logo',
      type: 'image',
      description: 'Logo of the casino being promoted',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bonus',
      title: 'Bonus',
      type: 'string',
      description: 'The offer, e.g. "100% up to £200 + 50 Free Spins"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'wager',
      title: 'Wagering Requirement',
      type: 'string',
      description: 'e.g. "35x bonus amount"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'url',
      description: 'Affiliate link for the claim button',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA Button Label',
      type: 'string',
      description: 'Text on the button — defaults to "Claim Offer" if left blank',
      placeholder: 'Claim Offer',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'bonus',
      media: 'logo',
    },
  },
})
