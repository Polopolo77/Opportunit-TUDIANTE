import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { HiMail, HiExternalLink } from 'react-icons/hi'
import { socialLinks } from '../data/projects'

export default function Contact() {
  const revealRef = useScrollReveal()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  // Gestion de l'envoi via Web3Forms (remplacer la clé par la vôtre)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'VOTRE_CLE_WEB3FORMS', // À remplacer avec votre clé Web3Forms
          ...formData,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-20 md:py-28 px-4 relative">
      {/* Fond décoratif */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />
      </div>

      <div ref={revealRef} className="fade-up max-w-3xl mx-auto relative z-10">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Discutons de votre projet</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Une idée ? Un besoin ? Contactez-moi et transformons votre vision en réalité.
          </p>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                placeholder="votre@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
              placeholder="Décrivez votre projet..."
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full glow-btn px-8 py-4 rounded-xl bg-accent hover:bg-accent-dark text-white font-semibold text-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
          >
            {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
          </button>

          {/* Messages de statut */}
          {status === 'success' && (
            <p className="text-center text-green-400 font-medium">
              ✓ Message envoyé avec succès ! Je vous réponds rapidement.
            </p>
          )}
          {status === 'error' && (
            <p className="text-center text-red-400 font-medium">
              ✗ Erreur lors de l'envoi. Essayez par email directement.
            </p>
          )}
        </form>

        {/* Liens de contact alternatifs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
          <a
            href={`mailto:${socialLinks.email}`}
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent-light transition-colors"
          >
            <HiMail className="w-5 h-5" />
            {socialLinks.email}
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent-light transition-colors"
          >
            <HiExternalLink className="w-5 h-5" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
