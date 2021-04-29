import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ProjectSection from '../src/home/ProjectSection/ProjectSection'
import Hero from '../src/home/Hero/Hero'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Victor Shan - Home</title>
        <meta name="Description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Hero />
        <ProjectSection />
      </main>
    </div>
  )
}

const pageDescription = "The portfolio page for the full-stack engineer Victor Shan. " +
                        "Design, build, repeat! My projects go through an iterative "