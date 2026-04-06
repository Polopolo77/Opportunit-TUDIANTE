import SectionHeader from './SectionHeader'
import ProjectCard from './ProjectCard'
import { automationProjects } from '../data/projects'

export default function AutomationsSection() {
  return (
    <section id="automations" className="py-20 md:py-28 px-4 relative">
      {/* Fond subtil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="Automatisations IA"
          subtitle="Agents IA vocaux, workflows automatisés et intégrations API pour transformer vos processus."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {automationProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} variant="automation" index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
