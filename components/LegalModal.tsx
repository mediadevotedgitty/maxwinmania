'use client'

import { useEffect, useRef } from 'react'

type LegalModalProps = {
  title: string
  content: string
  onClose: () => void
}

export default function LegalModal({ title, content, onClose }: LegalModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  // Close on Escape key
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <>
      <div className="legal-overlay" onClick={onClose} />
      <div className="legal-modal" role="dialog" aria-modal="true" aria-label={title}>
        <div className="legal-modal-header">
          <h2 className="legal-modal-title">{title}</h2>
          <button className="popup-close" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="legal-modal-body" ref={modalRef}>
          <div
            className="legal-modal-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </>
  )
}
