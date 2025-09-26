import React from 'react';
import './Partners.css';

import ibmLogo from './assets/ibm.svg';       
import zohoLogo from './assets/zoho.svg';     
import solarwindsLogo from './assets/solarwinds.svg'; 
import manageEngineLogo from './assets/manageengine.svg'; 
import fortraLogo from './assets/fortra.svg';   
import catoLogo from './assets/cato-green.svg';         
import accopusLogo from './assets/Accops.svg';   

const partnerLogos = [
  { name: 'IBM', src: ibmLogo },
  { name: 'ZOHO', src: zohoLogo },
  { name: 'SolarWinds', src: solarwindsLogo },
  { name: 'ManageEngine', src: manageEngineLogo },
  { name: 'FORTRA', src: fortraLogo },
  { name: 'CATO', src: catoLogo },
  { name: 'Accopus', src: accopusLogo },
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
              <img src={logo.src} alt={`${logo.name} Logo`} />
            </div>
          ))}
          {partnerLogos.map((logo, index) => (
            <div className="logo-item" key={`b-${index}`}>
              <img src={logo.src} alt={`${logo.name} Logo`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;