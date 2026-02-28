'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const links = [
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-7">
      <Link href="/" className="font-display text-2xl font-light tracking-widest text-[#1c1917]">
        JM
      </Link>
      <ul className="flex gap-10">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={clsx(
                'font-body text-[11px] tracking-[0.18em] uppercase transition-colors duration-300',
                pathname === href
                  ? 'text-[#1c1917]'
                  : 'text-[#1c1917]/40 hover:text-[#1c1917]'
              )}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
