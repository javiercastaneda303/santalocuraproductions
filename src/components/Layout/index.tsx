// src/components/Layout.tsx

import React, { ReactNode } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import './style.scss' // Asegúrate de tener este archivo para los estilos

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        <div className="background">{/* <img src="/images/fondo.jpg" alt="Fondo" /> */}</div>
        <div className="overlay"></div>
        <div className="container">{children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
