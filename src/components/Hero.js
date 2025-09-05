import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    // The main container remains the same
    <section className="hero container">
      <div className="hero-content">
        <h1 className="hero-title">
          Fortifying digital space with<br />Value, Vision & Vigilance
        </h1>
        <p className="hero-subtitle">
          AI Vault is a next-generation IT solutions company with industry expertise, helping businesses drive AI innovation, digital transformation, and cyber-security resilience. With a security-first approach and strong global partnerships, we deliver future-ready IT ecosystems across applications, infrastructure, and cloud.
        </p>
        <div className="hero-buttons">
          <Link to="/contact" className="btn btn-primary">Get Started →</Link>
        </div>
      </div>
      
      {/* Images are now direct children, the .hero-visual div is removed */}
      <img src="/images/hero-image-1.png" alt="App interface example" className="floating-img img1" />
      <img src="/images/hero-image-2.png" alt="Cyber security icon" className="floating-img img2" />
      <img src="/images/hero-image-3.png" alt="Cloud infrastructure diagram" className="floating-img img3" />
    </section>
  );
}

export default Hero;