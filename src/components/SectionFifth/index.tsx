import { Button } from '../Button';
import styles from './sectionfifth.module.scss';
import woman1 from '../../assets/woman-2.svg';
import woman2 from '../../assets/woman-1.svg';
import woman3 from '../../assets/woman-3.svg';
import man from '../../assets/man-1.svg';

export function SectionFifth() {
    return (
        <section className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.texts}>
                    <p className={styles.tag}>Join other Sun harvesters</p>
                    <h2 className={styles.title}>Make something awesome</h2>
                    <p className={styles.description}>Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.</p>
                </div>
                <Button yellow />
            </div>
            <div className={styles.cardContainer}>
                <div className={styles.cardBig}>
                    <p className={styles.description}>
                        Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.
                    </p>
                    <footer>
                        <img src={woman1} alt="" />
                        <div className={styles.author}>
                            <p className={styles.name}>Jane Cooper</p>
                            <p className={styles.position}>10KWh</p>
                        </div>
                    </footer>
                </div>
                <div className={styles.card}>
                    <p className={styles.description}>
                    Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.
                    </p>
                    <footer>
                        <img src={man} alt="" />
                        <div className={styles.author}>
                            <p className={styles.name}>Ralph Edwards</p>
                            <p className={styles.position}>32KWh</p>
                        </div>
                    </footer>
                </div>
                <div className={styles.card}>
                    <p className={styles.description}>
                    Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.
                    </p>
                    <footer>
                        <img src={woman2} alt="" />
                        <div className={styles.author}>
                            <p className={styles.name}>Courtney Henry</p>
                            <p className={styles.position}>6KWh</p>
                        </div>
                    </footer>
                </div>
                <div className={styles.card}>
                    <p className={styles.description}>
                    Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.
                    </p>
                    <footer>
                        <img src={woman3} alt="" />
                        <div className={styles.author}>
                            <p className={styles.name}>Cameron Williamson</p>
                            <p className={styles.position}>12KWh</p>
                        </div>
                    </footer>
                </div>
            </div>
        </section>
    )
}