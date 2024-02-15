// src/pages/WorkShops.jsx

import React from 'react'
import IconTitle from '../../components/IconTitle'

const WorkShops = () => {
  return (
    <>
      <div className="workshops-container flex flex-col border border-cyan-500">
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
                Es un Taller para Formación y Preparación continua para actores y actrices. Son
                talleres estables y de actividad anual para una formación constante.
                Interesante oferta para reciclarse en los conocimientos escénicos, desarrollar
                habilidades profesionales, subir a escena y llegar a formar parte de un elenco
                teatral. La metodología empleada: Utilizamos el conocido método ARTEDRA del
                maestro del teatro de la República Dominicana don Iván García Guerra.
                Trabajaremos las características de un personaje y la capacidad interpretativas
                para su puesta en escena. Analizaremos la voz como herramienta creativa. La
                expresión corporal. Movimiento Escénico
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
      </div>

      <div className="workshops-container flex flex-col border border-cyan-500 mt-5">
        <div className="terapia section mb-8">
          <IconTitle title="Teatro-Terapia" />
          <div className="flex flex-col md:flex-row">
            <div className="px-8 md:w-2/5 mb-4 md:mb-0">
              <img
                src="/images/8.png"
                className="object-contain md:max-w-[400px] w-full"
                alt="Artístico"
              />
            </div>
            <div className="md:w-3/5">
              <p className="text-justify">
                Salud emocional, Activación de la memoria. Contribuye a acceder a una mejor
                inserción Sociolaboral. Utilizamos el teatro como herramienta para unir
                situaciones paralelas desde nuestra propia experiencia de vida. Ejercicios para
                indagar y localizar con creencias adquiridas del pasado, o bloqueos que han
                afectado de alguna manera a nuestro ser emocional. Con la intención de
                detectarlas, analizarlas y valorarlas según las diferentes opciones que se
                presentan en el proceso individual.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="workshops-container flex flex-col border border-cyan-500 mt-5">
        <div className="women section mb-8">
          <IconTitle title="Teatro para temas de la mujer " />
          <div className="flex flex-col md:flex-row">
            <div className="px-8 md:w-2/5 mb-4 md:mb-0">
              <img
                src="/images/women.png"
                className="object-contain md:max-w-[400px] w-full"
                alt="Artístico"
              />
            </div>
            <div className="md:w-3/5">
              <h2 className="font-bold">
                Recobrar la Autoestima. Crecimiento emocional. Potenciar tu capacidad de
                desarrollo y creatividad en varios aspectos.
              </h2>
              <h3 className="font-bold">Objetivos Prácticos:</h3>
              <p className="text-justify">
                Conseguiremos interactuar con nuestro propio Centro de Energía, activar el Ojo
                Espiritual que nos conduce al desarrollo emocional integral y pleno. Inserción
                en actividades sociales y laborales. Evitando la marginación y la exclusión
                sobre todo en la mujer migrante.
              </p>
              <h3 className="font-bold">Metodología:</h3>
              <p className="text-justify">
                Al final de los talleres se podrán realizar representaciones teatrales con
                público, empleando las técnicas teatrales aprendidos en el taller. Mejoraremos
                o modificaremos aspectos incómodos de nuestra propia personalidad desde el
                autoconocimiento. Activaremos el proceso creativo individual y grupal.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="workshops-container flex flex-col border border-cyan-500 mt-5">
        <div className="Lúdico section mb-8">
          <IconTitle title="Lúdico - Todos los públicos: “Amor al Arte”: " />
          <div className="flex flex-col md:flex-row">
            <div className="px-8 md:w-2/5 mb-4 md:mb-0">
              <img
                src="/images/19.jpg"
                className="object-contain md:max-w-[400px] w-full"
                alt="Artístico"
              />
            </div>
            <div className="md:w-3/5">
              <p className="text-justify">
                Disfrutar. Crear y representar comedias, Gags de improvisación. Farsa. Parodias
                con temas sociales. Décimas y Repentismo. Poemas. Musicales. Danza-Teatro.
              </p>
              <h3 className="font-bold">Objetivo:</h3>
              <p className="text-justify">
                Relajar la mente. Buscamos ser felices. Ser auténticos niños/as para sacar lo
                mejor y más divertido de nosotros mismos/as.
              </p>
              <h3 className="font-bold">Metodología:</h3>
              <p className="text-justify">
                Recurriremos a imágenes emotivas, vivencias pasadas, situaciones reales,
                escenificación de roles y desarrollaremos una visión diferente de la realidad
                con creatividad. Ideal para jóvenes y mayores. Pretendemos concluir con una
                actuación donde se practique lo aprendido. Una representación escénica de
                “Creación Colectiva” para evaluar progresos y entorno social con el taller de
                Teatro Lúdico Grupal.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="workshops-container flex flex-col border border-cyan-500 mt-5">
        <div className="Infantil section mb-8">
          <IconTitle title="Cuenta-Cuentos. Charlas. Lectura e interpretación." />
          <div className="flex flex-col md:flex-row">
            <div className="px-8 md:w-2/5 mb-4 md:mb-0">
              <video
                src="/videos/videoNiños.mp4"
                preload="auto"
                controls
                // poster="path/to/poster.jpg"
              >
                Tu navegador no soporta el elemento <code>video</code>.
              </video>
            </div>
            <div className="md:w-3/5">
              <p className="text-justify">
                Estimula la creatividad, el manejo consciente de las cualidades innatas del
                infante. Juegos grupales. Crear un personaje. Improvisaciones y creación
                colectiva. Taller de Lectura Infantil, lectura comprensiva e Interpretación
                teatral. Interesantes propuestas para estudiantes de Centros Escolares Se
                ofrece orientación específica con Charlas interactivas para la Infancia con
                Cuenta-Cuentos. Sobre bullying, racismo, discriminación Social.
              </p>
              <h3 className="font-bold">Objetivo:</h3>
              <p className="text-justify">
                Llegar a los Centros educativos. Asociaciones interesadas en reforzar su
                programa infantil y sociocultural comunitario. Disfrute y aprendizaje para los
                infantes, con una actividad extra escolar integrando como propósito importante,
                el desarrollo de sus capacidades artísticas y emocionales. Construir montajes
                teatrales donde muestren en escena sus aptitudes cognitivas y estimulen su
                personalidad, dentro del entorno al que pertenecen.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="workshops-container flex flex-col border border-cyan-500 mt-5">
        <div className="section mb-8">
          <IconTitle title="Espacio Personalizado: Teatro Terapia Individual:" />
          <div className="flex flex-col md:flex-row">
            <div className="px-8 md:w-2/5 mb-4 md:mb-0">
              <img
                src="/images/personalized.png"
                className="object-contain md:max-w-[400px] w-full"
                alt="Personalizado"
              />
            </div>
            <div className="md:w-3/5">
              <p className="text-justify">
                Con un seguimiento particular, de manos de expertos en Coach Emocional. Podrás
                enfocarte en tus objetivos, superar obstáculos del pasado. Seguimiento en
                inserción sociolaboral, Crecimiento Personal y podrás conseguir todo esto
                divirtiéndote en escena. ¡Apúntate!! ¡Te acompañaré a representar el papel de
                tu vida!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="workshops-container flex flex-col border border-cyan-500 mt-5">
        <div className="section mb-8">
          <IconTitle title="Charla - Teatro y Conferencias. " />
          <div className="flex flex-col md:flex-row">
            <div className="px-8 md:w-2/5 mb-4 md:mb-0">
              <img
                src="/images/conference.png"
                className="object-contain md:max-w-[400px] w-full"
                alt="Personalizado"
              />
            </div>
            <div className="md:w-3/5">
              <p className="text-justify">
                Ofrecemos charlas y encuentros lúdicos a todo público adulto para abordar temas
                de Integración Social, Mayores y temas de la Mujer de una manera diferente,
                como un soporte añadido para familias e instituciones. La sociedad ha ido
                cambiando y las herramientas utilizadas en la enseñanza también pero, los
                resultados es evidente que se necesitan refuerzos con actividades comunitarias
                como esta. Esta opción la puede reservar como “Charlas para jóvenes”. Se ofrece
                para Institutos, Colegios, Agrupaciones de Personas Migrantes, Centros
                Comunitarios. Estas se acompañan de Teatro Lúdico y son una herramienta de
                motivación, identidad y estímulo para el desarrollo emocional e intelectual de
                los jóvenes y adolescentes.
              </p>
              <h3 className="font-bold">Metodología:</h3>
              <p className="text-justify">
                Estas Charlas Interactivas aportan un interesante refuerzo para la integración
                social, en adolescentes y jóvenes de las comunidades migrantes y nativas
                referente al racismo, bullyng y la discriminación en varios aspectos. Evitar o
                disminuir actos de racismo, exclusión, bullying y remanentes emocionales que
                nos afectan o han afectado a cualquier persona en algún momento de la vida.
              </p>
              <h3 className="font-bold">Objetivo:</h3>
              <p className="text-justify">
                Contribuir con la sociedad y junto a las instituciones nuestra aportación como
                colectivo para reforzar los valores de una juventud más abierta, preparada y
                más despierta a los problemas sociales que afectan a todos sin distinción.
                Capacidad para detectar comportamientos nocivos en nuestro entorno, desde
                nuestra experiencia familiar, social con un conocimiento fundamentado para
                identificar nuestro papel como miembros de una sociedad desarrollada.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="workshops-container flex flex-col border border-cyan-500 mt-5">
        <div className="section mb-8">
          <IconTitle title="Talleres Acércate a Santalocura " />
          <div className="flex flex-col md:flex-row">
            <div className="px-8 md:w-2/5 mb-4 md:mb-0">
              <img
                src="/images/come.png"
                className="object-contain md:max-w-[400px] w-full"
                alt="Personalizado"
              />
            </div>
            <div className="md:w-3/5">
              <p className="text-justify">
                Los talleres de “Actuación, Lúdico Escénicos y Formación Teatral ¡ACERCATE!
                Para Inscripción y Reservación, ve arriba a las opciones de nuestra web
                www.santalocuraproductions.tv y selecciona el taller de tu interés, envíanos
                tus preferencias y tus datos desde nuestro calendario de eventos o también
                puedes solicitarlo directamente en nuestro e mail:
                santalocuraproductions@gmail.com y si lo prefieres envíanos un whatsApp a: +34
                632 202126 de 09:00 h hasta las 18:00h de lunes a sábados.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="workshops-container flex flex-col border border-cyan-500 mt-5">
        <div className="Lúdico section mb-8 text-center">
          <IconTitle title="¡Apúntate!! ¡Te acompañaré a representar el papel de tu vida!" />
          <div className="flex flex-col md:flex-row items-center">
            <div className="px-8 md:w-2/5 mb-4 md:mb-0 mx-auto">
              <img
                src="/images/7.jpg"
                className="object-contain md:max-w-[400px] w-full"
                alt="Artístico"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkShops
