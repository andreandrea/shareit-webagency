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
  title: 'ShareIT - Innovazione Digitale',
  description:
    "ShareIT è un'agenzia digitale italiana specializzata nello sviluppo di soluzioni web e mobile innovative.",
  keywords: ['agenzia digitale', 'sviluppo web', 'app mobile', 'e-commerce', 'digital marketing', 'cloud', 'consulenza IT', 'Italia'],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'ShareIT - Innovazione Digitale',
    description: "ShareIT è un'agenzia digitale italiana specializzata nello sviluppo di soluzioni web e mobile innovative.",
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
