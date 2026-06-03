import React from "react";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <section className="test-section" id="stories" data-node-id="1:435">
      <div className="test-container" data-node-id="1:436">
        
        {/* Header Block */}
        <div className="test-header" data-node-id="1:437">
          <span className="test-badge" data-node-id="1:438">Community Voices</span>
          <h2 className="test-heading" data-node-id="1:439">
            <span data-node-id="1:440">Stories of Impact & Connection</span>
          </h2>
          <p className="test-subtitle" data-node-id="1:441">
            Hear from families, students, and volunteers whose lives have been enriched by the STF community.
          </p>
        </div>

        {/* Testimonials Card Grid */}
        <div className="test-cards-grid" data-node-id="1:442">
          
          {/* Card 0: Priya Ramanathan */}
          <div className="test-card" data-node-id="test-card-0">
            {/* Quote overlapping icon */}
            <div className="test-quote-icon-box" data-node-id="quote-icon-0">
              <svg className="test-quote-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 21v-7.391c0-5.704 3.748-9.762 9-10.361v3.254c-3.193.201-4.702 1.954-5.002 5.25H23v9.248h-8.983zm-12 0v-7.391c0-5.704 3.748-9.762 9-10.361v3.254c-3.193.201-4.702 1.954-5.002 5.25H11v9.248H2.017z"/>
              </svg>
            </div>

            {/* Quote paragraph body */}
            <div className="test-card-body">
              <p className="test-quote-text">
                "STF has been instrumental in helping my children maintain their connection to Tamil culture. The teachers are passionate, and the community is like family."
              </p>
              
              {/* Author profile row */}
              <div className="test-profile">
                <div className="test-avatar-box">
                  <img src="assets/18.jpg" alt="Priya Ramanathan" className="test-avatar-img" />
                </div>
                <div className="test-profile-texts">
                  <h4 className="test-profile-name">Priya Ramanathan</h4>
                  <p className="test-profile-role">Parent of Two Students</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 1: Kumar Selvam */}
          <div className="test-card" data-node-id="test-card-1">
            {/* Quote overlapping icon */}
            <div className="test-quote-icon-box" data-node-id="quote-icon-1">
              <svg className="test-quote-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 21v-7.391c0-5.704 3.748-9.762 9-10.361v3.254c-3.193.201-4.702 1.954-5.002 5.25H23v9.248h-8.983zm-12 0v-7.391c0-5.704 3.748-9.762 9-10.361v3.254c-3.193.201-4.702 1.954-5.002 5.25H11v9.248H2.017z"/>
              </svg>
            </div>

            {/* Quote paragraph body */}
            <div className="test-card-body">
              <p className="test-quote-text">
                "As a volunteer teacher at STF for over 10 years, I've witnessed countless students grow in language proficiency and cultural pride. It's truly rewarding work."
              </p>
              
              {/* Author profile row */}
              <div className="test-profile">
                <div className="test-avatar-box">
                  <img src="assets/13.jpg" alt="Kumar Selvam" className="test-avatar-img" />
                </div>
                <div className="test-profile-texts">
                  <h4 className="test-profile-name">Kumar Selvam</h4>
                  <p className="test-profile-role">Volunteer Teacher</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Ananya Krishnan */}
          <div className="test-card" data-node-id="test-card-2">
            {/* Quote overlapping icon */}
            <div className="test-quote-icon-box" data-node-id="quote-icon-2">
              <svg className="test-quote-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 21v-7.391c0-5.704 3.748-9.762 9-10.361v3.254c-3.193.201-4.702 1.954-5.002 5.25H23v9.248h-8.983zm-12 0v-7.391c0-5.704 3.748-9.762 9-10.361v3.254c-3.193.201-4.702 1.954-5.002 5.25H11v9.248H2.017z"/>
              </svg>
            </div>

            {/* Quote paragraph body */}
            <div className="test-card-body">
              <p className="test-quote-text">
                "Learning Tamil at STF gave me confidence in my identity and connected me to my roots. I'm now pursuing Tamil literature in college thanks to this foundation."
              </p>
              
              {/* Author profile row */}
              <div className="test-profile">
                <div className="test-avatar-box">
                  <img src="assets/12.jpg" alt="Ananya Krishnan" className="test-avatar-img" />
                </div>
                <div className="test-profile-texts">
                  <h4 className="test-profile-name">Ananya Krishnan</h4>
                  <p className="test-profile-role">Former Student, Current Volunteer</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
