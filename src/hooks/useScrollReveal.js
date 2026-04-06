import { useEffect, useRef } from 'react'

/**
 * Hook pour animer les éléments au scroll (Intersection Observer)
 * Ajoute la classe 'visible' quand l'élément entre dans le viewport
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, ...options }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return ref
}
