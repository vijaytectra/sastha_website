import React, { useState } from "react";
import "./Navbar.css";

/**
 * Navbar Component
 *
 * Uses vanilla CSS (no Tailwind) and semantic HTML structure.
 * Mobile toggle: pill MENU / CLOSE button with staggered line icon.
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
            <img
              src="/logo_header.png"
              alt="Sastha Tamil Foundation Logo"
              className="navbar-logo-img"
              width={240}
              height={48}
              decoding="async"
            />
          </a>
        </div>

        {/* Mobile nav toggle — pill + staggered lines / close */}
        <button
          type="button"
          className={`navbar-toggle ${menuOpen ? "is-open" : ""}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="navbar-mobile-menu"
        >
          <span className="navbar-toggle-icon" aria-hidden="true">
            <span className="navbar-stagger-lines">
              <span className="navbar-stagger-line navbar-stagger-line--top" />
              <span className="navbar-stagger-line navbar-stagger-line--bottom" />
            </span>
            <span className="navbar-close-mark">
              <span className="navbar-close-line" />
              <span className="navbar-close-line" />
            </span>
          </span>
          <span className="navbar-toggle-label">
            {menuOpen ? "Close" : "Menu"}
          </span>
        </button>

        {/* Navigation Items */}
        <nav
          id="navbar-mobile-menu"
          className={`navbar-nav ${menuOpen ? "mobile-open" : ""}`}
        >
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
