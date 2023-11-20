import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <h1>Index</h1>
      </div>

      <div className={styles.grid}>
        <a
          href="/about"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            About <span>-&gt;</span>
          </h2>
          <p>Sobre nosotros</p>
        </a>
      </div>
    </main>
  )
}
