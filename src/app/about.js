import styles from './page.module.css'

export default function AboutPage() {
  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <h1>About</h1>
      </div>

      <div className={styles.grid}>
        <a
          href="/"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Index <span>-&gt;</span>
          </h2>
          <p>Inicio</p>
        </a>
      </div>
    </main>
  )
}