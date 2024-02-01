import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar: React.FC = () => {
  const location = useLocation()

  return (
    <div className="navbar bg-primary text-secondary sticky top-0">
      <div className="container flex justify-center items-center py-4">
        <div className="logo text-2xl font-bold w-1/5">Santa Locura</div>
        <div className="menu flex items-center w-3/5 ml-auto space-x-8">
          <Link
            to="/"
            className={`text-lg font-bold ${
              location.pathname === '/' ? 'text-third' : 'text-secondary'
            }`}
          >
            Inicio
          </Link>
          <Link
            to="/talleres"
            className={`text-lg font-bold ${
              location.pathname === '/talleres' ? 'text-third' : 'text-secondary'
            }`}
          >
            Talleres
          </Link>
          <Link
            to="/charlas"
            className={`text-lg font-bold ${
              location.pathname === '/charlas' ? 'text-third' : 'text-secondary'
            }`}
          >
            Charlas
          </Link>
          <Link
            to="/contacto"
            className={`text-lg font-bold ${
              location.pathname === '/contacto' ? 'text-third' : 'text-secondary'
            }`}
          >
            Contáctanos
          </Link>
        </div>
        <div style={{ width: '20%' }} />
      </div>
    </div>
  )
}

export default Navbar
