import React from 'react'
import '../styles/navbar.scss'
import { Link } from 'react-router-dom'
import '../styles/navbar.scss'
// import './main.js'


const Navbar = () => {

    return (
        <div className='navbar'>
            <header className="header" id="header">
                <nav className="nav container">
                    <Link to='/' className='nav__logo'> SwapMate <i className="bi bi-house-fill"></i></Link>

                    <div className="nav__menu">

                        <ul className="nav__list">
                            <li className="nav__item">
                                <Link to='/' className='nav__link active_link'>
                                <i className="bi bi-house"></i>
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li className="nav__item">
                                <a href="#popular" className="nav__link">
                                    <i className="bi bi-buildings"></i>
                                    <span>Residence</span>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#value" className="nav__link">
                                    <i className="bi bi-award"></i>
                                    <span>Values</span>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#contact" className="nav__link">
                                    <i className="bi bi-telephone"></i>
                                    <span>Contact</span>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href='/login' className="nav__link">
                                    <i className="bi bi-telephone"></i>
                                    <span>Login</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* <!-- Theme change button --> */}
                    <i className="bi bi-moon change-theme" id="theme-button"></i>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
