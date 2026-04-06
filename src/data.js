import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

// ===== Logos existants (du repo original) =====
import LogoReact from "/assets/tools/reactjs.png";
import LogoNext from "/assets/tools/nextjs.png";
import LogoTailwind from "/assets/tools/tailwind.png";
import LogoJS from "/assets/tools/js.png";
import LogoTS from "/assets/tools/ts.png";
import LogoNode from "/assets/tools/nodejs.png";
import LogoVite from "/assets/tools/vite.png";
import LogoGithub from "/assets/tools/github.png";
import LogoFigma from "/assets/tools/figma.png";
import LogoVSCode from "/assets/tools/vscode.png";
import LogoFirebase from "/assets/tools/firebase.png";

// ===== Nouveaux logos IA =====
import LogoOpenAI from "/assets/tools-new/openai.svg";
import LogoClaude from "/assets/tools-new/claude.svg";
import LogoGemini from "/assets/tools-new/gemini.svg";
import LogoSora from "/assets/tools-new/sora.svg";
import LogoKling from "/assets/tools-new/kling.svg";
import LogoSeedance from "/assets/tools-new/seedance.svg";
import LogoVeo3 from "/assets/tools-new/veo3.svg";
import LogoElevenLabs from "/assets/tools-new/elevenlabs.svg";
import LogoCapCut from "/assets/tools-new/capcut.svg";
import LogoN8n from "/assets/tools-new/n8n.svg";
import LogoVercel from "/assets/tools-new/vercel.svg";
import LogoStripe from "/assets/tools-new/stripe.svg";


export const listTools = [
  // --- IA & APIs ---
  { id: 1, gambar: LogoOpenAI, nama: "OpenAI", ket: "GPT / DALL-E", dad: "100" },
  { id: 2, gambar: LogoClaude, nama: "Claude", ket: "Anthropic API", dad: "200" },
  { id: 3, gambar: LogoGemini, nama: "Gemini", ket: "Google AI", dad: "300" },

  // --- Vidéo IA ---
  { id: 4, gambar: LogoSora, nama: "Sora", ket: "Vidéo IA OpenAI", dad: "400" },
  { id: 5, gambar: LogoKling, nama: "Kling", ket: "Vidéo IA", dad: "500" },
  { id: 6, gambar: LogoSeedance, nama: "Seedance 2.0", ket: "Vidéo IA", dad: "600" },
  { id: 7, gambar: LogoVeo3, nama: "Veo 3", ket: "Vidéo IA Google", dad: "700" },

  // --- Audio & Montage ---
  { id: 8, gambar: LogoElevenLabs, nama: "ElevenLabs", ket: "Voix IA", dad: "800" },
  { id: 9, gambar: LogoCapCut, nama: "CapCut", ket: "Montage Vidéo", dad: "900" },

  // --- Dev ---
  { id: 10, gambar: LogoReact, nama: "React", ket: "Framework", dad: "1000" },
  { id: 11, gambar: LogoNext, nama: "Next.js", ket: "Framework", dad: "1100" },
  { id: 12, gambar: LogoTailwind, nama: "Tailwind CSS", ket: "Styling", dad: "1200" },
  { id: 13, gambar: LogoNode, nama: "Node.js", ket: "Runtime", dad: "1300" },
  { id: 14, gambar: LogoTS, nama: "TypeScript", ket: "Language", dad: "1400" },

  // --- Automation & Tools ---
  { id: 15, gambar: LogoN8n, nama: "n8n", ket: "Automation", dad: "1500" },
  { id: 16, gambar: LogoVercel, nama: "Vercel", ket: "Déploiement", dad: "1600" },
  { id: 17, gambar: LogoStripe, nama: "Stripe", ket: "Paiement", dad: "1700" },
  { id: 18, gambar: LogoFigma, nama: "Figma", ket: "Design", dad: "1800" },
  { id: 19, gambar: LogoGithub, nama: "GitHub", ket: "Repository", dad: "1900" },
  { id: 20, gambar: LogoFirebase, nama: "Firebase", ket: "Backend", dad: "2000" },
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
