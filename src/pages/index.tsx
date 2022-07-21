import type { NextPage } from 'next'
import Head from 'next/head'
import Freatured from '../components/Freatured'
import Hero from '../components/Hero'
import Menu from '../components/Menu'
import Social from '../components/Social'
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
      </Head>

        <Hero />
        <Menu />
        <Freatured />
        <Social />
    </div>
  )
}

export default Home
