import React from 'react'
import { Link } from "react-scroll";



export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Thomas Jose</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                        <Link smooth={true} to="home" className="nav-link" href="#">Home <span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                        <Link smooth={true} to="about" offset={-110} className="nav-link" >about me</Link>
                        </li>
                        <li className="nav-item">
                        <Link smooth={true} to="experience" offset={-110} className="nav-link" >experience</Link>
                        </li>
                        <li className="nav-item">
                        <Link smooth={true} to="portfolio" offset={-110} className="nav-link" >portfolio</Link>
                        </li>

                        <li className="nav-item">
                        <Link smooth={true} to="#contacts" offset={-110} a href='#contacts' className="nav-link" >contacts</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;