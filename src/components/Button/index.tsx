import styles from './button.module.scss';
import arrowPurple from '../../assets/arrow-purple.svg';

export function Button() {
    return(
        <button className={styles.buttonContainer}>
            <p>Request a Quote</p>
            <img src={arrowPurple} alt="" />
        </button>
    )
}