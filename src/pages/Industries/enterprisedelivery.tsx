// src/pages/case-studies/enterprise-delivery.tsx
import React from 'react';
import { Navbar2 } from 'components/navbars';

import enterpriseHero from '../../assets/images/enterprise-delivery-case-study-hero.jpg.jpg';
import enterpriseQa from '../../assets/images/enterprise-qa-devops.jpg.jpg';
import enterprisePods from '../../assets/images/enterprise-embedded-pods.jpg.jpg';
import enterpriseGov from '../../assets/images/enterprise-governance.jpg.jpg';
import Footer from 'pages/Home/Footer';
// import enterpriseFooter from '../../assets/images/case-studies/enterprise-delivery-cinergiedigital.jpg'; // Uncomment if footer image is available

import "./enterprise-delivery.css";

const EnterpriseDeliveryCaseStudy = () => {
  return (
    
    <div className="case-study-page">
  <Navbar2
      isSticky={true}
      hideSearch

    />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Enterprise Delivery — DevOps Automation for Predictable Releases</h1>
        </div>
        <img 
          src={enterpriseHero} 
          alt="Enterprise Delivery Hero Image" 
          className="hero-image" 
         
        />
      </section>


      {/* Metrics Section */}
      <section className="metrics-section">
        <div className="metrics-container">
          <div className="metrics-left">
            <h1 className="metric-item">2× FASTER RELEASES.</h1>
            <h1 className="metric-item">PREDICTABLE OUTCOMES.</h1>
            <h1 className="metric-item">AUDIT-READY.</h1>
            <p className="metrics-subtext">We make enterprise delivery predictable and scalable - cutting release risk, improving governance, and accelerating outcomes.</p>
          </div>
          <div className="metrics-right">
            <p className="metrics-description">Large enterprises demand reliable, compliant IT delivery. Cinergie Digital enables faster releases, operational confidence, and measurable ROI.</p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="challenge-section">
        <div className="container">
          <h2>Challenge</h2>
          <p>Enterprises face growing complexity and risk:</p>
          <ul>
            <li>Manual QA slowed enterprise release cycles.</li>
            <li>Siloed teams lacked shared accountability.</li>
            <li>Governance processes delayed audits.</li>
          </ul>
        </div>
      </section>

<section className="approach-blocks-section">
  <div className="container">
    <div className="approach-grid">
      
      {/* Block 1 - Image on Right */}
      <div className="approach-block">
        <div className="approach-content">
          <h3>QA & DevOps Automation</h3>
          <ul>
            <li>CI/CD pipelines with quality gates.</li>
            <li>Automated testing & release dashboards.</li>
            <li>Predictable release cycles.</li>
          </ul>
        </div>
        <div className="approach-image">
          <img src={enterpriseQa} alt="QA and DevOps automation dashboard" />
        </div>
      </div>

      {/* Block 2 - Image on Left */}
      <div className="approach-block">
        <div className="approach-content">
          <h3>Embedded Pods</h3>
          <ul>
            <li>Shared accountability with clients.</li>
            <li>Cross-functional collaboration.</li>
            <li>Faster feedback loops.</li>
          </ul>
        </div>
        <div className="approach-image">
          <img src={enterprisePods} alt="Embedded pods dashboard interface" />
        </div>
      </div>

      {/* Block 3 - Image on Right */}
      <div className="approach-block">
        <div className="approach-content">
          <h3>Governance Enablement</h3>
          <ul>
            <li>Audit-ready documentation.</li>
            <li>Transparent delivery processes.</li>
            <li>Compliance with enterprise standards.</li>
          </ul>
        </div>
        <div className="approach-image">
          <img src={enterpriseGov} alt="Governance automation workflow" />
        </div>
      </div>

    </div>
  </div>
</section>
{/* Proof of Value Section */}
<section className="proof-section">
  <h2>Proof of value, not just promises!</h2>
  <div className="proof-grid">
    <div className="proof-item bugs-card">
      <div className="icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h3>2× FASTER RELEASES</h3>
      <p>CI/CD pipelines doubled delivery speed</p>
    </div>
    <div className="proof-item releases-card">
      <div className="icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
        </svg>
      </div>
      <h3>70% FEWER DEFECTS</h3>
      <p>Automated testing reduced defects</p>
    </div>
    <div className="proof-item lead-card">
      <div className="icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
      <h3>AUDIT-READY GOVERNANCE</h3>
      <p>Transparent processes for compliance</p>
    </div>
    <div className="proof-item reporting-card">
      <div className="icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </div>
      <h3>SHARED ACCOUNTABILITY</h3>
      <p>Embedded pods improved collaboration</p>
    </div>
    <div className="proof-item errors-card">
      <div className="icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>
      <h3>HIGHER RELEASE PREDICTABILITY</h3>
      <p>Quality gates ensured consistency</p>
    </div>
    <div className="proof-item audit-card">
      <div className="icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
      </div>
      <h3>CUT RELEASE RISK</h3>
      <p>Governance enablement minimized risks</p>
    </div>
  </div>
</section>
      {/* Why It Matters Section */}
<section className="why-matters-section">
  <div className="container">
    <h2>Why It Matters for Enterprise Leaders</h2>
    <p>For enterprises, release risk equals business risk.</p>
    <p className="enables">Cinergie Digital helps CIOs/CTOs to:</p>
    <ul>
      <li>Cut release cycles in half</li>
      <li>Build audit-ready delivery confidence</li>
      <li>Scale IT with predictable ROI</li>
    </ul>
  </div>
</section>

      {/* Outcomes Section */}
      <section className="outcomes-section">
        <div className="container">
          <h2>Outcomes That Matter</h2>
          <ul>
            <li>Faster release cycles</li>
            <li>Audit-ready governance</li>
           
           <li> Shared accountability </li> 

<li>Fewer defects</li> 

<li>Predictable outcomes</li> 

<li>Scale IT with predictable ROI</li>
          </ul>
        </div>
      </section>
{/* CTA Section */}
<section className="cta-section">
  <div className="cta-container">
    <div className="cta-card">
      <h2>Want predictable delivery and audit-ready outcomes?</h2>
      <p>See how Cinergie Digital helps enterprise leaders cut risk and scale IT.</p>
      <div className="cta-buttons">
        <a href="#" className="cta-btn cta-btn-primary">Get My ROI Audit →</a>
        <a href="#" className="cta-btn cta-btn-secondary">See All Industries →</a>
      </div>
    </div>
  </div>
</section>

      {/* Footer Section */}
      {/* Uncomment if footer image is available
      <footer
        className="footer-section"
        style={{
          backgroundImage: `url(${enterpriseFooter})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="overlay"></div>
        <div className="footer-content">
          <p>Enterprise Delivery IT case study footer background image</p>
        </div>
      </footer>
      */}


          

            {/* <Connect
                title="Get In Touch"
                description="Get in touch with us today to learn more about how we can help you succeed with these digital capabilities through our solutions and services."
            /> */}

            <Footer />

    </div>
    
  );
};

export default EnterpriseDeliveryCaseStudy;