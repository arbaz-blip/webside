import React from 'react';
import { Navbar5} from 'components/navbars';
import BackToTop from 'components/BackToTop';

import bsfiHero from '../../assets/images/bsfi-case-study-hero.jpg.png';
import bsfiQa from '../../assets/images/bsfi-qa-automation.jpg.jpg';
import bsfiCrm from '../../assets/images/bsfi-crm-modernisation.jpg.jpg';
import bsfiFinance from '../../assets/images/bsfi-finance-automation.jpg.jpg';
import Footer from 'pages/Home/Footer';
import Conect from 'components/shared/conect';

// import bsfiFooter from '../../assets/images/case-studies/bsfi-case-study-cinergiedigital.jpg'; // Uncomment if footer image is available

import "./bsfi.css";

const BFSICaseStudy = () => {
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

    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0)), url(${bsfiHero})`,
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
      <h1 className="hero-heading" style={{ fontFamily: 'Garet', color: 'white', fontSize: '3.2rem', marginBottom: '1rem'      }}>Banking, Financial Services & Insurance</h1>
      <p className="hero-description" style={{ fontFamily: 'Garet', color: 'white', fontSize: '1.125rem', maxWidth: '1000px' }}>
        Transforming banking and financial services with innovative digital solutions for faster, safer modernization.
      </p>
    </div>
       
       </section>

      {/* Metrics Section */}
      <section className="metrics-section">
        <div className="metrics-container">
          <div className="metrics-left">
            <h2 className="metric-item" style={{ fontFamily: 'Garet',color: 'black' }}>70% FEWER BUGS.</h2>
            <h2 className="metric-item" style={{ fontFamily: 'Garet',color: 'black' }}>2x FASTER RELEASES.</h2>
            <h2 className="metric-item" style={{ fontFamily: 'Garet',color: 'black' }}>+45% FASTER LEAD RESPONSE.</h2>
            <p className="metrics-descriptions" style={{ fontFamily: 'Garet' }}>Predictable, auditable, ROI-driven delivery for BFSI leaders.</p>
          </div>
          <div className="metrics-right">
            <p className="metrics-description" style={{ fontFamily: 'Garet' }}>Banks and financial institutions need faster, safer ways to modernise. Cinergie Digital enabled a leading BFSI firm to reduce risk, accelerate customer response, and deliver measurable ROI in weeks, not quarters.</p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="challenge-section">
        <div className="container">
          <h2 style={{ fontFamily: 'Garet' }}>Challenge</h2>
          <p style={{ fontFamily: 'Garet' }}>Banks face growing complexity and risk:</p>
          <ul style={{ fontFamily: 'Garet' }}>
            
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
          <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>QA Automation at Scale</h3>
          <ul style={{ fontFamily: 'Garet' }}>
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
          <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>CRM Modernisation (&lt;90 days)</h3>
          <ul style={{ fontFamily: 'Garet' }}>
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
          <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>Finance Ops Hyperautomation</h3>
          <ul style={{ fontFamily: 'Garet' }}>
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
 <section className="proof-section">
        <h2>Proof of value, not just promises!</h2>
        
        <div className="proof-grid">
         
            <div className="proof-card">
                <div className="icon-circle green-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div className="card-content">
                    <h3>70% Fewer Bugs</h3>
                    <p>Release defects reduced with automation</p>
                </div>
            </div>

          
            <div className="proof-card">
                <div className="icon-circle yellow-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <div className="card-content">
                    <h3>2x Faster Releases</h3>
                    <p>CI/CD pipelines doubled delivery speed</p>
                </div>
            </div>

            <div className="proof-card">
                <div className="icon-circle blue-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                </div>
                <div className="card-content">
                    <h3>+45% Faster Lead Response</h3>
                    <p>CRM rollout improved client engagement</p>
                </div>
            </div>

            <div className="proof-card">
                <div className="icon-circle indigo-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                    </svg>
                </div>
                <div className="card-content">
                    <h3>3x Faster Reporting</h3>
                    <p>Finance bots accelerated reconciliation</p>
                </div>
            </div>

          
            <div className="proof-card">
                <div className="icon-circle pink-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div className="card-content">
                    <h3>60% Fewer Errors</h3>
                    <p>Automation reduced manual mistakes</p>
                </div>
            </div>

            
            <div className="proof-card">
                <div className="icon-circle cyan-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                </div>
                <div className="card-content">
                    <h3>Audit-Ready Delivery</h3>
                    <p>Dashboards for compliance visibility and reporting transparency</p>
                </div>
            </div>
        </div>
    </section>

      {/* Why It Matters Section */}
<section className="why-matters-section">
  <div className="container">
    <h2 style={{ fontFamily: 'Garet' }}>Why It Matters for BFSI Leaders</h2>
    <p style={{ fontFamily: 'Garet' }}>For banks and financial institutions, release risk equals business risk. Defects harm compliance, delays lose customers, and slow reporting undermines governance.</p>
    <p className="enables" style={{ fontFamily: 'Garet' }}>Cinergie Digital enables CIOs and CTOs to:</p>
    <ul style={{ fontFamily: 'Garet' }}>
      <li>Deliver predictable, auditable releases</li>
      <li>Show ROI in weeks, not quarters</li>
      <li>Build confidence with regulators, customers, and boards</li>
    </ul>
  </div>
</section>

      {/* Outcomes Section */}
      <section className="outcomes-section">
        <div className="container">
          <h2 style={{ fontFamily: 'Garet' }}>Outcomes That Matter Most</h2>
          <ul style={{ fontFamily: 'Garet' }}>
            <li>Automation reduced manual errors</li>
            <li>Dashboards for compliance visibility</li>
           
           <li> Faster client response times </li> 

<li>Lower release risk</li> 

<li>Audit-ready compliance </li>

<li>Improved customer satisfaction</li> 


          </ul>
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


          

            <Conect
                title="Want predictable delivery and measurable ROI?"
                description="See how Cinergie Digital helps BFSI leaders cut risk and accelerate outcomes."
            />
<BackToTop />
            <Footer />

    
  
    </>
  );
};

export default BFSICaseStudy;