import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image';

interface CartProductProps {
  product: {
    img: string;
    name: string;
  };
  quantity: number;
  price: string;
}
const loader = ({ src } : any) => {
  return `/images/${src}`
}

export default function CartProduct({ product, quantity, price } : CartProductProps) {
  return (
    <div className={styles.product}>
    <Image loader={loader} src={product.img} width={70} height={70}/>
    <div className={styles.content}>
      <p>{product.name}</p>
      <div className={styles.lowerContent}>
        <p>{quantity}</p>
        <p>{price}</p>
      </div>
    </div>
  </div>
  )
}
