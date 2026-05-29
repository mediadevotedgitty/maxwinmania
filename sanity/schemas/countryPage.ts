import { defineArrayMember, defineField, defineType } from 'sanity'
// defineArrayMember kept for reference type usage

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
      name: 'language',
      title: 'Language',
      type: 'string',
      description: 'Used to translate all UI labels on this page',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'French (Français)', value: 'fr' },
          { title: 'Spanish (Español)', value: 'es' },
          { title: 'German (Deutsch)', value: 'de' },
          { title: 'Danish (Dansk)', value: 'da' },
          { title: 'Swedish (Svenska)', value: 'sv' },
          { title: 'Dutch (Nederlands)', value: 'nl' },
          { title: 'Italian (Italiano)', value: 'it' },
          { title: 'Polish (Polski)', value: 'pl' },
        ],
        layout: 'dropdown',
      },
      initialValue: 'en',
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
      name: 'popupEnabled',
      title: 'Enable Popup',
      type: 'boolean',
      description: 'Show a signup popup on this country page',
      initialValue: false,
    }),
    defineField({
      name: 'popupTitle',
      title: 'Popup Title',
      type: 'string',
      placeholder: 'e.g. Get 50 Free Spins — No Deposit Required!',
      hidden: ({ document }) => !document?.popupEnabled,
    }),
    defineField({
      name: 'popupSubtitle',
      title: 'Popup Subtitle',
      type: 'string',
      placeholder: 'e.g. Sign up and get exclusive offers straight to your inbox.',
      hidden: ({ document }) => !document?.popupEnabled,
    }),
    defineField({
      name: 'casinos',
      title: 'Casinos',
      type: 'array',
      description: 'Add and reorder casinos for this country. Drag to change the display order.',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'casino' }],
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
