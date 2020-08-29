import styles from './ProjectCard.module.sass'
import ProjectLinks from './ProjectLinks';

type projectType = {
  projImg: string,
  iconImg?: string,
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
      <img src={projImg} className={styles.projImg} alt={`${projName} screenshot`}/>
      {iconImg ? <img src={iconImg} className={styles.iconImg} alt={`${projName} Icon`}/> : null}
      <div className={styles.iconTitle}>
        
        <h4 className={styles.title}>{projName}</h4>
      </div>
      <p className={styles.desc}>{projDesc}</p>
      <footer className={styles.links}>
        <ProjectLinks links={{ github: github, website: website }} />
      </footer>
    </article>
  )
}