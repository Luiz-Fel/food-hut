import Image from 'next/image';
import React from 'react'
import styles from './styles.module.scss'

export default function Product() {
    const burger = {
        id: 0,
        img: 'singlePatty.png',
        name: 'Single Patty',
        price: [7.99, 9.99, 11.99],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra malesuada eros quis bibendum. Sed sodales a eros vestibulum tincidunt. Integer urna neque, sodales ac varius sit amet, luctus et leo. Donec convallis turpis sed hendrerit euismod. Donec egestas dapibus consequat.'
    };

    const loader = ({ src  } : any) => {
        return `/images/${src}`
    }

  return (
    <div className={styles.container}>
        <Image loader={loader} src={burger.img} width={600} height={600}/>
        <div className={styles.content}>
            <h2 className={styles.name}>{burger.name}</h2>
            <p className={styles.price}>{
                new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD'  
                }).format(burger.price[0])
            }</p>
            <p className={styles.description}>{burger.description}</p>
            <h3 className={styles.optionsTitle}>Choose additional ingredients</h3>
            <div className={styles.additional}>
                <div className={styles.option}>
                    <label>
                        <input type="checkbox" name="double-cheese" id="double-cheese" />
                        Double Cheese
                    </label>
                </div>
                <div className={styles.option}>
                    <label>
                        <input type="checkbox" name="double-cheese" id="double-cheese" />
                        Double Cheese
                    </label>
                </div>
                <div className={styles.option}>
                    <label>
                        <input type="checkbox" name="double-cheese" id="double-cheese" />
                        Double Cheese
                    </label>
                </div>
            </div>
            <div className={styles.addToCart}>
                <input type="number" name="quantity" id="quantity" />
                <button>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}
