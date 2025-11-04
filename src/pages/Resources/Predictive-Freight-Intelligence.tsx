import React from 'react';
import { Navbar2 } from 'components/navbars';
import Footer from 'pages/Home/Footer';
import BackToTop from 'components/BackToTop';
import Connect from 'components/shared/Connect';
import './styles.css';
import coverImage from '../../assets/images/predictive-freight-intelligence-cinergie-digital.jpg';
// import processFlowImage from '../../assets/images/order-process-flow-supply-chain-integration-cinergie-digital.png';

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
            }}>Predictive Freight Intelligence for a Global Logistics Network</h1>
            <p className="blog-date" style={{ fontFamily: 'Garet' }}>November 04, 2025</p>
            <img
              src={coverImage}
              alt="Cinergie Digital predictive freight intelligence platform"
              className="blog-cover"
            />
          </header>

          <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>Client’s Background</h2>
            <p style={{ fontFamily: 'Garet' }}>
              A global freight forwarding company managing multi-modal shipments across 60+ countries struggled with delays, manual interventions, and poor visibility into transit bottlenecks. 
            </p>
            <p style={{ fontFamily: 'Garet' }}>
              They wanted a system that could predict disruptions before they happened and orchestrate dynamic adjustments in real time, without replacing their entire technology stack. 
            </p>
          </section>

          <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>The Challenge</h2>
            <ul style={{ fontFamily: 'Garet' }}>
              <li><strong>Fragmented Systems:</strong> Legacy ERP, TMS, and regional carrier data operated in silos. </li>
              <li><strong>Reactive Operations:</strong> No predictive intelligence to forecast route risks. </li>
              <li><strong>Lack of Real-Time Insights:</strong> Managers relied on end-of-day reports, not live data. </li>
              <li><strong>Rising Costs:</strong> Inefficient routing and downtime inflated operating expenses. </li>
            </ul>
          </section>

          <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>Our Solution</h2>
            <p style={{ fontFamily: 'Garet' }}>
              Cinergie Digital designed an AI-driven freight intelligence platform powered by predictive analytics, MLOps, and centralized data pipelines. 
            </p>
            
            <ul style={{ fontFamily: 'Garet' }}>
              <li><strong>Data Lake Foundation:</strong> Unified 70+ data streams across logistics, customs, and tracking. </li>
              <li><strong>Predictive Models:</strong> Developed ML models forecasting port congestion and delay risks. </li>
              <li><strong>MLOps Automation:</strong> Automated retraining pipelines for continuous learning accuracy. </li>
              <li><strong>Decision Layer Integration:</strong> Embedded AI dashboards directly into the client’s TMS. </li>
            </ul>
            {/* <img src={processFlowImage} alt="Order process flow" className="blog-inline-image" /> */}
          </section>

          <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>The Impact</h2>
            <ul style={{ fontFamily: 'Garet' }}>
              <li>🚛 24% reduction in delivery variability. </li>
              <li>⏱ 40% faster load scheduling and optimization. </li>
              <li>📊 Unified real-time visibility across five regional hubs. </li>
              <li>🤖 Predictive accuracy improved to 87% in identifying delay patterns. </li>
            </ul>
          </section>

          <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>Why Cinergie?</h2>
            <p style={{ fontFamily: 'Garet' }}>
              Because logistics doesn’t need more data, it needs smarter data. 
            </p>
            <p style={{ fontFamily: 'Garet' }}>
              Cinergie connected fragmented operations into a living ecosystem of predictive insight and operational control. 
            </p>
          </section>

          <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>Conclusion</h2>
            <p style={{ fontFamily: 'Garet' }}>
              The client shifted from reactive logistics management to AI-driven predictability, achieving speed, reliability, and transparency across global freight operations. 
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