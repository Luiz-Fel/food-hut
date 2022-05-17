import Image, { StaticImageData } from 'next/image';
import React from 'react'
import styles from './styles.module.scss'
import cart from '../../../../public/cart.svg'
import OrderNowButton from '../../OrderNowButton';

interface ItemMenuProps { 
    imageSrc: StaticImageData;
    name: string;
    description: string;
    href: string;
}

export default function ItemMenu({
    imageSrc, 
    name, 
    description, 
    href
} : ItemMenuProps) {
  return (
    <div className={styles.container}>
        <Image src={imageSrc} width={270} height={306} />
        <h3>{name}</h3>
        <p>{description}</p>
        <div className={styles.buttons}>
            <div className={styles.cart}>
                <Image src={cart}  width={23}/>
            </div>
            <OrderNowButton href={href} mode="light" />
        </div>
    </div>
  )
}
