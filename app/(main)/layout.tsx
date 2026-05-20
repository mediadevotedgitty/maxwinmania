import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <div style={{ paddingTop: '77px' }}>{children}</div>
      <Footer />
    </>
  )
}
