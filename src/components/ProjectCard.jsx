import { useScrollReveal } from '../hooks/useScrollReveal'
import { HiExternalLink } from 'react-icons/hi'

/**
 * Composant de card réutilisable pour tous les types de projets
 * Props : project (objet), variant ('site' | 'ugc' | 'automation' | 'saas')
 */
export default function ProjectCard({ project, variant = 'site', index = 0 }) {
  const revealRef = useScrollReveal()

  return (
    <div
      ref={revealRef}
      className="fade-up group"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="h-full rounded-2xl glass overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-accent/10 flex flex-col">
        {/* Image / Thumbnail */}
        {variant !== 'automation' && (
          <div className={`relative overflow-hidden ${variant === 'ugc' ? 'aspect-[9/16] max-h-[320px]' : 'aspect-video'}`}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            {/* Overlay au hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              {project.link && project.link !== '#' && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-white font-medium hover:text-accent-light"
                >
                  Voir le projet <HiExternalLink />
                </a>
              )}
            </div>
          </div>
        )}

        {/* Icône pour les automatisations */}
        {variant === 'automation' && (
          <div className="flex items-center justify-center pt-8 pb-2">
            <span className="text-5xl">{project.icon}</span>
          </div>
        )}

        {/* Contenu */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1 leading-relaxed">
            {project.description}
          </p>

          {/* Résultat (automatisations) */}
          {variant === 'automation' && project.result && (
            <div className="mb-4 px-3 py-2 rounded-lg bg-accent/10 border border-accent/20">
              <p className="text-sm font-semibold text-accent dark:text-accent-light">
                📈 {project.result}
              </p>
            </div>
          )}

          {/* Stack technique (SaaS) */}
          {variant === 'saas' && project.stack && (
            <div className="mb-3">
              <p className="text-xs text-gray-500 dark:text-gray-500 mb-1 uppercase tracking-wide font-medium">Stack</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{project.stack.join(' · ')}</p>
            </div>
          )}

          {/* Outils utilisés (UGC) */}
          {variant === 'ugc' && project.tools && (
            <div className="mb-3 flex flex-wrap gap-1">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-xs px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-400 dark:text-purple-300 border border-purple-500/20"
                >
                  {tool}
                </span>
              ))}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-auto pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent dark:text-accent-light border border-accent/20 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Lien (SaaS et sites) */}
          {(variant === 'site' || variant === 'saas') && project.link && project.link !== '#' && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-light transition-colors"
            >
              Voir le projet <HiExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
