import React from 'react'
import '../styles/posts.scss'
import rooms from '../images/rooms.jpeg'
import { Link } from 'react-router-dom'

const Post = () => {

  return (
    <div className="">
      <header className="header" id="header" style={{maxHeight: "50px"}}>
        <nav className="nav nav_container ">
          <Link className='nav__logo' to='/'> SwapMate <i className="bi bi-house-fill"></i></Link>

          <div className="nav__menupost">
            <ul className="nav__listpost">
              {/* <li className="nav__itempost" style={{paddingTop: "26px"}}>
                <a href="#">User</a>
              </li> */}
              <li className="nav__itempost" style={{paddingTop: "26px"}}>
                <Link to='/write' className='nav__linkpost'>Post Ad</Link>
              </li> 

              {/* <li className="nav__itempost" style={{paddingTop: "26px"}}>
                <a href="login.html" className="nav__linkpost">
                  <i className="bi bi-person-circle"></i>
                  <span>
                    <Link to='/login'>
                    Login
                    </Link>
                  </span>
                </a>
              </li> */}
            </ul>
          </div>

          {/* <!-- Theme change button --> */}
          {/* <!-- <i className="bi bi-moon change-theme" id="theme-button"></i>

          <a href="#" className="button nav__button">
            Subscribe
          </a> --> */}
        </nav>
        <div  style={{display: 'flex', justifyContent: "center"}}>
        <div className="search-nav">
          <form action="" className="home__search">
            <i className="bi bi-geo-alt-fill"></i>
            <input type="search" placeholder="Search by location..." className="home__search-input" />
              <button className="button_search">Search</button>
          </form>
        </div>
        </div>
        <hr className="down-hr" />
      </header>

      {/* <!--==================== MAIN ====================--> */}
      <main className="mainpost" style={{backgroundImage: "none", backgroundColor: "white"}}>
        <section className="filter">
          <div className="in-nav">
            Filter
          </div>
          <div className="filter-cont">
            <h4>BHK Type</h4>
            <div className="filt-button">
              <div className="filt-2">
                <button className="button-2">1 RK</button>
                <button className="button-2">1 BHK</button>
                <button className="button-2">2 BHK</button>
              </div>
              <div className="filt-2">
                <button className="button-2">3 BHK</button>
                <button className="button-2">4 BHK</button>
                <button className="button-2">4+ BHK</button>
              </div>
            </div>
            <h4>Availability</h4>
            <div className="check">
              <div className="check-2">
                <label className="container-2">Immediate
                  <input type="radio" name="radio" checked />
                    <span className="check"></span>
                </label>
              </div>
              <div className="check-2">
                <label className="container-2">Within 15 Days
                  <input type="radio" name="radio" />
                    <span className="check"></span>
                </label>
              </div>
              <div className="check-2">
                <label className="container-2">Within 30 Days
                  <input type="radio" name="radio" />
                    <span className="check"></span>
                </label>
              </div>
              <div className="check-2">
                <label className="container-2">After 30 Days
                  <input type="radio" name="radio" />
                    <span className="check"></span>
                </label>
              </div>
            </div>


            <h4>Preferred Tenants</h4>
            <div className="check">
              <div className="check-2">
                <label className="container-2">Family
                  <input type="checkbox" name="radio" />
                    <span className="check"></span>
                </label>
              </div>
              <div className="check-2">
                <label className="container-2">Bachelor
                  <input type="checkbox" name="radio" />
                    <span className="check"></span>
                </label>
              </div>
              <div className="check-2">
                <label className="container-2">Company
                  <input type="checkbox" name="radio" />
                    <span className="check"></span>
                </label>
              </div>
            </div>
            <h4>Furnishing</h4>
            <div className="check">
              <div className="check-2">
                <label className="container-2">Full
                  <input type="checkbox" name="radio" />
                    <span className="check"></span>
                </label>
              </div>
              <div className="check-2">
                <label className="container-2">Semi
                  <input type="checkbox" name="radio" />
                    <span className="check"></span>
                </label>
              </div>
              <div className="check-2">
                <label className="container-2">None
                  <input type="checkbox" name="radio" />
                    <span className="check"></span>
                </label>
              </div>

            </div>


          </div>
        </section>
        <section className="main-sec">
          <div className="main-head">
            Showing Result for ...
          </div>

          <article>
            <div className="card">
              <div className="card-head">
                <h2>2 BHK Flat In Standalone Building For Rent In Hsr Layout 5th Sector</h2>
                <p>Teacher's Colony, near MURUGAN AUTO WORKS</p>
              </div>
              <div className="center">
                <div className="card-head1">
                  <div className="sect">
                    <i className="bi bi-currency-rupee"></i> 7500
                    <br/><b>Rent</b>
                  </div>
                  <div className="sect">
                    <i className="bi bi-currency-rupee"></i> 50,000
                    <br/><b>Deposit</b>
                  </div>
                  <div className="sect">
                    750 sqft
                    <br/><b>Builtup</b>
                  </div>
                </div>
              </div>

              <div className="content">
                <div className="cont-left">
                  <img src={rooms} alt="" srcset="" />
                </div>
                <div className="cont-right">
                  <div className="border-1">
                    <div className="border-2">
                      <i className="bi bi-tools"></i> Unfurnished
                      <p>Furnishing</p>
                    </div>
                    <div className="border-2">
                      <i className="bi bi-buildings"></i> 2 BHK
                      <p>Apartment Type</p>
                    </div>
                  </div>
                  <div className="border-1">
                    <div className="border-2">
                      <i className="bi bi-file-person"></i> All
                      <p>Preferred Tenants</p>
                    </div>
                    <div className="border-2">
                      <i className="bi bi-key"></i> Ready to Move
                      <p>Available From</p>
                    </div>
                  </div>

                  {/* <!-- button  --> */}
                  <a href="#" className="button-1">Request Contact</a>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-head">
                <h2>2 BHK Flat In Standalone Building For Rent In Hsr Layout 5th Sector</h2>
                <p>Teacher's Colony, near MURUGAN AUTO WORKS</p>
              </div>
              <div className="center">
                <div className="card-head1">
                  <div className="sect">
                    <i className="bi bi-currency-rupee"></i> 7500
                    <br/><b>Rent</b>
                  </div>
                  <div className="sect">
                    <i className="bi bi-currency-rupee"></i> 50,000
                    <br/><b>Deposit</b>
                  </div>
                  <div className="sect">
                    750 sqft
                    <br/><b>Builtup</b>
                  </div>
                </div>
              </div>

              <div className="content">
                <div className="cont-left">
                  <img src={rooms}alt="" srcset="" />
                </div>
                <div className="cont-right">
                  <div className="border-1">
                    <div className="border-2">
                      <i className="bi bi-tools"></i> Unfurnished
                      <p>Furnishing</p>
                    </div>
                    <div className="border-2">
                      <i className="bi bi-buildings"></i> 2 BHK
                      <p>Apartment Type</p>
                    </div>
                  </div>
                  <div className="border-1">
                    <div className="border-2">
                      <i className="bi bi-file-person"></i> All
                      <p>Preferred Tenants</p>
                    </div>
                    <div className="border-2">
                      <i className="bi bi-key"></i> Ready to Move
                      <p>Available From</p>
                    </div>
                  </div>

                  {/* <!-- button  --> */}
                  <a href="#" className="button-1">Request Contact</a>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-head">
                <h2>2 BHK Flat In Standalone Building For Rent In Hsr Layout 5th Sector</h2>
                <p>Teacher's Colony, near MURUGAN AUTO WORKS</p>
              </div>
              <div className="center">
                <div className="card-head1">
                  <div className="sect">
                    <i className="bi bi-currency-rupee"></i> 7500
                    <br/><b>Rent</b>
                  </div>
                  <div className="sect">
                    <i className="bi bi-currency-rupee"></i> 50,000
                    <br/><b>Deposit</b>
                  </div>
                  <div className="sect">
                    750 sqft
                    <br/><b>Builtup</b>
                  </div>
                </div>
              </div>

              <div className="content">
                <div className="cont-left">
                  <img src={rooms} alt="" srcset="" />
                </div>
                <div className="cont-right">
                  <div className="border-1">
                    <div className="border-2">
                      <i className="bi bi-tools"></i> Unfurnished
                      <p>Furnishing</p>
                    </div>
                    <div className="border-2">
                      <i className="bi bi-buildings"></i> 2 BHK
                      <p>Apartment Type</p>
                    </div>
                  </div>
                  <div className="border-1">
                    <div className="border-2">
                      <i className="bi bi-file-person"></i> All
                      <p>Preferred Tenants</p>
                    </div>
                    <div className="border-2">
                      <i className="bi bi-key"></i> Ready to Move
                      <p>Available From</p>
                    </div>
                  </div>

                  {/* <!-- button  --> */}
                  <a href="#" className="button-1">Request Contact</a>
                </div>
              </div>
            </div>
          </article>
        </section>
        <section className="quick-link"></section>
      </main>

      {/* <!--==================== FOOTER ====================--> */}
      <footer className="footer section">
        <div className="footer__container container grid">
          <div>
            <a href="#" className="footer__logo">
              SwapMate <i className="bi bi-house-fill"></i>
            </a>
            <p className="footer__description">
              Our vision is to make all people <br/>
                the best place to live for them.

            </p>
          </div>

          <div className="footer__content">
            <div>
              <h3 className="footer__title">
                About
              </h3>

              <ul className="footer__links">
                <li>
                  <a href="" className="footer__link">About Us</a>
                </li>
                <li>
                  <a href="" className="footer__link">Features</a>
                </li>
                <li>
                  <a href="" className="footer__link">News & Blogs</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="footer__title">
                Company
              </h3>

              <ul className="footer__links">
                <li>
                  <a href="" className="footer__link">How we work?</a>
                </li>
                <li>
                  <a href="" className="footer__link">Capital</a>
                </li>
                <li>
                  <a href="" className="footer__link">Security</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="footer__title">
                Support
              </h3>

              <ul className="footer__links">
                <li>
                  <a href="" className="footer__link">FAQs</a>
                </li>
                <li>
                  <a href="" className="footer__link">Support center</a>
                </li>
                <li>
                  <a href="" className="footer__link">Contact Us</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="footer__title">
                Follow Us
              </h3>

              <ul className="footer__social">
                <a href="#" className="footer__social-link">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="footer__social-link">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="footer__social-link">
                  <i className="bi bi-pinterest"></i>
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__info container">
          <span className="footer__copy">
            &#169; Bedimcode. All rigths reserved
          </span>

          <div className="footer__privacy">
            <a href="#">Terms & Agreements</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>

      </footer>


      {/* <!--========== SCROLL UP ==========--> */}
      <a href="#" className="scrollup" id="scroll-up">
        <i className="bi bi-chevron-double-up"></i>
      </a>
    </div>
  )
}

export default Post
