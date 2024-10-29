import styles from './sectionthird.module.scss';
import mobile from '../../assets/mobile-1.svg';
import purple from '../../assets/retangle-oval-1.svg';

export function SectionThird() {
    return (
        <section className={styles.container}>
            <img className={styles.purpleBackground} src={purple} alt="purple-background" />
            <img className={styles.mobile} src={mobile} alt="mobile-picture" />
            <aside className={styles.content}>
                <div className={styles.contentTextTitle}>
                    <p className={styles.tag}>Services</p>
                    <h2 className={styles.title}>Personalized services</h2>
                    <p className={styles.description}>Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.</p>
                </div>
                <div className={styles.contentGrid}>
                    <div className={styles.contentGridItem}>
                        <h4>Et mauris</h4>
                        <span>Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.</span>
                    </div>
                    <div className={styles.contentGridItem}>
                        <h4>Eget sit</h4>
                        <span>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </span>
                    </div>
                    <div className={styles.contentGridItem}>
                        <h4>Imperdiet pellentesque</h4>
                        <span>Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.</span>
                    </div>
                    <div className={styles.contentGridItem}>
                        <h4>Non libero</h4>
                        <span>Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra.</span>
                    </div>
                </div>
            </aside>
        </section>
    )
}