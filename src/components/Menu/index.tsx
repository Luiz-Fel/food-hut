import React from 'react'
import ItemMenu from './ItemMenu'
import styles from './styles.module.scss'
import burgerThief from '../../../public/images/burgerThief.png'
import grillThrill from '../../../public/images/grillThrill.png'
import pikaNBurger from '../../../public/images/pikaNBurger.png'

export default function Menu() {
  return (
    <div className={styles.container}>
        <div className={styles.titleSection}>
            <p>our special</p>
            <h2>Dine In + Delivery</h2>
        </div>
        <div className={styles.itemsMenu}>
          <ItemMenu imageSrc={burgerThief} 
          name={'Burger Thief'} 
          description={'Lorem ipsum dolor sit amet, consectetur'} 
          href={'/'} />

          <ItemMenu imageSrc={grillThrill} 
          name={'Burger Magic'} 
          description={'Lorem ipsum dolor sit amet, consectetur'} 
          href={'/'} />

          <ItemMenu imageSrc={pikaNBurger} 
          name={'Pika N’ Burger'} 
          description={'Lorem ipsum dolor sit amet, consectetur'} 
          href={'/'} />

          <ItemMenu imageSrc={burgerThief} 
          name={'Burger Thief'} 
          description={'Lorem ipsum dolor sit amet, consectetur'} 
          href={'/'} />

          <ItemMenu imageSrc={grillThrill} 
          name={'Burger Magic'} 
          description={'Lorem ipsum dolor sit amet, consectetur'} 
          href={'/'} />
          
          <ItemMenu imageSrc={pikaNBurger} 
          name={'Pika N’ Burger'} 
          description={'Lorem ipsum dolor sit amet, consectetur'} 
          href={'/'} />
         
        </div>
        <h2 className={styles.sideText}>
          Menu
        </h2>
    </div>
  )
}
