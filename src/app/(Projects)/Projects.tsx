import { H1 } from '@/ui'
import Project from './Project'

function Projects() {
  return (
    <section
      id="PROJECTS"
      className="section bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="section-container">
        <H1 className="mb-20 text-center">PROJECTS</H1>
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 mb-20">
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </section>
  )
}

export default Projects
