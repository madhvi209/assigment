import React, { useState } from 'react';
import './Navbar.css';
import logoPlaceholder from '/src/assets/Group.png';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  // Close menu on link click (for mobile UX)
  const handleLinkClick = () => {
    setNavOpen(false);
  };

  return (
    <header className="navbar">
      <div className="logo-container">
        <img src={logoPlaceholder} alt="logo" className="logo" />
      </div>
      {/* Hamburger menu for mobile */}
      <button
        className="navbar-hamburger"
        aria-label={navOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={navOpen}
        onClick={() => setNavOpen((open) => !open)}
        type="button"
      >
        <span
          style={{
            transform: navOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none',
            transition: '0.3s',
          }}
        />
        <span
          style={{
            opacity: navOpen ? 0 : 1,
            transition: 'opacity 0.25s',
          }}
        />
        <span
          style={{
            transform: navOpen ? 'rotate(-45deg) translate(8px, -8px)' : 'none',
            transition: '0.3s',
          }}
        />
      </button>
      <nav>
        <ul className={`nav-links${navOpen ? ' open' : ''}`}>
          <li>
            <a href="#" className="nav-item" onClick={handleLinkClick}>Nav1</a>
          </li>
          <li>
            <a href="#" className="nav-item" onClick={handleLinkClick}>Nav2</a>
          </li>
          <li>
            <a href="#" className="nav-item has-dropdown" onClick={handleLinkClick}>Nav3</a>
          </li>
          <li>
            <a href="#" className="nav-item has-dropdown" onClick={handleLinkClick}>Nav4</a>
          </li>
          <li>
            <a href="#" className="nav-item" onClick={handleLinkClick}>Nav5</a>
          </li>
          <li>
            <a href="#" className="nav-item" onClick={handleLinkClick}>Nav6</a>
          </li>
          <li>
            <a href="#" className="nav-item" onClick={handleLinkClick}>Nav7</a>
          </li>
          <li>
            <a href="#" className="nav-item" onClick={handleLinkClick}>Nav8</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}