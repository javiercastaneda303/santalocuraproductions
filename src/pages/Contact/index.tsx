import React from 'react'
import IconTitle from '../../components/IconTitle'
import './style.scss'
const Contact = () => {
  return (
    <div className="container-contact">
      <IconTitle title="Talleres Acércate a SantaLocura" />
      <div className="container-image-text">
        <div className="container-text">
          <p>
            Para inscripción, les enviaremos un formulario de inscripción para seleccionar el
            taller de tu interés. O puede solicitarlo a Santa Morel
            santamorelvalenzu@gmail.com. +34 672 909732
          </p>
          <h2>¡Apúntate!! ¡Te acompañaré a representar el papel de tu vida!</h2>
          <h2>Horarios</h2>
          <p>
            Los jueves y viernes: Una hora y media cada sesión. Reservar con antelación para
            charlas y conferencias. Consultar los horarios en el teléfono: +34 672 909732
          </p>
          <h2>Organiza</h2>
          <p>
            www.santamorel.blogspot.com En colaboración con la Asociación de Vecinos de Finca
            España. El Centro Ciudadano Finca España y el Centro Ciudadano Las Madres.
          </p>
          <h2>Diseño web</h2>
          <p>xavi.web corporations</p>
        </div>
        <div className="container-image">
          <img src="/images/contactanos.png" />
        </div>
      </div>
      <div className="container-map">
        <p>Mapa aqui</p>
      </div>
    </div>
  )
}

export default Contact
