import React from 'react';
import { Navbar2 } from 'components/navbars';
import Footer from 'pages/Home/Footer';
import BackToTop from 'components/BackToTop';
import Connect from 'components/shared/Connect';
import './styles.css';
import coverImage from '../../assets/images/Picture1.png';
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
            }}>Reimagining Loan Origination with Hyperautomation</h1>
            <p className="blog-date" style={{ fontFamily: 'Garet' }}>October 27, 2025</p>
            <img
              src={coverImage}
              alt="Cinergie Digital real-time order tracking dashboard"
              className="blog-cover"
            />
          </header>

          <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>Client’s Background</h2>
            <p style={{ fontFamily: 'Garet' }}>
             The client, a regional retail bank with 180+ branches, was struggling with one simple yet expensive truth; loan applications moved slower than customer expectations. 



            </p>
              <p style={{ fontFamily: 'Garet' }}>
          What should have taken minutes took days. Documents moved from desk to desk; approvals were lost in translation, and compliance checks dragged endlessly. 
            </p>
            <p style={{ fontFamily: 'Garet' }}>
          They needed speed. But more than that, they needed control. 
            </p>
          </section>

          <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>The Challenge</h2>
            <ul style={{ fontFamily: 'Garet' }}>
              <li><strong>Manual Verification:</strong> Teams used to manually validate every document and customer input. </li>
              <li><strong>Inconsistent Risk Checks:</strong> Each branch applied its own rules, creating uneven decisions. </li>
              <li><strong>Customer Friction: </strong> Delays led to customer drop-offs in the middle of onboarding. </li>
              <li><strong>Audit Gaps: </strong> Compliance reports were generated long after approvals, creating risk exposure. </li>
            </ul>
            <p style={{ fontFamily: 'Garet' }}>
              The traditional re-engineering process wouldn’t fix this. The bank didn’t need another dashboard. 

            </p>
            <p style={{ fontFamily: 'Garet' }}>
              
 They needed a self-orchestrating system; one that could execute, verify, and record simultaneously. 
            </p>
          </section>

          <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>Our Solution</h2>
            <p style={{ fontFamily: 'Garet' }}>
             Cinergie Digital deployed a hyper automation framework powered by RPA and AI document intelligence. 
            </p>
            <ul style={{ fontFamily: 'Garet' }}>
                <li><strong> RPA Deployment:  </strong> Automated customer onboarding, data extraction, and credit eligibility checks. </li>
                      <li><strong>AI-Powered OCR:</strong> Parsed and verified identity documents within seconds.  </li>
              <li><strong>Integration with Core Systems:</strong>Synced approvals directly to the bank’s CRM and ERP.  </li>
              <li><strong>Audit Trail Automation:</strong> Every transaction is logged and accessible in real time.  </li>
                <p style={{ fontFamily: 'Garet' }}>
              
Within the first month, the bank’s teams saw progress in motion, not just on paper. 

            </p>
            

            </ul>
            {/* <img src={processFlowImage} alt="Order process flow" className="blog-inline-image" /> */}
          </section>

          <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>The Impact</h2>
            <ul style={{ fontFamily: 'Garet' }}>
                <li>   ⏱ 65% faster loan processing. </li>
              <li>🧾 100% automated audit trail. </li>
              <li>👥 35% more applications processed with the same staff.</li>
              <li>💡 Zero compliance deviations reported in quarterly audits. </li>
            
            </ul>
          </section>
           <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>Why Cinergie? </h2>
            <p style={{ fontFamily: 'Garet' }}>

Because we don’t automate tasks; we automate confidence. 



            </p>
              <p style={{ fontFamily: 'Garet' }}>
    
Cinergie’s team understood that speed alone means nothing without traceability. By embedding automation at the process level, the client gets both; acceleration and assurance.
            </p>
          
          </section>




          <section>
            <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>Conclusion</h2>
             <p style={{ fontFamily: 'Garet' }}>
              For this bank, automation wasn’t about removing people; it was about freeing them. 

            </p>
            <p style={{ fontFamily: 'Garet' }}>
              For this bank, automation wasn’t about removing people; it was about freeing them. 

Loan officers now focus on customers, not compliance forms. Managers see performances in real time. And customers experience what banking should feel like — seamless and immediate. 
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