import SectionHeader from './SectionHeader'
import ProjectCard from './ProjectCard'
import { saasProjects } from '../data/projects'

export default function SaasSection() {
  return (
    <section id="saas" className="py-20 md:py-28 px-4 relative">
      {/* Fond subtil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="SaaS & Micro-SaaS"
          subtitle="Produits SaaS propulsés par l'IA — de l'idée au produit prêt à scaler."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {saasProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} variant="saas" index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
