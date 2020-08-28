import ProjectCard from "../../ProjectCard/ProjectCard"
import styles from "./ProjectSection.module.sass"

export default function ProjectSection() {
  return (
    <section className={styles.projSection}>
      <h2>Projects</h2>
      <div className={styles.projectContainer}>
        {projects.map(project => <ProjectCard key={project.projName} project={project} />)}
      </div>
    </section>
  )
}

type project = {
  projImg: string,
  iconImg: string,
  projName: string,
  projDesc: string,
  github?: string,
  website?: string
}

const projects: project[] = [
  {
    projImg: "https://images.pexels.com/photos/3573555/pexels-photo-3573555.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    iconImg: "https://image.flaticon.com/icons/png/512/136/136968.png",
    projName: "Hypnosis",
    projDesc: "Hypnotizes the user to empty their bank accounts to my bank account."
  },
  {
    projImg: "https://images.pexels.com/photos/3573555/pexels-photo-3573555.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    iconImg: "https://image.flaticon.com/icons/png/512/136/136968.png",
    projName: "Hypnosis 2",
    projDesc: "Hypnotizes the user to empty their bank accounts to my bank account."
  },
  {
    projImg: "https://images.pexels.com/photos/3573555/pexels-photo-3573555.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    iconImg: "https://image.flaticon.com/icons/png/512/136/136968.png",
    projName: "Hypnosis 3",
    projDesc: "Hypnotizes the user to empty their bank accounts to my bank account."
  },
  {
    projImg: "https://images.pexels.com/photos/3573555/pexels-photo-3573555.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    iconImg: "https://image.flaticon.com/icons/png/512/136/136968.png",
    projName: "Hypnosis 4",
    projDesc: "Hypnotizes the user to empty their bank accounts to my bank account."
  }
]