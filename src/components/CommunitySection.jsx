import React from "react";
import "./CommunitySection.css";


export default function CommunitySection() {
  const highlights = [
    {
      title: "Education Excellence",
      desc: "Comprehensive Tamil curriculum for all ages",
      theme: "highlight-green",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
      )
    },
    {
      title: "Community Building",
      desc: "Strong family connections and support",
      theme: "highlight-rust",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21V19C22.9993 18.1137 22.6944 17.2528 22.135 16.56C21.5756 15.8672 20.7958 15.3853 19.92 15.19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M16 3.13C16.8844 3.32419 17.6719 3.81188 18.232 4.5126C18.7922 5.21332 19.0916 6.08412 19.08 6.98C19.0916 7.87588 18.7922 8.74668 18.232 9.4474C17.6719 10.1481 16.8844 10.6358 16 10.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Cultural Heritage",
      desc: "Authentic Tamil traditions and values",
      theme: "highlight-green",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        </svg>
      )
    },
    {
      title: "Recognized Programs",
      desc: "Award-winning educational initiatives",
      theme: "highlight-rust",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7"/>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
        </svg>
      )
    }
  ];

  return (
    <section className="comm-section" id="about" data-node-id="1:92">
      <div className="comm-container" data-node-id="1:93">
        <div className="comm-row" data-node-id="1:94">
          
          {/* Left Column: Visuals & Badge */}
          <div className="comm-visuals">
            <div className="comm-img-box" data-node-id="1:95">
              <img src="assets/13.jpg" alt="Students learning in class" className="comm-img" />
              <div className="comm-img-overlay" data-node-id="1:97"></div>
            </div>

            {/* Overlapping Badge */}
            <div className="comm-floating-badge" data-node-id="1:98">
              <span className="comm-badge-num" data-node-id="1:100">25+</span>
              <p className="comm-badge-text" data-node-id="1:102">
                Years of dedicated service to the Tamil community
              </p>
            </div>
          </div>

          {/* Right Column: Copy & Highlights */}
          <div className="comm-content" data-node-id="1:103">
            <span className="comm-section-badge" data-node-id="1:105">About Sangam Tamil Foundation</span>
            <h2 className="comm-heading" data-node-id="1:106">
              <span data-node-id="1:107">Connecting Generations Through Tamil Language and Culture</span>
            </h2>
            
            <div className="comm-paragraphs" data-node-id="1:108">
              <p className="comm-para" data-node-id="1:110">
                Sangam Tamil Foundation (STF) is a nonprofit organization dedicated to preserving and promoting Tamil language, literature, and cultural heritage. Founded over 25 years ago, STF has become a cornerstone of the Tamil community, serving families who wish to maintain their cultural identity while thriving in a diverse society.
              </p>
              <p className="comm-para" data-node-id="1:112">
                Our mission extends beyond language instruction. We create meaningful connections between generations, foster cultural pride, and build a supportive community where Tamil traditions, values, and heritage are celebrated and passed down to future generations.
              </p>
              <p className="comm-para" data-node-id="1:114">
                Through our accredited Tamil school, cultural programs, and community events, we provide comprehensive educational experiences that honor the richness of Tamil heritage while preparing students for a globalized world.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="comm-highlights-grid" data-node-id="1:115">
              {highlights.map((item, index) => (
                <div key={index} className="comm-highlight-item" data-node-id={`highlight-${index}`}>
                  <div className={`comm-highlight-icon-box ${item.theme}`}>
                    <div className="comm-icon-wrapper">{item.icon}</div>
                  </div>
                  <div className="comm-highlight-texts">
                    <h4 className="comm-highlight-title">{item.title}</h4>
                    <p className="comm-highlight-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
