// src/components/Footer.tsx

import React from 'react'
import './styles.scss' // Asegúrate de tener este archivo para los estilos

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="contact-info">
          <p>Correo: santamorelvalenzu@gmail.com</p>
          <p>Teléfono: +34 672 909732</p>
          <p>Dirección: Dirección de ejemplo</p>
          <div>
            <h2>Horarios:</h2>
            <p>
              Los jueves y viernes: Una hora y media cada sesión. Reservar con antelación para
              charlas y conferencias.
            </p>
          </div>
        </div>
        <div className="map">Insertar mapa aquí</div>
      </div>
    </div>
  )
}

export default Footer
