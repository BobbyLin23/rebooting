import Link from 'next/link'
import Image from 'next/image'

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/logo.svg" alt="logo" width={32} height={32} />
      <h1 className="text-2xl font-bold">Rebooting</h1>
    </Link>
  )
}
