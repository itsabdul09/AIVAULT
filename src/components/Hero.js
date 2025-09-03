import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero-content">
        <h1 className="hero-title">
          Fortifying digital space with<br />Value, Vision & Vigilance
        </h1>
        <p className="hero-subtitle">
          AI Vault is a next-generation IT solutions company with industry expertise, helping businesses drive AI innovation, digital transformation, and cyber-security resilience. With a security-first approach and strong global partnerships, we deliver future-ready IT ecosystems across applications, infrastructure, and cloud.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">EXPLORE VAULT →</button>
          <button className="btn btn-secondary">Get Started →</button>
        </div>
      </div>
      <div className="hero-visual">
        {/*illustration lgani h */}
        <div className="floating-card card1"></div>
        <div className="floating-card card2"></div>
        <div className="floating-card card3"></div>
      </div>
    </section>
  );
}

export default Hero;