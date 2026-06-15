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
    inboxroadListId,
    "casinos": casinos[defined(@->)]-> {
      _id,
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

// Fetches a single landing page by slug
export const landingPageBySlugQuery = groq`
  *[_type == "landingPage" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    bonus,
    wager,
    ctaLink,
    ctaLabel,
    logo {
      asset->{ url }
    }
  }
`

// Fetches all landing page slugs — used by Next.js to pre-render
export const allLandingPageSlugsQuery = groq`
  *[_type == "landingPage" && defined(slug.current)] {
    "slug": slug.current
  }
`
