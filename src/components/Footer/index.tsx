import React from 'react'
import WhatsApp from '../WhatsApp'

const Footer: React.FC = () => {
  return (
    <>
      <WhatsApp />
      <div className="footer bg-primary text-secondary mb-96">
        <div className="container flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
          <div className="contact-info text-center p-5  w-full  md:w-1/2  border border-gray-100">
            <div className=" border border-gray-100 flex items-center">
              <img
                src="./images/logoAmdopresur.jpg"
                alt="AMDOPRESUR"
                className="max-w-[200px] max-h-[200px]"
              />
              <div className="ml-4 mr-7">
                <p>AMDOPRESUR</p>
                <p className="ml-4">
                  Asociación Multidisciplinaria de Dominicanos y Profesionales en España y
                  ultramar. Participa en los programas Sociales de SantaLocura Productions
                </p>
              </div>
            </div>
            <p>santalocuraproductions@gmail.com</p>
            <p>+34 632 202 126</p>
            <p>desde Tenerife a cualquier parte de España.</p>
            <a href="https://calendly.com/santalocura/reservar-plaza">
              <p>Reservar en la agenda</p>
            </a>
          </div>
          <div className="map w-full  md:w-1/2">
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=16trxN32os9cjLq8G_1OYqugVf6N_DFw&ehbc=2E312F"
              width="100%"
              height="480"
              title="Cursos de Teatro"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
