import Image from 'next/image'
import React from 'react'
import styles from './styles.module.scss'
import restaurant from '../../../public/images/restaurant.jpg'
import facebook from '../../../public/facebook.svg'
import instagram from '../../../public/instagram.svg'
import twitter from '../../../public/twitter.svg'
import youtube from '../../../public/youtube.svg'


export default function Footer() {
  return (
    <>
    <div className={styles.container}>
      <Image src={restaurant}  width={300} height={400} />
      <div className={styles.content}>
        <div className={styles.column}>
          <h2 className={styles.slogan}>
            PILLING BURGERS HIGH SINCE 1958.
          </h2>
        </div>
        <div className={styles.column}>
            <h3 className={styles.columnTitle}>
              FIND OUR RESTAURANTS
            </h3>
            <p>1654 R. Don Road #304.
              <br />NewYork, 85022
              <br />(602) 867-1010
            </p>
            <p>1654 R. Don Road #304.
              <br />NewYork, 85022
              <br />(602) 867-1010
            </p>            
            <p>1654 R. Don Road #304.
              <br />NewYork, 85022
              <br />(602) 867-1010
            </p>
        </div>
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>
            WORKING HOURS
          </h3>
          <p>MONDAY UNTIL FRIDAY<br />9:00-22:00</p>
          <p>SATURDAY - SUNDAY<br />12:00-24:00</p>
        </div>
        <div className={styles.socials}>
          <a href="/">
            <Image src={facebook} />
          </a>
          <a href="/">
            <Image src={instagram} />
          </a>
          <a href="/">
            <Image src={twitter} />
          </a>
          <a href="/">
            <Image src={youtube} />
          </a>
        </div>
      </div>
    </div>
      <div className={styles.copyright}>

      </div>
    </>
  )
}
