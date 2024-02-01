import React, { ReactNode } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout min-h-screen flex flex-col">
      <Navbar />
      <div className="content flex-1 p-20 relative bg-gray-200">
        <div className="background fixed top-0 left-0 h-full z-[-10000]">
          {/* <img src="/images/fondo.jpg" alt="Fondo" className="object-contain w-full" /> */}
        </div>
        <div className="overlay absolute top-0 left-0 w-full h-full">
          {/* background-color: rgba(0, 0, 0, 0.2); */}
        </div>
        <div className="container w-full max-w-7xl">{children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
