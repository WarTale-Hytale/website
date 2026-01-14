'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const DISCORD_URL = 'https://discord.gg/wartale'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/vote', label: 'Vote' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0e1a]/95 backdrop-blur-lg border-b border-[#1f2937] shadow-lg'
          : 'bg-[#0a0e1a]/95 backdrop-blur-lg border-b border-[#1f2937]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <Image
                src="/assets/logo_sans_fond.png"
                alt="WarTale Logo"
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
              WarTale
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-medium transition-colors duration-300 ${
                  pathname === link.href
                    ? 'text-white'
                    : 'text-[#b8c5d1] hover:text-white'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-full"
                  />
                )}
              </Link>
            ))}
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-lg font-medium hover:scale-105 transition-transform duration-300"
            >
              Discord
            </a>
            <button
              onClick={() => alert('Boutique bientôt disponible !')}
              className="px-4 py-2 text-[#b8c5d1] hover:text-white transition-colors duration-300"
            >
              Boutique
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#111827] border-t border-[#1f2937] overflow-hidden"
          >
            <div className="px-5 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block font-medium transition-colors ${
                    pathname === link.href
                      ? 'text-white'
                      : 'text-[#b8c5d1] hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-lg font-medium text-center"
              >
                Discord
              </a>
              <button
                onClick={() => {
                  setIsOpen(false)
                  alert('Boutique bientôt disponible !')
                }}
                className="block w-full text-left px-4 py-2 text-[#b8c5d1] hover:text-white transition-colors"
              >
                Boutique
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
