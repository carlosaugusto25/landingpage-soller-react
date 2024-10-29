import styles from './sectionsecondary.module.scss';
import cicleOrange from '../../assets/circle-1.svg';
import circlePurple from '../../assets/circle-2.svg';
import desktop from '../../assets/desktop1.svg';

export function SectionSecondary() {
    return (
        <section className={styles.container}>
            <div className={styles.textContainer}>
                <p className={styles.tag}>No more waste</p>
                <h1 className={styles.title}>Pick the Sun</h1>
                <p className={styles.description}>Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.</p>
            </div>


            <img className={styles.circleOrange} src={cicleOrange} alt="cicleOrange" />
            <img className={styles.circlePurple} src={circlePurple} alt="circlePurple" />

            <img className={styles.desktop} src={desktop} alt="desktop" />
        </section>
    )
}