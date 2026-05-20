import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
