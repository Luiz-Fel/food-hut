import Image from 'next/image'
import React from 'react'
import OrderNowButton from '../OrderNowButton'
import styles from './styles.module.scss'
import burger from '../../../public/images/singlePatty.png'

export default function Hero() {
  return (
    <div className={styles.container}>
        <div className={styles.saleDescription}>
            <h2>Single Patty</h2>
            <p>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore.
            </p>
            <OrderNowButton href={'/'} />
        </div>
        <div className={styles.saleImage}>
          <Image src={burger} width={702} height={702} />
          <div className={styles.price}>
            <h3>
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
              }).format(7.99)}
            </h3>
          </div>
        </div>
        <div className={styles.saleName}>
            <h3>Sassy Burger</h3>
            <p>Our great burger, <br/>Now with extra chesse</p>
        </div>
        <h2 className={styles.sideText}>
          Burger
        </h2>
    </div>
  )
}
