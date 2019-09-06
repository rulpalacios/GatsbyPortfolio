import React from 'react'
import Image from '../components/image'

const Project = ({pageContext}) => {
    var technologies = pageContext.technologies.split(",");

    return <>
         <header>
            <div className="header__bg" style={{backgroundImage: `linear-gradient(${pageContext.background}, ${pageContext.background})`}}>
             </div>
             <img src={pageContext.logo} alt="" className="header-logo"/>
            <h1 className="header-title">
            {pageContext.name}
            </h1>
        </header>
        <div className="container has-text-centered">
            <h1 className="tech-text">Technologies</h1>
            <div className="columns is-multiline is-mobile">
                { technologies.map((technology) => (
                    <div className="column">
                        <figure className="image is-48x48">
                            <Image 
                                name={`${technology}.png`}
                                key={technology}
                            />
                        </figure>
                    </div>
                ))}
            </div>

            <figure className="is-centered">
                <iframe title={pageContext.name} className="has-ratio video" src={pageContext.video} frameBorder="0" allowFullScreen></iframe>
            </figure>
        </div>
    </>
}

export default Project