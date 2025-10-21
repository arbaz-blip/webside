import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import coverImage from '../../assets/images/real-time-order-tracking-dashboard-supply-chain-cinergie-digital.png';
import Connect from 'components/shared/Connect';
const Resources = () => {
  return (
    <>
      <button id="scrollTopBtn" title="Go to top">↑</button>

      <section className="resources-section">
        <div className="resources-container">
          <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>Explore Cinergie Digital’s Blogs, Guides & Case Studies</h2>
          <div className="resources-grid">
            <div className="left-column">
              <div className="resource-card">
                <div className="card-image">
                  <img src={coverImage} alt="Blog post on digital transformation strategies" />
                  <div className="metric-badge">TOP RATED</div>
                </div>
                <div className="resource-content">
  <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>Digital Transformation Strategies</h3>
  <p style={{ fontFamily: 'Garet' }}>Learn how to implement effective digital transformation strategies for your enterprise.</p>
  
  <div className="resource-footer">
    <a href="/real-time-order-stream" className="cta-link" style={{ fontFamily: 'Garet' }}>Read More →</a>
    
    <div className="labels">
      <span className="label">#AI</span>
      <span className="label">#Analytics</span>
      <span className="label">#SupplyChain</span>
    </div>
  </div>
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