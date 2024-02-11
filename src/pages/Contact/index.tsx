import React from 'react'
import IconTitle from '../../components/IconTitle'

const Contact = () => {
  return (
    <div className="container-contact flex flex-col items-center justify-center">
      <IconTitle title="Talleres Acércate a SantaLocura" />
      <div className="container-image-text flex">
        <div className="container-text w-3/5">
          <div>
            <p className="text-justify">Para inscribirte, actualmente tenemos:</p>
            <p className="text-justify bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md cursor-pointer hover:bg-blue-600 transition-colors">
              Teatro Terapia en el CC Las Madres el último Jueves de cada mes.
            </p>
            <p className="text-justify bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md cursor-pointer hover:bg-blue-600 transition-colors my-5">
              Teatro Grupal CC Finca España cada viernes.
            </p>
          </div>
          <h2 className="text-2xl font-bold">
            ¡Apúntate!! ¡Te acompañaré a representar el papel de tu vida!
          </h2>
          <h2 className="text-2xl font-bold">Horarios</h2>
          <p className="text-justify">
            Los jueves y viernes: Una hora y media cada sesión. Reservar con antelación para
            charlas y conferencias. Consultar los horarios en el teléfono: +34 672 909732
          </p>
          <h2 className="text-2xl font-bold">Organiza</h2>
          <p className="text-justify">
            www.santamorel.blogspot.com En colaboración con la Asociación de Vecinos de Finca
            España. El Centro Ciudadano Finca España y el Centro Ciudadano Las Madres.
          </p>
          {/* <h2 className="text-2xl font-bold">Diseño web</h2> */}
          {/* <p>chavi.web</p> */}
        </div>
        <div className="container-image px-8 w-2/5">
          <img
            src="/images/contactanos.png"
            className="w-full object-contain"
            alt="Contactanos"
          />
        </div>
      </div>
      {/* <div className="container-map border-2 border-black w-full flex items-center justify-center h-32"></div> */}
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Atlantic%2FCanary&bgcolor=%23ffffff&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=NzE2NDU2MjBjYTRjMjViMDNiMzY5MjQ1MzdmMDA3ODgxYmJhZTEwOTY4YTJmMzkxODI2M2U0MGU2ZWVhMzRmMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5"
        style={{ border: 'solid 1px #777' }}
        width="800"
        height="600"
        frameBorder="0"
        scrolling="no"
        title="Google Calendar"
      ></iframe>
    </div>
  )
}

export default Contact
