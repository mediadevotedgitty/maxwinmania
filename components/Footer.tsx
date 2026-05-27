import Link from 'next/link'
import LegalButtons from './LegalButtons'
import NewsletterForm from './NewsletterForm'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <Link href="/" className="footer-logo">
          <img src="/logo.png" alt="MaxWinMania" />
        </Link>

        <div className="footer-disclaimer">
          <p>
            <strong>18+ | Play Responsibly.</strong> MaxWinMania is an independent casino comparison site.
            We do not operate any gambling services. Casino offers and bonuses are subject to change —
            always check the operator's website for the latest terms and conditions.
            Gambling can be addictive. Please play responsibly and only bet what you can afford to lose.
          </p>
          <p>
            If you or someone you know has a gambling problem, help is available at{' '}
            <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer">
              BeGambleAware.org
            </a>.
          </p>
        </div>

        <NewsletterForm />

        <LegalButtons />

        <p className="footer-copy">
          © {new Date().getFullYear()} MaxWinMania. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
