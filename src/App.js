import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your new LoadingScreen component
import LoadingScreen from './components/LoadingScreen';

// ... (rest of your imports)
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Partners from './components/Partners';
import Footer from './components/Footer';
import KnowUsBetter from './pages/KnowUsBetter';
import ContactPage from './pages/ContactPage';
import AiSolutionPage from './pages/AiSolutionPage';
import CyberSecurityPage from './pages/CyberSecurityPage';
import ObservabilityPage from './pages/ObservabilityPage';


const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Expertise />
      <Partners />
    </>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  // 1. Add a new state to control the exit animation
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Timer to start the exit animation (e.g., after 4 seconds)
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 4000);

    // Timer to remove the component from the DOM after the animation completes
    // (4000ms wait + 1000ms animation = 5000ms total)
    const unmountTimer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        {/* 2. Render LoadingScreen as long as isLoading is true */}
        {/* and pass the isExiting prop to trigger the animation */}
        {isLoading && <LoadingScreen isExiting={isExiting} />}

        <div className={`main-content ${!isLoading ? 'visible' : ''}`}>
          <div className="background-sphere sphere1"></div>
          <div className="background-sphere sphere2"></div>

          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<KnowUsBetter />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/solutions/ai" element={<AiSolutionPage />} />
            <Route path="/solutions/cyber-security" element={<CyberSecurityPage />} />
            <Route path="/solutions/observability" element={<ObservabilityPage />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;