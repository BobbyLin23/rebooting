import { Footer } from './_components/footer'
import { Header } from './_components/header'

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
