import React from 'react';
import "./styles.css";
import bsfiImg from '../../assets/images/bsfi-data-migration-faster-lead-response.jpg.jpg';
import transportImg from '../../assets/images/transport-logistics-audit-compliance.jpg.jpg';
import healthcareImg from '../../assets/images/healthcare-ai-analytics-roi.jpg.jpg';
import retailImg from '../../assets/images/retail-ecommerce-go-live-10-weeks.jpg.jpg';
import enterpriseImg from '../../assets/images/enterprise-devops-faster-releases.jpg.jpg';

const Industries = () => {
  const industries = [
    {
      title: "BFSI",
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
    {
      title: "Retail & Ecommerce",
      desc: [
        "Omnichannel Experience & Unified Customer View",
        "Cloud-Native E-Commerce Platforms",
        "Personalization & Recommendation Engines",
        "Inventory Optimization & Demand Forecasting",
      ],
      img: retailImg,
      alt: "Retail and ecommerce IT solutions for ERP and cloud platforms",
      badge: "GO LIVE IN 10 WEEKS",
    },
    {
      title: "Enterprise Delivery",
      desc: [
        "DevOps Automation & CI/CD Pipelines",
        "Embedded Engineering Pods & Shared Accountability",
        "Audit-Ready Governance & Compliance",
        "Release Confidence & Operational Excellence",
      ],
      img: enterpriseImg,
      alt: "Enterprise IT delivery and modernization services",
      badge: "85% ADOPTION",
    },
  ];

  return (
    <>
      <button id="scrollTopBtn" title="Go to top">↑</button>

      <section className="resources-section">
        <div className="resources-container">
          <h2>Empower Your Industry with Cinergie’s Enterprise IT Services</h2>
          <p className="hero-subtext">
            Cinergie Digital partners with enterprises across banking, logistics, healthcare, retail, and beyond - delivering tailored IT solutions that drive measurable outcomes.
          </p>
          <div className="resources-grid">
            <div className="left-column">
              {industries.slice(0, 3).map((industry, index) => (
                <div key={index} className="resource-card">
                  <div className="card-image">
                    <img src={industry.img} alt={industry.alt} />
                    <div className="metric-badge">{industry.badge}</div>
                  </div>
                  <div className="resource-content">
                    <h3>{industry.title}</h3>
                    <ul>
                      {industry.desc.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <a href="#" className="cta-link">Learn More →</a>
                  </div>
                </div>
              ))}
            </div>
            <div className="right-column">
              {industries.slice(3, 5).map((industry, index) => (
                <div key={index + 3} className="resource-card">
                  <div className="card-image">
                    <img src={industry.img} alt={industry.alt} />
                    <div className="metric-badge">{industry.badge}</div>
                  </div>
                  <div className="resource-content">
                    <h3>{industry.title}</h3>
                    <ul>
                      {industry.desc.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <a href="#" className="cta-link">Learn More →</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;