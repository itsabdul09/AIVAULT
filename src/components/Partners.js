import React from 'react';
import './Partners.css';

const partnerLogos = [
  'IBM',
  'ZOHO',
  'solarwinds',
  'ManageEngine',
  'FORTRA',
  'CATO',
  'accopus',
];

const Partners = () => {
  return (
    <section className="partners-section">
      <div className="section-header">
        <h2>Our Partners</h2>
        <p>AI Vault collaborates with industry leaders to bring you cutting-edge solutions and unparalleled service:</p>
      </div>

      <div className="logos-container">
        <div className="logos-track">
          {partnerLogos.map((logo, index) => (
            <div className="logo-item" key={`a-${index}`}>
              <span>{logo}</span>
            </div>
          ))}
          {partnerLogos.map((logo, index) => (
            <div className="logo-item" key={`b-${index}`}>
              <span>{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;