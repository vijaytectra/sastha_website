import React from "react";
import "./ProgramsSection.css";

// Figma asset images with high quality online fallbacks

export default function ProgramsSection() {
  return (
    <section className="prog-section" id="programs" data-node-id="1:253">
      <div className="prog-container" data-node-id="1:254">
        
        {/* Header Container */}
        <div className="prog-header" data-node-id="1:255">
          <h2 className="prog-heading" data-node-id="1:256">Programs & Initiatives</h2>
          <p className="prog-subtitle" data-node-id="1:257">
            Making a difference through education, culture, and community service
          </p>
        </div>

        {/* Programs Grid Content */}
        <div className="prog-content-grid" data-node-id="1:258">
          
          {/* Left Column - Featured Big Card */}
          <div className="prog-featured-card" data-node-id="1:259">
            <div className="prog-card-bg">
              <img src="assets/15.jpg" alt="Traditional dance performance" className="prog-card-img" />
            </div>
            <div className="prog-card-overlay" data-node-id="1:261"></div>
            
            <div className="prog-featured-content" data-node-id="1:262">
              <div className="prog-featured-badge" data-node-id="1:263">
                <span data-node-id="1:264">Featured Program</span>
              </div>
              <h3 className="prog-featured-title" data-node-id="1:266">
                Thirukkural Competitions
              </h3>
              <p className="prog-featured-desc" data-node-id="1:268">
                Annual literary event celebrating Tamil wisdom through Thirukkural recitation and interpretation. Now in its 19th year.
              </p>
              
              <a href="#featured-details" className="prog-featured-btn" data-node-id="1:269">
                <span>Learn More</span>
                <svg className="prog-btn-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.16669 10H15.8334M15.8334 10L10.8334 5M15.8334 10L10.8334 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Stacked Secondary Cards */}
          <div className="prog-stacked-column">
            
            {/* Stacked Card 1: Basket Brigade */}
            <div className="prog-sub-card" data-node-id="1:274">
              <div className="prog-card-bg">
                <img src="assets/8.jpg" alt="Basket Brigade charity" className="prog-card-img" />
              </div>
              <div className="prog-card-overlay"></div>
              
              <div className="prog-sub-content" data-node-id="1:277">
                <h3 className="prog-sub-title" data-node-id="1:279">Basket Brigade</h3>
                <p className="prog-sub-desc" data-node-id="1:281">Community charitable giving initiative</p>
              </div>
            </div>

            {/* Stacked Card 2: Cultural Events */}
            <div className="prog-sub-card" data-node-id="1:282">
              <div className="prog-card-bg">
                <img src="assets/4.jpg" alt="Cultural events gathering" className="prog-card-img" />
              </div>
              <div className="prog-card-overlay"></div>
              
              <div className="prog-sub-content" data-node-id="1:285">
                <h3 className="prog-sub-title" data-node-id="1:287">Cultural Events</h3>
                <p className="prog-sub-desc" data-node-id="1:289">Celebrating Tamil festivals and traditions</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
