import ProjectCard from "../../ProjectCard/ProjectCard"
import styles from "./ProjectSection.module.sass"

export default function ProjectSection() {
  return (
    <section id={"projects"} className={styles.projSection}>
      <h2>Projects</h2>
      <div className={styles.projectContainer}>
        {projects.map(project => <ProjectCard key={project.projName} project={project} />)}
      </div>
    </section>
  )
}


type project = {
  projImg: string,
  iconImg?: string,
  projName: string,
  projDesc: string,
  github?: string,
  website?: string
}

const projects: project[] = [
  {
    projImg: "/images/TicTacToeWinCentered.png",
    //iconImg: "/images/TicTacToeEmpty.png",
    projName: "Tic Tac Toe",
    projDesc: "Realtime, multiplayer tic tac toe. One user must be in incognito or private mode; or on a different browser or device",
    github: "https://github.com/VictorShan/tic-tac-toe",
    website: "https://tic-tac-toe-82af8.web.app/"
  }
]