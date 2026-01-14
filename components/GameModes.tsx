'use client'

import { motion } from 'framer-motion'
import { Sword, Target, Zap, Users, Shield, Trophy } from 'lucide-react'

const modes = [
  {
    status: 'OUVERT',
    statusColor: 'bg-[#50c878]',
    icon: Sword,
    title: 'PvP Faction',
    subtitle: 'Mode Survie - Actuellement Disponible',
    description:
      'Formez votre faction, construisez votre base et dominez le serveur ! Affrontez d\'autres factions dans des batailles épiques pour le contrôle du territoire. Le mode survie est actuellement ouvert et opérationnel.',
    features: ['Survie', 'Factions', 'PvP', 'Territoires'],
    gradient: 'from-[#667eea] to-[#764ba2]',
  },
  {
    status: 'PROCHAINEMENT',
    statusColor: 'bg-[#7b68ee]',
    icon: Target,
    title: 'KitPvP',
    subtitle: 'Arènes de Combat - Bientôt Disponible',
    description:
      'Testez vos compétences en combat dans nos arènes KitPvP ! Choisissez votre kit, affrontez d\'autres joueurs et montez dans le classement. Mode sans perte de stuff, parfait pour s\'entraîner et s\'amuser.',
    features: ['Arènes', 'Kits', 'Classement', 'Sans perte'],
    gradient: 'from-[#7b68ee] to-[#9d7fff]',
  },
]

export default function GameModes() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="py-20 px-5 bg-[#050810]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent"
        >
          Nos Modes de Jeu
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {modes.map((mode, index) => {
            const Icon = mode.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative bg-[#111827] border-2 border-[#1f2937] rounded-3xl p-8 transition-all duration-300 hover:border-[#4a90e2] group overflow-hidden"
              >
                {/* Gradient Top Border */}
                <motion.div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${mode.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                />

                {/* Status Badge */}
                <div className="flex justify-center mb-6">
                  <span
                    className={`${mode.statusColor} text-[#0a0e1a] px-4 py-1.5 rounded-full text-xs font-bold uppercase`}
                  >
                    {mode.status}
                  </span>
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="flex justify-center mb-6"
                >
                  <div className="text-6xl">
                    <Icon className="w-16 h-16 mx-auto" />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-center mb-2">{mode.title}</h3>
                <p className="text-[#b8c5d1] text-sm text-center mb-6">{mode.subtitle}</p>

                {/* Description */}
                <p className="text-[#b8c5d1] leading-relaxed mb-6">{mode.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {mode.features.map((feature, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1.5 bg-[#050810] border border-[#1f2937] rounded-lg text-xs text-[#b8c5d1]"
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
