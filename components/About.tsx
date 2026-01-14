'use client'

import { motion } from 'framer-motion'
import { Globe, Users, Zap } from 'lucide-react'

const features = [
  {
    icon: Globe,
    title: 'Monde Vaste',
    description: 'Explorez un monde généré procéduralement',
  },
  {
    icon: Users,
    title: 'Communauté',
    description: 'Rejoignez une communauté active et accueillante',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Serveur optimisé pour une expérience fluide',
  },
]

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="py-20 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
              À Propos de WarTale
            </h2>
            <div className="space-y-6 text-lg text-[#b8c5d1] leading-relaxed">
              <p>
                WarTale est un <strong className="text-white">serveur Hytale français</strong> dédié aux joueurs qui
                recherchent l'action et la compétition. Que vous préfériez les batailles de factions en survie ou les
                combats rapides en arène, WarTale a quelque chose pour vous.
              </p>
              <p>
                Notre serveur offre une expérience de jeu équilibrée avec un système de factions robuste pour le mode
                survie, et bientôt des arènes KitPvP pour les amateurs de combat pur. Rejoignez une communauté active
                et vivez des aventures épiques !
              </p>
            </div>
          </motion.div>

          {/* Visual Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="bg-[#111827] border-2 border-[#1f2937] rounded-2xl p-6 text-center transition-all duration-300 hover:border-[#4a90e2] hover:shadow-xl"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl mb-4 flex justify-center"
                  >
                    <Icon className="w-12 h-12" />
                  </motion.div>
                  <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-[#b8c5d1]">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
