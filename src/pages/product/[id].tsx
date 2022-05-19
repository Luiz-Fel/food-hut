import Image from 'next/image';
import React from 'react'
import styles from './styles.module.scss'

export default function Product() {
    const burger = {
        id: 0,
        img: '/images/singlePatty.png',
        name: 'Single Patty',
        price: [7.99, 9.99, 11.99],
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit in culpa'
    };

  return (
    <div className={styles.container}>
        <Image src={"../../../public" + burger.img} />
        <div className={styles.content}>
            <h2 className={styles.name}>{burger.name}</h2>
            <p className={styles.price}>{burger.price[0]}</p>
            <p className={styles.description}>{burger.description}</p>
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
