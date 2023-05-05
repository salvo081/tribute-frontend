import './Footer.css';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="Footer-main">
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
                id=""
              />
              <label for="newsletter">
                I accept the Pivacy Policy and subscrieb the newsletters
              </label>
            </div>
          </form>
        </div>
        <div className="newsletter-info-wrapper">
          <h3>Subscribe to our newsletter</h3>
          <p className="newsletter-info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            eum totam quia ex dolorem et incidunt velit quaerat? Error esse sit
            alias iure totam atque numquam dolorem quos suscipit sint?
          </p>
        </div>
      </div>
    </footer>
  );
}
