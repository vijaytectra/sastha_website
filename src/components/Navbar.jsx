import React, { useState } from "react";
import "./Navbar.css";

/**
 * Navbar Component
 * 
 * Re-implemented exactly from Figma design specs.
 * Uses vanilla CSS (no Tailwind) and semantic HTML structure.
 * Supports fully responsive desktop and mobile views.
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Brand / Logo */}
        <div className="navbar-brand">
          <a href="#" className="navbar-logo" aria-label="Sastha Tamil Foundation">
            <img src="/Container.svg" alt="Sastha Tamil Foundation Logo" className="navbar-logo-img" />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`toggle-line ${menuOpen ? "open" : ""}`}></span>
          <span className={`toggle-line ${menuOpen ? "open" : ""}`}></span>
          <span className={`toggle-line ${menuOpen ? "open" : ""}`}></span>
        </button>

        {/* Navigation Items */}
        <nav className={`navbar-nav ${menuOpen ? "mobile-open" : ""}`}>
          <div className="navbar-links">
            <a href="#about" className="navbar-link" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#school" className="navbar-link" onClick={() => setMenuOpen(false)}>
              Tamil School
            </a>
            <a href="#programs" className="navbar-link" onClick={() => setMenuOpen(false)}>
              Programs
            </a>
            <a href="#events" className="navbar-link" onClick={() => setMenuOpen(false)}>
              Events
            </a>
            <a href="#contact" className="navbar-link" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
            <a href="#donate" className="navbar-button" onClick={() => setMenuOpen(false)}>
              Donate
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
