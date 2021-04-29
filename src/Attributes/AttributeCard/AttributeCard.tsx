import { IconType } from '@react-icons/all-files'
import styles from './AttributeCard.module.sass'

type props = {
  Icon: IconType
  title: string
  desc: string
}
export default function AttributeCard({ Icon, title, desc }: props) {
  return (
    <article className={styles.card}>
      <Icon style={{ height: "auto", width: "50%"}}/>
      <hr/>
      <h1>{title}</h1>
      <p>{desc}</p>
    </article>
  )
}