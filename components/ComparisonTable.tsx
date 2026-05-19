type Casino = {
  _key: string
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

export default function ComparisonTable({ casinos }: { casinos: Casino[] }) {
  if (!casinos.length) {
    return (
      <p style={{ color: 'var(--text-muted)', marginTop: '24px' }}>
        No casinos listed yet.
      </p>
    )
  }

  return (
    <div>
      <div className="table-header">
        <span>Casino</span>
        <span>Rating</span>
        <span>Min. Deposit</span>
        <span>Bonus</span>
        <span></span>
      </div>

      <div className="table-wrap">
        {casinos.map((casino, index) => {
          const rank = index + 1
          return (
            <div
              key={casino._key}
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
              <div className="casino-field">
                <span className="casino-field-label">Rating</span>
                {casino.rating ? (
                  <StarRating rating={casino.rating} />
                ) : (
                  <span className="casino-field-value">—</span>
                )}
              </div>

              {/* Min deposit */}
              <div className="casino-field">
                <span className="casino-field-label">Min. Deposit</span>
                <span className="casino-field-value">
                  {casino.minimumDeposit ?? '—'}
                </span>
              </div>

              {/* Bonus */}
              <div className="casino-field">
                <span className="casino-field-label">Bonus</span>
                <span className="casino-field-value casino-bonus-value">
                  {casino.bonus ?? '—'}
                </span>
              </div>

              {/* CTA */}
              <div>
                {casino.ctaLink ? (
                  <a
                    href={casino.ctaLink}
                    className="cta-btn"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                  >
                    Visit Casino
                  </a>
                ) : (
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                    No link
                  </span>
                )}
              </div>

              {/* Disclaimer */}
              <div className="casino-disclaimer">
                18+ | New customers only. T&amp;Cs apply. Play responsibly. BeGambleAware.org
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
