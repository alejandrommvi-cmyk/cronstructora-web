import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cronstructora — Arquitectura y Construcción Premium',
  description:
    'Construimos espacios excepcionales. Especialistas en villas de lujo, reformas premium y obra nueva de alto nivel en Madrid, Barcelona, Marbella e Ibiza.',
  keywords:
    'constructora premium, villas lujo, reformas integrales, arquitectura moderna, construcción exclusiva, marbella, ibiza, madrid, barcelona',
  openGraph: {
    title: 'Cronstructora — Arquitectura y Construcción Premium',
    description: 'Construimos espacios excepcionales.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
