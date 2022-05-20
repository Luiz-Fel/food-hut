import React, { ReactNode, useState } from 'react'
import Footer from '../Footer'
import NavBar from '../NavBar'
import Cart from '../NavBar/Cart'

interface LayoutProps { 
  children: ReactNode
}

export const Layout = ({ children } : LayoutProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)


  return (
    <>
      <NavBar />
      {children}
      <Footer />
      <Cart modalIsOpen={true} setModalIsOpen={setModalIsOpen}  />
    </>
  )
}
