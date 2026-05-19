import { notFound } from 'next/navigation'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { countryPageBySlugQuery, allSlugsQuery } from '@/sanity/lib/queries'
import ComparisonTable from '@/components/ComparisonTable'

export const revalidate = 60

// Pre-render all known country slugs at build time
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

  return (
    <main className="country-page">
      <div className="country-page-inner">
        <Link href="/" className="back-link">
          ← All Countries
        </Link>

        <h1 className="page-title">{page.title}</h1>
        <p className="page-subtitle">
          {page.casinos?.length ?? 0} casinos reviewed &amp; ranked
        </p>

        <ComparisonTable casinos={page.casinos ?? []} />
      </div>
    </main>
  )
}
