import React, { Dispatch } from 'react'
import ReactModal from 'react-modal';
import CartProduct from './CartProduct';
import styles from './styles.module.scss'
import { CSSTransition } from 'react-transition-group';

interface CartProps {
  modalIsOpen: boolean;
  closeCartModal: () => void;
}

const products = [{
  id: 0,
  img: 'singlePatty.png',
  name: 'Single Patty',
  price: [7.99, 9.99, 11.99],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra malesuada eros quis bibendum. Sed sodales a eros vestibulum tincidunt. Integer urna neque, sodales ac varius sit amet, luctus et leo. Donec convallis turpis sed hendrerit euismod. Donec egestas dapibus consequat.'
},
{
  id: 1,
  img: 'singlePatty.png',
  name: 'Single Patty',
  price: [7.99, 9.99, 11.99],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra malesuada eros quis bibendum. Sed sodales a eros vestibulum tincidunt. Integer urna neque, sodales ac varius sit amet, luctus et leo. Donec convallis turpis sed hendrerit euismod. Donec egestas dapibus consequat.'
}]

const totalValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'  
  }).format(7.99);

const toppings = [{
  quantity: 1,
  description: 'An additional patty'
},{
  quantity: 1,
  description: 'An additional patty'
},{
  quantity: 1,
  description: 'An additional patty'
},{
  quantity: 1,
  description: 'An additional patty'
},];

const price = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'  
  }).format(products[0].price[0])
  

export default function Cart({ modalIsOpen, closeCartModal } : CartProps) {

  const modalTransitionStyles = modalIsOpen ? styles.openedModal : styles.closedModal

  return (

      <ReactModal
        overlayClassName={{
          base: styles.overlay,
          afterOpen: styles.overlayAfterOpen,
          beforeClose: styles.overlayBeforeClose
        }}
        className={`${styles.reactModal} ${modalTransitionStyles}`}
        isOpen={modalIsOpen}
        onRequestClose={closeCartModal}
        closeTimeoutMS={200}
        >

        <button className={styles.button} onClick={closeCartModal}>
          CLOSE
        </button>
        <div className={styles.productsContainer}>
          {products.map((product) => {
            return (
              <CartProduct key={product.id} product={product} toppings={toppings} price={price} />
            );
          })}
        </div>
        <h3 className={styles.total}>{`Total: ${totalValue}`}</h3>
      </ReactModal>
  )
}


