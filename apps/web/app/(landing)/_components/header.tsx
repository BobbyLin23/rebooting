import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui/button'

export const Header = () => {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-primary flex items-center gap-2"
        >
          <Image src="/logo.svg" alt="logo" width={32} height={32} />
          Rebooting
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link
            href="#features"
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            About
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost">Log in</Button>
          <Button>Sign up</Button>
        </div>
      </div>
    </header>
  )
}
