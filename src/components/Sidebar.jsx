import React from 'react'
import profilePicture from './assets/profilePicture.jpeg'

const Sidebar = () => {
    return (
        <>
            <button className="btn btn-info d-lg-none btn-sidebar" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-menu-app" viewBox="0 0 16 16">
                    <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h2A1.5 1.5 0 0 1 5 1.5v2A1.5 1.5 0 0 1 3.5 5h-2A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                </svg>
            </button>

            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark offcanvas-lg offcanvas-start" style={{ width: 280 }} data-bs-scroll="true" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className='sb-sticky'>
                <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <img src={profilePicture} alt width={64} height={64} className="rounded-circle me-2" />
                    <span className="fs-4">Luis Cervantes</span>
                </div>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <a href="#Home" className="nav-link active" aria-current="page">
                            <svg className="bi pe-none me-2" width={16} height={16}><use xlinkHref="#home" /></svg>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#About" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width={16} height={16}><use xlinkHref="#speedometer2" /></svg>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#Resume" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width={16} height={16}><use xlinkHref="#table" /></svg>
                            Resume
                        </a>
                    </li>
                    <li>
                        <a href="#Portfolio" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width={16} height={16}><use xlinkHref="#grid" /></svg>
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width={16} height={16}><use xlinkHref="#people-circle" /></svg>
                            Contact
                        </a>
                    </li>
                </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar