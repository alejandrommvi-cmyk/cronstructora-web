import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
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
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
