import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Hero() {
  const revealRef = useScrollReveal()

  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Fond décoratif avec gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div ref={revealRef} className="fade-up relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-gray-600 dark:text-gray-300">Disponible pour de nouveaux projets</span>
        </div>

        {/* Titre principal */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span className="text-gray-900 dark:text-white">L'IA au service de </span>
          <span className="gradient-text">votre croissance</span>
        </h1>

        {/* Sous-titre */}
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          Sites web performants · Vidéos UGC par IA · Automatisations intelligentes · SaaS sur mesure
        </p>

        {/* Stat mise en avant */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl glass mb-10">
          <span className="text-2xl sm:text-3xl font-bold gradient-text">19% CTR</span>
          <span className="w-px h-8 bg-gray-600/30" />
          <span className="text-2xl sm:text-3xl font-bold gradient-text">€0.08 CPC</span>
          <span className="hidden sm:inline text-sm text-gray-500 dark:text-gray-400 ml-2">sur Meta Ads</span>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="glow-btn px-8 py-4 rounded-xl bg-accent hover:bg-accent-dark text-white font-semibold text-lg transition-all duration-300 hover:scale-105"
          >
            Discutons de votre projet
          </a>
          <a
            href="#sites"
            className="px-8 py-4 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium text-lg transition-all duration-300 hover:border-accent hover:text-accent"
          >
            Voir mes réalisations
          </a>
        </div>
      </div>
    </section>
  )
}
