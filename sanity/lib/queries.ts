import { groq } from 'next-sanity'

// Fetches all countries for the homepage flag picker
export const allCountryPagesQuery = groq`
  *[_type == "countryPage"] | order(country asc) {
    _id,
    country,
    region,
    "slug": slug.current,
    flag {
      asset->{ url }
    }
  }
`

// Fetches a single country page and its casino list
export const countryPageBySlugQuery = groq`
  *[_type == "countryPage" && slug.current == $slug][0] {
    _id,
    title,
    country,
    language,
    "slug": slug.current,
    popupEnabled,
    popupTitle,
    popupSubtitle,
    casinos[] {
      _key,
      name,
      minimumDeposit,
      bonus,
      ctaLink,
      rating,
      logo {
        asset->{ url }
      }
    }
  }
`

// Fetches all slugs — used by Next.js to pre-render country pages
export const allSlugsQuery = groq`
  *[_type == "countryPage" && defined(slug.current)] {
    "slug": slug.current
  }
`
