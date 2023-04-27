import './Navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="Navbar-main">
      <div className="nav-logo">
        <img className="nav-search-img" src="src/assets/logo.svg" alt="" />
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
        <img className="nav-search-img" src="assets/search.png" alt="" />
      </div>
    </nav>
  );
}
