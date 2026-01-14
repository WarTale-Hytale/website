import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import VoteCard from '@/components/VoteCard'
import { motion } from 'framer-motion'
import { Info } from 'lucide-react'

const voteSites = [
  {
    siteName: 'Hytale.Game',
    description:
      'Votez pour WarTale sur Hytale.Game et aidez-nous à être mieux référencés dans la liste des serveurs Hytale.',
    timer: 'Toutes les 6 heures',
    url: 'https://hytale.game/vote/wartale',
  },
  {
    siteName: 'Hytale-Servs',
    description:
      'Votez pour WarTale sur Hytale-Servs et soutenez notre serveur dans le classement des serveurs Hytale français.',
    timer: 'Toutes les 8 heures',
    url: 'https://hytale-servs.com/vote/wartale',
  },
  {
    siteName: 'Serveur-Privé.net',
    description:
      'Votez pour WarTale sur Serveur-Privé.net et soutenez notre serveur dans le classement des serveurs Hytale français.',
    timer: 'Toutes les 1h30',
    url: 'https://serveur-prive.net/vote/wartale',
  },
]

export default function VotePage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-5 bg-[#050810]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent"
          >
            Votez pour WarTale
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#b8c5d1] leading-relaxed max-w-2xl mx-auto"
          >
            Aidez-nous à améliorer notre référencement en votant pour WarTale sur les différents sites de vote ! Chaque
            vote compte et nous aide à faire connaître notre serveur.
          </motion.p>
        </div>
      </section>

      {/* Vote Sites */}
      <section className="py-16 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {voteSites.map((site, index) => (
              <VoteCard key={index} {...site} index={index} />
            ))}
          </div>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#111827] border-2 border-[#1f2937] rounded-2xl p-8 max-w-3xl mx-auto"
          >
            <div className="flex gap-6 items-start">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="text-4xl flex-shrink-0"
              >
                <Info className="w-10 h-10 text-[#4a90e2]" />
              </motion.div>
              <div>
                <h4 className="text-xl font-semibold mb-3">Pourquoi voter ?</h4>
                <p className="text-[#b8c5d1] leading-relaxed">
                  Votre vote nous aide à améliorer notre visibilité et à attirer de nouveaux joueurs. Plus nous sommes
                  visibles, plus la communauté grandit et plus l'expérience de jeu s'améliore pour tous !
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
