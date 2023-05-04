import './Footer.css';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="Footer-main">
      <div className="footer-container">
        <div className="newsletter-wrapper">
          <h3>Subscribe to our newsletter</h3>
          <p>No spam, we promise! Just informations about your legends. </p>
          <form action="">
            <input type="email" placeholder="Your Email *" />
            <input type="checkbox" name="" id="" />
            <label for="newsletter">
              I accept the Pivacy Policy and subscrieb the newsletters
            </label>
          </form>
        </div>
        <div className="newsletter-info-wrapper">
          <h3>Subscribe to our newsletter</h3>
          <p className="newletter-info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            eum totam quia ex dolorem et incidunt velit quaerat? Error esse sit
            alias iure totam atque numquam dolorem quos suscipit sint?
          </p>
        </div>
      </div>
    </footer>
  );
}
