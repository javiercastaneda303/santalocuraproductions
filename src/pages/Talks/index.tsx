// src/pages/Talks.jsx

import React from 'react'
import IconTitle from '../../components/IconTitle'

const Talks = () => {
  return (
    <div className="talks-container flex flex-col">
      <IconTitle title="Charlas y Conferencias" />
      <h2 className="text-2xl font-bold">
        Temas de Integración Social Infancia y Juventud. Bullying. Racismo. Discriminación
        Social.
      </h2>
      <p className="text-justify">
        La sociedad ha ido cambiando y las herramientas utilizadas en la enseñanza también
        pero, los resultados son leves en los asuntos comunes que respectan a la integración
        social, el racismo, el bulling y la discriminación. Estas Charlas son amenas porque
        utilizamos juegos de Teatro y métodos basados en Psicología Infantil y referencias
        socioculturales de actualidad como base de la dinámica.
      </p>
      <h2 className="text-2xl font-bold">Objetivo:</h2>
      <p className="text-justify">
        Que desde la infancia y los jóvenes, podamos aportar desde la experiencia migrante,
        para educar de manera integral a futuras generaciones. Contribuir a formar a una
        juventud abierta y más despierta a los problemas sociales que afectan a todos sin
        distinción. El racismo, la exclusión, marginación a la mujer migrante, el bullying y
        otros, nos afectan o han afectado a todos en algún momento de nuestra vida, que sepamos
        detectar comportamientos y valorar su papel en la sociedad con madurez.{' '}
      </p>
    </div>
  )
}

export default Talks
