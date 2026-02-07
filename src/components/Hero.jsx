import React from 'react';
import './Hero.css';
import heroIllustration from '/src/assets/hero-bg.png';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
            commodo est. Pellentesque eu placerat mauris. Etiam ut maximus
            ante. Suspendisse varius dolor nec bibendum dignissim. Proin in
            diam a justo sollicitudin mattis eu sagittis nunc. In hac habitasse
            platea dictumst.
          </p>
          <a href="#" className="btn-pricing" onClick={(e) => { e.preventDefault(); alert('Check Pricing') }}>
            Check Pricing
          </a>
        </div>

        <div className="hero-graphics">
          <img src={heroIllustration} alt="Hero Graphics" />
        </div>
      </div>

      <div className="wave-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  )
}