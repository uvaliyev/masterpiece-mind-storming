import './css/style.css'
import '@/app/globals.css'

import { Inter } from 'next/font/google'

import Header from './components/ui/header'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: 'Шедевр штурма сознания',
  description: 'Шедевр штурма сознания',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
