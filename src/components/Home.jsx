import React from 'react'

const Home = () => {
    return (
        <div className="position-relative overflow-hidden p-3 p-md-5 text-start bg-Home" id='Home'>
            <div className="col-md-7 p-lg-5 ms-2 my-5 fontColorHome">
                <img src='https://img.freepik.com/foto-gratis/primer-plano-manos-escribiendo-teclado-portatil-masculina_1262-2250.jpg?w=1060&t=st=1670462890~exp=1670463490~hmac=72bdce40bff5b3c22d3968afdfc50f44c19239adca82f138d95dfff598c9cbde' alt="..." />
                <h1 className="display-4 fw-normal">Luis Cervantes</h1>
                <p className="lead fw-normal">Full Stack Web Developer</p>
                <a className="btn btn-outline-info" href="#Contact">Contact</a>
            </div>
        </div>

    )
}

export default Home