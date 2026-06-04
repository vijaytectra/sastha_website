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
            <span data-node-id="1:527">Join Our Mission to Preserve</span>
            <span>Tamil Heritage</span>
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
                  <svg className="vol-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
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
                  <svg className="vol-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
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
                    <svg className="vol-impact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 15.5c-2.3-2.3-2.3-6.1 0-8.5 2.3-2.3 6.1-2.3 8.5 0 2.3 2.3 2.3 6.1 0 8.5" />
                      <path d="M5.4 12.6c-2.5-2.5-2.5-6.6 0-9.1 2.5-2.5 6.6-2.5 9.1 0" />
                      <path d="m14.5 14.5 3 3c.5.5.5 1.4 0 2l-2 2" />
                      <path d="M16 11.5c1.6 0 3 1.3 3 3" />
                      <path d="M11 12.5c0-1.6 1.3-3 3-3" />
                      <path d="M12 21.5 8.9 18.4c-.6-.6-.6-1.5 0-2.1L12 13" />
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
