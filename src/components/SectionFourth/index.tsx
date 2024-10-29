import styles from './sectionfourth.module.scss';
import mobile from '../../assets/mobile-2.svg';
import yellow from '../../assets/retangle-oval-2.svg';

export function SectionFourth() {
    return (
        <section className={styles.container}>
            <aside className={styles.content}>
                <div className={styles.contentTextTitle}>
                    <p className={styles.tag}>System features</p>
                    <h2 className={styles.title}>Powerful features</h2>
                    <p className={styles.description}>Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.</p>
                </div>
                <div className={styles.contentGrid}>
                    <div className={styles.contentGridItem}>
                        <h4>Erat sit</h4>
                        <span>Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis.</span>
                    </div>
                    <div className={styles.contentGridItem}>
                        <h4>Ullamcorper arcu</h4>
                        <span>Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus auctor habitant duis dictum.</span>
                    </div>
                    <div className={styles.contentGridItem}>
                        <h4>Et pellentesque</h4>
                        <span>Mi vitae, massa eu molestie massa euismod volutpat condimentum. Blandit molestie ullamcorper hendrerit purus lorem vulputate.</span>
                    </div>
                    <div className={styles.contentGridItem}>
                        <h4>Amet egestas</h4>
                        <span>Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet, felis. </span>
                    </div>
                </div>
            </aside>
            <img className={styles.mobile} src={mobile} alt="Mobile Background" />
            <img className={styles.yellowBackground} src={yellow} alt="Yellow Background" />
        </section>
    )
}