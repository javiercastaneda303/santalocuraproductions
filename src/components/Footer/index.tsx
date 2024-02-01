import React from 'react'

const Footer: React.FC = () => {
  return (
    <div className="footer bg-primary text-secondary">
      <div className="container flex justify-between items-center max-w-7xl mx-auto">
        <div className="contact-info">
          <p>Correo: santamorelvalenzu@gmail.com</p>
          <p>Teléfono: +34 672 909732</p>
          <p>Dirección: Dirección de ejemplo</p>
          <div>
            <h2 className="text-secondary">Horarios:</h2>
            <p className="text-secondary">
              Los jueves y viernes: Una hora y media cada sesión. Reservar con antelación para
              charlas y conferencias.
            </p>
          </div>
        </div>
        <div className="map w-48 h-48 bg-gray-300">Insertar mapa aquí</div>
      </div>
    </div>
  )
}

export default Footer
