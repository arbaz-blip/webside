// src/pages/case-studies/transport-logistics.tsx
import React from 'react';
import { Navbar2 } from 'components/navbars';

import transportHero from '../../assets/images/transport-logistics-case-study-hero.jpg.jpg';
import transportErp from '../../assets/images/transport-erp-integration.jpg.jpg';
import transportAi from '../../assets/images/transport-ai-forecasting.jpg.jpg';
import transportCompliance from '../../assets/images/transport-compliance-automation.jpg.jpg';
import Footer from 'pages/Home/Footer';
// import transportFooter from '../../assets/images/case-studies/transport-logistics-cinergiedigital.jpg'; // Uncomment if footer image is available

import "./transport-logistics.css";

const TransportLogisticsCaseStudy = () => {
  return (
    
    <div className="case-study-page">
 <Navbar2
       isSticky={true}
       hideSearch
 
     />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Transport & Logistics — ERP–CRM Integration with RPA</h1>
        </div>
        <img 
          src={transportHero} 
          alt="Transport Logistics Hero Image" 
          className="hero-image" 
         
        />
      </section>


      {/* Metrics Section */}
      <section className="metrics-section">
        <div className="metrics-container">
          <div className="metrics-left">
            <h1 className="metric-item">90% AUDIT COMPLIANCE.</h1>
            <h1 className="metric-item">35% FEWER DELAYS.</h1>
            <h1 className="metric-item">REAL-TIME VISIBILITY.</h1>
            <p className="metrics-subtext">We make transport & logistics agile and transparent - improving compliance, reducing delivery delays, and giving leaders end-to-end visibility.</p>
          </div>
          <div className="metrics-right">
            <p className="metrics-description">Supply chains can’t afford blind spots. Cinergie Digital delivers AI forecasting, ERP integrations, and IoT-enabled visibility — measurable ROI in weeks.</p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="challenge-section">
        <div className="container">
          <h2>Challenge</h2>
          <p>Transport and logistics face growing complexity and risk:</p>
          <ul>
            <li>Fragmented systems created data silos across ERP, CRM, and ops.</li>
            <li>Delayed reconciliations increased compliance risk.</li>
            <li>Lack of forecasting tools caused frequent delivery delays.</li>
          </ul>
        </div>
      </section>

<section className="approach-blocks-section">
  <div className="container">
    <div className="approach-grid">
      
      {/* Block 1 - Image on Right */}
      <div className="approach-block">
        <div className="approach-content">
          <h3>ERP–CRM–RPA Integration</h3>
          <ul>
            <li>Unified ERP + CRM with RPA automation.</li>
            <li>Real-time reconciliation dashboards.</li>
            <li>Reduced manual intervention.</li>
          </ul>
        </div>
        <div className="approach-image">
          <img src={transportErp} alt="ERP integration dashboard" />
        </div>
      </div>

      {/* Block 2 - Image on Left */}
      <div className="approach-block">
        <div className="approach-content">
          <h3>AI Forecasting</h3>
          <ul>
            <li>Predictive models for delivery demand.</li>
            <li>Automated scheduling & resource allocation.</li>
            <li>Improved SLA adherence.</li>
          </ul>
        </div>
        <div className="approach-image">
          <img src={transportAi} alt="AI forecasting dashboard interface" />
        </div>
      </div>

      {/* Block 3 - Image on Right */}
      <div className="approach-block">
        <div className="approach-content">
          <h3>Compliance Automation</h3>
          <ul>
            <li>Standardized audit processes.</li>
            <li>Automated exception handling.</li>
            <li>Audit-ready documentation.</li>
          </ul>
        </div>
        <div className="approach-image">
          <img src={transportCompliance} alt="Compliance automation workflow" />
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
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
      <h3>90% AUDIT COMPLIANCE</h3>
      <p>Automation standardized processes</p>
    </div>
    <div className="proof-item releases-card">
      <div className="icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h3>35% FEWER DELIVERY DELAYS</h3>
      <p>AI forecasting optimized routes</p>
    </div>
    <div className="proof-item lead-card">
      <div className="icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      </div>
      <h3>REAL-TIME VISIBILITY</h3>
      <p>Integrated dashboards for tracking</p>
    </div>
    <div className="proof-item reporting-card">
      <div className="icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          <path d="M9 12h6m-6 4h6" />
        </svg>
      </div>
      <h3>FASTER RECONCILIATIONS WITH RPA</h3>
      <p>Automation cut manual work</p>
    </div>
    <div className="proof-item errors-card">
      <div className="icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>
      <h3>IMPROVED SLA ADHERENCE</h3>
      <p>Predictive scheduling delivered</p>
    </div>
    <div className="proof-item audit-card">
      <div className="icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M8 7h12M8 12h12M8 17h12M3 7h.01M3 12h.01M3 17h.01" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      </div>
      <h3>UNIFIED ERP-CRM INTEGRATION</h3>
      <p>Eliminated data silos</p>
    </div>
  </div>
</section>
      {/* Why It Matters Section */}
<section className="why-matters-section">
  <div className="container">
    <h2>Why It Matters for Logistics Leaders</h2>
    <p>For logistics, compliance and speed equal survival.</p>
    <p className="enables">Cinergie Digital enables CIOs/COOs to:</p>
    <ul>
      <li>Reduce compliance risk with automation</li>
      <li>Deliver shipments faster with predictive analytics</li>
      <li>Provide real-time visibility to clients and regulators</li>
    </ul>
  </div>
</section>

      {/* Outcomes Section */}
      <section className="outcomes-section">
        <div className="container">
          <h2>Outcomes That Matter</h2>
          <ul>
            <li>Predictive demand forecasting</li>
            <li>Faster reconciliations</li>
           
           <li> Audit-ready compliance </li> 

<li>Reduced delays & SLA confidence</li> 

<li>Real-time visibility</li> 

<li>Unified system integration</li>
          </ul>
        </div>
      </section>
{/* CTA Section */}
<section className="cta-section">
  <div className="cta-container">
    <div className="cta-card">
      <h2>Want real-time visibility and compliance automation?</h2>
      <p>See how Cinergie Digital helps logistics leaders reduce delays and improve control.</p>
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
          backgroundImage: `url(${transportFooter})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="overlay"></div>
        <div className="footer-content">
          <p>Transport Logistics IT case study footer background image</p>
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

export default TransportLogisticsCaseStudy;