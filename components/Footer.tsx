'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const DISCORD_URL = 'https://discord.gg/wartale'

export default function Footer() {
  return (
    <footer className="bg-[#050810] border-t border-[#1f2937] mt-20">
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/assets/logo_sans_fond.png"
                  alt="WarTale Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
                WarTale
              </span>
            </div>
            <p className="text-[#b8c5d1] text-sm">
              Serveur Hytale PvP Faction & Practice
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-8"
          >
            <div>
              <h4 className="text-white font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-[#b8c5d1] hover:text-white transition-colors text-sm">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/wiki" className="text-[#b8c5d1] hover:text-white transition-colors text-sm">
                    Wiki
                  </Link>
                </li>
                <li>
                  <Link href="/vote" className="text-[#b8c5d1] hover:text-white transition-colors text-sm">
                    Vote
                  </Link>
                </li>
                <li>
                  <a
                    href={DISCORD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#b8c5d1] hover:text-white transition-colors text-sm"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <Link href="/boutique" className="text-[#b8c5d1] hover:text-white transition-colors text-sm">
                    Boutique
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Serveur</h4>
              <ul className="space-y-2">
                <li>
                  <code className="text-[#4a90e2] text-sm">play.wartale.fr</code>
                </li>
                <li className="text-[#b8c5d1] text-sm">PvP Faction (Ouvert)</li>
                <li className="text-[#b8c5d1] text-sm">Practice (Prochainement)</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-[#1f2937] text-center text-[#b8c5d1] text-sm"
        >
          <p>&copy; 2026 WarTale. Tous droits réservés. Hytale est une marque de Hypixel Studios.</p>
        </motion.div>
      </div>
    </footer>
  )
}
