import type { Metadata } from 'next'
import { Roboto, Carrois_Gothic } from 'next/font/google'
import '@/styles/global.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--Roboto' })
const CarroisGothic = Carrois_Gothic({ weight: ['400'], subsets: ['latin'], variable: '--CarroisGothic' })

export const metadata: Metadata = {
  title: 'Portfólio | Paulo Marolla',
  description: 'Conheca meus trabalhos e entre em contato!',
  authors: [
    {
      name: 'Paulo Marolla',
      url: 'https://marolla.com.br',
    }
  ],
  keywords: ['portfolio', 'desenvolvimento', 'web', 'frontend', 'backend', 'fullstack', 'react', 'nextjs', 'typescript'],
  openGraph: {
    title: 'Portfólio | Paulo Marolla',
    description: 'Conheca meus trabalhos e entre em contato!',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 700,
        alt: 'Logo do site',
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true} className={`${roboto.className} ${CarroisGothic.className}`}>{children}</body>
    </html>
  )
}
