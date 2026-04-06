import SectionHeader from './SectionHeader'
import ProjectCard from './ProjectCard'
import { sitesProjects } from '../data/projects'

export default function SitesSection() {
  return (
    <section id="sites" className="py-20 md:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Sites Web"
          subtitle="Landing pages, sites vitrines et e-commerce — des sites qui convertissent."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {sitesProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} variant="site" index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
