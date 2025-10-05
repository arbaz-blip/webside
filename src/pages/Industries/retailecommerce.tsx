// src/pages/case-studies/retail-ecommerce.tsx
import React from 'react';
import { Navbar2 } from 'components/navbars';

import retailHero from '../../assets/images/retail-ecommerce-case-study-hero.jpg.jpg';
import retailCloud from '../../assets/images/retail-cloud-ecommerce.jpg.jpg';
import retailErp from '../../assets/images/retail-erp-modernisation.jpg.jpg';
import retailOmni from '../../assets/images/retail-omnichannel-it.jpg.jpg';
import Footer from 'pages/Home/Footer';
// import retailFooter from '../../assets/images/case-studies/retail-ecommerce-cinergiedigital.jpg'; // Uncomment if footer image is available

import "./retail-ecommerce.css";

const RetailEcommerceCaseStudy = () => {
  return (
    
    <div className="case-study-page">
 <Navbar2
       isSticky={true}
       hideSearch
 
     />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Retail & Ecommerce — Cloud-Native Ecommerce in 10 Weeks</h1>
        </div>
        <img 
          src={retailHero} 
          alt="Retail Ecommerce Hero Image" 
          className="hero-image" 
         
        />
      </section>


      {/* Metrics Section */}
      <section className="metrics-section">
        <div className="metrics-container">
          <div className="metrics-left">
            <h1 className="metric-item">GO-LIVE IN 10 WEEKS.</h1>
            <h1 className="metric-item">OMNICHANNEL READY.</h1>
            <h1 className="metric-item">CLOUD-NATIVE.</h1>
            <p className="metrics-subtext">We help retailers scale faster with modern ecommerce platforms — seamless go-lives, omnichannel experiences, and predictable ROI.</p>
          </div>
          <div className="metrics-right">
            <p className="metrics-description">Retail needs speed and flexibility. Cinergie Digital delivers ERP modernization, cloud-native ecommerce, and real-time insights for growth.</p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="challenge-section">
        <div className="container">
          <h2>Challenge</h2>
          <p>Retailers face growing complexity and risk:</p>
          <ul>
            <li>Legacy ecommerce slowed launches.</li>
            <li>Poor omnichannel experience lost customers.</li>
            <li>ERP lacked integration with sales & ops.</li>
          </ul>
        </div>
      </section>

<section className="approach-blocks-section">
  <div className="container">
    <div className="approach-grid">
      
      {/* Block 1 - Image on Right */}
      <div className="approach-block">
        <div className="approach-content">
          <h3>Cloud-Native Ecommerce</h3>
          <ul>
            <li>Rapid go-live ecommerce platforms.</li>
            <li>Mobile-ready architecture.</li>
            <li>Integrated analytics dashboards.</li>
          </ul>
        </div>
        <div className="approach-image">
          <img src={retailCloud} alt="Cloud-native ecommerce dashboard" />
        </div>
      </div>

      {/* Block 2 - Image on Left */}
      <div className="approach-block">
        <div className="approach-content">
          <h3>ERP Modernisation</h3>
          <ul>
            <li>Unified back-office + sales.</li>
            <li>Real-time inventory tracking.</li>
            <li>Improved order accuracy.</li>
          </ul>
        </div>
        <div className="approach-image">
          <img src={retailErp} alt="ERP modernisation dashboard interface" />
        </div>
      </div>

      {/* Block 3 - Image on Right */}
      <div className="approach-block">
        <div className="approach-content">
          <h3>Omnichannel Enablement</h3>
          <ul>
            <li>Integrated POS, ecommerce, and CRM.</li>
            <li>Seamless customer journeys.</li>
            <li>Consistent experience across channels.</li>
          </ul>
        </div>
        <div className="approach-image">
          <img src={retailOmni} alt="Omnichannel enablement workflow" />
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
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>
      <h3>GO-LIVE IN 10 WEEKS</h3>
      <p>Rapid deployment achieved</p>
    </div>
    <div className="proof-item releases-card">
      <div className="icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      </div>
      <h3>OMNICHANNEL READINESS</h3>
      <p>Seamless channel integration</p>
    </div>
    <div className="proof-item lead-card">
      <div className="icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
          <path d="M16 8l2-2m-2 2l2 2" />
        </svg>
      </div>
      <h3>FASTER ORDER PROCESSING</h3>
      <p>Streamlined workflows</p>
    </div>
    <div className="proof-item reporting-card">
      <div className="icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3h18v14H3V3z" />
          <path d="M7 17h10M9 21h6" />
          <path d="M8 10h8M8 13h5" />
        </svg>
      </div>
      <h3>REDUCED CART ABANDONMENT</h3>
      <p>Improved checkout UX</p>
    </div>
    <div className="proof-item errors-card">
      <div className="icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
      <h3>IMPROVED CUSTOMER EXPERIENCE</h3>
      <p>Consistent journeys delivered</p>
    </div>
    <div className="proof-item audit-card">
      <div className="icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
        </svg>
      </div>
      <h3>CLOUD-NATIVE SCALABILITY</h3>
      <p>Growth-ready infrastructure</p>
    </div>
  </div>
</section>
      {/* Why It Matters Section */}
<section className="why-matters-section">
  <div className="container">
    <h2>Why It Matters for Retail Leaders</h2>
    <p>For retailers, slow platforms equal lost sales.</p>
    <p className="enables">Cinergie Digital helps leaders to:</p>
    <ul>
      <li>Launch faster with cloud-native platforms</li>
      <li>Deliver seamless omnichannel journeys</li>
      <li>Unlock growth with real-time insights</li>
    </ul>
  </div>
</section>

      {/* Outcomes Section */}
      <section className="outcomes-section">
        <div className="container">
          <h2>Outcomes That Matter</h2>
          <ul>
            <li>Faster ecommerce launches</li>
            <li>Omnichannel customer experience</li>
           
           <li> Reduced cart abandonment </li> 

<li>Inventory visibility</li> 

<li>Growth-ready IT foundation</li> 

<li>Real-time insights</li>
          </ul>
        </div>
      </section>
{/* CTA Section */}
<section className="cta-section">
  <div className="cta-container">
    <div className="cta-card">
      <h2>Want faster launches and omnichannel readiness?</h2>
      <p>See how Cinergie Digital helps retail leaders scale and grow.</p>
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
          backgroundImage: `url(${retailFooter})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="overlay"></div>
        <div className="footer-content">
          <p>Retail Ecommerce IT case study footer background image</p>
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

export default RetailEcommerceCaseStudy;