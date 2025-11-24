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
          <span className={styles.logoText}>SM</span>
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
