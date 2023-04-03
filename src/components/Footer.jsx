import React from 'react'
import '../styles/footer.scss'

const Footer = () => {
  return (
    <div>
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
    </div>
  )
}

export default Footer
