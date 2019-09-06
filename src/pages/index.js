import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ServerImg from '../images/server.svg'
import FrontImg from '../images/front.svg'
import MobileImg from '../images/mobile.svg'
import ProfileImg from '../images/profile.jpg'
import Projects from '../components/Projects'
import Certificates from '../components/Certificates'

import SEO from "../components/seo"

export const query = graphql`
  query GET_PROJECTS {
    allProject{
      edges{
        node{
          name
          description
          logo
          technologies
          video
          background
        }
      }
    }
  }
`
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />

    <section className="has-text-centered hero">
      <div className="container">
        <div className="columns is-centered">
          <div className="column">
            <h1 className="hero-title">Full-Stack Software Engineer & Mentor</h1>
            <figure className="image is-256x256 has-image-centered">
              <img className="is-rounded" src={ProfileImg} alt="RaulPalacios"/>
            </figure>
          </div>
        </div>
      </div>  
    </section>

    <section className="bio has-text-centered">
      <div className="container">
      <div className="columns is-centered is-desktop">
        <div className="column">
          <h1 className="bio-title">Hola!, soy Raúl, Mucho gusto!.</h1>
          <p className="bio-text">
          Desde que el desarrollo de software me apasiona me considero
          un Dev Hiperactivo que "nunca deja de aprender". Por esto mi Stack
          de herramientas es bastante amplio y por ende he tenido la 
          oportunidad de participar en diferentes proyectos que me han llenado 
          de experiencia, misma que intento compartir al mundo mendiante mi canal de Youtube.
          </p>
        </div>
      </div>
      </div>
    </section>
    
    
    <section className="section skills has-text-centered">
      <div className="container is-narrow">
        <div className="box">
          <div className="content">
            <div className="columns is-centered">
            <div className="column column-border">
              <figure>
                <img src={ServerImg} alt="Backend Skills" className="image-icon"/>
              </figure>
              <h1 className="is-size-4">Back-end</h1>
              <p>
                Regularmente prefiero escribir codigo para el lado del servidor solventando
                necesidades que puedan ser consumidad desde otras aplicaciones.
              </p>
              <p className="has-text-primary">Frameworks</p>
              <p>Laravel, Rails, Django, Node, Express, Adonis</p>
            </div>

            <div className="column column-border">
              <figure>
                <img src={FrontImg} alt="Front Skills" className="image-icon"/>
              </figure>
              <h1 className="is-size-4">Front-end</h1>
              <p>
                Soy un Amante de Javascript y me encanta poder utilizarlo en 
                practicamente todo relacionado a la web.
              </p>
              <p className="has-text-primary">Frameworks</p>
              <p>React, Gatsby, Angular, Vue</p>
            </div>

            <div className="column">
            <figure>
              <img src={MobileImg} alt="Mobile Skills" className="image-icon"/>
            </figure>
              <h1 className="is-size-4">Mobile</h1>
              <p>
                Si no estoy escribiendo algun cliente para la web seguramente lo hago para el
                ambiente mobil.
              </p>
              <p className="has-text-primary">Technologies</p>
              <p>React Native, Flutter, Swift</p>
            </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h1 className="has-text-centered tech-text">Trabajos Recientes</h1>
        <div className="columns is-multiline is-desktop">

          <Projects projects={data.allProject.edges}/>
        </div>
      </div>
    </section>

    <section className="section">
    <div className="container">
      <h1 className="has-text-centered tech-text">Nunca Pares de Aprender</h1>
      <p className="has-text-centered">
        Fue algo que me identifico con platzi y es por ello que
        soy uno de sus alumnos, aqui algunos de mis certificados:
      </p>
      <Certificates 
        certificates={
          ['gatsby','reactp','pwa-reactp','redux','graph','vue',
          'fundamentos-javascript','php','laravel','ruby','ror','flutter']
        }
      />
    </div>
  </section>

  </Layout>
)

export default IndexPage
