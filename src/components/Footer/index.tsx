import React from 'react'
import WhatsApp from '../WhatsApp'

const Footer: React.FC = () => {
  return (
    <>
      <WhatsApp />
      <div className="footer bg-primary text-secondary">
        <div className="container flex justify-between items-center max-w-7xl mx-auto">
          <div className="contact-info">
            <p>santalocuraproductions@gmail.com</p>
            <p>+34 632 202 126</p>
            {/* <div>
            <h2 className="text-secondary">Horarios:</h2>
            
          </div> */}
          </div>
          {/* <div className="map w-48 h-48 bg-gray-300">Insertar mapa aquí</div> */}
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=16trxN32os9cjLq8G_1OYqugVf6N_DFw&ehbc=2E312F"
            width="640"
            height="480"
            title="Cursos de Teatro"
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default Footer
