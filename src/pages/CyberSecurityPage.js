import React, { useState, useEffect } from 'react';
import './CyberSecurityPage.css';

import imgC1 from './data/CS1.png';
import imgC2 from './data/CS2.png';
import imgC3 from './data/CS3.png';

const features = [
  {
    image: imgC1,
    title: 'Smart Threat Detection: Catch Attacks Before They Happen',
    description: 'Our systems use AI and machine learning to spot unusual behavior quickly.',
    points: [
      'Alerts you to suspicious logins, malware, ransomware, or insider threats.',
      'Filters dangerous websites and blocks sketchy files in real-time.',
      'Contains threats automatically, stopping them from spreading if they get in.',
      'Helps your team respond faster with built-in automation.'
    ]
  },
  {
    image: imgC2,
    title: 'SASE: All-in-One Security for the Modern Business',
    description: 'Think of SASE as your network and security in one cloud-based platform.',
    points: [
      'Combines SD-WAN, firewall, secure web access, data protection, and more—without complex systems.',
      'Works across your head office, branch offices, remote workers, and cloud apps.',
      'Faster, safer connections from anywhere in the world.',
      'Keeps everything under one easy-to-manage roof with a single dashboard.'
    ]
  },
  {
    image: imgC3,
    title: 'Zero Trust Access: Only the Right People Get In',
    description: "We follow the Zero Trust principle—never trust, always verify.",
    points: [
      'Grant access only after checking the user\'s identity, location, and device security.',
      'Control who can access which apps or data—no broad network access.',
      'Keep remote work safe without the need for risky VPNs.',
      'Devices that aren\'t up to date or secure? They don\'t get access.'
    ]
  }
];

const CyberSecurityPage = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);

  // Effect to progressively load/animate images
  useEffect(() => {
    const timers = [];
    features.forEach((_, index) => {
      const timer = setTimeout(() => {
        setLoadedImages(prev => [...prev, index]);
      }, index * 300); // 300ms delay between each image
      timers.push(timer);
    });
    return () => timers.forEach(timer => clearTimeout(timer)); // Cleanup
  }, []);

  return (
    <div className="cyber-page container">
      
      <header className="page-header">
        <h1>Cybersecurity Solutions</h1>
        <p className="subtitle">
          We provide a unified, cloud-native cybersecurity suite engineered for modern digital enterprises—covering secure access, unified network security, threat detection, and risk management to provide unified risk reduction across your hybrid environment.
        </p>
      </header>

      <main className="features-grid"> {/* Changed from interactive-layout */}
        
        {features.map((feature, index) => (
          <div
            key={index}
            className={`feature-item ${index === activeFeatureIndex ? 'active' : ''}`}
            onClick={() => setActiveFeatureIndex(index)}
          >
                        <div className="feature-item-image-wrapper">
                <img
                    src={feature.image}
                    alt={feature.title}
                    className={loadedImages.includes(index) ? 'loaded' : ''}
                />
            </div>
            
            <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <ul>
                    {feature.points.map((point, i) => (
                    <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>

          </div>
        ))}

      </main>
    </div>
  );
};

export default CyberSecurityPage;