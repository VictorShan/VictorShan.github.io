import { InlineIcon } from '@iconify/react'
import githubIcon from '@iconify/icons-logos/github-icon'
import globe2Icon from '@iconify/icons-bi/globe2'
import styles from './ProjectLinks.module.sass'

type links = {
  github?: string,
  website?: string
}

type props = {
  links: links
}

export default function ProjectLinks({ links }: props) {
  const { github, website } = links
  return (
    <div className={styles.container}>
      {github ? (<a href={github}><InlineIcon icon={githubIcon} /> GitHub</a>) : null}
      {website ? (<a href={website}><InlineIcon icon={globe2Icon} /> Website</a>) : null}
    </div>
  )
}