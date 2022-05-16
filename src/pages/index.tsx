import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Food-Hut</title>
        <meta name="description" content="The best burger shop in the town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
    </div>
  )
}

export default Home
