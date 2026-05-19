import { notFound } from 'next/navigation'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { countryPageBySlugQuery, allSlugsQuery } from '@/sanity/lib/queries'
import ComparisonTable from '@/components/ComparisonTable'
import Popup from '@/components/Popup'
import { getTranslation } from '@/lib/translations'

export const revalidate = 60

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(allSlugsQuery)
  return slugs.map((s) => ({ country: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { country: string }
}) {
  const page = await client.fetch(countryPageBySlugQuery, {
    slug: params.country,
  })
  if (!page) return {}
  return {
    title: page.title,
    description: `Best online casinos in ${page.country}`,
  }
}

export default async function CountryPage({
  params,
}: {
  params: { country: string }
}) {
  const page = await client.fetch(countryPageBySlugQuery, {
    slug: params.country,
  })

  if (!page) notFound()

  const t = getTranslation(page.language)

  return (
    <main className="country-page">
      <div className="country-page-inner">
        <Link href="/" className="back-link">
          {t.allCountries}
        </Link>

        <h1 className="page-title">{page.title}</h1>
        <p className="page-subtitle">
          {t.casinosRanked(page.casinos?.length ?? 0)}
        </p>

        <ComparisonTable casinos={page.casinos ?? []} t={t} />
      </div>

      {page.popupEnabled && page.popupTitle && (
        <Popup title={page.popupTitle} subtitle={page.popupSubtitle} />
      )}
    </main>
  )
}
