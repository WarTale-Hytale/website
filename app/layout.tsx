import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WarTale - Serveur Hytale PvP Faction & Practice',
  description: 'WarTale - Serveur Hytale français avec mode PvP Faction et Practice. Rejoignez l\'aventure sur play.wartale.fr',
  icons: {
    icon: '/assets/logo_sans_fond.png',
    shortcut: '/assets/logo_sans_fond.png',
    apple: '/assets/logo_sans_fond.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
