import React from 'react'
import styles from './styles.module.scss'

interface OrderNowButtonProps { 
    href: string;
}

export default function OrderNowButton({ href } : OrderNowButtonProps) {
  return (
    <a href={href} className={styles.orderNowButton}>
        ORDER NOW
    </a>
  )
}
