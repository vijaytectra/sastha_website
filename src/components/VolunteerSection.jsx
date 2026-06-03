import React from "react";
import "./VolunteerSection.css";


export default function VolunteerSection() {
  return (
    <section className="vol-section" id="join" data-node-id="1:522">
      <div className="vol-container" data-node-id="1:523">
        
        {/* Header Block */}
        <div className="vol-header" data-node-id="1:524">
          <span className="vol-badge" data-node-id="1:525">Get Involved</span>
          <h2 className="vol-heading" data-node-id="1:526">
            <span data-node-id="1:527">Join Our Mission to Preserve Tamil Heritage</span>
          </h2>
          <p className="vol-subtitle" data-node-id="1:528">
            Whether through volunteering your time or supporting our programs financially, every contribution helps strengthen our community.
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="vol-cards-grid" data-node-id="1:529">
          
          {/* Card 1: Volunteer */}
          <div className="vol-card card-volunteer" data-node-id="1:530">
            <div className="vol-card-bg-wrap">
              <img src="assets/18.jpg" alt="Volunteering background" className="vol-card-bg-img" />
              <div className="vol-card-gradient overlay-green"></div>
            </div>
            
            <div className="vol-card-content" data-node-id="1:532">
              <div className="vol-card-header" data-node-id="1:533">
                <div className="vol-card-icon-box" data-node-id="1:534">
                  <svg className="vol-card-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="vol-card-heading" data-node-id="1:541">Volunteer With Us</h3>
                <p className="vol-card-desc" data-node-id="1:543">
                  Share your skills, passion, and time to help preserve Tamil culture. We welcome volunteers for teaching, event coordination, mentorship, and more.
                </p>
              </div>

              <div className="vol-card-body" data-node-id="1:544">
                <ul className="vol-card-list">
                  <li className="vol-card-item">
                    <span className="vol-card-bullet"></span>
                    <span>Teaching and curriculum development</span>
                  </li>
                  <li className="vol-card-item">
                    <span className="vol-card-bullet"></span>
                    <span>Event planning and coordination</span>
                  </li>
                  <li className="vol-card-item">
                    <span className="vol-card-bullet"></span>
                    <span>Mentorship and student support</span>
                  </li>
                  <li className="vol-card-item">
                    <span className="vol-card-bullet"></span>
                    <span>Marketing and community outreach</span>
                  </li>
                </ul>

                <a href="#volunteer-form" className="vol-card-btn btn-white-green" data-node-id="1:562">
                  <span>Become a Volunteer</span>
                  <svg className="vol-btn-arrow" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33331 8H12.6666M12.6666 8L8.66665 4M12.6666 8L8.66665 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Support */}
          <div className="vol-card card-support" data-node-id="1:568">
            <div className="vol-card-bg-wrap">
              <img src="assets/19.jpg" alt="Supporting background" className="vol-card-bg-img" />
              <div className="vol-card-gradient overlay-rust"></div>
            </div>

            <div className="vol-card-content" data-node-id="1:570">
              <div className="vol-card-header" data-node-id="1:571">
                <div className="vol-card-icon-box" data-node-id="1:572">
                  <svg className="vol-card-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="vol-card-heading" data-node-id="1:575">Support Our Programs</h3>
                <p className="vol-card-desc" data-node-id="1:577">
                  Your generous donations enable us to provide quality Tamil education, cultural programs, and community services to families across our region.
                </p>
              </div>

              <div className="vol-card-body" data-node-id="1:579">
                {/* Impact Info Glass box */}
                <div className="vol-impact-box" data-node-id="1:580">
                  <div className="vol-impact-header">
                    <svg className="vol-impact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="vol-impact-title">Your Impact</span>
                  </div>
                  
                  <ul className="vol-impact-list">
                    <li>• Scholarships for students in need</li>
                    <li>• Educational materials and resources</li>
                    <li>• Cultural event programming</li>
                    <li>• Facility improvements and technology</li>
                  </ul>
                </div>

                <a href="#donate" className="vol-card-btn btn-white-rust" data-node-id="1:599">
                  <span>Make a Donation</span>
                  <svg className="vol-btn-arrow" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33331 8H12.6666M12.6666 8L8.66665 4M12.6666 8L8.66665 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
