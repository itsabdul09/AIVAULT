import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

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
  return (
    <Router> 
      <div className="App">
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
    </Router>
  );
}

export default App;