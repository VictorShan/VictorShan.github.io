import styles from './Footer.module.sass'
import { Linkedin, Github } from 'react-bootstrap-icons'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright 2021 Victor Shan</p>
      <div>
        <a href="https://www.linkedin.com/in/victorshanvs/" target="_blank" rel="noopener noreferrer">
          <Linkedin /> LinkedIn
        </a>
        <a href="https://github.com/VictorShan" target="_blank" rel="noopener noreferrer">
          <Github /> GitHub
        </a>
      </div>
    </footer>
  )
}