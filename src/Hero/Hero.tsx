import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <section id={"hero"} className={styles.hero}>
      <div>
        <h1>Full-Stack Software Engineer</h1>
      </div>
      <div>
        <img src={"/images/ComputerServer.svg"} alt={"Computer monitor with server"} />
      </div>
    </section>
  )
}