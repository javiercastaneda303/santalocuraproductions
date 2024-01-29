import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './style.scss'

const Navbar: React.FC = () => {
  const location = useLocation()

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">Santa Locura</div>
        <div className="menu">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Inicio
          </Link>
          <Link to="/talleres" className={location.pathname === '/talleres' ? 'active' : ''}>
            Talleres
          </Link>
          <Link to="/charlas" className={location.pathname === '/charlas' ? 'active' : ''}>
            Charlas
          </Link>
          <Link to="/contacto" className={location.pathname === '/contacto' ? 'active' : ''}>
            Contáctanos
          </Link>
        </div>
        <div style={{ width: '20%' }} />
      </div>
    </div>
  )
}

export default Navbar
