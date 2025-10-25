import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import coverImage from '../../assets/images/real-time-order-tracking-dashboard-supply-chain-cinergie-digital.png';
import Picture1 from '../../assets/images/Picture1.png';
import Picture2 from '../../assets/images/Picture2.png';
import Picture3 from '../../assets/images/Picture3.png';
import Connect from 'components/shared/Connect';

const Resources = () => {
  const teamResources = [
    {
      slug: "real-time-order-stream",
      title: "Digital Transformation Strategies",
      desc: "Learn how to implement effective digital transformation strategies for your enterprise. Transform your business into a smarter, data-driven enterprise ready for the digital future.",
      img: coverImage,
      alt: "Blog post on digital transformation strategies",
      badge: "TOP RATED",
      tags: ["#AI", "#Analytics", "#SupplyChain"]
    },
    {
      slug: "reimagining-loan-origination",
      title: "Reimagining Loan Origination with Hyperautomation",
      desc: "Revolutionizing loan origination with hyperautomation for speed & precision",
      img: Picture1,
      alt: "Cinergie Digital AI-powered fraud detection dashboard analyzing transactions for anomalies.",
      badge: "FEATURED",
      tags: ["#Banking Automation" ]
    },
    {
      slug: "Predictive-Fraud-Detection",
      title: "Predictive Fraud Detection with AI ",
      desc: "Leverage machine learning to identify suspicious patterns, minimize risks, and protect your business in real time.",
      img: Picture2,
      alt: "Cinergie Digital AI-powered fraud detection dashboard analyzing transactions for anomalies.",
      badge: "TRENDING",
      tags: ["#Machine Learning" ]
    },
    {
      slug: "Regulatory-Reporting-Automation",
      title: "Regulatory Reporting Automation for Compliance Teams",
      desc: "Streamline compliance with Regulatory Reporting Automation designed for modern compliance teams. Automate data collection, validation, and submission to ensure accuracy, transparency, and timely regulatory reporting.",
      img: Picture3,
      alt: "Cinergie Digital compliance automation dashboard generating real-time regulatory reports.",
      badge: "NEW",
      tags: ["#RegTech", "#Audit Readiness", "#RiskMgmt"]
    }
  ];

  return (
    <>
      <button id="scrollTopBtn" title="Go to top">↑</button>

      <section className="resources-section">
        <div className="resources-container">
          <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>Explore Cinergie Digital's Blogs, Guides & Case Studies</h2>
          
          {/* Row 1: Long left, Small right */}
          <div className="services-grid">
            <div className="left-column">
              <Link to={`/${teamResources[0].slug}`} className="resource-card-link">
                <div className="resource-card">
                  <div className="card-image">
                    <img src={teamResources[0].img} alt={teamResources[0].alt} />
                    <div className="metric-badge">{teamResources[0].badge}</div>
                  </div>
                  <div className="resource-content">
                    <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>{teamResources[0].title}</h3>
                    <p style={{ fontFamily: 'Garet' }}>{teamResources[0].desc}</p>
                    
                    <div className="resource-footer">
                      <span className="cta-link" style={{ fontFamily: 'Garet' }}>Read More →</span>
                      
                      <div className="labels">
                        {teamResources[0].tags.map((tag, i) => (
                          <span key={i} className="label">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="right-column">
              <Link to={`/${teamResources[1].slug}`} className="resource-card-link">
                <div className="resource-card">
                  <div className="card-image">
                    <img src={teamResources[1].img} alt={teamResources[1].alt} />
                    <div className="metric-badge">{teamResources[1].badge}</div>
                  </div>
                  <div className="resource-content">
                    <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>{teamResources[1].title}</h3>
                    <p style={{ fontFamily: 'Garet' }}>{teamResources[1].desc}</p>
                    
                    <div className="resource-footer">
                      <span className="cta-link" style={{ fontFamily: 'Garet' }}>Read More →</span>
                      
                      <div className="labels">
                        {teamResources[1].tags.map((tag, i) => (
                          <span key={i} className="label">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Row 2: Small left, Long right (FLIPPED) */}
          <div className="services-grid services-grid-flipped">
            <div className="left-column">
              <Link to={`/${teamResources[2].slug}`} className="resource-card-link">
                <div className="resource-card">
                  <div className="card-image">
                    <img src={teamResources[2].img} alt={teamResources[2].alt} />
                    <div className="metric-badge">{teamResources[2].badge}</div>
                  </div>
                  <div className="resource-content">
                    <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>{teamResources[2].title}</h3>
                    <p style={{ fontFamily: 'Garet' }}>{teamResources[2].desc}</p>
                    
                    <div className="resource-footer">
                      <span className="cta-link" style={{ fontFamily: 'Garet' }}>Read More →</span>
                      
                      <div className="labels">
                        {teamResources[2].tags.map((tag, i) => (
                          <span key={i} className="label">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="right-column">
              <Link to={`/${teamResources[3].slug}`} className="resource-card-link">
                <div className="resource-card">
                  <div className="card-image">
                    <img src={teamResources[3].img} alt={teamResources[3].alt} />
                    <div className="metric-badge">{teamResources[3].badge}</div>
                  </div>
                  <div className="resource-content">
                    <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>{teamResources[3].title}</h3>
                    <p style={{ fontFamily: 'Garet' }}>{teamResources[3].desc}</p>
                    
                    <div className="resource-footer">
                      <span className="cta-link" style={{ fontFamily: 'Garet' }}>Read More →</span>
                      
                      <div className="labels">
                        {teamResources[3].tags.map((tag, i) => (
                          <span key={i} className="label">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resources;