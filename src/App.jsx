import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import About from './components/About';
import FeatureGrid from './components/FeatureGrid';
import Testimonials from './components/Testimonials';
import LogoSection from './components/LogoSection';


const App = () => {
  const loremText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed commodo est. Pellentesque eu placerat mauris. Etiam ut maximus ante. Suspendisse varius dolor nec bibendum dignissim.";

  return (
    <div className="page-wrapper">
      <Navbar />
      <Hero />
      <FeatureSection />
      <About />
      <FeatureGrid />
      <Testimonials/>
      <LogoSection/>


      <footer className="dark-footer">
        <div className="container" style={{ padding: '40px' }}>
          <p style={{ color: 'white', fontSize: '1.2rem', marginTop: '74px', fontWeight: 'semibold' }}>
            © Helplama 2021
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;