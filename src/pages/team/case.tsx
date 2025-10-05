import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import coverImage from '../../assets/images/real-time-order-tracking-dashboard-supply-chain-cinergie-digital.png';
const Resources = () => {
  return (
    <>
      <button id="scrollTopBtn" title="Go to top">↑</button>

      <section className="resources-section">
        <div className="resources-container">
          <h2>Explore Cinergie Digital’s Blogs, Guides & Case Studies</h2>
          <div className="resources-grid">
            <div className="left-column">
              <div className="resource-card">
                <div className="card-image">
                  <img src={coverImage} alt="Blog post on digital transformation strategies" />
                  <div className="metric-badge">TOP RATED</div>
                </div>
                <div className="resource-content">
                  <h3>Digital Transformation Strategies</h3>
                  <p>Learn ow to implement effective digital transformation strategies for your enterprise.</p>
                 <a href="/real-time-order-stream">Read More →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resources;
