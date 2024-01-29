import React from 'react'
import './styles.scss'
import IconTitle from '../../components/IconTitle'
const WorkShops = () => {
  return (
    <div className="workshops-container">
      <div className="artistic section">
        <IconTitle title="Formación artística – Grupal. " />
        <div className="container-image-text">
          <div className="container-text">
            <p>
              Es un Taller para Formación y Preparación continua para actores y actrices. Es un
              taller estable y de actividad constante. Interesante oferta para reciclarse en
              los conocimientos escénicos, desarrollar habilidades profesionales, subir a
              escena y llegar a formar parte de un elenco teatral. La metodología empleada:
              Utilizamos el conocido método ARTEDRA del maestro del teatro de la República
              Dominicana don Iván García Guerra. Trabajaremos las características de un
              personaje y la capacidad interpretativas para su puesta en escena. Analizaremos
              la voz como herramienta creativa. La expresión corporal. Movimiento Escénico.
            </p>
            <h3> Objetivo:</h3>
            <p>
              Subir a escena con seguridad. Acostumbrarnos a la auto observación y
              concentración. Conocer el mundo escondido detrás de un texto teatral. Actuar.
              Ejercitar el cuerpo y la mente. Interpretación de una Escritura y lectura
              teatral. El Juego teatral en Escena en etapas 1, 2 y 3. Activaremos el proceso
              creativo individual y grupal.
            </p>
          </div>

          <div className="container-image">
            <img src="/images/artistic.png" />
          </div>
        </div>
      </div>
      <div className="terapla section">
        <IconTitle title="Teatro-Terapia" />
        <p>
          Salud emocional, Activación de la memoria. Utilizamos el teatro como herramienta para
          unir situaciones paralelas desde nuestra propia experiencia de vida. Ejercicios para
          indagar y localizar con creencias adquiridas del pasado, o bloqueos que han afectado
          de alguna manera a nuestro ser emocional. La intención es de detectarlas, analizarlas
          y valorarlas según las diferentes opciones que se presentan en el proceso individual.
        </p>
      </div>
      <div className="women section">
        <IconTitle title="Teatro-para Mujeres" />
        <h2>Recobrar la Autoestima. Potenciar tu capacidad y Creatividad</h2>
        <h3>Objetivos Prácticos:</h3>
        <p>
          Conseguiremos interactuar con nuestro propio Centro de Energía. Activando el Ojo
          Espiritual, quien permite el desarrollo emocional integral y pleno. Mejoraremos o
          modificaremos aspectos incómodos de nuestra propia personalidad desde el
          autoconocimiento. Activaremos el proceso creativo individual y grupal. Al final de
          los talleres se realizará representaciones teatrales con público empleando las
          técnicas teatrales aprendidos en el taller.
        </p>
      </div>
      <div className="ludic section">
        <IconTitle title="Lúdico. Amor al Arte:" />
        <div className="container-image-text">
          <div className="container-image">
            <img src="/images/ludic.png" />
          </div>
          <div className="container-text">
            <p>
              Disfrutar. Crear y representar comedias, Gags de improvisación. Farsa. Parodias
              con temas sociales. Décimas y Repentismo. Poemas. Musicales. Danza-Teatro.
            </p>
            <h3>Objetivo:</h3>
            <p>
              Relajar la mente. Buscamos ser felices. Ser auténticos niños/as para sacar lo
              mejor y más divertido de nosotros mismos/as. Recurriremos a imágenes emotivas,
              vivencias pasadas, situaciones reales, Escenificación de roles y desarrollaremos
              una visión diferente de la realidad con creatividad. Cada año cerraremos con una
              representación escénica de “Creación Colectiva” en la cual utilizaremos elementos
              aprendidos en el taller.
            </p>
          </div>
        </div>
      </div>
      <div className="childish section">
        <IconTitle title="Teatro Infantil." />
        <div className="container-image-text">
          <div className="container-text">
            <p>
              Estimula la creatividad, el manejo consciente de las cualidades innatas del
              infante. Juegos grupales. Crear un personaje. Improvisaciones y creación
              colectiva.
            </p>
            <h3>Objetivo:</h3>
            <p>
              Disfrutar una actividad extra escolar integrando como propósito importante, el
              desarrollo de sus capacidades artísticas y emocionales. Construir montajes
              teatrales donde ellos se identifiquen con su personalidad y su entorno.
            </p>
          </div>
          <div className="container-image">
            <img src="/images/childish.png" />
          </div>
        </div>
        <IconTitle title="¡Apúntate!! ¡Te acompañaré a representar el papel de tu vida!" />
      </div>
    </div>
  )
}

export default WorkShops
