/**
 * Données des projets du portfolio
 * Modifier ce fichier pour ajouter/supprimer des projets sans toucher aux composants
 */

// ===== Projets Sites Web =====
export const sitesProjects = [
  {
    id: 'site-1',
    title: 'LuxImmo — Agence Immobilière',
    description: 'Landing page premium pour une agence immobilière haut de gamme. Design épuré, galerie de biens avec filtres, formulaire de prise de rendez-vous intégré.',
    tags: ['Landing Page', 'Immobilier', 'React'],
    image: 'https://placehold.co/600x400/1f2937/6366f1?text=LuxImmo',
    link: '#',
    type: 'site',
  },
  {
    id: 'site-2',
    title: 'GreenBox — E-commerce Bio',
    description: 'Boutique en ligne pour une marque de produits bio. Panier dynamique, paiement Stripe, gestion de stock en temps réel.',
    tags: ['E-commerce', 'Shopify', 'Bio'],
    image: 'https://placehold.co/600x400/1f2937/6366f1?text=GreenBox',
    link: '#',
    type: 'site',
  },
  {
    id: 'site-3',
    title: 'FitCoach Pro — Coach Sportif',
    description: 'Site vitrine avec système de réservation intégré pour un coach sportif indépendant. Blog, témoignages, et calendrier de disponibilités.',
    tags: ['Vitrine', 'Booking', 'Fitness'],
    image: 'https://placehold.co/600x400/1f2937/6366f1?text=FitCoach',
    link: '#',
    type: 'site',
  },
]

// ===== Projets UGC Vidéo =====
export const ugcProjects = [
  {
    id: 'ugc-1',
    title: 'Sérum Anti-Âge — Skincare Ad',
    description: 'Publicité UGC hyper-réaliste pour un sérum anti-âge. Persona féminine 30 ans, ton authentique, format Story/Reel optimisé pour Meta Ads.',
    tags: ['Skincare', 'Meta Ads', 'Story'],
    tools: ['Sora', 'ElevenLabs', 'CapCut'],
    image: 'https://placehold.co/360x640/1f2937/6366f1?text=Skincare+Ad',
    link: '#',
    type: 'ugc',
  },
  {
    id: 'ugc-2',
    title: 'AppFlow — SaaS Promo',
    description: 'Vidéo promotionnelle pour un outil SaaS de gestion de projet. Démonstration produit dynamique avec voix off IA et motion design.',
    tags: ['SaaS', 'Promo', 'B2B'],
    tools: ['Kling', 'ElevenLabs', 'CapCut'],
    image: 'https://placehold.co/360x640/1f2937/6366f1?text=SaaS+Promo',
    link: '#',
    type: 'ugc',
  },
  {
    id: 'ugc-3',
    title: 'Burger Artisan — Food Ad',
    description: 'Clip publicitaire food porn pour un restaurant de burgers artisanaux. Plans serrés, ambiance chaleureuse, montage rythmé.',
    tags: ['Food', 'Restaurant', 'Reel'],
    tools: ['Veo 3', 'Seedance', 'CapCut'],
    image: 'https://placehold.co/360x640/1f2937/6366f1?text=Food+Ad',
    link: '#',
    type: 'ugc',
  },
  {
    id: 'ugc-4',
    title: 'Villa Azure — Immobilier Luxe',
    description: 'Visite virtuelle cinématique d\'une villa de luxe. Drone IA, ambiance premium, voix off élégante pour agence immobilière haut de gamme.',
    tags: ['Immobilier', 'Luxe', 'Cinématique'],
    tools: ['Sora', 'Kling', 'ElevenLabs'],
    image: 'https://placehold.co/360x640/1f2937/6366f1?text=Immo+Luxe',
    link: '#',
    type: 'ugc',
  },
]

// ===== Projets Automatisations =====
export const automationProjects = [
  {
    id: 'auto-1',
    title: 'Agent IA Vocal — Prise de RDV',
    description: 'Agent vocal IA capable de répondre aux appels entrants, qualifier les prospects et planifier des rendez-vous automatiquement dans Google Calendar.',
    tags: ['Agent IA Vocal', 'API OpenAI', 'Google Calendar'],
    icon: '🤖',
    result: 'Réduction de 80% du temps passé sur la prise de RDV',
    type: 'automation',
  },
  {
    id: 'auto-2',
    title: 'Pipeline Lead Gen — n8n',
    description: 'Workflow automatisé de génération de leads : scraping LinkedIn, enrichissement de données, scoring IA, et envoi automatique dans le CRM.',
    tags: ['n8n', 'Lead Gen', 'API Claude'],
    icon: '⚡',
    result: '+300% de leads qualifiés par mois',
    type: 'automation',
  },
  {
    id: 'auto-3',
    title: 'Support Client IA — Multicanal',
    description: 'Système de support client automatisé couvrant email, WhatsApp et chat web. Classification des demandes par IA et réponses contextuelles.',
    tags: ['Paperclip', 'OpenClaw', 'API OpenAI'],
    icon: '💬',
    result: 'Temps de réponse moyen passé de 4h à 2min',
    type: 'automation',
  },
]

// ===== Projets SaaS & Micro-SaaS =====
export const saasProjects = [
  {
    id: 'saas-1',
    title: 'ContentPilot',
    description: 'Micro-SaaS de planification et génération de contenu pour réseaux sociaux. Génération de posts par IA, calendrier éditorial, analytics intégrés.',
    tags: ['IA', 'React', 'API OpenAI', 'SaaS'],
    stack: ['React', 'Node.js', 'PostgreSQL', 'OpenAI API'],
    image: 'https://placehold.co/600x400/1f2937/6366f1?text=ContentPilot',
    link: '#',
    type: 'saas',
  },
  {
    id: 'saas-2',
    title: 'InvoiceFlow',
    description: 'Outil de facturation intelligent pour freelances. Extraction automatique des données par OCR IA, relances automatiques, tableau de bord financier.',
    tags: ['Automation', 'OCR', 'Facturation', 'Micro-SaaS'],
    stack: ['Next.js', 'Prisma', 'Stripe', 'Claude API'],
    image: 'https://placehold.co/600x400/1f2937/6366f1?text=InvoiceFlow',
    link: '#',
    type: 'saas',
  },
  {
    id: 'saas-3',
    title: 'ReviewRadar',
    description: 'Dashboard d\'analyse de réputation en ligne. Agrégation des avis Google, Trustpilot et réseaux sociaux avec analyse de sentiment par IA.',
    tags: ['IA', 'No-code', 'Analytics', 'API'],
    stack: ['React', 'Python', 'FastAPI', 'Anthropic API'],
    image: 'https://placehold.co/600x400/1f2937/6366f1?text=ReviewRadar',
    link: '#',
    type: 'saas',
  },
]

// ===== Liens sociaux =====
export const socialLinks = {
  linkedin: 'https://linkedin.com/in/',
  email: 'contact@paul-emile.com',
}
