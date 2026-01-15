'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Server, 
  Users, 
  Sword, 
  Pickaxe, 
  Package,
  ChevronRight,
  Shield,
  Zap,
  Target,
  Gem
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const wikiSections = [
  {
    id: 'optimisation',
    title: 'Serveur Optimisé',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500',
    content: {
      description: 'WarTale est conçu pour offrir une expérience de jeu fluide et performante.',
      features: [
        'Performance optimale grâce à une configuration serveur de pointe',
        'Réduction des lag et des latences pour une expérience de jeu fluide',
        'Gestion efficace des ressources pour supporter de nombreux joueurs simultanés',
        'Mises à jour régulières pour maintenir les performances optimales',
        'Infrastructure robuste garantissant une stabilité maximale'
      ]
    }
  },
  {
    id: 'factions',
    title: 'Système de Faction & Claim',
    icon: Shield,
    color: 'from-blue-500 to-cyan-500',
    content: {
      description: 'Le serveur utilise le mod HyFactions qui offre un système complet de gestion de factions et de protection de territoires.',
      features: [
        'Création et gestion de factions avec des rôles hiérarchiques (Leader, Officier, Membre)',
        'Système de claim pour protéger vos territoires contre les intrusions',
        'Commandes de faction : /f create, /f claim, /f unclaim, /f invite, /f kick',
        'Protection des builds et des coffres dans les zones claimées',
        'Système de diplomatie entre factions (alliés, ennemis, neutres)',
        'Gestion des permissions par rôle au sein de la faction',
        'Map interactive pour visualiser les territoires claimés',
        'Limite de claims basée sur le nombre de membres de la faction'
      ],
      commands: [
        { cmd: '/f create <nom>', desc: 'Créer une nouvelle faction' },
        { cmd: '/f claim', desc: 'Claimer le chunk où vous vous trouvez' },
        { cmd: '/f unclaim', desc: 'Retirer le claim d\'un chunk' },
        { cmd: '/f invite <joueur>', desc: 'Inviter un joueur dans votre faction' },
        { cmd: '/f home', desc: 'Se téléporter au home de la faction' },
        { cmd: '/f sethome', desc: 'Définir le home de la faction' },
        { cmd: '/f info', desc: 'Voir les informations de votre faction' }
      ]
    }
  },
  {
    id: 'pvp',
    title: 'PvP Activé',
    icon: Sword,
    color: 'from-red-500 to-pink-500',
    content: {
      description: 'Le PvP est activé sur tout le serveur, permettant des combats épiques entre joueurs et factions.',
      features: [
        'PvP activé dans toutes les zones du serveur',
        'Système de combat équilibré pour des affrontements fair-play',
        'Protection des zones claimées contre le PvP (sauf si configuré autrement)',
        'Système de récompenses pour les victoires en PvP',
        'Combat entre factions pour le contrôle des territoires',
        'Gestion des trêves et des alliances pour éviter les combats non désirés',
        'Statistiques de PvP (K/D, victoires, défaites)',
        'Événements PvP réguliers organisés par le staff'
      ],
      tips: [
        'Toujours être préparé : équipement, potions, nourriture',
        'Former des alliances stratégiques avec d\'autres factions',
        'Utiliser le système de claim pour protéger vos bases',
        'Respecter les règles du serveur et les autres joueurs'
      ]
    }
  },
  {
    id: 'lucky-mining',
    title: 'Lucky Mining',
    icon: Gem,
    color: 'from-green-500 to-emerald-500',
    content: {
      description: 'Le mod Lucky Mining augmente vos chances d\'obtenir des minerais supplémentaires lors de l\'exploitation minière.',
      features: [
        'Système de chance progressive : plus vous minez de minerais consécutifs, plus votre chance augmente',
        'Bonus de minerais supplémentaires lorsque la chance se déclenche',
        'Compatible avec tous les minerais : Adamantite, Cobalt, Cuivre, Or, Fer, Mithril, Onyxium, Argent, Thorium',
        'Le streak se réinitialise si vous arrêtez de miner ou changez de type de bloc',
        'Temps limité entre chaque cassage pour maintenir le streak actif',
        'Récompenses équilibrées pour encourager l\'exploitation minière',
        'Configuration optimisée pour une expérience de jeu équitable'
      ],
      howItWorks: [
        'Commencez à miner un minerai (par exemple, du fer)',
        'Chaque minerai miné augmente votre chance de bonus',
        'Si la chance se déclenche, vous obtenez un minerai supplémentaire',
        'Continuez à miner rapidement pour maintenir votre streak',
        'Le streak se réinitialise si vous minez un autre type de bloc ou si vous attendez trop longtemps'
      ]
    }
  },
  {
    id: 'overstacked',
    title: 'Overstacked',
    icon: Package,
    color: 'from-purple-500 to-indigo-500',
    content: {
      description: 'Le mod Overstacked permet d\'augmenter la taille maximale des stacks pour de nombreux objets, facilitant la gestion de l\'inventaire.',
      features: [
        'Augmentation des limites de stack pour les ressources communes',
        'Configuration personnalisable pour chaque type d\'objet',
        'Réduction de l\'encombrement de l\'inventaire',
        'Meilleure gestion des ressources lors des longues sessions de jeu',
        'Optimisation de l\'espace de stockage dans les coffres',
        'Compatible avec tous les objets stackables du jeu',
        'Configuration équilibrée pour maintenir le gameplay'
      ],
      benefits: [
        'Moins de voyages vers les coffres lors de l\'exploitation minière',
        'Stockage plus efficace des ressources collectées',
        'Gain de temps lors de la gestion de l\'inventaire',
        'Expérience de jeu plus fluide et moins frustrante'
      ]
    }
  }
]

export default function WikiPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  return (
    <main>
      <Navbar />
      <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 mt-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
            Wiki WarTale
          </h1>
          <p className="text-xl text-[#b8c5d1] max-w-2xl mx-auto">
            Découvrez toutes les fonctionnalités et mécaniques de notre serveur PvP Faction
          </p>
        </motion.div>

        {/* Wiki Sections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {wikiSections.map((section, index) => {
            const Icon = section.icon
            const isActive = activeSection === section.id

            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveSection(isActive ? null : section.id)}
                className={`bg-[#111827] border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                  isActive
                    ? 'border-[#667eea] shadow-xl shadow-[#667eea]/20'
                    : 'border-[#1f2937] hover:border-[#4a90e2] hover:shadow-lg'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${section.color} mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 text-[#b8c5d1] transition-transform duration-300 ${
                      isActive ? 'rotate-90' : ''
                    }`}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">{section.title}</h3>
                <p className="text-sm text-[#b8c5d1] line-clamp-2">
                  {section.content.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Detailed Content */}
        <AnimatePresence mode="wait">
          {activeSection && (
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-[#111827] border-2 border-[#1f2937] rounded-2xl p-8 md:p-12"
            >
              {wikiSections
                .filter((section) => section.id === activeSection)
                .map((section) => {
                  const Icon = section.icon
                  return (
                    <div key={section.id}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`p-4 rounded-xl bg-gradient-to-r ${section.color}`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-4xl font-bold text-white">{section.title}</h2>
                      </div>

                      <p className="text-lg text-[#b8c5d1] mb-8 leading-relaxed">
                        {section.content.description}
                      </p>

                      {/* Features */}
                      {section.content.features && (
                        <div className="mb-8">
                          <h3 className="text-2xl font-semibold mb-4 text-white flex items-center gap-2">
                            <Target className="w-6 h-6" />
                            Fonctionnalités
                          </h3>
                          <ul className="space-y-3">
                            {section.content.features.map((feature, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="flex items-start gap-3 text-[#b8c5d1]"
                              >
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${section.color} mt-2 flex-shrink-0`} />
                                <span>{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Commands */}
                      {section.content.commands && (
                        <div className="mb-8">
                          <h3 className="text-2xl font-semibold mb-4 text-white flex items-center gap-2">
                            <Server className="w-6 h-6" />
                            Commandes Principales
                          </h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            {section.content.commands.map((command, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-[#0a0e1a] border border-[#1f2937] rounded-lg p-4"
                              >
                                <code className="text-[#667eea] font-mono text-sm block mb-2">
                                  {command.cmd}
                                </code>
                                <p className="text-[#b8c5d1] text-sm">{command.desc}</p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* How it works */}
                      {section.content.howItWorks && (
                        <div className="mb-8">
                          <h3 className="text-2xl font-semibold mb-4 text-white flex items-center gap-2">
                            <Zap className="w-6 h-6" />
                            Comment ça fonctionne
                          </h3>
                          <ol className="space-y-3 list-decimal list-inside">
                            {section.content.howItWorks.map((step, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="text-[#b8c5d1]"
                              >
                                {step}
                              </motion.li>
                            ))}
                          </ol>
                        </div>
                      )}

                      {/* Tips */}
                      {section.content.tips && (
                        <div className="mb-8">
                          <h3 className="text-2xl font-semibold mb-4 text-white flex items-center gap-2">
                            <Users className="w-6 h-6" />
                            Conseils
                          </h3>
                          <ul className="space-y-3">
                            {section.content.tips.map((tip, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="flex items-start gap-3 text-[#b8c5d1]"
                              >
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${section.color} mt-2 flex-shrink-0`} />
                                <span>{tip}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Benefits */}
                      {section.content.benefits && (
                        <div>
                          <h3 className="text-2xl font-semibold mb-4 text-white flex items-center gap-2">
                            <Package className="w-6 h-6" />
                            Avantages
                          </h3>
                          <ul className="space-y-3">
                            {section.content.benefits.map((benefit, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="flex items-start gap-3 text-[#b8c5d1]"
                              >
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${section.color} mt-2 flex-shrink-0`} />
                                <span>{benefit}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )
                })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Info */}
        {!activeSection && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12 text-[#b8c5d1]"
          >
            <p className="text-lg">
              Cliquez sur une section ci-dessus pour découvrir tous les détails
            </p>
          </motion.div>
        )}
      </div>
      <Footer />
    </main>
  )
}
