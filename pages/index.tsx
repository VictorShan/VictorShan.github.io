import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ProjectSection from '../src/ProjectSection/ProjectSection'
import Hero from '../src/Hero/Hero'
import Attributes from '../src/Attributes/Attributes'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Victor Shan - Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <Hero />
        <Attributes />
        <ProjectSection />
      </main>
    </div>
  )
}