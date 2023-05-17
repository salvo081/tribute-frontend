import './Footer.css';
import { NavLink } from 'react-router-dom';
import Facebook from '../assets/socials/facebook.svg';
import Twitter from '../assets/socials/twitter.svg';
import Linkedin from '../assets/socials/linkedin.svg';
import Pinterest from '../assets/socials/pinterest.svg';

export default function Footer() {
  return (
    <footer className="Footer-main">
      <div className="footer-wrapper">
        <div className="footer-container">
          <div className="newsletter-wrapper">
            <h3>Subscribe to our newsletter</h3>
            <p className="newsletter-p">
              No spam, we promise! Just informations about your legends.{' '}
            </p>
            <form action="">
              <input
                className="newsletter-email-input"
                type="email"
                placeholder="Your Email *"
              />
              <div className="privacy-wrapper">
                <input
                  className="newsletter-checkbox"
                  type="checkbox"
                  name=""
                  id="newsletter"
                />
                <label htmlFor="newsletter">
                  I accept the Pivacy Policy and subscribe the newsletters
                </label>
              </div>
            </form>
          </div>
          <div className="newsletter-info-wrapper">
            <h3>Subscribe to our newsletter</h3>
            <p className="newsletter-info-text">
              You love hearing from your favorite artists on a regular basis.
              There are always new insights into the life of the deceased. So
              stay up to date and don't miss any news about your star. Subscribe
              to our newsletter now!
            </p>
          </div>
        </div>
      </div>
      <div className="social-footer">
        <div className="nav-company">
          <div>
            <p>&copy; 2023 Tribute - All right reserved. </p>
          </div>
        </div>
        <nav className="social-footer-container">
          <ul className="nav-links">
            <li>
              <NavLink to="/privacy">Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink to="/service">Terms of Service</NavLink>
            </li>
          </ul>
        </nav>
        <div className="social-icon-wrapper">
          <nav className="social-footer-container">
            <ul className="nav-links">
              <li>
                <NavLink to="https://facebook.com">
                  <img
                    className="social-img"
                    src={Facebook}
                    alt="Facebook Logo"
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="https://linkedin.com">
                  <img
                    className="social-img"
                    src={Linkedin}
                    alt="Linkedin  Logo"
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="https://twitter.com">
                  <img
                    className="social-img"
                    src={Twitter}
                    alt="Twitter Logo"
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="https://pinterest.com">
                  <img
                    className="social-img"
                    src={Pinterest}
                    alt="Pinterest Logo"
                  />
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
