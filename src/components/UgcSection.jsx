import SectionHeader from './SectionHeader'
import ProjectCard from './ProjectCard'
import { ugcProjects } from '../data/projects'

export default function UgcSection() {
  return (
    <section id="ugc" className="py-20 md:py-28 px-4 relative">
      {/* Fond subtil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="UGC Vidéo par IA"
          subtitle="Publicités vidéo hyper-réalistes générées par IA pour Meta Ads et réseaux sociaux."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {ugcProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} variant="ugc" index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
