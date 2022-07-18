import Image from 'next/image';
import React, { Dispatch } from 'react'
import ReactModal from 'react-modal';
import styles from './styles.module.scss'

interface CartProps {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<React.SetStateAction<boolean>>;
}

const products = [{
  id: 0,
  img: 'singlePatty.png',
  name: 'Single Patty',
  price: [7.99, 9.99, 11.99],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra malesuada eros quis bibendum. Sed sodales a eros vestibulum tincidunt. Integer urna neque, sodales ac varius sit amet, luctus et leo. Donec convallis turpis sed hendrerit euismod. Donec egestas dapibus consequat.'
}]

const totalValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'  
  }).format(7.99);

const quantity = 1;

const price = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'  
  }).format(products[0].price[0])
  
const loader = ({ src  } : any) => {
  return `/images/${src}`
}

export default function Cart({ modalIsOpen, setModalIsOpen } : CartProps) {
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      overlayClassName="overlay-react-modal"
      className="react-modal"
    >

      <button onClick={() => setModalIsOpen(false)}>
        CLOSE
      </button>
      <div className={styles.container}>
        {products.map((product) => {
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
        })}
      </div>
      <h3 className={styles.total}>{totalValue}</h3>
    </ReactModal>
  )
}
