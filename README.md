# Portfolio — Paul-Emile | AI Creative Strategist

Portfolio personnel présentant mes services et réalisations en tant que freelance AI content creator et creative strategist.

## Services présentés

- **Sites Web** — Landing pages, sites vitrines, sites e-commerce
- **UGC Vidéo par IA** — Vidéos publicitaires générées par IA (Sora, Kling, Seedance, Veo 3, ElevenLabs, CapCut)
- **Automatisations IA** — Agents IA vocaux, workflows n8n, intégrations API
- **SaaS & Micro-SaaS** — Produits SaaS propulsés par l'IA

## Stack technique

- **React** + **Vite** — Framework et build tool
- **Tailwind CSS 4** — Styling utility-first
- **Framer Motion** — Animations
- **React Icons** — Icônes
- **Web3Forms** — Envoi du formulaire de contact

## Installation

```bash
# Cloner le repo
git clone https://github.com/polopolo77/opportunit-tudiante.git
cd opportunit-tudiante

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build pour la production
npm run build
```

## Personnaliser le contenu

### Modifier les projets

Tous les projets sont centralisés dans `src/data/projects.js`. Pour ajouter un projet :

1. Ouvrir `src/data/projects.js`
2. Ajouter un objet dans le tableau correspondant (`sitesProjects`, `ugcProjects`, `automationProjects`, `saasProjects`)
3. Suivre la structure existante (titre, description, tags, image, etc.)

### Modifier les liens sociaux

Dans `src/data/projects.js`, modifier l'objet `socialLinks` avec vos vrais liens LinkedIn et email.

### Configurer le formulaire de contact

1. Créer un compte gratuit sur [Web3Forms](https://web3forms.com/)
2. Remplacer `VOTRE_CLE_WEB3FORMS` dans `src/components/Contact.jsx` par votre clé d'accès

### Modifier les images

Remplacer les URLs `placehold.co` dans `src/data/projects.js` par les vraies images de vos projets (screenshots, thumbnails vidéo, mockups).

## Déploiement

### Vercel (recommandé)

1. Connecter le repo GitHub à [Vercel](https://vercel.com)
2. Le build se fait automatiquement (`npm run build`)
3. Le site est déployé en quelques secondes

### Netlify

1. Connecter le repo à [Netlify](https://netlify.com)
2. Commande de build : `npm run build`
3. Répertoire de publication : `dist`

## Structure du projet

```
src/
├── components/
│   ├── Navbar.jsx           # Navigation + toggle dark/light mode
│   ├── Hero.jsx             # Section d'accueil (hero)
│   ├── ProjectCard.jsx      # Card réutilisable pour tous les types de projets
│   ├── SectionHeader.jsx    # En-tête réutilisable pour les sections
│   ├── SitesSection.jsx     # Section Sites Web
│   ├── UgcSection.jsx       # Section UGC Vidéo
│   ├── AutomationsSection.jsx # Section Automatisations
│   ├── SaasSection.jsx      # Section SaaS
│   ├── Contact.jsx          # Section Contact + formulaire
│   └── Footer.jsx           # Pied de page
├── data/
│   └── projects.js          # Données des projets (à personnaliser)
├── hooks/
│   ├── useDarkMode.js       # Hook dark/light mode
│   └── useScrollReveal.js   # Hook animations au scroll
├── App.jsx                  # Composant principal
├── main.jsx                 # Point d'entrée
└── index.css                # Styles globaux + Tailwind
```

## Licence

Projet personnel — tous droits réservés.
