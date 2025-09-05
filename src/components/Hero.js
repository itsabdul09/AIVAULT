import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

// 1. Import the images from your assets folder
import heroImage1 from './assets/h1.png';
import heroImage2 from './assets/h2.png';
import heroImage3 from './assets/h3.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
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
      </div>
  
      <img src={heroImage1} alt="App interface example" className="floating-img img1" />
      <img src={heroImage2} alt="Cyber security icon" className="floating-img img2" />
      <img src={heroImage3} alt="Cloud infrastructure diagram" className="floating-img img3" />
    </section>
  );
}

export default Hero;