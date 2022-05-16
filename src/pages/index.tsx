import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Food-Hut</title>
        <meta name="description" content="The best burger shop in the town" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <body>
        <Hero />
      </body>
    </div>
  )
}

export default Home
