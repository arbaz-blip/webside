import React from 'react';
import { Navbar5 } from 'components/navbars';
import BackToTop from 'components/BackToTop';

import retailHero from '../../assets/images/retail-ecommerce-case-study-hero.jpg.png';
import retailCloud from '../../assets/images/retail-cloud-ecommerce.jpg.jpg';
import retailErp from '../../assets/images/retail-erp-modernisation.jpg.jpg';
import retailOmni from '../../assets/images/retail-omnichannel-it.jpg.jpg';
import Footer from 'pages/Home/Footer';
import Conect from 'components/shared/conect';

// import retailFooter from '../../assets/images/case-studies/retail-ecommerce-cinergiedigital.jpg'; // Uncomment if footer image is available

import "./retail-ecommerce.css";

const RetailEcommerceCaseStudy = () => {
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
    backgroundImage: `url(${retailHero})`,
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
      <h1 className="hero-heading" style={{ fontFamily: 'Garet', color: 'white', fontSize: '3.2rem', marginBottom: '1rem'      }}>Retail & Ecommerce</h1>
      <p className="hero-description" style={{ fontFamily: 'Garet', color: 'white', fontSize: '1.125rem', maxWidth: '1000px' }}>
        Cloud-Native Ecommerce in 10 Weeks - Helping retailers scale faster with modern platforms and seamless experiences.
      </p>
    </div>
       
       </section>

      {/* Metrics Section */}
      <section className="metrics-section">
        <div className="metrics-container">
          <div className="metrics-left">
            <h2 className="metric-item" style={{ fontFamily: 'Garet',color: 'black' }}>GO-LIVE IN 10 WEEKS.</h2>
            <h2 className="metric-item" style={{ fontFamily: 'Garet',color: 'black' }}>OMNICHANNEL READY.</h2>
            <h2 className="metric-item" style={{ fontFamily: 'Garet',color: 'black' }}>CLOUD-NATIVE.</h2>
            <p className="metrics-descriptions" style={{ fontFamily: 'Garet' }}>We help retailers scale faster with modern ecommerce platforms — seamless go-lives, omnichannel experiences, and predictable ROI.</p>
          </div>
          <div className="metrics-right">
            <p className="metrics-description" style={{ fontFamily: 'Garet' }}>Retail needs speed and flexibility. Cinergie Digital delivers ERP modernization, cloud-native ecommerce, and real-time insights for growth.</p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="challenge-section">
        <div className="container">
          <h2 style={{ fontFamily: 'Garet' }}>Challenge</h2>
          <p style={{ fontFamily: 'Garet' }}>Retailers face growing complexity and risk:</p>
          <ul style={{ fontFamily: 'Garet' }}>
            
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
          <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>Cloud-Native Ecommerce</h3>
          <ul style={{ fontFamily: 'Garet' }}>
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
          <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>ERP Modernisation</h3>
          <ul style={{ fontFamily: 'Garet' }}>
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
          <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>Omnichannel Enablement</h3>
          <ul style={{ fontFamily: 'Garet' }}>
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
 <section className="proof-section">
        <h2>Proof of value, not just promises!</h2>
        
        <div className="proof-grid">
         
            <div className="proof-card">
                <div className="icon-circle green-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                </div>
                <div className="card-content">
                    <h3>Go-Live in 10 Weeks</h3>
                    <p>Rapid deployment achieved</p>
                </div>
            </div>

          
            <div className="proof-card">
                <div className="icon-circle yellow-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                    </svg>
                </div>
                <div className="card-content">
                    <h3>Omnichannel Readiness</h3>
                    <p>Seamless channel integration</p>
                </div>
            </div>

            <div className="proof-card">
                <div className="icon-circle blue-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                        <path d="M16 8l2-2m-2 2l2 2" />
                    </svg>
                </div>
                <div className="card-content">
                    <h3>Faster Order Processing</h3>
                    <p>Streamlined workflows</p>
                </div>
            </div>

            <div className="proof-card">
                <div className="icon-circle indigo-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 3h18v14H3V3z" />
                        <path d="M7 17h10M9 21h6" />
                        <path d="M8 10h8M8 13h5" />
                    </svg>
                </div>
                <div className="card-content">
                    <h3>Reduced Cart Abandonment</h3>
                    <p>Improved checkout UX</p>
                </div>
            </div>

          
            <div className="proof-card">
                <div className="icon-circle pink-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </div>
                <div className="card-content">
                    <h3>Improved Customer Experience</h3>
                    <p>Consistent journeys delivered</p>
                </div>
            </div>

            
            <div className="proof-card">
                <div className="icon-circle cyan-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
                    </svg>
                </div>
                <div className="card-content">
                    <h3>Cloud-Native Scalability</h3>
                    <p>Growth-ready infrastructure</p>
                </div>
            </div>
        </div>
    </section>

      {/* Why It Matters Section */}
<section className="why-matters-section">
  <div className="container">
    <h2 style={{ fontFamily: 'Garet' }}>Why It Matters for Retail Leaders</h2>
    <p style={{ fontFamily: 'Garet' }}>For retailers, slow platforms equal lost sales.</p>
    <p className="enables" style={{ fontFamily: 'Garet' }}>Cinergie Digital helps leaders to:</p>
    <ul style={{ fontFamily: 'Garet' }}>
      <li>Launch faster with cloud-native platforms</li>
      <li>Deliver seamless omnichannel journeys</li>
      <li>Unlock growth with real-time insights</li>
    </ul>
  </div>
</section>

      {/* Outcomes Section */}
      <section className="outcomes-section">
        <div className="container">
          <h2 style={{ fontFamily: 'Garet' }}>Outcomes That Matter</h2>
          <ul style={{ fontFamily: 'Garet' }}>
            <li>Faster ecommerce launches</li>
            <li>Omnichannel customer experience</li>
           
           <li> Reduced cart abandonment </li> 

<li>Inventory visibility</li> 

<li>Growth-ready IT foundation</li> 

<li>Real-time insights</li> 


          </ul>
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


          

            <Conect
                title="Want faster launches and omnichannel readiness?"
                description="See how Cinergie Digital helps retail leaders scale and grow."
            />
<BackToTop />
            <Footer />

    
  
    </>
  );
};

export default RetailEcommerceCaseStudy;