import React from "react";
import "./DonationSection.css";

export default function DonationSection() {
  const tiers = [
    {
      amount: "$50",
      description: "Supports one student's materials"
    },
    {
      amount: "$100",
      description: "Sponsors cultural event supplies"
    },
    {
      amount: "$250",
      description: "Funds classroom resources"
    }
  ];

  return (
    <section className="donate-section" id="donate" data-node-id="1:491">
      <div className="donate-container" data-node-id="1:492">
        <div className="donate-inner" data-node-id="1:493">
          
          {/* Header Block */}
          <div className="donate-header" data-node-id="1:494">
            <h2 className="donate-heading" data-node-id="1:495">
              <span>Your gift writes the next chapter</span>
              <span>of our story</span>
            </h2>
          </div>

          {/* Description */}
          <div className="donate-description-box" data-node-id="1:496">
            <p className="donate-desc" data-node-id="1:497">
              Every contribution helps preserve our heritage, educate our youth, and strengthen our community bonds. Join us in making a lasting impact.
            </p>
          </div>

          {/* Tiers list container */}
          <div className="donate-tiers-list">
            {tiers.map((tier, idx) => (
              <div key={idx} className="donate-tier-card" data-node-id={`tier-card-${idx}`}>
                <div className="donate-tier-amount">{tier.amount}</div>
                <div className="donate-tier-desc">{tier.description}</div>
              </div>
            ))}
          </div>

          {/* Make Donation CTA */}
          <div className="donate-cta-box">
            <button className="donate-cta-btn" data-node-id="1:513">
              <svg className="donate-cta-icon icon-left" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
              <span>Make a Donation</span>
              <svg className="donate-cta-icon icon-right" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16669 10H15.8334M15.8334 10L10.8334 5M15.8334 10L10.8334 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Tax Status */}
          <p className="donate-tax-status" data-node-id="1:520">
            <span data-node-id="1:521">Tax-deductible • 501(c)(3) Non-Profit</span>
          </p>

        </div>
      </div>
    </section>
  );
}
