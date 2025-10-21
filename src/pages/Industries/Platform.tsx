// src/pages/case-studies/index.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css";
import bsfiImg from '../../assets/images/bsfi-data-migration-faster-lead-response.jpg.png';
import transportImg from '../../assets/images/transport-logistics-audit-compliance.jpg.png';
import healthcareImg from '../../assets/images/healthcare-ai-analytics-roi.jpg.png';
import retailImg from '../../assets/images/retail-ecommerce-go-live-10-weeks.jpg.png';
import enterpriseImg from '../../assets/images/enterprise-devops-faster-releases.jpg.png';

const CaseStudies = () => {
  const caseStudies = [
    {
      slug: "bfsi",
      title: "Banking, Financial Services & Insurance",
      desc: [
        "Banking & Financial Services",
        "Payment Processing & Fraud Detection",
        "Regulatory Compliance & Audit Automation",
        "Customer Onboarding & Identity Verification",
      ],
      img: bsfiImg,
      alt: "IT services for banking and financial institutions",
      badge: "180% ROI",
    },
     {
      slug: "retailecommerce",
      title: "Retail & Ecommerce",
      desc: [
        "Omnichannel Experience & Unified Customer View",
        "Cloud-Native E-Commerce Platforms",
      ],
      img: retailImg,
      alt: "Retail and ecommerce IT solutions for ERP and cloud platforms",
      badge: "GO LIVE IN 10 WEEKS",
    },
    {
      slug: "enterprisedelivery",
      title: "Enterprise Delivery",
      desc: [
        "DevOps Automation & CI/CD Pipelines",
        "Embedded Engineering Pods & Shared Accountability",
      ],
      img: enterpriseImg,
      alt: "Enterprise IT delivery and modernization services",
      badge: "85% ADOPTION",
    },
  {
      slug: "transportlogistics",
      title: "Transport & Logistics",
      desc: [
        "Fleet Management & Route Optimization",
        "Supply Chain Visibility & Predictive Analytics",
        "ERP-CRM Integration & RPA Automation",
        "Real-Time Tracking & IoT Solutions",
      ],
      img: transportImg,
      alt: "IT solutions for transport and logistics enterprises",
      badge: "+90% AUDIT COMPLIANCE",
    },
    {
      slug: "healthcare",
      title: "Healthcare",
      desc: [
        "Patient Data Security & HIPAA/GDPR Compliance",
        "AI-Powered Diagnostics & Clinical Decision Support",
        "Telehealth & Remote Patient Monitoring",
        "Digital Health Portals & Patient Engagement",
      ],
      img: healthcareImg,
      alt: "Healthcare IT services with analytics and secure systems",
      badge: "+80% PREDICTIVE ACCURACY",
    },
  
  ];

  return (
    <>
      <button id="scrollTopBtn" title="Go to top">↑</button>
      <section className="services-section">
        <div className="services-container">
          <h2>Explore Our Case Studies</h2>
          <p className="hero-subtext">
            Discover how Cinergie Digital delivers transformative IT solutions across industries, driving measurable outcomes and business success.
          </p>
          
          {/* Row 1: Long left, Small right */}
          <div className="services-grid">
            <div className="left-column">
              <Link to={`/case-studies/${caseStudies[0].slug}`} className="resource-card-link">
                <div className="service-card">
                  <div className="card-image">
                    <img src={caseStudies[0].img} alt={caseStudies[0].alt} />
                    <div className="metric-badge">{caseStudies[0].badge}</div>
                  </div>
                  <div className="service-content">
                    <h3 className="fw-medium subheading">{caseStudies[0].title}</h3>
                    <ul>
                      {caseStudies[0].desc.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <span className="cta-link">Learn More →</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="right-column">
              <Link to={`/case-studies/${caseStudies[1].slug}`} className="resource-card-link">
                <div className="service-card">
                  <div className="card-image">
                    <img src={caseStudies[1].img} alt={caseStudies[1].alt} />
                    <div className="metric-badge">{caseStudies[1].badge}</div>
                  </div>
                  <div className="service-content">
                    <h3 className="fw-medium subheading">{caseStudies[1].title}</h3>
                    <ul>
                      {caseStudies[1].desc.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <span className="cta-link">Learn More →</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Row 2: Small left, Long right (FLIPPED) */}
          <div className="services-grid services-grid-flipped">
            <div className="left-column">
              <Link to={`/case-studies/${caseStudies[2].slug}`} className="resource-card-link">
                <div className="service-card">
                  <div className="card-image">
                    <img src={caseStudies[2].img} alt={caseStudies[2].alt} />
                    <div className="metric-badge">{caseStudies[2].badge}</div>
                  </div>
                  <div className="service-content">
                    <h3 className="fw-medium subheading">{caseStudies[2].title}</h3>
                    <ul>
                      {caseStudies[2].desc.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <span className="cta-link">Learn More →</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="right-column">
              <Link to={`/case-studies/${caseStudies[3].slug}`} className="resource-card-link">
                <div className="service-card">
                  <div className="card-image">
                    <img src={caseStudies[3].img} alt={caseStudies[3].alt} />
                    <div className="metric-badge">{caseStudies[3].badge}</div>
                  </div>
                  <div className="service-content">
                    <h3 className="fw-medium subheading">{caseStudies[3].title}</h3>
                    <ul>
                      {caseStudies[3].desc.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <span className="cta-link">Learn More →</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
{/* Row 3: Full width card spanning both columns */}
<div className="services-grid">
  <div className="full-width-card">
    <Link to={`/case-studies/${caseStudies[4].slug}`} className="resource-card-link">
      <div className="service-card">
        <div className="card-image">
          <img src={caseStudies[4].img} alt={caseStudies[4].alt} />
          <div className="metric-badge">{caseStudies[4].badge}</div>
        </div>
        <div className="service-content">
          <h3 className="fw-medium subheading">{caseStudies[4].title}</h3>
          <ul>
            {caseStudies[4].desc.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <span className="cta-link">Learn More →</span>
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

export default CaseStudies;