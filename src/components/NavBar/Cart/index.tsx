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

const totalValue = 7.99;

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
            <div>
              
            </div>
          )
        })}
      </div>
      <h3 className={styles.total}>{totalValue}</h3>
    </ReactModal>
  )
}
