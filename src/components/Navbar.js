import './Navbar.css';
import { NavLink } from 'react-router-dom';
import searchImage from '../assets/search.png';
import logoImage from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="Navbar-main">
      <div className="nav-logo">
        <NavLink to="/">
          <img className="nav-logo-img" src={logoImage} alt="Logo" />
        </NavLink>
      </div>
      <div className="nav-links">
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
        <NavLink to="/blog">
          <li>Blog</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
      </div>
      <div className="nav-search">
        <img className="nav-search-img" src={searchImage} alt="Seach Icon" />
      </div>
    </nav>
  );
}
