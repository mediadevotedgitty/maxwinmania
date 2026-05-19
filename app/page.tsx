import { client } from '@/sanity/lib/client'
import { allCountryPagesQuery } from '@/sanity/lib/queries'
import CountryPicker from '@/components/CountryPicker'

export const revalidate = 60 // revalidate at most every 60 seconds

export default async function HomePage() {
  const countries = await client.fetch(allCountryPagesQuery)

  return (
    <main className="home">
      <h1 className="home-title">Choose Your <span>Country</span></h1>
      <CountryPicker countries={countries} />
    </main>
  )
}
