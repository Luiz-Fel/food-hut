import React, { Dispatch } from 'react'
import ReactModal from 'react-modal';
import CartProduct from './CartProduct';
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
  


export default function Cart({ modalIsOpen, setModalIsOpen } : CartProps) {
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      overlayClassName="overlay-react-modal"
      className="react-modal"
    >

      <button className={styles.button} onClick={() => setModalIsOpen(false)}>
        CLOSE
      </button>
      <div className={styles.productsContainer}>
        {products.map((product) => {
          return (
            <CartProduct product={product} quantity={quantity} price={price} />
          )
        })}
      </div>
      <h3 className={styles.total}>{`Total: ${totalValue}`}</h3>
    </ReactModal>
  )
}
