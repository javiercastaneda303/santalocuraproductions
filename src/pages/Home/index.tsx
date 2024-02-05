import React from 'react'
import IconTitle from '../../components/IconTitle'

const Index = () => {
  return (
    <div className="home-container flex flex-col">
      <IconTitle title="Talleres de Teatro 2024" />
      <img
        src="/images/artistic.png"
        className="w-full max-w-[400px] object-contain "
        alt="Artístico"
      />
      <p>
        Los talleres de “Actuación, Lúdico Escénicos y Formación Teatral ¡ACERCATE! son una
        propuesta de ocio y entretenimiento para niños, jóvenes y adultos desde 10 años hasta
        cualquier edad y cualquier género. La práctica y el encuentro grupal contribuye a
        desinhibirnos y permiten acercarnos a nuestra esencia creativa individual o colectiva.
        Promueven la lectura, creatividad, el buen humor y crecimiento personal mediante las
        herramientas tan diversas que proporciona el extenso arte teatral.
      </p>
      <h2 className="text-2xl font-bold">¿A quién va dirigido?</h2>
      <p>
        Va dirigido a personas de cualquier edad. Centros escolares. Estudiantes de teatro,
        televisión. Agrupaciones culturales de asociaciones y a amantes de la lectura y
        escritura.
      </p>
      <h2 className="text-2xl font-bold">Dinámica</h2>
      <p>
        Hay varios tipos de talleres, cada grupo trabaja técnicas diferentes, según tus
        necesidades. Es compatible con personas de cualquier edad y género, porque todos y
        todas tienen las puertas abiertas, los principiantes y experimentados. No se requiere
        experiencia previa. Es abierto e integrador. Adecuado para centros escolares donde se
        combinan las vivencias con participativas con la escenificación para disfrutar y
        aprender de las situaciones de la vida. Pueden inscribirse personas que ya pertenecen a
        grupos amateurs interesados en mejorar sus capacidades histriónicas en el escenario.
      </p>
    </div>
  )
}

export default Index
