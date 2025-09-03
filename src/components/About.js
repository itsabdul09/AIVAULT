import React from 'react';
import './About.css';

const Features = () => {
  return (
    <section className="features-section container" id="features">
      <h2 className="features-title">
        About AI Vault <br />What We Do
      </h2>
      <p className="features-subtitle">
        At AIVault, we help organizations build and scale responsible AI practices while fortifying them with cybersecurity, resilient infrastructure, and end-to-end cloud integration.
From ground to cloud and cloud to ground, we power innovation with trust.
      </p>

      <div className="features-grid">


        <div className="feature-card">
          <div className="card-icon">
            🌐
          </div>
          <h3 className="card-title">AI & ML</h3>
          <p className="card-description">
            Smarter decisions. Faster innovation.
          </p>
        </div>


        <div className="feature-card">
          <div className="card-icon">
            📱
          </div>
          <h3 className="card-title">Cybersecurity</h3>
          <p className="card-description">
            Resilience against evolving threats.
          </p>
        </div>


        <div className="feature-card">
          <div className="card-icon">
            🤖
          </div>
          <h3 className="card-title">Application Observability</h3>
          <p className="card-description">
            Clarity that drives performance.
          </p>
        </div>


        <div className="feature-card">
          <div className="card-icon">
            🖥️
          </div>
          <h3 className="card-title">IT Infrastructure</h3>
          <p className="card-description">
           Smart IT infra from Ground to Cloud to Edge
          </p>
        </div>

        
      </div>
    </section>
  );
}

export default Features;