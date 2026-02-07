import React from 'react';
import './Navbar.css'; // or your CSS file path
import logoPlaceholder from '/src/assets/Group.png';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo-container">
        <img src={logoPlaceholder} alt="logo" className="logo" />
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#" className="nav-item">Nav1</a></li>
          <li><a href="#" className="nav-item">Nav2</a></li>
          {/* Added has-dropdown class here */}
          <li><a href="#" className="nav-item has-dropdown">Nav3</a></li>
          <li><a href="#" className="nav-item has-dropdown">Nav4</a></li>
          <li><a href="#" className="nav-item">Nav5</a></li>
          <li><a href="#" className="nav-item">Nav6</a></li>
          <li><a href="#" className="nav-item">Nav7</a></li>
          <li><a href="#" className="nav-item">Nav8</a></li>
        </ul>
      </nav>
    </header>
  );
}