import ProjectCard from "../ProjectCard/ProjectCard"
import styles from "./ProjectSection.module.sass"
import sectionStyles from '../section.module.sass'
import SectionHeading from '../SectionHeading/SectionHeading'
import projects from './projects'
import ProjectTile from './ProjectTile/ProjectTile'
export default function ProjectSection() {
  return (
    <section id={"projects"} className={sectionStyles.section}>
      <SectionHeading>Projects</SectionHeading>
      <div className={styles.projectTiles}>
        {projects.map(project => <ProjectTile project={project} key={project.projName}/>)}
      </div>
    </section>
  )
}