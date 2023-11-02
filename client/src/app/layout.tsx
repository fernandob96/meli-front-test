import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import "bootstrap-icons/font/bootstrap-icons.css";

import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mercado Libre Colombia - Envíos Gratis en el día',
  description: 'Compre productos con Envío Gratis en el día en Mercado Libre Colombia. Encuentre miles de marcas y productos a precios increíbles.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        {children}</body>
    </html>
  )
}
