import React from 'react'
import profilePicture from './assets/profilePicture.jpeg'


const About = () => {
    return (
        <div className='container bg-Home row mx-0 align-items-center' id='About'>
              <h2 className="pb-2 border-bottom">About</h2>
            <div className="row">
                <div className="col-md-7  row align-items-center">
                    <h2 className="fw-normal lh-1">Luis Eduardo Cervantes Cuevas</h2>
                    <p className="lead">Soy un programador Web Full Stack comprometido con mi preparación en el mundo de la Programación.
                    Actualmente estoy buscando una primera oportunidad para poder seguir desarrollando mis habilidades que he aprendido a través de cursos Bootcamp, proyectos personales y métodos de autoaprendizaje.</p>
                </div>
                <div className="col-md-5">
                    <img src={profilePicture} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500}/>
                </div>
            </div>
        </div>
    )
}

export default About