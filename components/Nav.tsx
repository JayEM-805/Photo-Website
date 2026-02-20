'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const links = [
  { href: '/', label: 'Home' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6 mix-blend-multiply">
      <Link href="/" className="font-display text-xl text-ink">
        JM {/* Update with your name/initials */}
      </Link>
      <ul className="flex gap-8">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={clsx(
                'font-body text-xs tracking-widest uppercase transition-colors duration-200',
                pathname === href
                  ? 'text-accent'
                  : 'text-ink/60 hover:text-ink'
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
