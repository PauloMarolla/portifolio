import type { Metadata } from 'next'
import { Roboto, Carrois_Gothic } from 'next/font/google'
import '@/styles/global.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500'], variable: '--Roboto' })
const CarroisGothic = Carrois_Gothic({ weight: ['400'], subsets: ['latin'], variable: '--CarroisGothic' })

export const metadata: Metadata = {
  title: 'Portifolio | Paulo Marolla',
  description: 'Conheca meus trabalhos e entre em contato!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${roboto.className} ${CarroisGothic.className}`}>{children}</body>
    </html>
  )
}
