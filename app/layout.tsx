import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WarTale - Serveur Hytale PvP Faction & KitPvP',
  description: 'WarTale - Serveur Hytale français avec mode PvP Faction et KitPvP. Rejoignez l\'aventure sur play.wartale.fr',
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
