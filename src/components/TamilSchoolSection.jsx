import React from "react";
import "./TamilSchoolSection.css";


export default function TamilSchoolSection() {
  const classes = [
    {
      title: "Beginner Classes",
      age: "Ages 5-7",
      desc: "Introduction to Tamil alphabets, basic vocabulary, and foundational language skills through interactive and engaging activities.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
      )
    },
    {
      title: "Intermediate Classes",
      age: "Ages 8-12",
      desc: "Building reading, writing, and conversational skills with focus on grammar, literature, and cultural storytelling.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 14L2 9L12 4L22 9L12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.33 10.17V15C4.33 16.5 7.76 18 12 18C16.24 18 19.67 16.5 19.67 15V10.17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Advanced Classes",
      age: "Ages 13+",
      desc: "Deep dive into Tamil literature, poetry, advanced grammar, and classical texts for comprehensive language mastery.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      )
    }
  ];

  return (
    <section className="school-section" id="school" data-node-id="1:161">
      <div className="school-container" data-node-id="1:162">
        
        {/* Header Block */}
        <div className="school-header" data-node-id="1:163">
          <span className="school-badge" data-node-id="1:164">Tamil Language Education</span>
          <h2 className="school-heading" data-node-id="1:165">
            <span data-node-id="1:166">Accredited Tamil School Programs</span>
          </h2>
          <p className="school-subtitle" data-node-id="1:167">
            Our comprehensive curriculum is designed to nurture language proficiency, cultural appreciation, and authentic connection to Tamil heritage across all age groups.
          </p>
        </div>

        {/* Classes Card Grid */}
        <div className="school-cards-grid" data-node-id="1:168">
          {classes.map((item, idx) => (
            <div key={idx} className="school-card" data-node-id={`class-card-${idx}`}>
              <div className="school-card-icon-box" style={idx === 1 ? { color: '#B8563F' } : {}}>
                {item.icon}
              </div>
              <h3 className="school-card-title">{item.title}</h3>
              <span className="school-card-age">{item.age}</span>
              <p className="school-card-desc">{item.desc}</p>
              
              <a href="#details" className="school-card-btn">
                <span>Learn More</span>
                <svg className="school-card-btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Enrollment Banner Block */}
        <div className="school-banner" data-node-id="1:220">
          <div className="school-banner-content" data-node-id="1:221">
            {/* Header Icon */}
            <div className="school-banner-icon-box" data-node-id="1:223">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            
            <h3 className="school-banner-heading" data-node-id="1:229">
              Enrollment Open for 2026-2027
            </h3>
            
            <p className="school-banner-desc" data-node-id="1:231">
              Join our vibrant learning community and give your child the gift of their cultural heritage. Classes begin in September with flexible weekend schedules.
            </p>

            {/* Banner list checklist */}
            <ul className="school-banner-list" data-node-id="1:232">
              <li className="school-banner-item">
                <span className="school-banner-bullet"></span>
                <span>Weekend classes (Saturdays & Sundays)</span>
              </li>
              <li className="school-banner-item">
                <span className="school-banner-bullet"></span>
                <span>Experienced, certified Tamil instructors</span>
              </li>
              <li className="school-banner-item">
                <span className="school-banner-bullet"></span>
                <span>Age-appropriate curriculum and materials</span>
              </li>
              <li className="school-banner-item">
                <span className="school-banner-bullet"></span>
                <span>Cultural activities and events throughout the year</span>
              </li>
            </ul>

            <a href="#enroll-child" className="school-banner-btn" data-node-id="1:249">
              Enroll Your Child Now
            </a>
          </div>

          {/* Banner split image */}
          <div className="school-banner-image-box" data-node-id="1:251">
            <img src="assets/12.jpg" alt="Students studying together" className="school-banner-img" />
          </div>
        </div>

      </div>
    </section>
  );
}
