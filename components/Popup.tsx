'use client'

import { useEffect, useState } from 'react'

type PopupProps = {
  title: string
  subtitle?: string
}

export default function Popup({ title, subtitle }: PopupProps) {
  const [visible, setVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (sessionStorage.getItem('popup-dismissed')) return
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  function dismiss() {
    setVisible(false)
    sessionStorage.setItem('popup-dismissed', '1')
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name: firstName }),
      })

      const data = await res.json()

      if (res.ok) {
        setSubmitted(true)
        sessionStorage.setItem('popup-dismissed', '1')
        setTimeout(dismiss, 2500)
      } else {
        setError(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (!visible) return null

  return (
    <>
      <div className="popup-overlay" onClick={dismiss} />
      <div className="popup" role="dialog" aria-modal="true">
        <button className="popup-close" onClick={dismiss} aria-label="Close">✕</button>

        <div className="popup-body">
          {!submitted ? (
            <>
              <div className="popup-icon">🎰</div>
              <h2 className="popup-title">{title}</h2>
              {subtitle && <p className="popup-subtitle">{subtitle}</p>}

              <form className="popup-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  disabled={loading}
                  className="popup-input"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                  className="popup-input"
                />
                <button type="submit" disabled={loading} className="popup-btn">
                  {loading ? 'Joining…' : 'Join Now'}
                </button>
                {error && <p className="popup-error">{error}</p>}
              </form>

              <p className="popup-legal">
                By signing up you agree to receive promotional emails. Unsubscribe anytime.
              </p>
            </>
          ) : (
            <div className="popup-success">
              <div className="popup-success-icon">✓</div>
              <h2 className="popup-title">You&apos;re in!</h2>
              <p className="popup-subtitle">Check your inbox for exclusive offers.</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
