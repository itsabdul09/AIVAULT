import React from 'react';
import './KnowUsBetter.css';

// 1. Import your image from the data folder
import knowImage from './data/know.png';

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
            {/* 2. Add the img tag inside the placeholder */}
            <div className="visual-placeholder">
              <img src={knowImage} alt="Our team collaborating in a modern office" />
            </div>
          </div>
        </div>

        <div className="kub-mission-vision">
          {/* ... rest of your component */}
        </div>

      </section>
    </div>
  );
}

export default KnowUsBetter;