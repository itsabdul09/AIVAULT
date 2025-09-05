import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // New state for mobile menu

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Close dropdown if mobile menu is opened/closed
    if (dropdown) setDropdown(false); 
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false); // Close mobile menu on link click
    setDropdown(false); // Also close dropdown on link click
  };

  return (
    <nav className="navbar container">
      <div className="navbar-logo">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} onClick={handleLinkClick}>
          AI Vault
        </Link>
      </div>

      {/* Hamburger menu icon for mobile */}
      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
      </div>

      <ul className={`navbar-links ${mobileMenuOpen ? 'open' : ''}`}> {/* Apply 'open' class for mobile */}
        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
        <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
        
        <li 
          className="nav-item-dropdown"
          // Add touch events for better mobile dropdown experience if needed, though click is okay for now
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

        <li><Link to="/contact" className="navbar-button" onClick={handleLinkClick}>Contact</Link></li> {/* Convert contact button to a link for consistency in mobile menu */}
      </ul>
    </nav>
  );
}

export default Navbar;