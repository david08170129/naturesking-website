import { useState } from 'react';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => scrollTo('hero')}>
        <img src={logo} alt="Nature's King" className="navbar-logo" />
      </div>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><button onClick={() => scrollTo('hero')}>Home</button></li>
        <li><button onClick={() => scrollTo('about')}>About Us</button></li>
        <li><button onClick={() => scrollTo('products')}>Products</button></li>
        <li><button onClick={() => scrollTo('why')}>Why Us</button></li>
        <li><button onClick={() => scrollTo('contact')}>Contact</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
