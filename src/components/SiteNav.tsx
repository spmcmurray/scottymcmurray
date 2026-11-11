'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useId, useRef, useState } from 'react'

type Variant = 'hero' | 'bar'

const links = [
  { href: '/#apps', label: 'Apps', key: 'apps' },
  { href: '/#about', label: 'About', key: 'about' },
  { href: '/guides/ai-analyst-agent', label: 'Guide', key: 'guide' },
  { href: '/support', label: 'Support', key: 'support' },
] as const

export default function SiteNav({ variant }: { variant: Variant }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuId = useId()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const current = (key: (typeof links)[number]['key']) => {
    if (key === 'apps') return pathname === '/'
    if (key === 'guide') return pathname.startsWith('/guides')
    if (key === 'support') return pathname === '/support'
    return false
  }

  return (
    <header className={variant === 'hero' ? 'site-nav hero-nav' : 'site-nav bar-nav'}>
      <a className="skip" href="#main">Skip to content</a>
      <Link href="/" className="wordmark">
        <span className="mk" aria-hidden="true">SM</span>
        <span>Scott McMurray</span>
      </Link>
      <nav className="navpill glass" aria-label="Primary">
        {links.map((link) => {
          const isCurrent = current(link.key)
          return (
            <Link
              key={link.key}
              href={link.href}
              className={isCurrent ? 'on' : undefined}
              aria-current={isCurrent ? 'page' : undefined}
            >
              {link.label}
            </Link>
          )
        })}
      </nav>
      {variant === 'bar' && (
        <button
          ref={buttonRef}
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      )}
      {variant === 'bar' && (
        <nav
          id={menuId}
          className={open ? 'mobile-nav open' : 'mobile-nav'}
          aria-label="Primary"
          hidden={!open}
        >
          {links.map((link) => {
            const isCurrent = current(link.key)
            return (
              <Link
                key={link.key}
                href={link.href}
                aria-current={isCurrent ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      )}
      <Link href="/support" className="pill white touch">Get in touch</Link>
    </header>
  )
}
