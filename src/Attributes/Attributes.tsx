import SectionHeader from '../SectionHeading/SectionHeading'
import AttributeCard from './AttributeCard/AttributeCard'
import sectionStyles from '../section.module.sass'
import styles from './Attributes.module.sass'
import { FaPencilRuler } from '@react-icons/all-files/fa/FaPencilRuler'
import { FaHammer } from '@react-icons/all-files/fa/FaHammer'
import { BsArrowClockwise } from '@react-icons/all-files/bs/BsArrowClockwise'

export default function Attributes() {
    return (
        <section id={"about"} className={sectionStyles.section}>
            <SectionHeader>What I Do</SectionHeader>
            <div className={styles.cards}>
                <AttributeCard Icon={FaPencilRuler} title={"Design"} desc={designDesc}/>
                <AttributeCard Icon={FaHammer} title={"Build"} desc={buildDesc}/>
                <AttributeCard Icon={BsArrowClockwise} title={"Repeat"} desc={repeatDesc}/>
            </div>
        </section>
    )
}

const designDesc = "The foundation of any good project is a good design. "
                    + "A good project starts with good planning!"
const buildDesc = "An idea will will only be reality you you make it. From frontend "
                    + "to backend, I make ideas into reality."
const repeatDesc = "Each project is an opportunity to improve. A great project "
                    + "follows from repeated redesigns from feedback."