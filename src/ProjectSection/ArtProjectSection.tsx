
import ProjectCard from "../ProjectCard/ProjectCard"
import styles from "./ProjectSection.module.sass"
import sectionStyles from '../section.module.sass'
import SectionHeading from '../SectionHeading/SectionHeading'
import artProjects from './art-projects'
import ProjectTile from './ProjectTile/ProjectTile'
export default function ArtProjectSection() {
  return (
    <section id={"art-projects"} className={sectionStyles.section}>
      <SectionHeading>Art</SectionHeading>
      <div className={styles.projectTiles}>
        {artProjects.map(project => <ProjectTile project={project} key={project.projName}/>)}
      </div>
    </section>
  )
}