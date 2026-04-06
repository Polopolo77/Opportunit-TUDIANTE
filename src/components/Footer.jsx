export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-500">
        <p>© {new Date().getFullYear()} Paul-Emile — AI Creative Strategist</p>
        <p>
          Conçu avec <span className="text-accent">♦</span> et beaucoup d'IA
        </p>
      </div>
    </footer>
  )
}
