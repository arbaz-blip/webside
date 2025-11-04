import React from 'react';
import { Navbar2 } from 'components/navbars';
import Footer from 'pages/Home/Footer';
import BackToTop from 'components/BackToTop';
import Connect from 'components/shared/Connect';
import './styles.css';
import coverImage from '../../assets/images/real-time-order-tracking-dashboard-supply-chain-cinergie-digital.jpg';
import processFlowImage from '../../assets/images/order-process-flow-supply-chain-integration-cinergie-digital.png';

const CaseStudyDetail = () => {
  return (
    <>
      <Navbar2 isSticky hideSearch />

      <main className="blog-container">
        <article className="blog-article">
          <header className="blog-header">
            <h1 className="hero-title" style={{ 
                fontSize: '3.2rem',
                fontWeight: 600,
                lineHeight: 1.2,
                fontFamily: 'Garet'
            }}>Real-Time Order Stream for a Supply Chain Enterprise</h1>
            <p className="blog-date" style={{ fontFamily: 'Garet' }}>November 04, 2025</p>
            <img
              src={coverImage}
              alt="Cinergie Digital real-time order tracking dashboard"
              className="blog-cover"
            />
          </header>

          <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>Client’s Background</h2>
            <p style={{ fontFamily: 'Garet' }}>
              A leading supply chain enterprise, managing thousands of daily orders across
              multiple sales platforms and logistics partners, was struggling with fragmented
              systems. Their order data was scattered, their tracking unreliable, and their
              teams constantly firefighting manual reconciliation issues.
            </p>
            <p style={{ fontFamily: 'Garet' }}>
              For a business where every delayed order means lost trust and revenue, this was
              more than inefficiency — it was a growth blocker.
            </p>
          </section>

          <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>The Challenge</h2>
            <ul style={{ fontFamily: 'Garet' }}>
              <li><strong>Fragmented Data:</strong> Multiple systems creating blind spots.</li>
              <li><strong>Inefficient Tracking:</strong> No real-time updates.</li>
              <li><strong>Manual Reconciliation:</strong> Hours wasted merging reports.</li>
              <li><strong>Scaling Pressure:</strong> Growth threatened customer satisfaction.</li>
            </ul>
            <p style={{ fontFamily: 'Garet' }}>
              The client had worked with vendors before, but solutions were either overcomplicated
              or not designed for scale. They needed a partner who could align fast and deliver results.
            </p>
          </section>

          <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>Our Solution</h2>
            <p style={{ fontFamily: 'Garet' }}>
              Cinergie Digital engineered a real-time order stream dashboard unifying all sales
              platforms and logistics partners into a single source of truth.
            </p>
            <ul style={{ fontFamily: 'Garet' }}>
              <li>Connected multiple order channels into one pipeline.</li>
              <li>Integrated logistics partners for delivery visibility.</li>
              <li>Built a real-time dashboard for live tracking.</li>
              <li>Designed scalable architecture for growth.</li>
            </ul>
            <img src={processFlowImage} alt="Order process flow" className="blog-inline-image" />
          </section>

          <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>The Impact</h2>
            <ul style={{ fontFamily: 'Garet' }}>
              <li>35% reduction in order processing time.</li>
              <li>99% delivery tracking accuracy.</li>
              <li>50% less manual reconciliation work.</li>
            </ul>
          </section>

          <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>Conclusion</h2>
            <p style={{ fontFamily: 'Garet' }}>
              By turning fragmented order flows into a unified, real-time system, Cinergie Digital
              helped the client gain confidence to scale efficiently and reliably.
            </p>
          </section>
        </article>
      </main>

      <Connect
        title="Get In Touch"
        description="Let's discuss how Cinergie can help you modernize your operations with data-driven solutions."
      />
      <Footer />
      <BackToTop />
    </>
  );
};

export default CaseStudyDetail;