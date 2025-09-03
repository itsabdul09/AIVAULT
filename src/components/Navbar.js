import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="navbar container">
      <div className="navbar-logo">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          AI Vault
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        
    
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
              <Link to="/solutions/ai" onClick={() => setDropdown(false)}>AI Solution</Link>
              <Link to="/solutions/cyber-security" onClick={() => setDropdown(false)}>Cyber Security Solutions</Link>
              <Link to="/solutions/observability" onClick={() => setDropdown(false)}>Observability</Link>
            </div>
          )}
        </li>

      </ul>
      <Link to="/contact" className="navbar-button">Contact</Link>
    </nav>
  );
}

export default Navbar;