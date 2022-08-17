import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image';

interface CartProductProps {
  product: {
    img: string;
    name: string;
  };
  toppings: {
    quantity: number;
    description: string;
  }[];
  price: string;
}
const loader = ({ src } : any) => {
  return `/images/${src}`
}

export default function CartProduct({ product, toppings, price } : CartProductProps) {


  const [quantity, setQuantity] = React.useState(1);

  return (
  <div className={styles.product}>
      <p className={styles.quantity}>{quantity}</p>
      <div className={styles.upperContent}>
        <Image loader={loader} src={product.img} width={70} height={70}/>
        <p>{product.name}</p>
      <div className={styles.price}>
        <p>{price}</p>
      </div>
    </div>
      <div className={styles.lowerContent}>
        {toppings.map(({quantity, description}) => {
          return(
            <p className={styles.topping}>
              {`${quantity}x ${description}`}
            </p>
          )
        })}
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
