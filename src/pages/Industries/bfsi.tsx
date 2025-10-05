// src/pages/case-studies/bfsi.tsx
import React from 'react';
import { Navbar2} from 'components/navbars';
import BackToTop from 'components/BackToTop';
import Connect from 'components/shared/Connect';
import bsfiHero from '../../assets/images/bsfi-case-study-hero.jpg.jpg';
import bsfiQa from '../../assets/images/bsfi-qa-automation.jpg.jpg';
import bsfiCrm from '../../assets/images/bsfi-crm-modernisation.jpg.jpg';
import bsfiFinance from '../../assets/images/bsfi-finance-automation.jpg.jpg';
import Footer from 'pages/Home/Footer';

// import bsfiFooter from '../../assets/images/case-studies/bsfi-case-study-cinergiedigital.jpg'; // Uncomment if footer image is available

import "./bsfi.css";

const BFSICaseStudy = () => {
  return (
    
    <div className="case-study-page">
             <Navbar2
    hideSearch
    fixedWidth
      isSticky={true}
    navClass="navbar-light bg-white zindex-10" // Changed to navbar-light and added bg-white
    buttonClass="btn-white text-white btn-sm"
/>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>BFSI — QA Automation at Scale</h1>
        </div>
        <img 
          src={bsfiHero} 
          alt="BFSI Hero Image" 
          className="hero-image" 
         
        />
      </section>


      {/* Metrics Section */}
      <section className="metrics-section">
        <div className="metrics-container">
          <div className="metrics-left">
            <h1 className="metric-item">70% FEWER BUGS.</h1>
            <h1 className="metric-item">2x FASTER RELEASES.</h1>
            <h1 className="metric-item">+45% FASTER LEAD RESPONSE.</h1>
            <p className="metrics-subtext">Predictable, auditable, ROI-driven delivery for BFSI leaders.</p>
          </div>
          <div className="metrics-right">
            <p className="metrics-description">Banks and financial institutions need faster, safer ways to modernise. Cinergie Digital enabled a leading BFSI firm to reduce risk, accelerate customer response, and deliver measurable ROI in weeks, not quarters.</p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="challenge-section">
        <div className="container">
          <h2>Challenge</h2>
          <p>Banks face growing complexity and risk:</p>
          <ul>
            <li>Manual QA processes caused slow releases and frequent defects</li>
            <li>Siloed CRM systems delayed reporting and compliance readiness</li>
            <li>Finance ops were error-prone, slowing reporting and compliance readiness.</li>
          </ul>
        </div>
      </section>

<section className="approach-blocks-section">
  <div className="container">
    <div className="approach-grid">
      
      {/* Block 1 - Image on Right */}
      <div className="approach-block">
        <div className="approach-content">
          <h3>QA Automation at Scale</h3>
          <ul>
            <li>Built a test automation pyramid across unit, API, and E2E.</li>
            <li>Embedded CI/CD pipelines with quality gates and rollback readiness.</li>
            <li>Dashboards to track defect trends and release health.</li>
          </ul>
        </div>
        <div className="approach-image">
          <img src={bsfiQa} alt="QA automation dashboard" />
        </div>
      </div>

      {/* Block 2 - Image on Left */}
      <div className="approach-block">
        <div className="approach-content">
          <h3>CRM Modernisation (&lt;90 days)</h3>
          <ul>
            <li>Delivered a full Customer 360 rollout in under 90 days.</li>
            <li>Automated lead routing and improved sales visibility.</li>
            <li>Unified data for faster customer response.</li>
          </ul>
        </div>
        <div className="approach-image">
          <img src={bsfiCrm} alt="CRM dashboard interface" />
        </div>
      </div>

      {/* Block 3 - Image on Right */}
      <div className="approach-block">
        <div className="approach-content">
          <h3>Finance Ops Hyperautomation</h3>
          <ul>
            <li>Deployed bots to reconcile accounts and automate reporting.</li>
            <li>Cut errors and reduced month-end closing time.</li>
            <li>Built audit-ready trails for compliance confidence.</li>
          </ul>
        </div>
        <div className="approach-image">
          <img src={bsfiFinance} alt="Finance automation workflow" />
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
          <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3>70% FEWER BUGS</h3>
      <p>Release defects reduced with automation</p>
    </div>
    <div className="proof-item releases-card">
      <div className="icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h3>2x FASTER RELEASES</h3>
      <p>CI/CD pipelines doubled delivery speed</p>
    </div>
    <div className="proof-item lead-card">
      <div className="icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      </div>
      <h3>+45% FASTER LEAD RESPONSE</h3>
      <p>CRM rollout improved client engagement</p>
    </div>
    <div className="proof-item reporting-card">
      <div className="icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      </div>
      <h3>3x FASTER REPORTING</h3>
      <p>Finance bots accelerated reconciliation</p>
    </div>
    <div className="proof-item errors-card">
      <div className="icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3>60% FEWER ERRORS</h3>
      <p>Automation reduced manual mistakes</p>
    </div>
    <div className="proof-item audit-card">
      <div className="icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      </div>
      <h3>AUDIT-READY DELIVERY</h3>
      <p>Dashboards for compliance visibility</p>
    </div>
  </div>
</section>
      {/* Why It Matters Section */}
<section className="why-matters-section">
  <div className="container">
    <h2>Why It Matters for BFSI Leaders</h2>
    <p>For banks and financial institutions, release risk equals business risk. Defects harm compliance, delays lose customers, and slow reporting undermines governance.</p>
    <p className="enables">Cenergy Digital enables CIOs and CTOs to:</p>
    <ul>
      <li>Deliver predictable, auditable releases</li>
      <li>Show ROI in weeks, not quarters</li>
      <li>Build confidence with regulators, customers, and boards</li>
    </ul>
  </div>
</section>

      {/* Outcomes Section */}
      <section className="outcomes-section">
        <div className="container">
          <h2>Outcomes That Matter Most</h2>
          <ul>
            <li>Automation reduced manual errors</li>
            <li>Dashboards for compliance visibility</li>
           
           <li> Faster client response times </li> 

<li>Lower release risk</li> 

<li>Audit-ready compliance </li>

<li>Improved customer satisfaction</li> 

<li>Measurable ROI delivery </li>
          </ul>
        </div>
      </section>
{/* CTA Section */}
<section className="cta-section">
  <div className="cta-container">
    <div className="cta-card">
      <h2>Want predictable delivery and measurable ROI?</h2>
      <p>See how Cinergie Digital helps BFSI leaders cut risk and accelerate outcomes.</p>
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
          backgroundImage: `url(${bsfiFooter})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="overlay"></div>
        <div className="footer-content">
          <p>BFSI IT case study footer background image</p>
        </div>
      </footer>
      */}


          

            {/* <Connect
                title="Get In Touch"
                description="Get in touch with us today to learn more about how we can help you succeed with these digital capabilities through our solutions and services."
            /> */}
<BackToTop />
            <Footer />

    </div>
    
  );
};

export default BFSICaseStudy;