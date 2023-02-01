import React from 'react'

const Contact = () => {
    return (
        <div className='container bg-Home row mx-0 align-items-start justify-content-center ' id='Contact'>
            <h2 className="p-2 pt-4 border-bottom">Contact</h2>
            <div className='row d-flex justify-content-center'>
                <div className="list-group w-auto">
                    <a href='tel:+525540206036' className="list-group-item list-group-item-action d-flex gap-4 py-4" aria-current="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg>
                        <div className="d-flex gap-2 w-100 justify-content-between">
                            <div>
                                <h6 className="mb-0">Phone</h6>
                                <p className="mb-0 opacity-75">(55) 4020 6036</p>
                            </div>
                        </div>
                    </a>
                    <div className="list-group-item list-group-item-action d-flex gap-4 py-4" aria-current="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg>
                        <div className="d-flex gap-2 w-100 justify-content-between">
                            <div>
                                <h6 className="mb-0">E-mail</h6>
                                <p className="mb-0 opacity-75">le.cervantes.96@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <a href="https://www.linkedin.com/in/luis-eduardo-cervantes-cuevas-6646b8159" target="_blank" rel="noreferrer" className="list-group-item list-group-item-action d-flex gap-4 py-4" aria-current="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                        <div className="d-flex gap-2 w-100 justify-content-between">
                            <div>
                                <h6 className="mb-0">Linkedin</h6>
                                <p className="mb-0 opacity-75">https://www.linkedin.com/in/luis-eduardo-cervantes-cuevas-6646b8159</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Contact