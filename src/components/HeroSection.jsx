import React from "react";
import "./HeroSection.css";

// Image URLs with premium online fallbacks

export default function HeroSection() {
  return (
    <section className="hero-section" data-node-id="1:21">
      {/* Decorative blurred backgrounds */}
      <div className="hero-glow glow-orange" data-node-id="1:58"></div>
      <div className="hero-glow glow-green" data-node-id="1:59"></div>

      <div className="hero-container" data-node-id="1:22">
        {/* Left Content Column */}
        <div className="hero-content" data-node-id="1:23">
          {/* Tagline Badge */}
          <div className="hero-badge" data-node-id="1:24">
            <span className="hero-badge-text" data-node-id="1:25">
              Accredited Tamil School • 25+ Years of Service
            </span>
          </div>

          {/* Heading */}
          <h1 className="hero-heading" data-node-id="1:26">
            <span className="hero-heading-main" data-node-id="1:27">Rooted in Heritage,</span>
            <span className="hero-heading-sub">Growing with Community</span>
          </h1>

          {/* Description */}
          <div className="hero-description-container" data-node-id="1:28">
            <p className="hero-description" data-node-id="1:29">
              A volunteer-driven non-profit dedicated to preserving Tamil language, culture, and tradition while empowering the next generation through education and community service.
            </p>
          </div>

          {/* CTA Button Row */}
          <div className="hero-ctas" data-node-id="1:30">
            <a href="#enroll" className="hero-btn-primary" data-node-id="1:31">
              <span className="hero-btn-text" data-node-id="1:33">Enroll Now</span>
              <svg className="hero-btn-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-node-id="1:34">
                <path d="M4.16669 10H15.8334M15.8334 10L10.8334 5M15.8334 10L10.8334 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#support" className="hero-btn-secondary" data-node-id="1:37">
              <span className="hero-btn-text-secondary" data-node-id="1:38">Support Our Mission</span>
            </a>
          </div>

          {/* Statistics Divider and Items */}
          <div className="hero-stats-divider" data-node-id="1:39">
            <div className="hero-stat-item" data-node-id="1:40">
              <span className="hero-stat-number" data-node-id="1:42">200+</span>
              <span className="hero-stat-label" data-node-id="1:44">Active Volunteers</span>
            </div>
            <div className="hero-stat-item" data-node-id="1:45">
              <span className="hero-stat-number" data-node-id="1:47">$466K</span>
              <span className="hero-stat-label" data-node-id="1:49">Charitable Impact</span>
            </div>
            <div className="hero-stat-item" data-node-id="1:50">
              <span className="hero-stat-number" data-node-id="1:52">19th</span>
              <span className="hero-stat-label" data-node-id="1:54">Year Thirukkural</span>
            </div>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="hero-image-wrapper" data-node-id="1:55">
          <img 
            src="assets/14.jpg" 
            alt="Tamil cultural dancers and community moments" 
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
}
