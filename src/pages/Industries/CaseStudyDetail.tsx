// CaseStudyDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Navbar1 } from 'components/navbars';
import Footer from 'pages/Home/Footer';
import BackToTop from 'components/BackToTop';

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const getCaseStudyContent = () => {
    switch (slug) {
      case 'bfsi':
        return {
          title: "Case Study: BFSI — QA Automation at Scale",
          heroBg: "bsfi-case-study-hero.jpg",
          heroAlt: "BFSI IT case study hero background image",
          blocks: [
            { img: "bsfi-qa-automation.jpg", alt: "QA automation in banking IT services" },
            { img: "bsfi-crm-modernisation.jpg", alt: "CRM modernisation for financial institutions" },
            { img: "bsfi-finance-automation.jpg", alt: "Finance operations automation in banking" },
          ],
          outcomes: [
            "Faster client response times",
            "Lower release risk",
            "Audit-ready compliance",
            "Improved customer satisfaction",
            "Measurable ROI delivery"
          ],
          footerBg: "bsfi-case-study-cinergiedigital.jpg",
          footerAlt: "BFSI IT case study footer background image"
        };
      case 'transport':
        return {
          title: "Case Study: Transport & Logistics — ERP–CRM Integration with RPA",
          headline: ["90% AUDIT COMPLIANCE.", "35% FEWER DELAYS.", "REAL-TIME VISIBILITY."],
          subline: "We make transport & logistics agile and transparent - improving compliance, reducing delivery delays, and giving leaders end-to-end visibility.",
          rightCard: {
            title: "Unlock Real-Time Logistics Control",
            desc: "Supply chains can’t afford blind spots. Cinergie Digital delivers AI forecasting, ERP integrations, and IoT-enabled visibility — measurable ROI in weeks."
          },
          heroBg: "transport-logistics-case-study-hero.jpg",
          heroAlt: "Transport and logistics IT solutions hero background",
          challenges: [
            "Fragmented systems created data silos across ERP, CRM, and ops.",
            "Delayed reconciliations increased compliance risk.",
            "Lack of forecasting tools caused frequent delivery delays."
          ],
          approaches: [
            {
              title: "ERP–CRM–RPA Integration",
              desc: ["Unified ERP + CRM with RPA automation.", "Real-time reconciliation dashboards.", "Reduced manual intervention."],
              img: "transport-erp-integration.jpg",
              alt: "ERP integration for logistics enterprises"
            },
            {
              title: "AI Forecasting",
              desc: ["Predictive models for delivery demand.", "Automated scheduling & resource allocation.", "Improved SLA adherence."],
              img: "transport-ai-forecasting.jpg",
              alt: "AI forecasting in logistics IT solutions"
            },
            {
              title: "Compliance Automation",
              desc: ["Standardized audit processes.", "Automated exception handling.", "Audit-ready documentation."],
              img: "transport-compliance-automation.jpg",
              alt: "Compliance automation in transport IT services"
            }
          ],
          impact: [
            "✅ 90% audit compliance",
            "⚡ 35% fewer delivery delays",
            "📈 Real-time visibility across supply chain",
            "💰 Faster reconciliations with RPA",
            "📊 Improved SLA adherence"
          ],
          whyMatters: [
            "Reduce compliance risk with automation",
            "Deliver shipments faster with predictive analytics",
            "Provide real-time visibility to clients and regulators"
          ],
          outcomes: [
            "Predictive demand forecasting",
            "Faster reconciliations",
            "Audit-ready compliance",
            "Reduced delays & SLA confidence",
            "Real-time visibility"
          ],
          cta: {
            title: "Need real-time visibility and faster deliveries?",
            desc: "Discover how Cinergie Digital helps leaders improve compliance, reduce delays, and gain supply chain confidence."
          },
          footerBg: "transportandlogistics-case-study-cinergiedigital.jpg",
          footerAlt: "Logistics IT case study footer background image"
        };
      case 'healthcare':
        return {
          title: "Case Study: Healthcare - AI-Driven Analytics for Better Outcomes",
          headline: ["180% ROI.", "3× FASTER REPORTING.", "AI-DRIVEN DECISIONS."],
          subline: "We make healthcare IT secure and insightful - unlocking ROI, improving compliance, and enabling better patient outcomes.",
          rightCard: {
            title: "Transform Healthcare with AI & Data",
            desc: "Healthcare providers demand agility, compliance, and secure data platforms. Cinergie Digital delivers analytics, automation, and patient engagement solutions."
          },
          heroBg: "healthcare-case-study-hero.jpg",
          heroAlt: "Healthcare IT services case study hero background",
          challenges: [
            "Fragmented EHR/EMR systems slowed patient response.",
            "Manual reporting delayed insights.",
            "Compliance audits consumed costly resources."
          ],
          approaches: [
            {
              title: "AI-Driven Analytics",
              desc: ["Unified patient & ops data sources.", "Predictive analytics for care efficiency.", "Automated dashboards for leadership."],
              img: "healthcare-ai-analytics.jpg",
              alt: "AI-driven analytics in healthcare IT services"
            },
            {
              title: "Secure Data Platforms",
              desc: ["HIPAA/GDPR compliant infrastructure.", "Encryption & access controls.", "Regular compliance reviews."],
              img: "healthcare-secure-data.jpg",
              alt: "Secure healthcare data platform infrastructure"
            },
            {
              title: "Patient Engagement Modernisation",
              desc: ["Digital portals for patient interaction.", "Automated communication workflows.", "Improved care coordination."],
              img: "healthcare-patient-engagement.jpg",
              alt: "Patient engagement platforms in healthcare IT solutions"
            }
          ],
          impact: [
            "📈 180% ROI in 11 weeks",
            "⏱ 3× faster reporting cycles",
            "✅ Full compliance readiness",
            "⚡ Improved patient engagement",
            "🔒 Secure, unified data access"
          ],
          whyMatters: [
            "Improve patient outcomes with analytics",
            "Ensure compliance with regulators",
            "Show ROI in weeks, not years"
          ],
          outcomes: [
            "Faster reporting cycles",
            "Audit-ready compliance",
            "Improved patient engagement",
            "Secure infrastructure",
            "ROI acceleration"
          ],
          cta: {
            title: "Want secure data and smarter healthcare decisions?",
            desc: "See how Cinergie Digital enables healthcare providers to improve patient outcomes, ensure compliance, and deliver ROI with AI analytics."
          },
          footerBg: "healthcare-case-study-cinergiedigital.jpg", // Note: Original had wrong rename, corrected based on pattern
          footerAlt: "Healthcare IT case study footer background image"
        };
      case 'retail':
        return {
          title: "Case Study: Retail & Ecommerce - Cloud-Native Ecommerce in 10 Weeks",
          headline: ["GO-LIVE IN 10 WEEKS.", "OMNICHANNEL READY.", "CLOUD-NATIVE."],
          subline: "We help retailers scale faster with modern ecommerce platforms — seamless go-lives, omnichannel experiences, and predictable ROI.",
          rightCard: {
            title: "Scale Retail with Cloud & Omnichannel",
            desc: "Retail needs speed and flexibility. Cinergie Digital delivers ERP modernization, cloud-native ecommerce, and real-time insights for growth."
          },
          heroBg: "retail-ecommerce-case-study-hero.jpg",
          heroAlt: "Retail and ecommerce IT services case study hero background",
          challenges: [
            "Legacy ecommerce slowed launches.",
            "Poor omnichannel experience lost customers.",
            "ERP lacked integration with sales & ops."
          ],
          approaches: [
            {
              title: "Cloud-Native Ecommerce",
              desc: ["Rapid go-live ecommerce platforms.", "Mobile-ready architecture.", "Integrated analytics dashboards."],
              img: "retail-cloud-ecommerce.jpg",
              alt: "Cloud-native ecommerce IT solutions"
            },
            {
              title: "ERP Modernisation",
              desc: ["Unified back-office + sales.", "Real-time inventory tracking.", "Improved order accuracy."],
              img: "retail-erp-modernisation.jpg",
              alt: "ERP modernisation for retail IT services"
            },
            {
              title: "Omnichannel Enablement",
              desc: ["Integrated POS, ecommerce, and CRM.", "Seamless customer journeys.", "Consistent experience across channels."],
              img: "retail-omnichannel-it.jpg",
              alt: "Omnichannel IT solutions for ecommerce enterprises"
            }
          ],
          impact: [
            "🚀 Go-live in 10 weeks",
            "📊 Omnichannel readiness",
            "⏱ Faster order processing",
            "💰 Reduced cart abandonment",
            "✅ Improved customer experience"
          ],
          whyMatters: [
            "Launch faster with cloud-native platforms",
            "Deliver seamless omnichannel journeys",
            "Unlock growth with real-time insights"
          ],
          outcomes: [
            "Faster ecommerce launches",
            "Omnichannel customer experience",
            "Reduced cart abandonment",
            "Inventory visibility",
            "Growth-ready IT foundation"
          ],
          cta: {
            title: "Ready to launch faster and scale omnichannel?",
            desc: "Learn how Cinergie Digital empowers retail leaders to go live in weeks, cut cart abandonment, and deliver seamless customer experiences."
          },
          footerBg: "ecommerce-case-study-cinergiedigital.jpg",
          footerAlt: "Retail IT case study footer background image"
        };
      case 'enterprise':
        return {
          title: "Case Study: Enterprise Delivery - DevOps Automation for Predictable Releases",
          headline: ["2× FASTER RELEASES.", "PREDICTABLE OUTCOMES.", "AUDIT-READY."],
          subline: "We make enterprise delivery predictable and scalable - cutting release risk, improving governance, and accelerating outcomes.",
          rightCard: {
            title: "Unlock Scalable Enterprise Delivery",
            desc: "Large enterprises demand reliable, compliant IT delivery. Cinergie Digital enables faster releases, operational confidence, and measurable ROI."
          },
          heroBg: "enterprise-delivery-case-study-hero.jpg",
          heroAlt: "Enterprise IT delivery case study hero background",
          challenges: [
            "Manual QA slowed enterprise release cycles.",
            "Siloed teams lacked shared accountability.",
            "Governance processes delayed audits."
          ],
          approaches: [
            {
              title: "QA & DevOps Automation",
              desc: ["CI/CD pipelines with quality gates.", "Automated testing & release dashboards.", "Predictable release cycles."],
              img: "enterprise-qa-devops.jpg",
              alt: "QA and DevOps automation in enterprise delivery"
            },
            {
              title: "Embedded Pods",
              desc: ["Shared accountability with clients.", "Cross-functional collaboration.", "Faster feedback loops."],
              img: "enterprise-embedded-pods.jpg",
              alt: "Embedded pods collaboration in enterprise IT delivery"
            },
            {
              title: "Governance Enablement",
              desc: ["Audit-ready documentation.", "Transparent delivery processes.", "Compliance with enterprise standards."],
              img: "enterprise-governance.jpg",
              alt: "Governance and compliance in enterprise IT services"
            }
          ],
          impact: [
            "⚡ 2× faster releases",
            "📉 70% fewer defects",
            "✅ Audit-ready governance",
            "🤝 Shared accountability",
            "📊 Higher release predictability"
          ],
          whyMatters: [
            "Cut release cycles in half",
            "Build audit-ready delivery confidence",
            "Scale IT with predictable ROI"
          ],
          outcomes: [
            "Faster release cycles",
            "Audit-ready governance",
            "Shared accountability",
            "Fewer defects",
            "Predictable outcomes"
          ],
          cta: {
            title: "Looking for predictable enterprise IT outcomes?",
            desc: "Find out how Cinergie Digital helps enterprises accelerate releases, strengthen governance, and deliver measurable ROI at scale."
          },
          footerBg: "delivery-case-study-cinergiedigital.jpg",
          footerAlt: "Enterprise IT case study footer background image"
        };
      default:
        return null;
    }
  };

  const content = getCaseStudyContent();
  if (!content) return <div>Case study not found</div>;

  // For BFSI, use special structure without headline/rightCard
  const isBfsi = slug === 'bfsi';

  return (
    <>
      <div
        className="case-study-hero"
        style={{
          backgroundImage: `url(${content.heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <div
          className="overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.4)',
          }}
        />
        <div className="hero-content" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <h1>{content.title}</h1>
          {!isBfsi && (
            <>
              <div className="headline">
                {content.headline?.map((line, i) => <div key={i} className="headline-line">{line}</div>)}
              </div>
              <p className="subline">{content.subline}</p>
              <div className="right-card">
                <h3>{content.rightCard?.title}</h3>
                <p>{content.rightCard?.desc}</p>
              </div>
            </>
          )}
        </div>
      </div>

      <Navbar1
        hideSearch
        fixedWidth
        navClass="navbar-light bg-white zindex-10"
        buttonClass="btn-white text-white btn-sm"
      />

      <section className="case-study-content">
        <div className="container">
          {isBfsi ? (
            <>
              <div className="blocks-section">
                {content.blocks?.map((block, i) => (
                  <div key={i} className="block-image">
                    <img src={block.img} alt={block.alt} />
                  </div>
                ))}
              </div>
              <div className="outcomes-section">
                <h2>Outcomes that matter most</h2>
                <ul>
                  {content.outcomes?.map((outcome, i) => <li key={i}>{outcome}</li>)}
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className="challenges-section">
                <h2>Challenge</h2>
                <ul>
                  {content.challenges?.map((challenge, i) => <li key={i}>{challenge}</li>)}
                </ul>
              </div>

              <div className="approaches-section">
                <h2>Our Approach</h2>
                {content.approaches?.map((approach, i) => (
                  <div key={i} className="approach-block">
                    <h3>{approach.title}</h3>
                    <ul>
                      {approach.desc?.map((item, j) => <li key={j}>{item}</li>)}
                    </ul>
                    <img src={approach.img} alt={approach.alt} />
                  </div>
                ))}
              </div>

              <div className="impact-section">
                <h2>Impact Delivered</h2>
                <ul>
                  {content.impact?.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>

              <div className="why-matters-section">
                <h2>Why It Matters for {content.title.split(' - ')[0]} Leaders</h2>
                <ul>
                  {content.whyMatters?.map((matter, i) => <li key={i}>{matter}</li>)}
                </ul>
              </div>

              <div className="outcomes-section">
                <h2>Outcomes That Matter</h2>
                <ul>
                  {content.outcomes?.map((outcome, i) => <li key={i}>{outcome}</li>)}
                </ul>
              </div>
            </>
          )}

          <div className="cta-section">
            <h2>{content.cta?.title}</h2>
            <p>{content.cta?.desc}</p>
            <a href="#" className="primary-cta">Learn More</a>
          </div>
        </div>
      </section>

      <div
        className="case-study-footer"
        style={{
          backgroundImage: `url(${content.footerBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '40vh',
          position: 'relative',
        }}
      >
        <div
          className="overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.4)',
          }}
        />
        <img src={content.footerBg} alt={content.footerAlt} style={{ opacity: 0, width: 0, height: 0 }} /> {/* Hidden for alt */}
      </div>

      <Footer />
      <BackToTop />
    </>
  );
};

export default CaseStudyDetail;