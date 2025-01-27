import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inouie Distribution',
  description: 'Plateforme de distribution de produits',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  )
}
