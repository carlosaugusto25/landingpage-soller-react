import styles from './sectionheader.module.scss'
import manWork from '../../assets/man-work2.svg';
import { Button } from '../Button';
import woman from '../../assets/woman-1.svg';

export function SectionHeader(){
    return(
        <section className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Get the Sun to Power Your Home</h1>
                <p className={styles.description}>Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.</p>
                <Button />
                <div className={styles.contentDepoiment}>
                    <p className={styles.depoiment}>“Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”</p>
                    <div className={styles.userContainer}>
                        <img src={woman} alt="woman photo" />
                        <div className={styles.userData}>
                            <p className={styles.userName}>Rwanda Melflor</p>
                            <p className={styles.userSite}>zerowaste.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <img className={styles.manWork} src={manWork} alt="man-work" />
        </section>
    )
}        