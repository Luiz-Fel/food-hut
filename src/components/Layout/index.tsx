import React, { ReactNode } from 'react'
import Footer from '../Footer'
import NavBar from '../NavBar'

interface LayoutProps { 
  children: ReactNode
}

export const Layout = ({ children } : LayoutProps) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}
