import React from 'react'

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                
                <div className="container-fluid">
                    <a className="navbar-brand" href="https://www.google.com/">Thomas Jose</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="https://www.google.com/" >Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="https://www.google.com/">About me</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="https://www.google.com/" >Projects</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="https://www.google.com/" >Portfolio</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="https://www.google.com/" >contacts</a>
                        </li>
                       
                    </ul>
                    
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;