import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', display: 'swap', weight: ['300', '400', '500'] })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' })

export const metadata: Metadata = {
  title: 'Canary Modular System — Construimos hogares. Diseñamos libertad.',
  description:
    'Canary Modular System. Diseñamos y construimos viviendas modulares de máxima calidad en Canarias. Personalizadas, eficientes, llave en mano. Transformamos la forma de vivir.',
  keywords:
    'canary modular system, construcción modular canarias, viviendas modulares lujo, casas modulares canarias, vivienda prefabricada acero, construcción industrializada canarias',
  openGraph: {
    title: 'Canary Modular System — Construimos hogares. Diseñamos libertad.',
    description: 'Viviendas modulares de alta calidad en Canarias. Personalizadas, eficientes y llave en mano.',
    type: 'website',
    images: [{ url: '/banner.png', width: 1200, height: 630, alt: 'Canary Modular System' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Canary Modular System — Construimos hogares. Diseñamos libertad.',
    description: 'Viviendas modulares de alta calidad en Canarias. Personalizadas, eficientes y llave en mano.',
    images: ['/banner.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
