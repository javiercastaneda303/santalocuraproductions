import React from 'react'
import IconTitle from '../../components/IconTitle'

const WorkShops = () => {
  return (
    <div className="workshops-container flex flex-col">
      <div className="artistic section mb-8">
        <IconTitle title="Formación artística – Grupal. " />
        <div className="flex flex-col md:flex-row">
          <div className="px-8 md:w-2/5 mb-4 md:mb-0">
            <img
              src="/images/artistic.png"
              className="object-contain md:max-w-[400px] w-full"
              alt="Artístico"
            />
          </div>
          <div className="md:w-3/5">
            <p className="text-justify">
              Es un Taller para Formación y Preparación continua para actores y actrices. Es un
              taller estable y de actividad constante. Interesante oferta para reciclarse en
              los conocimientos escénicos, desarrollar habilidades profesionales, subir a
              escena y llegar a formar parte de un elenco teatral. La metodología empleada:
              Utilizamos el conocido método ARTEDRA del maestro del teatro de la República
              Dominicana don Iván García Guerra. Trabajaremos las características de un
              personaje y la capacidad interpretativas para su puesta en escena. Analizaremos
              la voz como herramienta creativa. La expresión corporal. Movimiento Escénico.
            </p>
            <h3 className="font-bold">Objetivo:</h3>
            <p className="text-justify">
              Subir a escena con seguridad. Acostumbrarnos a la auto observación y
              concentración. Conocer el mundo escondido detrás de un texto teatral. Actuar.
              Ejercitar el cuerpo y la mente. Interpretación de una Escritura y lectura
              teatral. El Juego teatral en Escena en etapas 1, 2 y 3. Activaremos el proceso
              creativo individual y grupal.
            </p>
          </div>
        </div>
      </div>
      {/* Repite el patrón para las demás secciones, asegurándote de ajustar las rutas de las imágenes y el contenido del texto según corresponda. */}
      {/* Se omite la repetición detallada del patrón para conservar la claridad y la brevedad, pero debes seguir el mismo formato para cada sección adicional. */}
    </div>
  )
}

export default WorkShops
