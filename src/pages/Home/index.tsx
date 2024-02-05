import React from 'react'
import IconTitle from '../../components/IconTitle'

const Index = () => {
  return (
    <div className="home-container">
      <IconTitle title="Talleres de Teatro 2024" />
      {/* Contenedor Flex que ajusta su dirección basado en el tamaño de pantalla */}
      <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-4">
        <img
          src="/images/5.jpg"
          className="w-full md:max-w-[400px] object-contain mx-auto"
          alt="Artístico"
        />
        <div className="text-base space-y-4">
          <p className="text-justify">
            Los talleres de “Actuación, Lúdico Escénicos y Formación Teatral ¡ACERCATE! son una
            propuesta de ocio y entretenimiento para niños, jóvenes y adultos desde 10 años
            hasta cualquier edad y cualquier género
          </p>

          <img
            src="/images/2.jpg"
            className="w-full md:max-w-[400px] object-contain mx-auto"
            alt="Artístico"
          />
          <p className="text-justify">
            La práctica y el encuentro grupal contribuye a desinhibirnos y a permiten
            acercarnos a nuestra esencia creativa individual o colectiva. Promueven la lectura,
            creatividad, el buen humano y crecimiento personal mediante las herramientas tan
            diversas que proporciona el extenso arte teatral
          </p>
          <h2 className="text-2xl font-bold">¿A quién va dirigido?</h2>
          <p className="text-justify">
            Va dirigido a personas de cualquier edad. Centros escolares. Estudiantes de teatro,
            televisión. Agrupaciones culturales de asociaciones y a amantes de la lectura y
            escritura...
          </p>
          <h2 className="text-2xl font-bold">Dinámica</h2>
          <p className="text-justify">
            Hay varios tipos de talleres, cada grupo trabaja técnicas diferentes, según tus
            necesidades. Es compatible con personas de cualquier edad y género, porque todos y
            todas tienen las puertas abiertas, los principiantes y experimentados. No se
            requiere experiencia previa. Es abierto e integrador. Adecuado para centros
            escolares donde se combinan las vivencias con participativas con la escenificación
            para disfrutar y aprender de las situaciones de la vida. Pueden inscribirse
            personas que ya pertenecen a grupos amateurs interesados en mejorar sus capacidades
            histriónicas en el escenario.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Index
