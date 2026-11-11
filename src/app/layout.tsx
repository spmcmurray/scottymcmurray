import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import './afterglow.css'
import FluteFilter from '@/components/FluteFilter'
import SiteChrome from '@/components/SiteChrome'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'Scott McMurray - App Developer',
  description: 'Simple apps for a simpler life. Designed by Scott McMurray in Ohio. iOS apps and games focused on fitness, faith, and fun.',
  keywords: ['Scott McMurray', 'Scotty McMurray', 'app developer', 'Ohio developer', 'TENFOLD', 'Church Explorer', 'RADICAL RUSH', 'workout app', 'Christian learning', 'iOS games'],
  authors: [{ name: 'Scott McMurray' }],
  openGraph: {
    title: 'Scott McMurray - Simple Apps for a Simpler Life',
    description: 'Simple apps for a simpler life. Ohio-based developer creating iOS apps and games that simplify your day or make it more fun.',
    url: 'https://scottymcmurray.com',
    siteName: 'Scott McMurray',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: 'https://scottymcmurray.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Scott McMurray - Simple Apps for a Simpler Life',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scott McMurray - Simple Apps for a Simpler Life',
    description: 'Simple apps for a simpler life. iOS apps and games that simplify your day or make it more fun.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <FluteFilter />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  )
}
