import React from 'react';
import { Navbar2 } from 'components/navbars';
import BackToTop from 'components/BackToTop';
import './styles.css'; // Assuming shared styles, adjust path if needed
import Footer from 'pages/Home/Footer';
import Connect from 'components/shared/Connect';
import coverImage from '../../assets/images/real-time-order-tracking-dashboard-supply-chain-cinergie-digital.png';
import processFlowImage from '../../assets/images/order-process-flow-supply-chain-integration-cinergie-digital.png';

const CaseStudyDetail = () => {
  return (
    <>
 <Navbar2
      isSticky={true}
      hideSearch

    />
      

      <section className="case-study-detail-section">
        
        <div className="case-study-container">
          <article className="case-study-article">
            <header className="case-study-header">
              <h1>Real-Time Order Stream for a Supply Chain Enterprise</h1>
              <div className="meta-info">
                <span className="date">October 03, 2025</span>
              </div>
              <div className="coverimage">
                <img 
                  src={coverImage} 
                  alt="Cinergie Digital real-time order tracking dashboard unifying supply chain platforms and logistics partners into one seamless system." 
                />
              </div>
            </header>

            <section className="client-background">
              <h2>Client’s Background</h2>
              <p>A leading supply chain enterprise, managing thousands of daily orders across multiple sales platforms and logistics partners, was struggling with fragmented systems. Their order data was scattered, their tracking unreliable, and their teams constantly firefighting manual reconciliation issues.</p>
              <p>For a business where every delayed order means lost trust and revenue, this was more than inefficiency — it was a growth blocker.</p>
            </section>

          <section className="the-challenge">
  <div className="challenge-content">
    <div className="challenge-text">
      <h2>The Challenge</h2>
      <ul>
        <li><strong>Fragmented Order Data:</strong> Multiple platforms feeding separate streams created blind spots.</li>
        <li><strong>Inefficient Tracking:</strong> Delivery statuses weren’t updated in real-time, leaving teams chasing logistics partners.</li>
        <li><strong>Manual Reconciliation:</strong> Operations staff spent hours consolidating reports, slowing response times.</li>
        <li><strong>Scaling Pressure:</strong> As order volume grew, so did the chaos — threatening customer satisfaction and margins.</li>
      </ul>
      <p>The client had worked with vendors before, but solutions were either overcomplicated, siloed, or not designed for scale. They needed a partner who could embed quickly, align with their operations, and deliver results fast.</p>
    </div>
    <div className="challenge-image">
      <img 
        src={processFlowImage} 
        alt="Process flow graphic showing Cinergie Digital integrating multiple platforms and logistics partners into one real-time order tracking dashboard." 
      />
    </div>
  </div>
</section>

            <section className="our-solution">
              <h2>Our Solution</h2>
              <p>Cinergie Digital engineered a real-time order stream dashboard that unified all sales platforms and logistics partners into a single source of truth.</p>
              <h3>Key Steps We Took:</h3>
              <ul>
                <li><strong>Integration of Platforms:</strong> Connected multiple order channels into one pipeline.</li>
                <li><strong>Unified Logistics Tracking:</strong> Integrated logistics partners to create end-to-end delivery visibility.</li>
                <li><strong>Real-Time Dashboard:</strong> Built a central dashboard that updated order flows and delivery statuses live.</li>
                <li><strong>Scalable Architecture:</strong> Designed the system to handle increasing order volume without downtime.</li>
                <li><strong>Embedded Collaboration:</strong> Our hybrid Dubai–Pakistan team worked hand-in-hand with the client’s operations staff, ensuring adoption and smooth rollout.</li>
              </ul>
            </section>

            <section className="the-impact">
              <h2>The Impact</h2>
              <p>The transformation was immediate and measurable:</p>
              <ul>
                <li>35% reduction in order processing time.</li>
                <li>99% delivery tracking accuracy, giving teams and customers confidence.</li>
                <li>50% less manual reconciliation, freeing staff to focus on customer experience rather than spreadsheets.</li>
              </ul>
            </section>

            <section className="why-cinergie">
              <h2>Why Cinergie?</h2>
              <p>Unlike typical vendors, Cinergie Digital doesn’t just “deliver software.” We embed with our clients to understand their pain, modernize their systems, and deliver enterprise-grade solutions with SME agility.</p>
              <ul>
                <li><strong>Domain Expertise:</strong> Deep experience in logistics, fintech, and retail.</li>
                <li><strong>Hybrid Model:</strong> Local engagement in Dubai, engineering excellence offshore.</li>
                <li><strong>Proven Approach:</strong> From AI/ML to legacy modernization, we don’t just patch problems — we design for growth.</li>
              </ul>
              <p>This case reflects our core belief: technology should remove obstacles, not create them.</p>
            </section>

            <section className="conclusion">
              <h2>Conclusion</h2>
              <p>By turning fragmented order flows into a real-time, unified system, Cinergie Digital didn’t just solve inefficiencies — we gave the client confidence to scale without fear of breaking operations.</p>
              <p>This is the kind of transformation we bring to every partnership: clarity, reliability, and measurable results.</p>
            </section>
          </article>
        </div>
      </section>
  <div>
  


                {/* <Hero /> */}
            </div>
{/* 
            <Team teamMembers={teamMembers} /> */}
 
  <Connect title="Get In Touch" description="Get in touch with us today to learn more about how we can help you unlock the full potential of your organization through our IT services." />
            <Footer />

            <BackToTop />
        </>
    );
};
export default CaseStudyDetail;