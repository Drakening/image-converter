import React from 'react';
import { FaCog, FaFileAlt, FaShieldAlt } from 'react-icons/fa';
import './Features.css';

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-cards">
        <div className="feature-card">
          <FaCog className="feature-icon" />
          <h3>High-Quality Results</h3>
          <p>Our conversions maintain the highest quality possible.</p>
        </div>
        <div className="feature-card">
          <FaFileAlt className="feature-icon" />
          <h3>Free and Unlimited</h3>
          <p>Enjoy free and unlimited file conversions anytime.</p>
        </div>
        <div className="feature-card">
          <FaShieldAlt className="feature-icon" />
          <h3>Security</h3>
          <p>Your files are safe and secure with our service.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
