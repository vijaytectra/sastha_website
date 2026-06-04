import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-root" id="contact" data-node-id="1:605">
      <div className="footer-container" data-node-id="1:606">
        
        {/* Row 1: Columns */}
        <div className="footer-cols" data-node-id="1:607">
          
          {/* Column 1: Brand & Socials */}
          <div className="footer-col col-brand" data-node-id="1:608">
            <div className="footer-brand-header">
              <h3 className="footer-brand-title" data-node-id="1:609">
                <img
                  src="/logo_footer.png"
                  alt="Sastha Tamil Foundation Logo"
                  className="footer-logo-img"
                  width={120}
                  height={120}
                  decoding="async"
                />
              </h3>
              <p className="footer-brand-desc" data-node-id="1:611">
                Preserving Tamil language, culture, and community for future generations through education and cultural programs.
              </p>
            </div>
            <div className="footer-social-links" data-node-id="1:612">
              <a href="#facebook" className="footer-social-link" data-node-id="1:613">
                <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#instagram" className="footer-social-link" data-node-id="1:616">
                <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#twitter" className="footer-social-link" data-node-id="1:621">
                <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col" data-node-id="1:625">
            <h4 className="footer-col-title" data-node-id="1:627">Quick Links</h4>
            <ul className="footer-links-list" data-node-id="1:628">
              <li><a href="#about">About Us</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#join">Volunteer</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="footer-col" data-node-id="1:644">
            <h4 className="footer-col-title" data-node-id="1:646">Resources</h4>
            <ul className="footer-links-list" data-node-id="1:647">
              <li><a href="#enroll">Enrollment Information</a></li>
              <li><a href="#schedule">Class Schedule</a></li>
              <li><a href="#report">Annual Report</a></li>
              <li><a href="#faq">FAQs</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div className="footer-col col-contact" data-node-id="1:663">
            <h4 className="footer-col-title" data-node-id="1:665">Get in Touch</h4>
            <ul className="footer-contact-list" data-node-id="1:666">
              <li className="footer-contact-item">
                <svg className="contact-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div className="contact-item-text">
                  <p>123 Tamil Heritage Blvd</p>
                  <p>Community Center, CA 94000</p>
                </div>
              </li>
              <li className="footer-contact-item">
                <svg className="contact-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href="tel:4155551234" className="contact-link">(415) 555-1234</a>
              </li>
              <li className="footer-contact-item">
                <svg className="contact-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:info@stfnonprofit.org" className="contact-link">info@stfnonprofit.org</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Row 2: Stay Connected */}
        <div className="footer-newsletter-row" data-node-id="1:684">
          <div className="footer-newsletter-content" data-node-id="1:685">
            <h4 className="footer-newsletter-title" data-node-id="1:687">Stay Connected</h4>
            <p className="footer-newsletter-desc" data-node-id="1:689">
              Subscribe to our newsletter for updates on programs, events, and community news.
            </p>
            <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()} data-node-id="1:690">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="footer-email-input" 
                required 
              />
              <button type="submit" className="footer-subscribe-btn" data-node-id="1:693">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Row 3: Legal & Copyright */}
        <div className="footer-bottom-row" data-node-id="1:695">
          <p className="footer-copyright" data-node-id="1:697">
            © 2026 Sastha Tamil Foundation. All rights reserved.
          </p>
          <div className="footer-legal-links" data-node-id="1:698">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#accessibility">Accessibility</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
