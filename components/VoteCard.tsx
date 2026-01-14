'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Clock } from 'lucide-react'

interface VoteCardProps {
  siteName: string
  description: string
  timer: string
  url: string
  index: number
}

export default function VoteCard({ siteName, description, timer, url, index }: VoteCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-[#111827] border-2 border-[#1f2937] rounded-3xl p-8 transition-all duration-300 hover:border-[#4a90e2] group flex flex-col"
    >
      {/* Gradient Top Border */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#667eea] to-[#764ba2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-3xl"
      />

      {/* Header */}
      <div className="text-center mb-6">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6 }}
          className="text-5xl mb-4"
        >
          🗳️
        </motion.div>
        <h3 className="text-2xl font-bold">{siteName}</h3>
      </div>

      {/* Body */}
      <div className="flex-1 mb-6">
        <p className="text-[#b8c5d1] leading-relaxed mb-4">{description}</p>
        <div className="flex items-center gap-2 text-[#b8c5d1] text-sm">
          <Clock size={16} />
          <span>{timer}</span>
        </div>
      </div>

      {/* Footer */}
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-xl font-semibold hover:shadow-lg transition-shadow"
      >
        Voter maintenant
        <ExternalLink size={18} />
      </motion.a>
    </motion.div>
  )
}
