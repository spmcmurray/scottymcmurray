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
  title: 'Scott McMurray - App Developer Portfolio',
  description: 'Ohio-based self-taught developer building profitable apps. Portfolio of iOS apps and games focused on fitness, faith, and fun.',
  keywords: ['Scott McMurray', 'Scotty McMurray', 'app developer', 'Ohio developer', 'TENFOLD', 'Church Explorer', 'RADICAL RUSH', 'workout app', 'Christian learning', 'iOS games'],
  authors: [{ name: 'Scott McMurray' }],
  openGraph: {
    title: 'Scott McMurray - Simple Apps to Simplify & Delight',
    description: 'Ohio-based developer creating thoughtful apps and games that simplify your day or make it more fun.',

    url: 'https://scottymcmurray.com',
    siteName: 'Scott McMurray',
    locale: 'en_US',
    type: 'website',
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
