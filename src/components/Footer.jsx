import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer ?? ""}>
            <div className={styles.container ?? ""}>
                <p>2023 La mia azienda. Tutti i diritti riservati.</p>
            </div>
        </footer>
    );
}
