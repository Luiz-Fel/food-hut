import React, { ReactNode, useState } from 'react'
import { useCart } from '../../hooks/UseCart'
import Footer from '../Footer'
import NavBar from '../NavBar'
import Cart from '../NavBar/Cart'

interface LayoutProps { 
  children: ReactNode
}

export const Layout = ({ children } : LayoutProps) => {
    
  const  { modalIsOpen, closeCartModal } = useCart();

  return (
    <>
      <NavBar />
      {children}
      <Footer />
      <Cart modalIsOpen={modalIsOpen} closeCartModal={closeCartModal} />
    </>
  )
}
