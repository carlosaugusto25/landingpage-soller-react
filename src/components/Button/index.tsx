import styles from './button.module.scss';
import arrowPurple from '../../assets/arrow-purple.svg';
import arrowYellow from '../../assets/arrow.svg';

interface Props {
    yellow?: boolean
}

export function Button({yellow}:Props) {
    return(
        <button className={yellow ? styles.buttonContainerYellow : styles.buttonContainerPurple }>
            <p>Request a Quote</p>
            <img src={yellow ? arrowYellow : arrowPurple} alt="" />
        </button>
    )
}