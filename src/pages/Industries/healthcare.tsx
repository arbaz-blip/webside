import React from 'react';
import { Navbar5 } from 'components/navbars';
import BackToTop from 'components/BackToTop';

import healthcareHero from '../../assets/images/healthcare-case-study-hero.jpg.png';
import healthcareAi from '../../assets/images/healthcare-ai-analytics.jpg.jpg';
import healthcareSecure from '../../assets/images/healthcare-secure-data.jpg.jpg';
import healthcarePatient from '../../assets/images/healthcare-patient-engagement.jpg.jpg';
import Footer from 'pages/Home/Footer';
import Conect from 'components/shared/conect';

// import healthcareFooter from '../../assets/images/case-studies/healthcare-cinergiedigital.jpg'; // Uncomment if footer image is available

import "./healthcare.css";

const HealthcareCaseStudy = () => {
  return (
    <>
      
            {/* Hero Section */}
            <section
                className="position-relative"
                style={{
                    height: '90vh',
                    
                    fontFamily: 'Garet'
                }}
            >
               {/* Background Image */}
<div
  className="hero-background-image position-absolute w-100 h-100"
  style={{
    backgroundImage: `url(${healthcareHero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    top: 0,
    left: 0,
    zIndex: -2,
  }}
></div>


                {/* Dark Overlay */}
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        // backgroundColor: 'rgba(0, 0, 0, 0.7)',
                       
                        fontFamily: 'Garet'
                    }}
                ></div>

                {/* Navbar */}
<Navbar5
      isSticky={true}
      hideSearch

    />

    {/* Hero Text on Left */}
    <div className="hero-text position-absolute top-50 start-0 translate-middle-y ms-4" style={{ zIndex: 1 }}>
      <h1 className="hero-heading" style={{ fontFamily: 'Garet', color: 'white', fontSize: '3.2rem', marginBottom: '1rem'      }}>Healthcare</h1>
      <p className="hero-description" style={{ fontFamily: 'Garet', color: 'white', fontSize: '1.125rem', maxWidth: '1000px' }}>
        AI-Driven Analytics for Better Outcomes - Making healthcare IT secure and insightful for improved patient care.
      </p>
    </div>
       
       </section>

      {/* Metrics Section */}
      <section className="metrics-section">
        <div className="metrics-container">
          <div className="metrics-left">
            <h2 className="metric-item" style={{ fontFamily: 'Garet',color: 'black' }}>180% ROI.</h2>
            <h2 className="metric-item" style={{ fontFamily: 'Garet',color: 'black' }}>3X FASTER REPORTING.</h2>
            <h2 className="metric-item" style={{ fontFamily: 'Garet',color: 'black' }}>AI-DRIVEN DECISIONS.</h2>
            <p className="metrics-descriptions" style={{ fontFamily: 'Garet' }}>We make healthcare IT secure and insightful - unlocking ROI, improving compliance, and enabling better patient outcomes.</p>
          </div>
          <div className="metrics-right">
            <p className="metrics-description" style={{ fontFamily: 'Garet' }}>Healthcare providers demand agility, compliance, and secure data platforms. Cinergie Digital delivers analytics, automation, and patient engagement solutions.</p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="challenge-section">
        <div className="container">
          <h2 style={{ fontFamily: 'Garet' }}>Challenge</h2>
          <p style={{ fontFamily: 'Garet' }}>Healthcare providers face growing complexity and risk:</p>
          <ul style={{ fontFamily: 'Garet' }}>
            
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
          <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>AI-Driven Analytics</h3>
          <ul style={{ fontFamily: 'Garet' }}>
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
          <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>Secure Data Platforms</h3>
          <ul style={{ fontFamily: 'Garet' }}>
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
          <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>Patient Engagement Modernisation</h3>
          <ul style={{ fontFamily: 'Garet' }}>
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
 <section className="proof-section">
        <h2>Proof of value, not just promises!</h2>
        
        <div className="proof-grid">
         
            <div className="proof-card">
                <div className="icon-circle green-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                </div>
                <div className="card-content">
                    <h3>180% ROI in 11 Weeks</h3>
                    <p>Analytics accelerated value delivery</p>
                </div>
            </div>

          
            <div className="proof-card">
                <div className="icon-circle yellow-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                    </svg>
                </div>
                <div className="card-content">
                    <h3>3× Faster Reporting</h3>
                    <p>Automation sped up insights</p>
                </div>
            </div>

            <div className="proof-card">
                <div className="icon-circle blue-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                </div>
                <div className="card-content">
                    <h3>Full Compliance Readiness</h3>
                    <p>Secure platforms ensured audits</p>
                </div>
            </div>

            <div className="proof-card">
                <div className="icon-circle indigo-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </div>
                <div className="card-content">
                    <h3>Improved Patient Engagement</h3>
                    <p>Portals boosted interaction</p>
                </div>
            </div>

          
            <div className="proof-card">
                <div className="icon-circle pink-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                </div>
                <div className="card-content">
                    <h3>Secure, Unified Data Access</h3>
                    <p>Encryption protected information</p>
                </div>
            </div>

            
            <div className="proof-card">
                <div className="icon-circle cyan-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
                    </svg>
                </div>
                <div className="card-content">
                    <h3>AI-Driven Decisions</h3>
                    <p>Predictive models guided care</p>
                </div>
            </div>
        </div>
    </section>

      {/* Why It Matters Section */}
<section className="why-matters-section">
  <div className="container">
    <h2 style={{ fontFamily: 'Garet' }}>Why It Matters for Healthcare Leaders</h2>
    <p style={{ fontFamily: 'Garet' }}>In healthcare, secure data and fast insights drive outcomes.</p>
    <p className="enables" style={{ fontFamily: 'Garet' }}>Cinergie Digital enables CIOs and CMOs to:</p>
    <ul style={{ fontFamily: 'Garet' }}>
      <li>Improve patient outcomes with analytics</li>
      <li>Ensure compliance with regulators</li>
      <li>Show ROI in weeks, not years</li>
    </ul>
  </div>
</section>

      {/* Outcomes Section */}
      <section className="outcomes-section">
        <div className="container">
          <h2 style={{ fontFamily: 'Garet' }}>Outcomes That Matter</h2>
          <ul style={{ fontFamily: 'Garet' }}>
            <li>Faster reporting cycles</li>
            <li>Audit-ready compliance</li>
           
           <li> Improved patient engagement </li> 

<li>Secure infrastructure</li> 

<li>ROI acceleration</li> 

<li>AI-driven decisions</li> 


          </ul>
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


          

            <Conect
                title="Want secure data and insightful analytics?"
                description="See how Cinergie Digital helps healthcare leaders improve outcomes and compliance."
            />
<BackToTop />
            <Footer />

    
  
    </>
  );
};

export default HealthcareCaseStudy;