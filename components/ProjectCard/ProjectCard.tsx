import styles from './ProjectCard.module.sass'
import ProjectLinks from './ProjectLinks';

type projectType = {
  projImg: string,
  iconImg: string,
  projName: string,
  projDesc: string,
  github?: string,
  website?: string
}

type propsType = { project: projectType }

export default function ProjectCard({project}: propsType) {
  const { projImg, iconImg, projName, projDesc, github, website } = project;
  return (
    <article className={styles.projCard}>
      <img src={projImg} className={styles.projImg}/>
      <div className={styles.iconTitle}>
        <div className={styles.iconImg}>
          <img src={iconImg}/>
        </div>
        <h3 className={styles.title}>{projName}</h3>
      </div>
      <p className={styles.desc}>{projDesc}</p>
      <footer className={styles.links}>
        <ProjectLinks links={{ github: github, website: website }} />
      </footer>
    </article>
  )
}