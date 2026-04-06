import { useScrollReveal } from '../hooks/useScrollReveal'

/**
 * En-tête réutilisable pour chaque section du portfolio
 */
export default function SectionHeader({ title, subtitle, gradient = true }) {
  const revealRef = useScrollReveal()

  return (
    <div ref={revealRef} className="fade-up text-center mb-12 md:mb-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        {gradient ? (
          <span className="gradient-text">{title}</span>
        ) : (
          <span className="text-gray-900 dark:text-white">{title}</span>
        )}
      </h2>
      {subtitle && (
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
