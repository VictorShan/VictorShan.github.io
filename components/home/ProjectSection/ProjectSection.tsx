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
    projImg: "/images/TicTacToeNextJS.png",
    projName: "Tic Tac Toe - V2",
    projDesc: "A NextJS (React), realtime, multiplayer version of tic tac toe. One user must be in incognito or private mode; or on a different browser or device",
    github: "https://github.com/VictorShan/tic-tac-toe/tree/tic-tac-toe-nextjs",
    website: "https://tic-tac-toe-nextjs.web.app/"
  },
  {
    projImg: "/images/TicTacToeWinCentered.png",
    projName: "Tic Tac Toe",
    projDesc: "Realtime, multiplayer tic tac toe. One user must be in incognito or private mode; or on a different browser or device",
    github: "https://github.com/VictorShan/tic-tac-toe",
    website: "https://tic-tac-toe-82af8.web.app/"
  },
  {
    projImg: "/images/UWCampusMap.png",
    projName: "UW Campus Map",
    projDesc: "Map from one campus building to another using Dijkstra's algorithm. It uses a REST API to find the route.",
    website: "https://uw-campus-map.herokuapp.com/"
  }
]