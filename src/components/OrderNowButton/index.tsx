import React from 'react'
import styles from './styles.module.scss'

interface OrderNowButtonProps { 
    href: string;
    mode?: string;
}

export default function OrderNowButton({ href, mode } : OrderNowButtonProps) {
  if (mode === 'light') {
    return(
      <a href={href} className={styles.orderNowButtonLight}>
        ORDER NOW
      </a>
    )
  }
  
  return (
    <a href={href} className={styles.orderNowButton}>
        ORDER NOW
    </a>
  )
}
