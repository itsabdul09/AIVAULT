import React from 'react';
import './Expertise.css';

const Expertise = () => {
  return (
    <section className="expertise-section container" id="expertise">
      <div className="section-header">
        <h2>Our Expertise</h2>
        <p>Comprehensive IT solutions tailored for AI, cybersecurity, cloud, and more.</p>
      </div>

      <div className="expertise-content">
        <div className="expertise-left">
          <div className="floating-icon icon-1">AI</div>
          <div className="floating-icon icon-2">🛡️</div>
          <div className="floating-icon icon-3">🔄</div>
          <div className="floating-icon icon-4">📈</div>
          <div className="phone-mockup">
          </div>
        </div>

        <div className="expertise-right">
          <div className="expertise-card">
            <div className="card-text">
              <h3>AI Solutions</h3>
              <p>At AI Vault, we simplify AI for everyone — whether you’re just beginning your journey or already an expert. Through our partnerships with leading global ISVs, we deliver end-to-end AI capabilities, including:
                <br />
                1. AI Platforms & LLMs <br /> 
            2. Optimization & Consulting <br />
            3. AI-in-a-Box <br />

            From strategy to execution, AI Vault is your trusted partner in harnessing AI for real business value.
              </p>
            </div>
            <div className="card-bg-icon">🔒</div>
          </div>
          <div className="expertise-card">
            <div className="card-text">
              <h3>Cyber Security Solutions</h3>
              <p>The future is digital. The threats are real.
                <br />
                AI Vault redefines security by integrating innovation, awareness, and resilience. We safeguard your cloud, data, and workforce with next-gen solutions that keep you prepared for what’s next.</p>
            </div>
            <div className="card-bg-icon">🔗</div>
          </div>
          <div className="expertise-card">
            <div className="card-text">
              <h3>IT Infra and application management</h3>
              <p>Even a single minute of downtime can cost enterprises thousands. 
                <br/>
                At AIVault, we help you stay ahead with solutions in application performance management, observability, and network monitoring. By turning real-time insights into proactive action, we ensure reliability, optimize performance, and elevate customer experience—because in the digital era, performance is business</p>
            </div>
            <div className="card-bg-icon">🤖</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expertise;