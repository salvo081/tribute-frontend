import './Navbar.css';
import { NavLink } from 'react-router-dom';

import logoImage from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="Navbar-main">
      <div className="nav-logo">
        <NavLink to="/">
          <img className="nav-logo-img" src={logoImage} alt="Logo" />
        </NavLink>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <div className="search-container">
        <form>
          <input
            className="search expandright"
            id="searchright"
            type="search"
            name="q"
            placeholder="Search"
          />
          <label className="button searchbutton" htmlFor="searchright">
            <span className="mglass">&#9906;</span>
          </label>
        </form>
      </div>
    </nav>
  );
}
