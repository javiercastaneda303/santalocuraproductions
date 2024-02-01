import React from 'react'
import IconTitle from '../../components/IconTitle'

const Contact = () => {
  return (
    <div className="container-contact flex flex-col items-center justify-center">
      <IconTitle title="Talleres Acércate a SantaLocura" />
      <div className="container-image-text flex">
        <div className="container-text w-3/5">
          <p>
            Para inscripción, les enviaremos un formulario de inscripción para seleccionar el
            taller de tu interés. O puede solicitarlo a Santa Morel
            santamorelvalenzu@gmail.com. +34 672 909732
          </p>
          <h2 className="text-2xl font-bold">
            ¡Apúntate!! ¡Te acompañaré a representar el papel de tu vida!
          </h2>
          <h2 className="text-2xl font-bold">Horarios</h2>
          <p>
            Los jueves y viernes: Una hora y media cada sesión. Reservar con antelación para
            charlas y conferencias. Consultar los horarios en el teléfono: +34 672 909732
          </p>
          <h2 className="text-2xl font-bold">Organiza</h2>
          <p>
            www.santamorel.blogspot.com En colaboración con la Asociación de Vecinos de Finca
            España. El Centro Ciudadano Finca España y el Centro Ciudadano Las Madres.
          </p>
          <h2 className="text-2xl font-bold">Diseño web</h2>
          <p>xavi.web corporations</p>
        </div>
        <div className="container-image px-8 w-2/5">
          <img
            src="/images/contactanos.png"
            className="w-full object-contain"
            alt="Contactanos"
          />
        </div>
      </div>
      <div className="container-map border-2 border-black w-full flex items-center justify-center h-32">
        <p>Mapa aquí</p>
      </div>
    </div>
  )
}

export default Contact
