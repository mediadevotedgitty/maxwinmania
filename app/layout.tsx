import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'MaxWinMania',
  description: 'Find the best online casinos in your country',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div style={{ paddingTop: '77px' }}>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
