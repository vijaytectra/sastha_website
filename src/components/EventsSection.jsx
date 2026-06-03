import React from "react";
import "./EventsSection.css";

export default function EventsSection() {
  return (
    <section className="events-section" id="events" data-node-id="1:316">
      <div className="events-container" data-node-id="1:317">
        
        {/* Header Block */}
        <div className="events-header" data-node-id="1:318">
          <span className="events-badge" data-node-id="1:319">Upcoming Events</span>
          <h2 className="events-heading" data-node-id="1:320">
            <span data-node-id="1:321">Celebrating Tamil Heritage Together</span>
          </h2>
          <p className="events-subtitle" data-node-id="1:322">
            Join us for cultural festivals, educational workshops, and community gatherings that bring our Tamil heritage to life.
          </p>
        </div>

        {/* Stacked Row Cards */}
        <div className="events-list" data-node-id="1:323">
          
          {/* Event Card 0: Thai Pongal Festival */}
          <div className="event-card" data-node-id="event-card-0">
            {/* Event Image Column (Left) */}
            <div className="event-img-box">
              <img src="assets/2.jpg" alt="Thai Pongal Festival" className="event-img" />
              <div className="event-type-badge">
                <span>Festival</span>
              </div>
            </div>

            {/* Event Details Content Column (Right) */}
            <div className="event-content">
              <h3 className="event-title">Thai Pongal Festival</h3>
              <p className="event-desc">
                Celebrate the Tamil harvest festival with traditional cooking, cultural performances, and community gathering.
              </p>
              
              {/* Meta details */}
              <div className="event-meta-info">
                <div className="event-meta-item">
                  <svg className="event-meta-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                    <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                    <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>January 14, 2026</span>
                </div>
                
                <div className="event-meta-item">
                  <svg className="event-meta-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="12 6 12 12 16 14" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>10:00 AM - 4:00 PM</span>
                </div>

                <div className="event-meta-item">
                  <svg className="event-meta-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>STF Community Center</span>
                </div>
              </div>

              {/* Register CTA Button */}
              <a href="#register" className="event-register-btn">
                <span>Register Now</span>
                <svg className="event-btn-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.33331 8H12.6666M12.6666 8L8.66665 4M12.6666 8L8.66665 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Event Card 1: Tamil New Year Celebration */}
          <div className="event-card" data-node-id="event-card-1">
            {/* Event Image Column (Left) */}
            <div className="event-img-box">
              <img src="assets/9.jpg" alt="Tamil New Year Celebration" className="event-img" />
              <div className="event-type-badge">
                <span>Cultural Event</span>
              </div>
            </div>

            {/* Event Details Content Column (Right) */}
            <div className="event-content">
              <h3 className="event-title">Tamil New Year Celebration</h3>
              <p className="event-desc">
                Welcome the Tamil New Year with traditional rituals, music performances, and cultural activities for all ages.
              </p>
              
              {/* Meta details */}
              <div className="event-meta-info">
                <div className="event-meta-item">
                  <svg className="event-meta-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                    <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                    <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>April 14, 2026</span>
                </div>
                
                <div className="event-meta-item">
                  <svg className="event-meta-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="12 6 12 12 16 14" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>11:00 AM - 5:00 PM</span>
                </div>

                <div className="event-meta-item">
                  <svg className="event-meta-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>STF Community Center</span>
                </div>
              </div>

              {/* Register CTA Button */}
              <a href="#register" className="event-register-btn">
                <span>Register Now</span>
                <svg className="event-btn-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.33331 8H12.6666M12.6666 8L8.66665 4M12.6666 8L8.66665 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Event Card 2: Annual Talent Showcase */}
          <div className="event-card" data-node-id="event-card-2">
            {/* Event Image Column (Left) */}
            <div className="event-img-box">
              <img src="assets/1.jpg" alt="Annual Talent Showcase" className="event-img" />
              <div className="event-type-badge">
                <span>Showcase</span>
              </div>
            </div>

            {/* Event Details Content Column (Right) */}
            <div className="event-content">
              <h3 className="event-title">Annual Talent Showcase</h3>
              <p className="event-desc">
                Students showcase their Tamil language, dance, music, and artistic talents in a grand community celebration.
              </p>
              
              {/* Meta details */}
              <div className="event-meta-info">
                <div className="event-meta-item">
                  <svg className="event-meta-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                    <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                    <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>June 20, 2026</span>
                </div>
                
                <div className="event-meta-item">
                  <svg className="event-meta-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="12 6 12 12 16 14" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>6:00 PM - 9:00 PM</span>
                </div>

                <div className="event-meta-item">
                  <svg className="event-meta-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>Performing Arts Theater</span>
                </div>
              </div>

              {/* Register CTA Button */}
              <a href="#register" className="event-register-btn">
                <span>Register Now</span>
                <svg className="event-btn-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.33331 8H12.6666M12.6666 8L8.66665 4M12.6666 8L8.66665 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
