import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SitesSection from './components/SitesSection'
import UgcSection from './components/UgcSection'
import AutomationsSection from './components/AutomationsSection'
import SaasSection from './components/SaasSection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useDarkMode } from './hooks/useDarkMode'

function App() {
  const { isDark, toggle } = useDarkMode()

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <Navbar isDark={isDark} toggleDark={toggle} />
      <main>
        <Hero />
        <SitesSection />
        <UgcSection />
        <AutomationsSection />
        <SaasSection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
