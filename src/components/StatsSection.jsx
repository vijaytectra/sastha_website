import React from "react";
import "./StatsSection.css";

export default function StatsSection() {
  const stats = [
    {
      number: "2,500+",
      title: "Students Educated",
      description: "Tamil language learners across all age groups and proficiency levels",
      colorClass: "stat-color-green"
    },
    {
      number: "150+",
      title: "Dedicated Volunteers",
      description: "Community members committed to preserving Tamil heritage",
      colorClass: "stat-color-rust"
    },
    {
      number: "75+",
      title: "Cultural Events",
      description: "Annual celebrations fostering cultural pride and connection",
      colorClass: "stat-color-green"
    },
    {
      number: "25+",
      title: "Years of Excellence",
      description: "Trusted foundation in Tamil language and cultural education",
      colorClass: "stat-color-rust"
    }
  ];

  return (
    <section className="stats-section" data-node-id="1:61">
      <div className="stats-container" data-node-id="1:62">
        {/* Header Block */}
        <div className="stats-header" data-node-id="1:63">
          <span className="stats-badge" data-node-id="1:64">Our Impact</span>
          <h2 className="stats-heading" data-node-id="1:65">
            <span data-node-id="1:66">Building a Stronger Community</span>
          </h2>
          <p className="stats-subtitle" data-node-id="1:67">
            Through dedication and cultural commitment, we've created lasting impact in Tamil education and community engagement.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid" data-node-id="1:68">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card" data-node-id={`card-${idx}`}>
              <div className={`stat-number ${stat.colorClass}`}>{stat.number}</div>
              <h3 className="stat-card-title">{stat.title}</h3>
              <p className="stat-card-desc">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
