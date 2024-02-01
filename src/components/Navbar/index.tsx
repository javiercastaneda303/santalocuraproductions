// Navbar.tsx
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar: React.FC = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <div className="navbar bg-primary text-secondary">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <div className="logo text-2xl font-bold">Santa Locura</div>
          <div className="menu-icon text-3xl cursor-pointer md:hidden" onClick={toggleDrawer}>
            ☰
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="bg-white p-4">
              <Link
                to="/"
                className={`block text-lg font-bold mb-2 ${
                  location.pathname === '/' ? 'text-third' : 'text-secondary'
                }`}
              >
                Inicio
              </Link>
              <Link
                to="/talleres"
                className={`block text-lg font-bold mb-2 ${
                  location.pathname === '/talleres' ? 'text-third' : 'text-secondary'
                }`}
              >
                Talleres
              </Link>
              <Link
                to="/charlas"
                className={`block text-lg font-bold mb-2 ${
                  location.pathname === '/charlas' ? 'text-third' : 'text-secondary'
                }`}
              >
                Charlas
              </Link>
              <Link
                to="/contacto"
                className={`block text-lg font-bold mb-2 ${
                  location.pathname === '/contacto' ? 'text-third' : 'text-secondary'
                }`}
              >
                Contáctanos
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
