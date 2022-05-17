import Image from 'next/image'
import React from 'react'
import OrderNowButton from '../OrderNowButton'
import styles from './styles.module.scss'
import chicaBurger from '../../../public/images/burgerThief.png'
import grillThrill from '../../../public/images/grillThrill.png'
import chickenBurger from '../../../public/images/chickenBurger.png'


export default function index() {
  return (
    <div className={styles.container}>

      <div className={styles.burger + ' ' + styles.burger1}>
          <div className={styles.burgerDescription}>
            <h3>Chica Burger</h3>
            <OrderNowButton href={'/'} mode={"light"}  />
          </div>
          <div className={styles.burgerImage1}>
            <Image src={chicaBurger}   width={325}  height={393} />
          </div>
      </div>
      <div className={styles.burger + ' ' + styles.burger2}>
          <div className={styles.burgerDescription}>
            <h3>Friend Burger</h3>
            <OrderNowButton href={'/'} mode={"light"} />
          </div>
          <div className={styles.burgerImage2}>
            <Image src={chickenBurger}  width={380} height={391}  />
          </div>
      </div>
      <div className={styles.burger + ' ' + styles.burger3}>
          <div className={styles.burgerDescription}>
            <h3>The Grill Thrill</h3>
            <OrderNowButton href={'/'} mode={"light"} />
          </div>
          <div className={styles.burgerImage3}>
            <Image src={grillThrill} width={394} height={418}   />
          </div>
      </div>
    </div>
  )
}
