import { useState, useEffect } from 'react'
import { HiMenu, HiX, HiMoon, HiSun } from 'react-icons/hi'

// Liens de navigation
const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Sites', href: '#sites' },
  { label: 'UGC Vidéo', href: '#ugc' },
  { label: 'Automatisations', href: '#automations' },
  { label: 'SaaS', href: '#saas' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ isDark, toggleDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Détecte le scroll pour changer le style du header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#accueil" className="flex flex-col leading-tight">
          <span className="text-xl font-bold gradient-text">Paul-Emile</span>
          <span className="text-[10px] tracking-widest uppercase text-gray-400 dark:text-gray-500">
            AI Creative Strategist
          </span>
        </a>

        {/* Navigation desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-2 text-sm font-medium rounded-lg transition-colors
                  text-gray-600 hover:text-accent dark:text-gray-300 dark:hover:text-accent-light
                  hover:bg-accent/10"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions (dark mode + menu mobile) */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleDark}
            className="p-2 rounded-lg transition-colors hover:bg-accent/10 text-gray-600 dark:text-gray-300"
            aria-label="Basculer le thème"
          >
            {isDark ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent/10 text-gray-600 dark:text-gray-300"
            aria-label="Menu"
          >
            {mobileOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-accent/10">
          <ul className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-lg text-sm font-medium transition-colors
                    text-gray-600 hover:text-accent dark:text-gray-300 dark:hover:text-accent-light
                    hover:bg-accent/10"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
