'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <svg width="36" height="36" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="headerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#ff6b35', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#f4a261', stopOpacity: 1}} />
              </linearGradient>
            </defs>
            <text x="32" y="45" fontFamily="Georgia, serif" fontSize="40" fontWeight="600" textAnchor="middle" fill="url(#headerGradient)">SM</text>
          </svg>
        </Link>
        
        <nav className={styles.nav}>
          <Link href="/#apps" className={styles.navLink}>Apps</Link>
          <Link href="/#about" className={styles.navLink}>About</Link>
          <Link href="/support" className={styles.navLink}>Support</Link>
        </nav>
      </div>
    </header>
  )
}
