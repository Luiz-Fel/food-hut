import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Hero'
import Menu from '../components/Menu'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Food-Hut</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="description" content="The best burger shop in the town" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

        <Hero />
        <Menu />
    </div>
  )
}

export default Home
