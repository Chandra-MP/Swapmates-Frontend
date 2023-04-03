import React, {useState, useEffect} from 'react'
import '../styles/navbar.scss'
import { Link } from 'react-router-dom'
import '../styles/navbar.scss'
import {navbarstyles} from './navbarstyles.js'
// import './main.js'


const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
  
        const header = document.getElementById('header');
        if (window.scrollY >= 10) {
          header.classList.add("scroll-header");
        } else {
          header.classList.remove("scroll-header");
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


    return (
        <div className={`navbar ${scrollPosition >= 10 ? 'scroll-header' : ''}`}>
            <header className="header" id="header">
                <nav className="nav container">
                    <Link to='/' className='nav__logo'> SwapMate <i className="bi bi-house-fill"></i></Link>

                    <div className="nav__menu">

                        <ul className="nav__list">
                            <li className="nav__item">
                                <Link to='/posts' className='nav__link active_link'>
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

                    {/* <!-- Theme change button -->
                    <i className="bi bi-moon change-theme" id="theme-button"></i> */}
                </nav>
            </header>
        </div>
    )
}

export default Navbar
