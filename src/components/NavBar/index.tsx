import Image from 'next/image'
import React from 'react'
import styles from './styles.module.scss'
import call from '../../../public/call.svg'
import cart from '../../../public/cart.svg'


export default function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <a href="">
          <h1>Food<span>-</span>Hut</h1>
        </a>
      </div>
      <div className={styles.item}>
        <a href="">
          HOME
        </a>
      </div>
      <div className={styles.item}>
        <a href="">
          ORDER NOW
        </a>
      </div>
      <div className={styles.item}>
        <a href="">
          MENU
        </a>
      </div>
      <div className={styles.item}>
        <a href="">
          CONTACT
        </a>
      </div>
      <div className={styles.contactAndCart}>

      <div className={styles.callButton}>
          <Image src={call} style={{color: ''}} />
            <div className={styles.text}>
              +1-650-546-9864
            </div>
      </div>
      <div className={styles.cart}>
          <Image src={cart}  width={23}/>
      </div>
      </div>
    </div>
  )
}
