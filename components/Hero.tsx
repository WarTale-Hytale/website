'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const DISCORD_URL = 'https://discord.gg/wartale'
const SERVER_IP = 'play.wartale.fr'

export default function Hero() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(SERVER_IP)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Erreur lors de la copie:', err)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-5 pt-32 pb-20 overflow-hidden">
      {/* Background Particles */}
      <div className="particles-bg" />

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-radial from-[#4a90e2]/10 via-transparent to-[#0a0e1a]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        {/* Banner */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-8"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
            whileHover={{ scale: 1.05 }}
            className="relative w-full max-w-2xl h-auto"
          >
            <Image
              src="/assets/banner_sans_fond.png"
              alt="WarTale Banner"
              width={800}
              height={200}
              className="object-contain drop-shadow-2xl w-full h-auto"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-block px-6 py-2 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-full text-sm font-semibold mb-8 pulse-animation"
        >
          SERVEUR OUVERT
        </motion.div>

        {/* Title */}
        <motion.h1 variants={itemVariants} className="mb-6">
          <motion.span
            className="block text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#667eea] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
          >
            WarTale
          </motion.span>
          <motion.span
            variants={itemVariants}
            className="block text-xl md:text-2xl text-[#b8c5d1] font-normal"
          >
            Serveur Hytale PvP Faction & KitPvP
          </motion.span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-[#b8c5d1] mb-10 leading-relaxed max-w-3xl mx-auto"
        >
          Plongez dans l'action avec notre serveur Hytale français ! Affrontez vos ennemis en mode{' '}
          <strong className="text-white">PvP Faction</strong> ou testez vos compétences dans nos arènes{' '}
          <strong className="text-white">KitPvP</strong>. L'aventure vous attend !
        </motion.p>

        {/* IP Section */}
        <motion.div variants={itemVariants} className="mb-10">
          <p className="text-[#b8c5d1] mb-4">Connectez-vous avec l'IP :</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.code
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-[#111827] border-2 border-[#1f2937] rounded-xl text-xl font-semibold font-mono text-white hover:border-[#4a90e2] transition-colors"
            >
              {SERVER_IP}
            </motion.code>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={copyToClipboard}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-xl font-semibold hover:shadow-lg transition-shadow"
            >
              {copied ? (
                <>
                  <Check size={20} />
                  <span>Copié !</span>
                </>
              ) : (
                <>
                  <Copy size={20} />
                  <span>Copier</span>
                </>
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-xl font-semibold hover:shadow-2xl transition-shadow"
          >
            <span className="text-xl">💬</span>
            Rejoindre le Discord
            <ExternalLink size={18} />
          </motion.a>
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/vote"
              className="flex items-center gap-2 px-8 py-4 bg-[#111827] border-2 border-[#1f2937] rounded-xl font-semibold hover:border-[#4a90e2] transition-colors"
            >
              <span className="text-xl">🗳️</span>
              Voter pour le serveur
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
