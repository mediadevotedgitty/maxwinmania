'use client'

import { useEffect, useState } from 'react'

type PopupProps = {
  title: string
  subtitle?: string
}

export default function Popup({ title, subtitle }: PopupProps) {
  const [visible, setVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    // Don't show if already dismissed this session
    if (sessionStorage.getItem('popup-dismissed')) return

    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  function dismiss() {
    setVisible(false)
    sessionStorage.setItem('popup-dismissed', '1')
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    // ESP integration goes here later
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
                  required
                  className="popup-input"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="popup-input"
                />
                <button type="submit" className="popup-btn">
                  Join Now
                </button>
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
