import { Button } from '@/components/ui/button'

import { Logo } from './logo'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 py-2 bg-background/60 backdrop-blur">
      <div className="flex items-center justify-between container mx-auto">
        <Logo />
        <Link href="/sign-in">
          <Button variant="outline">Sign In</Button>
        </Link>
      </div>
    </header>
  )
}
