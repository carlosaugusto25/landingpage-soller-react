import styles from './sectionsixth.module.scss';
import notebook from '../../assets/notebook.svg';
import circlePurple from '../../assets/circle-purple.svg';
import circlePurpleMobile from '../../assets/circle-purple-mobile.svg';
import { Button } from '../Button';

export function SectionSixth() {
    return (
        <section className={styles.container}>
            <div className={styles.textContainer}>
                <p className={styles.tag}>Get the Sun to power your home</p>
                <h2 className={styles.title}>All the power that you need for your house is now available</h2>
            </div>
            <div className={styles.buttonContainerMobile}>
                <Button yellow />
                <p className={styles.description}>Egestas fringilla aliquam leo</p>
            </div>
            <div className={styles.buttonContainer}>
                <Button yellow />
                <p className={styles.description}>Egestas fringilla aliquam leo</p>
            </div>
            <img className={styles.circlePurple} src={circlePurple} alt="purple circle" />
            <img className={styles.circlePurpleMobile} src={circlePurpleMobile} alt="purple circle" />
            <img className={styles.notebook} src={notebook} alt="notebook" />
        </section>
    )
}