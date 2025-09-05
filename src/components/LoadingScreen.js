import React from 'react';
import './LoadingScreen.css';

// The component now accepts the `isExiting` prop
const LoadingScreen = ({ isExiting }) => {
  const videoSrc = "/videos/loading-bg.mp4";

  return (
    // Add the 'exiting' class when the prop is true
    <div className={`loading-screen ${isExiting ? 'exiting' : ''}`}>
      {/* Panel for the left half */}
      <div className="split-panel left">
        <video autoPlay muted playsInline loop key="video-left" className="loading-video">
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* Panel for the right half */}
      <div className="split-panel right">
        <video autoPlay muted playsInline loop key="video-right" className="loading-video">
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      <div className="loading-text">
        <span>Welcome</span>
        <span>to</span>
        <span>AI Vault</span>
      </div>
    </div>
  );
};

export default LoadingScreen;