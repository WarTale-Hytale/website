'use client'

import { motion } from 'framer-motion'
import { ShoppingBag, Clock } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function BoutiquePage() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen pt-32 pb-20 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#111827] border-2 border-[#1f2937] rounded-2xl p-12 md:p-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
              className="flex justify-center mb-6"
            >
              <div className="p-6 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-full">
                <ShoppingBag className="w-16 h-16 text-white" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent"
            >
              Boutique
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center gap-3 mb-8 text-[#b8c5d1]"
            >
              <Clock className="w-6 h-6" />
              <p className="text-xl">Bientôt disponible !</p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-[#b8c5d1] mb-8 leading-relaxed"
            >
              La boutique WarTale est actuellement en développement. Nous travaillons dur pour vous offrir une expérience d'achat optimale avec des articles exclusifs et des récompenses pour soutenir le serveur.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                href="/"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-xl font-semibold hover:scale-105 transition-transform duration-300"
              >
                Retour à l'accueil
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
