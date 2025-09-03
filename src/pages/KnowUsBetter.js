import React from 'react';
import './KnowUsBetter.css';

const KnowUsBetter = () => {
  return (
    <div className="container">
      <section className="kub-section">
        
        <div className="kub-header animated-item" style={{ animationDelay: '0.2s' }}>
          <h1 className="kub-title">Know us better</h1>
        </div>

        <div className="kub-main-content">
          <div className="kub-text-content animated-item" style={{ animationDelay: '0.4s' }}>
            <p>
              We are a next-generation IT solutions company backed by <strong>industry expertise</strong>. Our team of seasoned professionals has helped enterprises across industries embrace <strong>digital transformation</strong>, <strong>AI-driven innovation</strong>, and <strong>secure IT ecosystems</strong>.
            </p>
            <p>
              We understand that today’s businesses face the dual challenge of <strong>accelerating innovation while safeguarding against ever-growing cyber threats</strong>. That's why AI Vault is committed to delivering <strong>future-ready solutions</strong> that integrate <strong>Artificial Intelligence</strong>, <strong>Machine Learning</strong>, <strong>Cybersecurity</strong>, <strong>Cloud</strong>, <strong>Application Observability</strong>, and next gen <strong>Infrastructure</strong> — all designed with a <strong>security-first mindset</strong>.
            </p>
            <p>
              We keep a close watch across both the <strong>application layer</strong> and the <strong>infrastructure layer</strong>, ensuring performance, resilience, and protection at every level of your IT environment.
            </p>
            <p>
              With strong global partnerships and a <strong>security-first mindset</strong>, AI Vault helps enterprises unlock new possibilities, modernize operations, and build <strong>future-ready IT ecosystems</strong>.
            </p>
          </div>
          <div className="kub-visual-content animated-item" style={{ animationDelay: '0.6s' }}>
            <div className="visual-placeholder">
            </div>
          </div>
        </div>

        <div className="kub-mission-vision">
          <div className="kub-card animated-item" style={{ animationDelay: '0.8s' }}>
            <div className="card-bg-icon">🎯</div> 
            <h3>Our Mission</h3>
            <p>
              To empower organisations with <strong>secure, intelligent, and scalable IT solutions</strong> by combining decades of expertise with next-generation technologies. We strive to be a trusted partner in every client’s <strong>digital and AI-driven transformation journey</strong>, ensuring security, efficiency, and resilience at every step.
            </p>
          </div>
          <div className="kub-card animated-item" style={{ animationDelay: '1.0s' }}>
            <div className="card-bg-icon">✨</div>
            <h3>Our Vision</h3>
            <p>
              To be recognised as a <strong>global leader in AI, cybersecurity, and IT transformation</strong>, enabling businesses to thrive in the digital era by building <strong>future-ready, secure, and innovative ecosystems</strong>.
            </p>
          </div>
        </div>

      </section>
    </div>
  );
}

export default KnowUsBetter;