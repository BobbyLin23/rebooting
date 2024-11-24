import { Features } from './_components/features'
import { Hero } from './_components/hero'
import { Pricing } from './_components/pricing'

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      <Features />
      <Pricing />
    </main>
  )
}
