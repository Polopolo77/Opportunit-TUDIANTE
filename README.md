# Portfolio — Paul-Emile | AI Creative Strategist

Portfolio personnel avec effets visuels avancés, inspiré du style de [rissss21/portofolio](https://github.com/rissss21/portofolio).

## Services présentés

- **Sites Web** — Landing pages, sites vitrines, sites e-commerce
- **UGC Vidéo par IA** — Vidéos publicitaires générées par IA (Sora, Kling, Seedance, Veo 3, ElevenLabs, CapCut)
- **Automatisations IA** — Agents IA vocaux, workflows n8n, intégrations API
- **SaaS & Micro-SaaS** — Produits SaaS propulsés par l'IA

## Effets visuels

- **Aurora** — Fond WebGL animé avec shaders (via ogl)
- **ChromaGrid** — Grille de projets avec spotlight mouse-tracking et grayscale/reveal (via GSAP)
- **ShinyText** — Effet shimmer sur les textes
- **BlurText** — Animation mot par mot avec blur (via Framer Motion)
- **ProjectModal** — Modal animée au clic sur un projet
- **PreLoader** — Écran de chargement avec compteur 0→100
- **Dock** — Navigation macOS-style dans le footer (via Framer Motion)
- **Filtres** — Filtres par catégorie sur la grille de projets

## Stack technique

- **React 19** + **Vite** — Framework et build tool
- **Tailwind CSS 4** — Styling utility-first
- **GSAP** — Animations ChromaGrid + AOS
- **Framer Motion** — BlurText, CountUp, Dock
- **ogl** — Rendu WebGL Aurora
- **AOS** — Animations au scroll
- **React Icons** + **Remixicon** — Icônes
- **Web3Forms** — Envoi du formulaire de contact

## Installation

```bash
npm install
npm run dev
```

## Personnaliser le contenu

### Modifier les projets

Tous les projets sont dans `src/data/projects.js`. Chaque projet contient :

- `image` — URL de l'image/screenshot
- `title` — Titre du projet
- `subtitle` — Description courte (affichée sur la card)
- `fullDescription` — Description complète (affichée dans le modal)
- `borderColor` — Couleur de la bordure au hover
- `gradient` — Gradient de fond de la card
- `badge` — Badge affiché (Site Web, UGC Vidéo, Automatisation, SaaS, etc.)
- `tags` — Tags techniques
- `url` — Lien vers le projet/démo
- `result` — Résultat chiffré (optionnel, pour les automations)
- `section` — Catégorie pour le filtre (sites, ugc, automations, saas)

### Configurer le formulaire

Remplacer `VOTRE_CLE_WEB3FORMS` dans `src/App.jsx` par votre clé [Web3Forms](https://web3forms.com/).

### Modifier les liens sociaux

Mettre à jour `socialLinks` dans `src/data/projects.js`.

## Structure

```
src/
├── components/
│   ├── Aurora/           # Fond WebGL animé
│   ├── BlurText/         # Animation texte avec blur
│   ├── ChromaGrid/       # Grille de projets avec spotlight
│   ├── CountUp/          # Compteur animé
│   ├── Dock/             # Dock macOS dans le footer
│   ├── ProjectModal/     # Modal détail projet
│   ├── ShinyText/        # Effet shimmer texte
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   └── PreLoader.jsx
├── data/
│   └── projects.js       # Données des projets
├── App.jsx               # Composant principal
├── main.jsx
└── index.css
```

## Déploiement

```bash
npm run build
# Le dossier dist/ est prêt à déployer sur Vercel, Netlify, etc.
```
