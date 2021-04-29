import styles from './SectionHeading.module.sass'
type props = {
    children?: string | JSX.Element | JSX.Element[]
}
export default function SectionHeading({ children }: props) {
    return (
        <div className={styles.container}>
            <h1>{children}</h1>
        </div>
    )
}