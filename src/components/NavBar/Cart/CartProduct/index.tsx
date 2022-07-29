import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image';

interface CartProductProps {
  product: {
    img: string;
    name: string;
  };
  extras: number;
  price: string;
}
const loader = ({ src } : any) => {
  return `/images/${src}`
}

export default function CartProduct({ product, extras, price } : CartProductProps) {
  return (
  <div className={styles.product}>
      <div className={styles.upperContent}>
        <Image loader={loader} src={product.img} width={70} height={70}/>
        <p>{product.name}</p>
      <div className={styles.price}>
        <p>{price}</p>
      </div>
    </div>
      <div className={styles.lowerContent}>
        <p>{extras}</p>
    </div>
    <div className={styles.buttons}>
      <button className={styles.editButton}>
        Edit
      </button>
      <button className={styles.removeButton}>
        Remove
      </button>
    </div>
  </div>
  
  )
}
