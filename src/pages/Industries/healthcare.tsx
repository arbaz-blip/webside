// src/pages/case-studies/healthcare.tsx
import React from 'react';
import { Navbar2 } from 'components/navbars';

import healthcareHero from '../../assets/images/healthcare-case-study-hero.jpg.jpg';
import healthcareAi from '../../assets/images/healthcare-ai-analytics.jpg.jpg';
import healthcareSecure from '../../assets/images/healthcare-secure-data.jpg.jpg';
import healthcarePatient from '../../assets/images/healthcare-patient-engagement.jpg.jpg';
import Footer from 'pages/Home/Footer';
// import healthcareFooter from '../../assets/images/case-studies/healthcare-cinergiedigital.jpg'; // Uncomment if footer image is available

import "./healthcare.css";

const HealthcareCaseStudy = () => {
  return (
    
    <div className="case-study-page">
  <Navbar2
        isSticky={true}
        hideSearch
  
      />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Healthcare — AI-Driven Analytics for Better Outcomes</h1>
        </div>
        <img 
          src={healthcareHero} 
          alt="Healthcare Hero Image" 
          className="hero-image" 
         
        />
      </section>


      {/* Metrics Section */}
      <section className="metrics-section">
        <div className="metrics-container">
          <div className="metrics-left">
            <h1 className="metric-item">180% ROI.</h1>
            <h1 className="metric-item">3× FASTER REPORTING.</h1>
            <h1 className="metric-item">AI-DRIVEN DECISIONS.</h1>
            <p className="metrics-subtext">We make healthcare IT secure and insightful - unlocking ROI, improving compliance, and enabling better patient outcomes.</p>
          </div>
          <div className="metrics-right">
            <p className="metrics-description">Healthcare providers demand agility, compliance, and secure data platforms. Cinergie Digital delivers analytics, automation, and patient engagement solutions.</p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="challenge-section">
        <div className="container">
          <h2>Challenge</h2>
          <p>Healthcare providers face growing complexity and risk:</p>
          <ul>
            <li>Fragmented EHR/EMR systems slowed patient response.</li>
            <li>Manual reporting delayed insights.</li>
            <li>Compliance audits consumed costly resources.</li>
          </ul>
        </div>
      </section>

<section className="approach-blocks-section">
  <div className="container">
    <div className="approach-grid">
      
      {/* Block 1 - Image on Right */}
      <div className="approach-block">
        <div className="approach-content">
          <h3>AI-Driven Analytics</h3>
          <ul>
            <li>Unified patient & ops data sources.</li>
            <li>Predictive analytics for care efficiency.</li>
            <li>Automated dashboards for leadership.</li>
          </ul>
        </div>
        <div className="approach-image">
          <img src={healthcareAi} alt="AI-driven analytics dashboard" />
        </div>
      </div>

      {/* Block 2 - Image on Left */}
      <div className="approach-block">
        <div className="approach-content">
          <h3>Secure Data Platforms</h3>
          <ul>
            <li>HIPAA/GDPR compliant infrastructure.</li>
            <li>Encryption & access controls.</li>
            <li>Regular compliance reviews.</li>
          </ul>
        </div>
        <div className="approach-image">
          <img src={healthcareSecure} alt="Secure data platform interface" />
        </div>
      </div>

      {/* Block 3 - Image on Right */}
      <div className="approach-block">
        <div className="approach-content">
          <h3>Patient Engagement Modernisation</h3>
          <ul>
            <li>Digital portals for patient interaction.</li>
            <li>Automated communication workflows.</li>
            <li>Improved care coordination.</li>
          </ul>
        </div>
        <div className="approach-image">
          <img src={healthcarePatient} alt="Patient engagement workflow" />
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
          <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      </div>
      <h3>180% ROI IN 11 WEEKS</h3>
      <p>Analytics accelerated value delivery</p>
    </div>
    <div className="proof-item releases-card">
      <div className="icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      </div>
      <h3>3× FASTER REPORTING</h3>
      <p>Automation sped up insights</p>
    </div>
    <div className="proof-item lead-card">
      <div className="icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
      <h3>FULL COMPLIANCE READINESS</h3>
      <p>Secure platforms ensured audits</p>
    </div>
    <div className="proof-item reporting-card">
      <div className="icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </div>
      <h3>IMPROVED PATIENT ENGAGEMENT</h3>
      <p>Portals boosted interaction</p>
    </div>
    <div className="proof-item errors-card">
      <div className="icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
      </div>
      <h3>SECURE, UNIFIED DATA ACCESS</h3>
      <p>Encryption protected information</p>
    </div>
    <div className="proof-item audit-card">
      <div className="icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
        </svg>
      </div>
      <h3>AI-DRIVEN DECISIONS</h3>
      <p>Predictive models guided care</p>
    </div>
  </div>
</section>
      {/* Why It Matters Section */}
<section className="why-matters-section">
  <div className="container">
    <h2>Why It Matters for Healthcare Leaders</h2>
    <p>In healthcare, secure data and fast insights drive outcomes.</p>
    <p className="enables">Cinergie Digital enables CIOs and CMOs to:</p>
    <ul>
      <li>Improve patient outcomes with analytics</li>
      <li>Ensure compliance with regulators</li>
      <li>Show ROI in weeks, not years</li>
    </ul>
  </div>
</section>

      {/* Outcomes Section */}
      <section className="outcomes-section">
        <div className="container">
          <h2>Outcomes That Matter</h2>
          <ul>
            <li>Faster reporting cycles</li>
            <li>Audit-ready compliance</li>
           
           <li> Improved patient engagement </li> 

<li>Secure infrastructure</li> 

<li>ROI acceleration</li> 

<li>AI-driven decisions</li>
          </ul>
        </div>
      </section>
{/* CTA Section */}
<section className="cta-section">
  <div className="cta-container">
    <div className="cta-card">
      <h2>Want secure data and insightful analytics?</h2>
      <p>See how Cinergie Digital helps healthcare leaders improve outcomes and compliance.</p>
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
          backgroundImage: `url(${healthcareFooter})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="overlay"></div>
        <div className="footer-content">
          <p>Healthcare IT case study footer background image</p>
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

export default HealthcareCaseStudy;