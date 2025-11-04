import React from 'react';
import { Navbar2 } from 'components/navbars';
import Footer from 'pages/Home/Footer';
import BackToTop from 'components/BackToTop';
import Connect from 'components/shared/Connect';
import './styles.css';
import coverImage from '../../assets/images/Picture3.jpg';
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
            }}>Regulatory Reporting Automation for Compliance Teams</h1>
            <p className="blog-date" style={{ fontFamily: 'Garet' }}>November 04, 2025</p>
            <img
              src={coverImage}
              alt="Cinergie Digital regulatory reporting automation suite"
              className="blog-cover"
            />
          </header>

          <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>Client’s Background</h2>
            <p style={{ fontFamily: 'Garet' }}>
              For one of the largest banks in the GCC, compliance wasn’t just a department, it was an obstacle course. 
            </p>
            <p style={{ fontFamily: 'Garet' }}>
              Every quarter meant late nights, manual spreadsheets, and endless back-and-forth with audit teams. 
            </p>
            <p style={{ fontFamily: 'Garet' }}>
              Reporting timelines weren’t the problem. The processes behind them were. 
            </p>
          </section>

          <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>The Challenge</h2>
            <ul style={{ fontFamily: 'Garet' }}>
              <li><strong>Fragmented Reporting Tools:</strong> Different business units used different systems. </li>
              <li><strong>Data Reconciliation Delays:</strong> Financial data took weeks to validate. </li>
              <li><strong>Regulatory Fatigue:</strong> Teams worked reactively to meet each deadline. </li>
              <li><strong>Lack of Audit Trails:</strong> Paper-based approvals with limited traceability. </li>
            </ul>
            <p style={{ fontFamily: 'Garet' }}>
              Compliance was treated like an event, not a system. It needed to become continuous. 
            </p>
          </section>

          <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>Our Solution</h2>
            <p style={{ fontFamily: 'Garet' }}>
              Cinergie Digital designed an end-to-end regulatory automation suite; built for accuracy, speed, and traceability. 
            </p>
           
            <ul style={{ fontFamily: 'Garet' }}>
              <li><strong>Data Integration Layer:</strong> Pulled financial and transactional data from all sources. </li>
              <li><strong>Automated Report Generation:</strong> Produced audit-ready outputs in real time. </li>
              <li><strong>Digital Approvals:</strong> Introduced workflow-based signoffs with timestamps. </li>
              <li><strong>Archival & Versioning:</strong> Maintained historical records for future audits. </li>
            </ul>
            <p style={{ fontFamily: 'Garet' }}>
              What once felt like an audit scramble became a single-click process. 
            </p>
            {/* <img src={processFlowImage} alt="Order process flow" className="blog-inline-image" /> */}
          </section>

          <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>The Impact</h2>
            <ul style={{ fontFamily: 'Garet' }}>
              <li>⏱ 80% faster report compilation. </li>
              <li>✅ Zero manual reconciliation. </li>
              <li>🔍 Real-time audit tracking and version history. </li>
              <li>🧾 Consistent regulatory submissions across all branches. </li>
            </ul>
          </section>

          <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>Why Cinergie?</h2>
            <p style={{ fontFamily: 'Garet' }}>
              Because compliance shouldn’t slow you down, it should give you confidence to grow. 
            </p>
            <p style={{ fontFamily: 'Garet' }}>
              Cinergie built automation around human oversight, not against it. The bank gained transparency without losing control. 
            </p>
          </section>

          <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>Conclusion</h2>
            <p style={{ fontFamily: 'Garet' }}>
              Compliance teams stopped chasing data and started managing decisions. 
            </p>
            <p style={{ fontFamily: 'Garet' }}>
              With Cinergie’s regulatory suite, the bank now operates with agility that satisfies both auditors and executives. 
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