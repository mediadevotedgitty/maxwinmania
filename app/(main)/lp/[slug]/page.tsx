import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { landingPageBySlugQuery, allLandingPageSlugsQuery } from '@/sanity/lib/queries'

export const revalidate = 60

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(allLandingPageSlugsQuery)
  return slugs.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const page = await client.fetch(landingPageBySlugQuery, { slug: params.slug })
  if (!page) return {}
  return {
    title: page.title,
    description: page.bonus,
  }
}

export default async function LandingPage({ params }: { params: { slug: string } }) {
  const page = await client.fetch(landingPageBySlugQuery, { slug: params.slug })

  if (!page) notFound()

  return (
    <main className="lp-page">
      <div className="lp-card">

        {page.logo?.asset?.url && (
          <img
            src={page.logo.asset.url}
            alt="Casino logo"
            className="lp-logo"
          />
        )}

        <h1 className="lp-title">{page.title}</h1>

        <div className="lp-offer">
          <div className="lp-offer-row">
            <span className="lp-offer-label">Bonus</span>
            <span className="lp-offer-value">{page.bonus}</span>
          </div>
          <div className="lp-offer-row">
            <span className="lp-offer-label">Wagering</span>
            <span className="lp-offer-value">{page.wager}</span>
          </div>
        </div>

        {page.ctaLink && (
          <a
            href={page.ctaLink}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="lp-cta"
          >
            {page.ctaLabel || 'Claim Offer'}
          </a>
        )}

        <p className="lp-legal">
          18+ | New customers only. Bonus subject to wagering requirements.
          Please gamble responsibly. <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer">BeGambleAware.org</a>
        </p>

      </div>
    </main>
  )
}
