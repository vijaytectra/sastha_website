import React, { useEffect, useState } from "react";
import "./Navbar.css";

const SCROLL_TOP_THRESHOLD = 16;
const SCROLL_FOOTER_MIN = 48;
const SCROLL_DIRECTION_DELTA = 2;

/**
 * Navbar Component
 *
 * Uses vanilla CSS (no Tailwind) and semantic HTML structure.
 * Mobile toggle: icon-only button with staggered lines / close mark.
 * Logo: header wordmark at top; footer emblem when scrolling down (crossfade).
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFooterLogo, setShowFooterLogo] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        if (scrollY <= SCROLL_TOP_THRESHOLD) {
          setShowFooterLogo(false);
        } else if (
          scrollY >= SCROLL_FOOTER_MIN &&
          scrollY > lastScrollY + SCROLL_DIRECTION_DELTA
        ) {
          setShowFooterLogo(true);
        }

        lastScrollY = scrollY;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Brand / Logo */}
        <div className="navbar-brand">
          <a
            href="#"
            className={`navbar-logo ${showFooterLogo ? "navbar-logo--footer-active" : ""}`}
            aria-label="Sastha Tamil Foundation"
          >
            <span className="navbar-logo-stack">
              <img
                src="/logo_header.png"
                alt=""
                className="navbar-logo-img navbar-logo-img--header"
                height={48}
                decoding="async"
                aria-hidden={showFooterLogo}
              />
              <img
                src="/logo_footer.png"
                alt=""
                className="navbar-logo-img navbar-logo-img--footer"
                width={80}
                height={80}
                decoding="async"
                aria-hidden={!showFooterLogo}
              />
            </span>
            <span className="sr-only">Sastha Tamil Foundation</span>
          </a>
        </div>

        {/* Mobile nav toggle — icon only */}
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
