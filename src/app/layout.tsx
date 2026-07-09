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
  title: 'Scott McMurray - Data & AI Consultant',
  description: 'Data and AI consultant helping complex manufacturing businesses turn scattered data into production BI and AI systems — BI reporting, ML forecasting, and AI adoption.',
  keywords: ['Scott McMurray', 'Scotty McMurray', 'data consultant', 'AI consultant', 'BI consulting', 'manufacturing AI', 'ML forecasting', 'AI adoption strategy', 'AI adoption implementation', 'business intelligence consultant'],
  authors: [{ name: 'Scott McMurray' }],
  openGraph: {
    title: 'Scott McMurray - Data & AI Consultant',
    description: 'I help complex manufacturing businesses turn scattered data into production BI and AI systems, without the overhead of a full data team.',
    url: 'https://scottymcmurray.com',
    siteName: 'Scott McMurray',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: 'https://scottymcmurray.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Scott McMurray - Data & AI Consultant',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scott McMurray - Data & AI Consultant',
    description: 'I help complex manufacturing businesses turn scattered data into production BI and AI systems.',
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
