import { H1 } from '@/ui'
import ProjectList from './ProjectList'

function Project() {
  return (
    <section
      id="PROJECTS"
      className="section bg-background-light dark:bg-background-dark"
    >
      <div className="section-container">
        <H1 className="mb-20 text-center">PROJECTS</H1>
        <ProjectList />
      </div>
    </section>
  )
}

export default Project
