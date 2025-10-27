import styles from "./NotFound.module.css";

export default function NotFound() {
    return (
        <main className={styles.wrap ?? ""}>
            <section className={styles.notFoundSection ?? ""} aria-label="Pagina non trovata">
                <h2>404 - Pagina non trovata</h2>
                <p>Ci dispiace, ma la pagina che stai cercando non esiste.</p>
            </section>
        </main>
    );
}