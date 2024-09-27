import { H1 } from '@/ui'
import { FtGGProject, FtStatProject, OasisWProject } from './Project'

function Projects() {
  return (
    <section
      id="PROJECTS"
      className="section bg-background-light dark:bg-background-dark"
    >
      <div className="section-container">
        <H1 className="mb-20 text-center">PROJECTS</H1>
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 mb-20">
          <OasisWProject />
          <FtStatProject />
          <FtGGProject />
        </div>
      </div>
    </section>
  )
}

export default Projects
