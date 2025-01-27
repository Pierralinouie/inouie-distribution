import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inouie Distribution',
  description: 'Plateforme de distribution de produits'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="data:," />
      </head>
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  )
}
