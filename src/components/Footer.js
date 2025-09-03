import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Vault AI</h3>
            <p>The standard for Modular AI building infrastructure with a wide range of RWA applications.</p>
          </div>
          
          <div className="footer-column">
            <h3>About</h3>
            <p>+91- 735 12345 01</p>
            <p>hello@aivault.in</p>
          </div>

          <div className="footer-column">
            <h3>Stay Updated</h3>
            <p>Enter your email address for updates.</p>
            <form className="footer-form">
              <input type="email" placeholder="Email for inquiries" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 AI Vault. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;