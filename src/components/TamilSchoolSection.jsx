import React from "react";
import "./TamilSchoolSection.css";


export default function TamilSchoolSection() {
  const classes = [
    {
      title: "Beginner Classes",
      age: "Ages 5-7",
      desc: "Introduction to Tamil alphabets, basic vocabulary, and foundational language skills through interactive and engaging activities.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 20H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.5 3.5A2.121 2.121 0 0 1 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Intermediate Classes",
      age: "Ages 8-12",
      desc: "Building reading, writing, and conversational skills with focus on grammar, literature, and cultural storytelling.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.5 2H20V22H6.5A2.5 2.5 0 0 1 4 19.5V4.5A2.5 2.5 0 0 1 6.5 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Advanced Classes",
      age: "Ages 13+",
      desc: "Deep dive into Tamil literature, poetry, advanced grammar, and classical texts for comprehensive language mastery.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
              <div className="school-card-icon-box">
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
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 2 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
