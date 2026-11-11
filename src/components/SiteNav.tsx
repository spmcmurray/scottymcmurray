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

function normalize(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith('/')) return pathname.slice(0, -1)
  return pathname
}

export default function SiteNav({ variant }: { variant: Variant }) {
  const pathname = normalize(usePathname() || '/')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [spot, setSpot] = useState<'home' | 'apps' | 'about' | ''>('home')
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLElement>(null)
  const menuId = useId()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 12
      setScrolled((value) => (value === next ? value : next))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (pathname !== '/') {
      setSpot('')
      return
    }
    const apps = document.getElementById('apps')
    const about = document.getElementById('about')
    const skills = document.getElementById('skills')
    const mark = () => {
      const y = window.scrollY + 96
      let next: 'home' | 'apps' | 'about' | '' = 'home'
      if (skills && y >= skills.offsetTop) next = ''
      else if (about && y >= about.offsetTop) next = 'about'
      else if (apps && y >= apps.offsetTop) next = 'apps'
      setSpot((value) => (value === next ? value : next))
    }
    mark()
    window.addEventListener('scroll', mark, { passive: true })
    return () => window.removeEventListener('scroll', mark)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const menu = menuRef.current
    const linksInMenu = menu ? Array.from(menu.querySelectorAll<HTMLAnchorElement>('a')) : []
    linksInMenu[0]?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
        return
      }
      if (event.key !== 'Tab' || !menu) return
      const focusable = [buttonRef.current, ...linksInMenu].filter(Boolean) as HTMLElement[]
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const current = (key: (typeof links)[number]['key']) => {
    if (key === 'apps') {
      if (pathname.startsWith('/apps')) return true
      return pathname === '/' && (spot === 'home' || spot === 'apps')
    }
    if (key === 'about') return pathname === '/' && spot === 'about'
    if (key === 'guide') return pathname.startsWith('/guides')
    if (key === 'support') return pathname === '/support'
    return false
  }

  return (
    <header className={`site-nav ${variant === 'hero' ? 'hero-nav' : 'bar-nav'}${scrolled ? ' is-scrolled' : ''}`}>
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
      <nav
        ref={menuRef}
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
      <Link href="/support" className="pill white touch">Get in touch</Link>
    </header>
  )
}
