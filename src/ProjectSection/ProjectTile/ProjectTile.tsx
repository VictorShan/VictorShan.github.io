import styles from './ProjectTile.module.sass'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { project } from '../projects'
import { VscGlobe } from '@react-icons/all-files/vsc/VscGlobe'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'

type props = {
  project: project
  id?: string
}
export default function ProjectTile({ project, id }: props) {
  return (
    <Card
      className={styles.card}
      key={id || project.projName}
      text={'dark'}
    >
      <Card.Img variant="top" src={project.projImg}/>
      <Card.Body className={styles.body}>
        <Card.Title>{project.projName}</Card.Title>
        <Card.Text>{project.projDesc}</Card.Text>
        <div className={styles.buttonContainer}>
          <Button variant="primary" disabled={!project.website}>
            <VscGlobe /> Website
          </Button>
          <Button variant="outline-primary" disabled={!project.github}>
            <FaGithub /> GitHub
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}