import type { Metadata } from 'next'
import { Playfair_Display, Karla, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const karla = Karla({ 
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Scott McMurray - App Developer',
  description: 'Simple apps for a simpler life. Ohio-based self-taught developer building iOS apps and games focused on fitness, faith, and fun.',
  keywords: ['Scott McMurray', 'Scotty McMurray', 'app developer', 'Ohio developer', 'TENFOLD', 'Church Explorer', 'RADICAL RUSH', 'workout app', 'Christian learning', 'iOS games'],
  authors: [{ name: 'Scott McMurray' }],
  icons: {
    icon: '/favicon.svg',
    apple: '/logo.svg',
  },
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
    <html lang="en" className={`${playfair.variable} ${karla.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
