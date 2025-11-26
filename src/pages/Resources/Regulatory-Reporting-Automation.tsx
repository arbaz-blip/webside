import React from 'react';
import { Navbar2 } from 'components/navbars';
import Footer from 'pages/Home/Footer';
import BackToTop from 'components/BackToTop';
import Connect from 'components/shared/Connect';
import './styles.css';
import coverImage from '../../assets/images/regulatory-reporting-automation-cinergie-digital.jpg';
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
            <p className="blog-date" style={{ fontFamily: 'Garet' }}>November 26, 2025</p>
            <img
              src={coverImage}
              alt="Cinergie Digital regulatory reporting dashboards supporting compliance teams with accurate submissions"
              className="blog-cover"
            />
          </header>

          <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>Client’s Background</h2>
            <p style={{ fontFamily: 'Garet' }}>
              A multi-billion-dollar regulated enterprise relied on spreadsheets and manual reconciliations to prepare recurring regulatory reports. Each reporting cycle involved multiple teams pulling data from core systems, data warehouses, shared folders, and email-based handoffs; creating stress, inconsistencies, and operational risk.

            </p>
            <p style={{ fontFamily: 'Garet' }}>
              The leadership team needed a <strong>governed, auditable, and automated reporting process</strong> without disrupting daily operations or replacing existing systems.
            </p>
            {/* <p style={{ fontFamily: 'Garet' }}>
              Reporting timelines weren’t the problem. The processes behind them were. 
            </p> */}
          </section>

          <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>The Challenge</h2>
            <ul style={{ fontFamily: 'Garet' }}>
              <li><h3 style={{ fontSize: '1rem', fontWeight: 300 }}>Data fragmented across core systems, data warehouses, and spreadsheets </h3></li>
              <li><h3 style={{ fontSize: '1rem', fontWeight: 300 }}>Manual transformations causing version issues and calculation inconsistencies  </h3></li>
              <li><h3 style={{ fontSize: '1rem', fontWeight: 300 }}>Difficult to trace how final numbers were produced, especially during audits </h3></li>
              <li><h3 style={{ fontSize: '1rem', fontWeight: 300 }}>High dependency on individuals maintaining complex Excel logic  </h3></li>
              <li><h3 style={{ fontSize: '1rem', fontWeight: 300 }}>Tight regulatory deadlines with no room for rework or error </h3></li>
            </ul>
            {/* <p style={{ fontFamily: 'Garet' }}>
              Compliance was treated like an event, not a system. It needed to become continuous.
            </p> */}
          </section>

          <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>Our Solution</h2>
            <p style={{ fontFamily: 'Garet' }}>
              Cinergie partnered with the enterprise to design and implement a <strong>controlled regulatory reporting pipeline</strong> that combined data engineering, business-rule validation, and automated report generation.
            </p>

            <p style={{ fontFamily: 'Garet' }}>
              The goal was simple:
              <h3 style={{ fontSize: '1rem', fontWeight: 'bold', paddingLeft: '10px' }}><strong>Make regulatory reporting accurate, consistent, and auditable; without changing core systems.</strong></h3>
            </p>

            {/* <ul style={{ fontFamily: 'Garet' }}>
              <li><strong>Data Integration Layer:</strong> Pulled financial and transactional data from all sources. </li>
              <li><strong>Automated Report Generation:</strong> Produced audit-ready outputs in real time. </li>
              <li><strong>Digital Approvals:</strong> Introduced workflow-based signoffs with timestamps. </li>
              <li><strong>Archival & Versioning:</strong> Maintained historical records for future audits. </li>
            </ul>
            <p style={{ fontFamily: 'Garet' }}>
              What once felt like an audit scramble became a single-click process.
            </p> */}
            {/* <img src={processFlowImage} alt="Order process flow" className="blog-inline-image" /> */}
          </section>

          <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>Key Steps</h2>
            <ol style={{ fontFamily: 'Garet' }}>
              <li><h3 >Data Lineage Mapping:</h3> Mapped how each regulatory figure was produced across systems, spreadsheets, and manual activities. Created a clear lineage for auditors and internal teams.  </li>
              <li><h3 >Data Integration Layer:</h3> Built automated pipelines that pulled all reporting data into a governed reporting data store with unified transformations. </li>
              <li><h3 >Validation & Controls:</h3> Introduced business rules, threshold checks, exception queues, and cross-system reconciliations to ensure accuracy before reporting.  </li>
              <li><h3 >Template Automation :</h3> Automated the population of regulatory templates, schedules, and submissions directly from validated datasets. .  </li>
              <li><h3 >Validation & Controls:</h3> Enabled end-to-end traceability, allowing compliance teams to drill from any final number back to its underlying dataset and rules applied.   </li>
            </ol>
          </section>

          <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>The Impact</h2>
            <ul style={{ fontFamily: 'Garet' }}>
              <li><h3 style={{ fontWeight: 'bold', fontSize: '1rem', display: 'inline' }}>Significantly reduced manual effort</h3> in each reporting cycle.  </li>
              <li><h3 style={{ fontWeight: 'bold', fontSize: '1rem', display: 'inline' }}>Improved consistency</h3> of submitted numbers across teams. </li>
              <li><h3 style={{ fontWeight: 'bold', fontSize: '1rem', display: 'inline' }}>Faster audit responses</h3> due to clear lineage and traceability.  </li>
              <li><h3 style={{ fontWeight: 'bold', fontSize: '1rem', display: 'inline' }}>Lower operational risk</h3>, fewer errors, and less dependency on spreadsheets.  </li>
              <li><h3 style={{ fontWeight: 'bold', fontSize: '1rem', display: 'inline' }}>Better governance</h3>, with visibility into validations and exceptions.   </li>
            </ul>
          </section>

          {/* <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>Why Cinergie?</h2>
            <p style={{ fontFamily: 'Garet' }}>
              Because compliance shouldn’t slow you down, it should give you confidence to grow.
            </p>
            <p style={{ fontFamily: 'Garet' }}>
              Cinergie built automation around human oversight, not against it. The bank gained transparency without losing control.
            </p>
          </section> */}

          <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>Conclusion</h2>
            <p style={{ fontFamily: 'Garet' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 300 }}>By modernizing the regulatory reporting pipeline, Cinergie helped the enterprise transition from a manual, error-prone process to a streamlined and controlled reporting environment. Compliance teams now operate with confidence, accuracy, and transparency; all while meeting regulatory deadlines with far less effort. </h3>
            </p>
            {/* <p style={{ fontFamily: 'Garet' }}>
              With Cinergie’s regulatory suite, the bank now operates with agility that satisfies both auditors and executives.
            </p> */}
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