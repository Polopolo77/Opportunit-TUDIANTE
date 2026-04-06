import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/kotlin.png";
import Tools13 from "/assets/tools/firebase.png";
import Tools14 from "/assets/tools/html.png";
import Tools15 from "/assets/tools/css.png";
import Tools16 from "/assets/tools/ts.png";
import Tools17 from "/assets/tools/php.png";
import Tools18 from "/assets/tools/vite.png";
import Tools19 from "/assets/tools/mysql.png";


export const listTools = [
  { id: 1, gambar: Tools2, nama: "React JS", ket: "Framework", dad: "100" },
  { id: 2, gambar: Tools3, nama: "Next JS", ket: "Framework", dad: "200" },
  { id: 3, gambar: Tools4, nama: "Tailwind CSS", ket: "Framework", dad: "300" },
  { id: 4, gambar: Tools6, nama: "Javascript", ket: "Language", dad: "400" },
  { id: 5, gambar: Tools16, nama: "TypeScript", ket: "Language", dad: "500" },
  { id: 6, gambar: Tools7, nama: "Node JS", ket: "Runtime", dad: "600" },
  { id: 7, gambar: Tools18, nama: "Vite", ket: "Build Tool", dad: "700" },
  { id: 8, gambar: Tools9, nama: "OpenAI / Claude", ket: "IA APIs", dad: "800" },
  { id: 9, gambar: Tools11, nama: "Figma", ket: "Design", dad: "900" },
  { id: 10, gambar: Tools8, nama: "GitHub", ket: "Repository", dad: "1000" },
  { id: 11, gambar: Tools14, nama: "Sora / Kling", ket: "Vidéo IA", dad: "1100" },
  { id: 12, gambar: Tools15, nama: "ElevenLabs", ket: "Voix IA", dad: "1200" },
  { id: 13, gambar: Tools1, nama: "VS Code", ket: "Code Editor", dad: "1300" },
  { id: 14, gambar: Tools17, nama: "n8n", ket: "Automation", dad: "1400" },
  { id: 15, gambar: Tools19, nama: "PostgreSQL", ket: "Database", dad: "1500" },
  { id: 16, gambar: Tools13, nama: "Firebase", ket: "Backend", dad: "1600" },
];

// Projets — images placeholder (à remplacer par vos vraies screenshots dans /assets/proyek/)
import Proyek1 from "/assets/proyek/proyek1.jpg";
import Proyek2 from "/assets/proyek/proyek2.jpg";
import Proyek3 from "/assets/proyek/proyek3.jpg";
import Proyek4 from "/assets/proyek/proyek4.jpg";
import Proyek5 from "/assets/proyek/proyek5.jpg";
import Proyek6 from "/assets/proyek/proyek6.jpg";

export const listProyek = [
  // --- Sites Web ---
  {
    id: 1,
    image: Proyek1,
    title: "LuxImmo — Agence Immobilière",
    subtitle: "Landing page premium pour une agence immobilière haut de gamme...",
    fullDescription: "Landing page premium pour une agence immobilière haut de gamme. Design épuré avec galerie de biens filtrables, carte interactive des quartiers, formulaire de prise de rendez-vous intégré et optimisation SEO locale. Performance Lighthouse : 98/100.",
    borderColor: "#6366f1",
    gradient: "linear-gradient(145deg, #6366f1, #000)",
    url: "#",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "GreenBox — E-commerce Bio",
    subtitle: "Boutique en ligne pour une marque de produits bio avec panier dynamique...",
    fullDescription: "Boutique en ligne complète pour une marque de produits bio. Panier dynamique avec persistance, paiement Stripe intégré, gestion de stock en temps réel, système de filtres avancés par catégorie, et tableau de bord admin pour le suivi des commandes.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "#",
    dad: "200",
  },
  // --- UGC Vidéo ---
  {
    id: 3,
    image: Proyek3,
    title: "Sérum Anti-Âge — Skincare Ad",
    subtitle: "Publicité UGC hyper-réaliste pour un sérum anti-âge via Sora & ElevenLabs...",
    fullDescription: "Publicité UGC hyper-réaliste pour un sérum anti-âge. Persona féminine 30 ans générée par IA, ton authentique et naturel, format Story/Reel 9:16 optimisé pour Meta Ads. Voix off IA naturelle via ElevenLabs, montage dynamique CapCut avec sous-titres animés.",
    borderColor: "#ec4899",
    gradient: "linear-gradient(145deg, #ec4899, #000)",
    url: "#",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "Villa Azure — Immobilier Luxe",
    subtitle: "Visite virtuelle cinématique d'une villa de luxe générée par IA...",
    fullDescription: "Visite virtuelle cinématique d'une villa de luxe. Plans drone IA générés par Sora, transitions fluides entre les pièces via Kling, voix off élégante et immersive via ElevenLabs. Destinée aux agences immobilières haut de gamme pour leurs annonces premium.",
    borderColor: "#06b6d4",
    gradient: "linear-gradient(180deg, #06b6d4, #000)",
    url: "#",
    dad: "400",
  },
  // --- Automatisations ---
  {
    id: 5,
    image: Proyek5,
    title: "Agent IA Vocal — Prise de RDV",
    subtitle: "Agent vocal IA qui répond aux appels et planifie les RDV automatiquement...",
    fullDescription: "Agent vocal IA capable de répondre aux appels entrants 24/7, qualifier les prospects avec un script conversationnel intelligent, et planifier automatiquement des rendez-vous dans Google Calendar. Intégration CRM et notifications Slack en temps réel. Résultat : réduction de 80% du temps passé sur la prise de RDV.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "#",
    dad: "500",
  },
  // --- SaaS ---
  {
    id: 6,
    image: Proyek6,
    title: "ContentPilot — Micro-SaaS",
    subtitle: "Micro-SaaS de planification et génération de contenu par IA...",
    fullDescription: "Micro-SaaS de planification et génération de contenu pour réseaux sociaux. Génération automatique de posts par IA adaptés à chaque plateforme, calendrier éditorial drag & drop, analytics intégrés avec suggestions d'optimisation. Stack : React, Node.js, PostgreSQL, OpenAI API.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "#",
    dad: "600",
  },
];
