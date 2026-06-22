import type { Metadata } from 'next'
import { Titillium_Web, Orbitron } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const titilliumWeb = Titillium_Web({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-titillium',
})

const orbitron = Orbitron({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
  variable: '--font-orbitron',
})

export const metadata: Metadata = {
  title: 'ArtStore by ShareIT — Negozi online per fotografi e illustratori',
  description:
    'ShareIT Web Agency costruisce il tuo store brandizzato su misura. Tu porti il traffico social, noi gestiamo stampa Fine Art, cornici e spedizione. Zero abbonamento mensile.',
  keywords: [
    'negozio online fotografi',
    'store illustratori',
    'stampa fine art',
    'fulfillment stampe',
    'shop artisti italiani',
    'vendere fotografie online',
    'ShareIT web agency',
    'ArtStore',
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'ArtStore by ShareIT — Il negozio online che i fotografi meritano',
    description:
      'Store brandizzato, fulfillment premium, zero abbonamento. Porta il tuo pubblico social — noi stampiamo, incorniciamo e spediamo.',
    locale: 'it_IT',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={`${titilliumWeb.variable} ${orbitron.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">Vai al contenuto principale</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
