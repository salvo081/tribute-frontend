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
      <div className="nav-search">
        <img className="nav-search-img" src={searchImage} alt="Seach Icon" />
      </div>
    </nav>
  );
}
