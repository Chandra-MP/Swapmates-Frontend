import React from 'react'
import {Link} from 'react-router-dom'
import Logo1 from '../images/logo1.png'
import Logo2 from '../images/logo2.png'
import Logo3 from '../images/logo3.png'
import Logo4 from '../images/logo4.png'
import contact from '../images/contact.png'
import home from '../images/home.jpg'
import value from '../images/value.jpg'
import Swiper from '../components/swiper_corousel'
import Navbar from '../components/Navbar.jsx'
import '../styles.scss'



const Landing = () => {

    
  return (
      <>  
      <Navbar/>  
      <div className="main">

            {/* <!--==================== HOME ====================--> */}
            <section className="home section" id="home">
                <div className="home__container container grid">
                    <div className="home__data">
                        <h1 className="home__title">
                            Discover <br/> Most Suitable <br/>Property
                        </h1>
                        <p className="home__description">
                            Find a variety of properties that suit you very easily, 
                            forget all difficulties in finding a residence for you
                        </p>

                        <form action="" className="home__search">
                            <i className="bi bi-geo-alt-fill"></i>
                            <input type="search" placeholder="Search by location..." className="home__search-input" />
                            <button className="button"><h6 style={{fontWeight:"300"}}>Search</h6></button>
                        </form>

                        <div className="home__value">
                            <div>
                                <h1 className="home__value-number">
                                    9k <span>+</span>
                                </h1>
                                <span className="home__value-description">
                                    Premium <br/>Product
                                </span>
                            </div>
                            <div>
                                <h1 className="home__value-number">
                                    2k <span>+</span>
                                </h1>
                                <span className="home__value-description">
                                    Happy <br/>Customer
                                </span>
                            </div>
                            <div>
                                <h1 className="home__value-number">
                                    28k <span>+</span>
                                </h1>
                                <span className="home__value-description">
                                    Awards <br/>Winning
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="home__images">
                        <div className="home__orbe"></div>

                        <div className="home__img">
                            <img src={home} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--==================== LOGOS ====================--> */}
            <section className="logos section">
                <div className="logos__container container grid">
                    <div className="logos__img">
                        <img src={Logo1} alt="" />
                    </div>
                    <div className="logos__img">
                        <img src={Logo2} alt="" />
                    </div>
                    <div className="logos__img">
                        <img src={Logo3} alt="" />
                    </div>
                    <div className="logos__img">
                        <img src={Logo4} alt="" />
                    </div>
                </div>
            </section>

            {/* <!--==================== POPULAR ====================--> */}
            <section className="section" id="popular">
                <div className="container">
                    <span className="section__subtitile">Best Choice</span>
                    <h2 className="section__title">
                        Popular Residences<span>.</span>
                    </h2>
                    <Swiper/>
                </div>
            </section>

            {/* <!--==================== VALUE ====================--> */}
            <section className="value section" id="value">
                <div>
                <div className="value__container container grid">
                    <div className="value__images">
                        <div className="value__orbe"></div>
                            <div className="value__img">
                                <img src={value} alt="" srcSet="" />
                            </div>
                    </div>

                        <div className="value__content">
                            <div className="value__data">
                                <h2 className="section__title">Value We Give To You<span>.</span></h2>
                                <p className="value__description">
                                    We always ready to help by providing the best service for you. 
                                    We believe a good place to live can make your life better.
                                </p>
                            </div>
                            <div className="value__accordion">
                                <div className="value__accordion-item">
                                    <header className="value__accordion-header">
                                        <i className="bi bi-shield-fill-x value__accordion-icon"></i>
                                        <h3 className="value__accordion-title">
                                            Best interest rates on the market 
                                        </h3>
                                        <div className="value__accordion-arrow">
                                            <i className="bi bi-caret-down-fill"></i>
                                        </div>
                                    </header>

                                        <div className="value__accordion-content">
                                            <p className="value__accordion-description">
                                                Price we provides is the best for you, 
                                                we guarantee no price changes on your property due 
                                                to various unexpected costs that may come.
                                            </p>
                                        </div>
                                </div>
                                <div className="value__accordion-item">
                                    <header className="value__accordion-header">
                                        <i className="bi bi-x-square value__accordion-icon"></i>                                          <h3 className="value__accordion-title">
                                            Prevent unstable prices
                                        </h3>
                                            <div className="value__accordion-arrow">
                                                <i className="bi bi-caret-down-fill"></i>
                                            </div>
                                        </header>
                                        <div className="value__accordion-content">
                                            <p className="value__accordion-description">
                                                Price we provides is the best for you, 
                                                we guarantee no price changes on your property due 
                                                to various unexpected costs that may come.
                                            </p>
                                        </div>
                                </div>
                                <div className="value__accordion-item">
                                    <header className="value__accordion-header">
                                        <i className="bi bi-bar-chart-fill value__accordion-icon"></i>
                                        <h3 className="value__accordion-title">
                                            Best prices on the Market
                                        </h3>
                                        <div className="value__accordion-arrow">
                                            <i className="bi bi-caret-down-fill"></i>
                                        </div>

                                    </header>
                                        <div className="value__accordion-content">
                                            <p className="value__accordion-description">
                                                Price we provides is the best for you, 
                                                we guarantee no price changes on your property due 
                                                to various unexpected costs that may come.
                                            </p>
                                        </div>
                                </div>
                                <div className="value__accordion-item">
                                    <header className="value__accordion-header">
                                        <i className="bi bi-check-square-fill value__accordion-icon"></i>
                                        <h3 className="value__accordion-title">
                                            Security of your data
                                        </h3>
                                        <div className="value__accordion-arrow">
                                            <i className="bi bi-caret-down-fill"></i>
                                        </div>
                                    </header>

                                        <div className="value__accordion-content">
                                            <p className="value__accordion-description">
                                                Price we provides is the best for you, 
                                                we guarantee no price changes on your property due 
                                                to various unexpected costs that may come.
                                            </p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--==================== CONTACT ====================--> */}
            <section className="contact section" id="contact">
                <div className="contact__container container grid">
                    <div className="contact__images">
                        <div className="contact__orbe"></div>

                        <div className="contact__img">
                            <img src={contact} alt=""/>
                        </div>
                    </div>

                    <div className="contact__content">
                        <div className="contact__data">
                            <span className="section__subtitle">Contact Us</span>
                            <h2 className="section__title">
                                Easy to Contact us <span>.</span>
                            </h2>
                            <p className="contact__description">
                                Is there a problem finding your dream home? Need a 
                                guide in buying first home? or need a consultation 
                                on residential issues? just contact us.
                            </p>
                        </div>

                        <div className="contact__card">
                            <div className="contact__card-box">
                                <div className="contact__card-info">
                                    <i className="bi bi-telephone-fill"></i>

                                    <div>
                                        <h3 className="contact__card-title">
                                            Call
                                        </h3>
                                        <p className="contact__card-description">
                                            022.321.165.19
                                        </p>
                                    </div>
                                </div>
                                <button className="button contact__card-button">
                                    Call Now
                                </button>
                            </div>

                            <div className="contact__card-box">
                                <div className="contact__card-info">
                                    <i className="bi bi-chat-dots-fill"></i>

                                    <div>
                                        <h3 className="contact__card-title">
                                            Chat
                                        </h3>
                                        <p className="contact__card-description">
                                            022.321.165.19
                                        </p>
                                    </div>
                                </div>
                                <button className="button contact__card-button">
                                    Chat Now
                                </button>
                            </div>

                            <div className="contact__card-box">
                                <div className="contact__card-info">
                                    <i className="bi bi-camera-video"></i>
                                    <div>
                                        <h3 className="contact__card-title">
                                            Video Call
                                        </h3>
                                        <p className="contact__card-description">
                                            022.321.165.19
                                        </p>
                                    </div>
                                </div>
                                <button className="button contact__card-button">
                                    Video Call Now                                    
                                </button>
                            </div>

                            <div className="contact__card-box">
                                <div className="contact__card-info">
                                    <i className="bi bi-envelope-fill"></i>
                                    <div>
                                        <h3 className="contact__card-title">
                                            Message
                                        </h3>
                                        <p className="contact__card-description">
                                            022.321.165.19
                                        </p>
                                    </div>
                                </div>
                                <button className="button contact__card-button">
                                    Message Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--==================== SUBSCRIBE ====================--> */}
            <section className="subscribe section">
                <div className="subscribe__container container">
                    <h1 className="subscribe__title">
                        Get Started and SwapMate(s)
                    </h1>
                    <p className="subscribe__description">
                        Subscribe and find super attractive price
                        quotes from us, Find your residence soon
                    </p>
                    {/* <a href="#" className="button subscribe__button">
                        Get Started
                    </a> */}
                    <Link to='/login' className='button subscribe__button'>Get Started</Link>

                </div>
            </section>
        </div>
        </>
  )
}

export default Landing
