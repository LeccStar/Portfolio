import React from 'react'
import NodeIcon from './assets/languages/Node.webp'
import HtmlIcon from './assets/languages/html5-1.webp'
import BootstrapIcon from './assets/languages/bootstrap.webp'
import JsIcon from './assets/languages/javascript.webp'
import MongoIcon from './assets/languages/mongo.webp'
import ReactIcon from './assets/languages/react.webp'
import PythonIcon from './assets/languages/ico-phyton-01.png'
import RequestsIcon from './assets/languages/ico-phyton-02.png'
import GitIcon from './assets/languages/ico-phyton-03.png'
import { projects } from './projects'



const Resume = () => {
    return (
        <div className="container px-4 py-5 row mx-0 align-items-center" id="Resume">
            <h2 className="p-2 border-bottom">Resume</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 py-5">
                <div className="col d-flex flex-wrap align-content-start">
                    <div className="col d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="currentColor" className="bi bi-person mx-2" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                        </svg>
                        <h3 className="fw-bold mb-0 fs-4">Summary</h3>
                    </div>
                    <p>Soy un programador Web Full Stack comprometido con mi preparación en el mundo de la Programación. Actualmente estoy buscando una primera oportunidad para poder seguir desarrollando mis habilidades que he aprendido a través de cursos Bootcamp, proyectos personales y métodos de autoaprendizaje.</p>
                </div>
                <div className="col d-flex flex-wrap align-content-start">
                    <div className="col d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="currentColor" className="bi bi-book mx-2" viewBox="0 0 16 16">
                            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                        </svg>
                        <h3 className="fw-bold mb-0 fs-4">Education</h3>
                    </div>
                    <div>
                        <h5 className="fw-bold mb-0 fs-6">Bootcamp Desarrollo Web FullStack</h5>
                        <h5 className="mb- fs-6">Herramientas aprendidas:</h5>
                        <div className="w-auto">
                            <div className="d-flex gap-3 py-1">
                                <img src={HtmlIcon} alt="twbs" width={40} height={40} className="rounded-circle flex-shrink-0" />
                                <div className="d-flex gap-2 w-100 justify-content-between">
                                    <h6 className="mb-0">HTML</h6>
                                </div>
                            </div>
                        </div>
                        <div className="w-auto">
                            <div className="d-flex gap-3 py-1">
                                <img src={BootstrapIcon} alt="twbs" width={40} height={40} className="rounded-circle flex-shrink-0" />
                                <div className="d-flex gap-2 w-100 justify-content-between">
                                    <h6 className="mb-0">Bootstrap</h6>
                                </div>
                            </div>
                        </div>
                        <div className="w-auto">
                            <div className="d-flex gap-3 py-1">
                                <img src={JsIcon} alt="twbs" width={40} height={40} className="rounded-circle flex-shrink-0" />
                                <div className="d-flex gap-2 w-100 justify-content-between">
                                    <h6 className="mb-0">JavaScript</h6>
                                </div>
                            </div>
                        </div>
                        <div className="w-auto">
                            <div className="d-flex gap-3 py-1">
                                <img src={MongoIcon} alt="twbs" width={40} height={40} className="rounded-circle flex-shrink-0" />
                                <div className="d-flex gap-2 w-100 justify-content-between">
                                    <h6 className="mb-0">Mongo db</h6>
                                </div>
                            </div>
                        </div>
                        <div className="w-auto">
                            <div className="d-flex gap-3 py-1">
                                <img src={NodeIcon} alt="twbs" width={40} height={40} className="rounded-circle flex-shrink-0" />
                                <div className="d-flex gap-2 w-100 justify-content-between">
                                    <h6 className="mb-0">Node js</h6>
                                </div>
                            </div>
                        </div>
                        <div className="w-auto">
                            <div className="d-flex gap-3 py-1">
                                <img src={ReactIcon} alt="twbs" width={40} height={40} className="rounded-circle flex-shrink-0" />
                                <div className="d-flex gap-2 w-100 justify-content-between">
                                    <h6 className="mb-0">React</h6>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <h5 className="fw-bold mb-0 fs-6">Bootcamp MicroDegree Python</h5>
                        <h5 className="mb-1 fs-6">Herramientas aprendidas:</h5>
                        <div className="w-auto">
                            <div className="d-flex gap-3 py-1">
                                <img src={PythonIcon} alt="twbs" width={40} height={40} className="rounded-circle flex-shrink-0" />
                                <div className="d-flex gap-2 w-100 justify-content-between">
                                    <h6 className="mb-0">Python</h6>
                                </div>
                            </div>
                            <div className="d-flex gap-3 py-1">
                                <img src={RequestsIcon} alt="twbs" width={40} height={40} className="rounded-circle flex-shrink-0" />
                                <div className="d-flex gap-2 w-100 justify-content-between">
                                    <h6 className="mb-0">Requests</h6>
                                </div>
                            </div>
                            <div className="d-flex gap-3 py-1">
                                <img src={GitIcon} alt="twbs" width={40} height={40} className="rounded-circle flex-shrink-0" />
                                <div className="d-flex gap-2 w-100 justify-content-between">
                                    <h6 className="mb-0">Git</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col d-flex flex-wrap align-content-start">
                    <div className="col d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="currentColor" className="bi bi-briefcase mx-2" viewBox="0 0 16 16">
                            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
                        </svg>
                        <h3 className="fw-bold mb-0 fs-4">Professional Experience</h3>
                    </div>
                    <p>Gracias a las herramientas que he aprendido, he logrado desarrollar ciertos proyectos que conforman mi portafolio como desarrollador Web FullStack:</p>
                    {projects.map((element)=>{
                        return (
                            <div className="d-flex gap-3 py-1">
                            <div className="gap-2 w-100">
                                <h6 className="mb-0">{element.name}</h6>
                                <p>{element.description}</p>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}

export default Resume