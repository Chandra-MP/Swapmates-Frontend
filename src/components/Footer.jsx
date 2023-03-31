import React from 'react'
import '../styles/footer.scss'

const Footer = () => {
  return (
    <div>
      {/* <!--==================== FOOTER ====================--> */}
      <footer class="footer section">
        <div class="footer__container container grid">
          <div>
            <a href="#" class="footer__logo">
              SwapMate <i class="bi bi-house-fill"></i>
            </a>
            <p class="footer__description">
              Our vision is to make all people <br/>
                the best place to live for them.

            </p>
          </div>

          <div class="footer__content">
            <div>
              <h3 class="footer__title">
                About
              </h3>

              <ul class="footer__links">
                <li>
                  <a href="" class="footer__link">About Us</a>
                </li>
                <li>
                  <a href="" class="footer__link">Features</a>
                </li>
                <li>
                  <a href="" class="footer__link">News & Blogs</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="footer__title">
                Company
              </h3>

              <ul class="footer__links">
                <li>
                  <a href="" class="footer__link">How we work?</a>
                </li>
                <li>
                  <a href="" class="footer__link">Capital</a>
                </li>
                <li>
                  <a href="" class="footer__link">Security</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="footer__title">
                Support
              </h3>

              <ul class="footer__links">
                <li>
                  <a href="" class="footer__link">FAQs</a>
                </li>
                <li>
                  <a href="" class="footer__link">Support center</a>
                </li>
                <li>
                  <a href="" class="footer__link">Contact Us</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="footer__title">
                Follow Us
              </h3>

              <ul class="footer__social">
                <a href="#" class="footer__social-link">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="#" class="footer__social-link">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="#" class="footer__social-link">
                  <i class="bi bi-pinterest"></i>
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer__info container">
          <span class="footer__copy">
            &#169; Bedimcode. All rigths reserved
          </span>

          <div class="footer__privacy">
            <a href="#">Terms & Agreements</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>

      </footer>
    </div>
  )
}

export default Footer
