import React from 'react';
import { Navbar2 } from 'components/navbars';
import Footer from 'pages/Home/Footer';
import BackToTop from 'components/BackToTop';
import Connect from 'components/shared/Connect';
import './styles.css';
import coverImage from '../../assets/images/Picture2.png';
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
            }}>Predictive Fraud Detection with AI</h1>
            <p className="blog-date" style={{ fontFamily: 'Garet' }}>October 27, 2025</p>
            <img
              src={coverImage}
              alt="Cinergie Digital AI fraud detection platform"
              className="blog-cover"
            />
          </header>

          <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>Client’s Background</h2>
            <p style={{ fontFamily: 'Garet' }}>
              A national bank managing millions of daily transactions was losing the battle against subtle, sophisticated fraud patterns. 
            </p>
            <p style={{ fontFamily: 'Garet' }}>
              Their systems caught what was obvious. What they missed were the patterns that hid in plain sight; the ones buried across datasets, locations, and customer profiles. 
            </p>
            <p style={{ fontFamily: 'Garet' }}>
              The question wasn’t whether fraud existed. It was how quickly they could see it. 
            </p>
          </section>

          <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>The Challenge</h2>
            <ul style={{ fontFamily: 'Garet' }}>
              <li><strong>Reactive Fraud Detection:</strong> Alerts were triggered after suspicious activity, not before. </li>
              <li><strong>Data Silos:</strong> Transaction, KYC, and behavioral data weren’t unified. </li>
              <li><strong>Manual Investigation:</strong> Analysts relied on spreadsheets and manual cross-referencing. </li>
              <li><strong>High False Positives:</strong> Genuine transactions were being flagged, frustrating customers. </li>
            </ul>
            <p style={{ fontFamily: 'Garet' }}>
              The goal: detect faster, investigate smarter, and protect revenue without adding noise. 
            </p>
          </section>

          <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>Our Solution</h2>
            <p style={{ fontFamily: 'Garet' }}>
              Cinergie Digital built an AI-driven fraud analytics platform that looked beyond rule-based detection. 
            </p>
        
            <ul style={{ fontFamily: 'Garet' }}>
              <li><strong>Unified Data Lake:</strong> Consolidated all transaction sources into a single pipeline. </li>
              <li><strong>Machine Learning Models:</strong> Trained algorithms on historical fraud cases and normal behavior. </li>
              <li><strong>Behavioral Analytics Layer:</strong> Continuously monitored deviation patterns in real time. </li>
              <li><strong>Analyst Dashboard:</strong> Delivered explainable alerts for quick human validation. </li>
            </ul>
            <p style={{ fontFamily: 'Garet' }}>
              Each alert now came with a “why”; not just a “what.” 
            </p>
            {/* <img src={processFlowImage} alt="Order process flow" className="blog-inline-image" /> */}
          </section>

          <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>The Impact</h2>
            <ul style={{ fontFamily: 'Garet' }}>
              <li>⚡ 70% reduction in detection time. </li>
              <li>🔒 45% fewer false positives. </li>
              <li>💰 30% decrease in fraud-related losses. </li>
              <li>🧠 Real-time risk scoring for every transaction. </li>
            </ul>
          </section>

          <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>Why Cinergie?</h2>
            <p style={{ fontFamily: 'Garet' }}>
              Because identifying fraud isn’t enough; preventing it is the real victory. 
            </p>
            <p style={{ fontFamily: 'Garet' }}>
              Our engineers embedded transparency into AI. Each model came with human-readable explanations, helping compliance teams trust automation without surrendering accountability. 
            </p>
          </section>

          <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>Conclusion</h2>
            <p style={{ fontFamily: 'Garet' }}>
              With Cinergie’s solution, fraud went from invisible to predictable. 
            </p>
            <p style={{ fontFamily: 'Garet' }}>
              The bank now stops suspicious activity before it reaches the balance sheet; quietly, efficiently, and in real time. 
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