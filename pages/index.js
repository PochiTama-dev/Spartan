import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/footer/footer'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Home</h1>
      </main>
      <footer /* className={styles.footer} */>
        <div className='footer-main'><Footer/></div>
      </footer>
    </div>
  )
}
