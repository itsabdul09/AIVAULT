import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (dropdown) setDropdown(false); 
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false); 
    setDropdown(false); 
  };

  return (
    <nav className="navbar container">
      <div className="navbar-logo">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} onClick={handleLinkClick}>
          AI Vault
        </Link>
      </div>
      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
      </div>

      <ul className={`navbar-links ${mobileMenuOpen ? 'open' : ''}`}> 
        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
        <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
        
        <li 
          className="nav-item-dropdown"
        >
          <a 
            href="#solutions" 
            onClick={(e) => {
              e.preventDefault(); 
              setDropdown(!dropdown); 
            }}
          >
            Solutions {dropdown ? <>&#9652;</> : <>&#9662;</>} 
          </a>
          {dropdown && (
            <div className="dropdown-menu">
              <Link to="/solutions/ai" onClick={handleLinkClick}>AI Solution</Link>
              <Link to="/solutions/cyber-security" onClick={handleLinkClick}>Cyber Security Solutions</Link>
              <Link to="/solutions/observability" onClick={handleLinkClick}>Observability</Link>
            </div>
          )}
        </li>

        <li><Link to="/contact" className="navbar-button" onClick={handleLinkClick}>Contact</Link></li> 
      </ul>
    </nav>
  );
}

export default Navbar;