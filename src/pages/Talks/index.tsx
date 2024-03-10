// src/pages/Talks.jsx

import React from 'react'
import IconTitle from '../../components/IconTitle'

const Talks = () => {
  return (
    <>
      <div className="workshops-container flex flex-col border border-cyan-500 mt-5">
        <div className="Infantil section mb-8">
          <IconTitle title="Charlas y Conferencias" />
          <h2 className="text-2xl font-bold">
            Temas de Integración Social: Infancia y Juventud. Bullying. Racismo. Discriminación
            Social.
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="px-8 md:w-1/5 mb-4 md:mb-0">
              <video
                src="/videos/ascensor.mp4"
                preload="auto"
                controls
                // poster="path/to/poster.jpg"
              >
                Tu navegador no soporta el elemento <code>video</code>.
              </video>
            </div>
            <div className="md:w-3/5">
              <p className="text-justify">
                Estas Charlas son amenas porque utilizamos juegos de Teatro y métodos basados
                en Psicología Infantil y referencias socioculturales de actualidad como base de
                la dinámica.
              </p>
              <h2 className="text-2xl font-bold">Objetivo:</h2>
              <p className="text-justify">
                Que desde la infancia y los jóvenes, podamos aportar desde la experiencia
                migrante, para educar de manera integral a futuras generaciones. Contribuir a
                formar a una juventud abierta y más despierta a los problemas sociales que
                afectan a todos sin distinción.
              </p>
              <p className="text-justify">
                El racismo, la exclusión, marginación a la mujer migrante, el bullying y otros,
                nos afectan o han afectado a todos en algún momento de nuestra vida, que
                sepamos detectar comportamientos y valorar su papel en la sociedad con madurez.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="workshops-container flex flex-col border border-cyan-500 mt-5">
        <div className="Lúdico section mb-8 text-center">
          {/* <IconTitle title="¡Apúntate!! ¡Te acompañaré a representar el papel de tu vida!" /> */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="px-8 md:w-2/5 mb-4 md:mb-0 mx-auto">
              <img
                src="/images/4-.png"
                className="object-contain md:max-w-[400px] w-full"
                alt="Artístico"
              />
            </div>
            <p className="text-justify">
              La sociedad ha ido cambiando y las herramientas utilizadas en la enseñanza
              también pero, los resultados son leves en los asuntos comunes que respectan a la
              integración social, el racismo, el bullyng y la discriminación.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Talks
