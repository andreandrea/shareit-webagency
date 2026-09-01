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
  title: 'ShareIT Web Agency — Web app e agent AI su misura per il tuo business',
  description:
    'Esploriamo a fondo il tuo business, poi costruiamo web app su misura e agent AI addestrati sui tuoi dati e integrati nei tuoi processi. Niente template, niente soluzioni preconfezionate.',
  keywords: [
    'web app su misura',
    'sviluppo software personalizzato',
    'agent AI aziendali',
    'intelligenza artificiale per aziende',
    'configuratore prodotto online',
    'analisi processi aziendali',
    'digitalizzazione processi',
    'ShareIT web agency',
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'ShareIT Web Agency — Prima capiamo il tuo business, poi lo costruiamo',
    description:
      'Analisi del business, web app su misura e agent AI integrati nei tuoi processi. Due esempi: i configuratori di Fotorecord ed Eternografiche.',
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
