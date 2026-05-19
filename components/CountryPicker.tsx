import Link from 'next/link'

type Country = {
  _id: string
  country: string
  region: string
  slug: string
  flag?: {
    asset?: { url: string }
  }
}

const REGION_ORDER = [
  'europe',
  'north-america',
  'south-america',
  'asia',
  'oceania',
  'africa',
]

const REGION_LABELS: Record<string, string> = {
  europe: 'Europe',
  'north-america': 'North America',
  'south-america': 'South America',
  asia: 'Asia',
  oceania: 'Oceania',
  africa: 'Africa',
}

export default function CountryPicker({ countries }: { countries: Country[] }) {
  // Group countries by region
  const grouped = countries.reduce<Record<string, Country[]>>((acc, country) => {
    const region = country.region || 'other'
    if (!acc[region]) acc[region] = []
    acc[region].push(country)
    return acc
  }, {})

  // Sort regions by the defined order
  const regions = Object.keys(grouped).sort((a, b) => {
    const ia = REGION_ORDER.indexOf(a)
    const ib = REGION_ORDER.indexOf(b)
    return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib)
  })

  return (
    <div className="picker">
      {regions.map((region) => (
        <div key={region} className="region-block">
          <div className="region-label">
            {REGION_LABELS[region] ?? region}
          </div>

          <div className="country-grid">
            {grouped[region]
              .sort((a, b) => a.country.localeCompare(b.country))
              .map((c) => (
                <Link
                  key={c._id}
                  href={`/${c.slug}/`}
                  className="country-link"
                >
                  {c.flag?.asset?.url ? (
                    <img
                      src={c.flag.asset.url}
                      alt={`${c.country} flag`}
                      className="country-flag"
                      width={72}
                      height={50}
                    />
                  ) : (
                    <div className="country-flag-placeholder">🏳️</div>
                  )}
                  <span className="country-name">{c.country}</span>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}
