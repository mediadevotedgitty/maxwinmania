import { Translation } from '@/lib/translations'

type Casino = {
  _id: string
  name: string
  minimumDeposit?: string
  bonus?: string
  ctaLink?: string
  rating?: number
  logo?: {
    asset?: { url: string }
  }
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="stars" aria-label={`Rating: ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = rating >= star
        const half = !filled && rating >= star - 0.5
        if (filled) {
          return <span key={star} className="star star-full">★</span>
        }
        if (half) {
          return (
            <span key={star} className="star star-half-wrap">
              <span className="star-half-empty">★</span>
              <span className="star-half-fill">★</span>
            </span>
          )
        }
        return <span key={star} className="star star-empty">★</span>
      })}
      <span className="star-value">{rating.toFixed(1)}</span>
    </div>
  )
}

export default function ComparisonTable({ casinos, t }: { casinos: Casino[], t: Translation }) {
  if (!casinos.length) {
    return (
      <p style={{ color: 'var(--text-muted)', marginTop: '24px' }}>
        {t.noCasinos}
      </p>
    )
  }

  return (
    <div>
      <div className="table-header">
        <span>{t.tableHeaders.casino}</span>
        <span>{t.tableHeaders.rating}</span>
        <span>{t.tableHeaders.minDeposit}</span>
        <span>{t.tableHeaders.bonus}</span>
        <span></span>
      </div>

      <div className="table-wrap">
        {casinos.filter(Boolean).map((casino, index) => {
          const rank = index + 1
          return (
            <div
              key={casino._id}
              className="casino-row"
              data-rank={rank <= 3 ? rank : undefined}
            >
              {/* Rank badge — half outside left edge */}
              <div className="casino-rank-badge">{rank}</div>

              {/* Logo */}
              <div className="casino-logo-wrap">
                {casino.logo?.asset?.url ? (
                  <img
                    src={casino.logo.asset.url}
                    alt={`${casino.name} logo`}
                    className="casino-logo"
                  />
                ) : (
                  <span className="casino-logo-placeholder">{casino.name}</span>
                )}
              </div>

              {/* Rating */}
              <div className="casino-field casino-field-rating">
                <span className="casino-field-label">{t.tableHeaders.rating}</span>
                {casino.rating ? (
                  <StarRating rating={casino.rating} />
                ) : (
                  <span className="casino-field-value">—</span>
                )}
              </div>

              {/* Min deposit */}
              <div className="casino-field casino-field-deposit">
                <span className="casino-field-label">{t.tableHeaders.minDeposit}</span>
                <span className="casino-field-value">
                  {casino.minimumDeposit ?? '—'}
                </span>
              </div>

              {/* Bonus */}
              <div className="casino-field casino-field-bonus">
                <span className="casino-field-label">{t.tableHeaders.bonus}</span>
                <span className="casino-field-value casino-bonus-value">
                  {casino.bonus ?? '—'}
                </span>
              </div>

              {/* CTA */}
              <div>
                {casino.ctaLink ? (
                  <a
                    href={casino.ctaLink}
                    className="cta-btn go-final"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                  >
                    {t.visitCasino}
                  </a>
                ) : (
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                    {t.noLink}
                  </span>
                )}
              </div>

              {/* Disclaimer */}
              <div className="casino-disclaimer">
                {t.disclaimer}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
