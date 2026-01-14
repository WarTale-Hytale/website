# WarTale - Site Web

Site web moderne pour le serveur Hytale WarTale, construit avec Next.js, TypeScript, Tailwind CSS et Framer Motion.

## 🚀 Technologies

- **Next.js 14** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styles utilitaires
- **Framer Motion** - Animations fluides
- **Lucide React** - Icônes modernes

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🏗️ Structure du Projet

```
/
├── app/
│   ├── layout.tsx      # Layout principal
│   ├── page.tsx        # Page d'accueil
│   ├── vote/
│   │   └── page.tsx    # Page de vote
│   └── globals.css     # Styles globaux
├── components/
│   ├── Navbar.tsx      # Navigation
│   ├── Hero.tsx        # Section hero
│   ├── GameModes.tsx   # Modes de jeu
│   ├── About.tsx       # Section à propos
│   ├── Footer.tsx      # Pied de page
│   └── VoteCard.tsx    # Carte de vote
└── public/
    └── assets/         # Images et assets
```

## 🎨 Fonctionnalités

- ✅ Page d'accueil avec IP du serveur
- ✅ Description des modes de jeu (PvP Faction & KitPvP)
- ✅ Page de vote avec 3 sites
- ✅ Animations fluides avec Framer Motion
- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Intégration Discord (discord.gg/wartale)
- ✅ Bouton boutique (à venir)

## 🔧 Configuration

### Lien Discord
Le lien Discord est configuré dans les composants : `discord.gg/wartale`

### Liens de Vote
Les liens de vote sont configurés dans `app/vote/page.tsx`. Modifiez les URLs selon vos besoins.

## 📱 Build Production

```bash
# Créer une build de production
npm run build

# Lancer le serveur de production
npm start
```

## 📄 Licence

Apache License 2.0
