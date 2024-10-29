import { Button } from '../Button';
import styles from './header.module.scss';
import headset from '../../assets/headset.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.navegation}>
                <p>soller</p>
                <nav>
                    <a href="#">Products</a>
                    <a href="#">Solutions</a>
                    <a href="#">Services</a>
                    <a href="#">Configure</a>
                </nav>
            </div>
            <div className={styles.contactAndButton}>
                <div>
                    <img src={headset} alt="" />
                    <p>555 818 282</p>
                </div>
                <Button />
            </div>
        </header>
    )
}