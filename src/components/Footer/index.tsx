import styles from './footer.module.scss';
import logo from '../../assets/logo-soler.svg';

export function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.logo}>
                <img src={logo} alt="logo" />
                <p>@ 2023 Soller, Inc. All rights reserved.</p>
            </div>
            <div className={styles.options}>
                <a href="#">Terms</a>
                <a href="#">Privacy</a>
                <a href="#">Suport</a>
            </div>
        </footer>
    )
}