'use client'

import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'
import Footer from './Footer'
import SiteNav from './SiteNav'

export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  if (pathname === '/') {
    return <>{children}</>
  }

  return (
    <>
      <SiteNav variant="bar" />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  )
}
