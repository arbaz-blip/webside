// src/pages/case-studies/index.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css";
import bsfiImg from '../../assets/images/bsfi-data-migration-faster-lead-response.jpg.jpg';
import transportImg from '../../assets/images/transport-logistics-audit-compliance.jpg.jpg';
import healthcareImg from '../../assets/images/healthcare-ai-analytics-roi.jpg.jpg';
import retailImg from '../../assets/images/retail-ecommerce-go-live-10-weeks.jpg.jpg';
import enterpriseImg from '../../assets/images/enterprise-devops-faster-releases.jpg.jpg';

const CaseStudies = () => {
  const caseStudies = [
    {
      slug: "bfsi",
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
    {
      slug: "retailecommerce",
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
      slug: "enterprisedelivery",
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

      <section className="resources-section bg-dark-blue">
        {/* Changed class name from resources-container to case-studies-container */}
        <div className="case-studies-container" style={{
                        
                        fontFamily: 'Garet'
                    }}>
          <h2>Explore Our Case Studies</h2>
          <p className="hero-subtext">
            Discover how Cinergie Digital delivers transformative IT solutions across industries, driving measurable outcomes and business success.
          </p>
          <div className="resources-grid">
            <div className="left-column">
              {caseStudies.slice(0, 3).map((study, index) => (
                <Link key={index} to={`/case-studies/${study.slug}`} className="resource-card-link">
                  <div className="resource-card">
                    <div className="card-image">
                      <img src={study.img} alt={study.alt} />
                      <div className="metric-badge">{study.badge}</div>
                    </div>
                    <div className="resource-content">
                      <h3>{study.title}</h3>
                      <ul>
                        {study.desc.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      <span className="cta-link">Learn More →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="right-column">
              {caseStudies.slice(3, 5).map((study, index) => (
                <Link key={index + 3} to={`/case-studies/${study.slug}`} className="resource-card-link">
                  <div className="resource-card">
                    <div className="card-image">
                      <img src={study.img} alt={study.alt} />
                      <div className="metric-badge">{study.badge}</div>
                    </div>
                    <div className="resource-content">
                      <h3>{study.title}</h3>
                      <ul>
                        {study.desc.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      <span className="cta-link">Learn More →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;