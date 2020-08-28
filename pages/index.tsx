import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ProjectSection from '../components/home/ProjectSection/ProjectSection'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Victor Shan - Home</title>
        <meta name="Description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <h1>Welcome to my Website!</h1>
        <ProjectSection />
      </main>
    </div>
  )
}

const pageDescription = "Victor Shan's Homepage with all his projects ( tic tac toe )," +
                        " education and experience"