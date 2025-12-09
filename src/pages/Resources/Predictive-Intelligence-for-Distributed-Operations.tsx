import React from 'react';
import { Navbar2 } from 'components/navbars';
import Footer from 'pages/Home/Footer';
import BackToTop from 'components/BackToTop';
import Connect from 'components/shared/Connect';
import './styles.css';
import coverImage from '../../assets/images/predictive-intelligence-distributed-operations-cinergie.png';
import { Link } from 'react-router-dom';
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
                        }}>Predictive Intelligence for Distributed Operations</h1>
                        <p className="blog-date" style={{ fontFamily: 'Garet' }}>December 09, 2025</p>
                        <img
                            src={coverImage}
                            alt="Cinergie Digital predictive intelligence dashboards providing risk insights across distributed enterprise operations."
                            className="blog-cover"
                        />
                    </header>

                    <section>
                        <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>Client’s Background</h2>
                        <p style={{ fontFamily: 'Garet' }}>
                            A multi-billion-dollar enterprise operated across multiple sites including regional offices, customer service hubs and field locations. Each site relied on its own operational systems, creating delays, limited visibility, and reactive firefighting.
                        </p>
                        <p style={{ fontFamily: 'Garet' }}>
                            Leadership had no unified picture of operational health. Issues were only visible after customer complaints or SLA breaches, making it difficult to prioritize interventions or prevent recurring disruptions.
                        </p>
                        <p style={{ fontFamily: 'Garet' }}>
                            The organization wanted predictive intelligence, not just reporting.
                        </p>
                    </section>

                    <section>
                        <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>The Challenge</h2>
                        <ul style={{ fontFamily: 'Garet' }}>
                            <li>Operational data scattered across <Link style={{ color: '#3ea8d4' }} to='/services#application-modernisation-maintaince'>legacy systems</Link>, manual logs and standalone tools.  </li>
                            <li>Delayed reporting that prevented timely identification of early warning signs.  </li>
                            <li>No ability to forecast workload spikes, incident patterns or <Link style={{ color: '#3ea8d4' }} to='/services#artifical-intelligence-automation'>SLA risks</Link>. </li>
                            <li>Uncertainty around which site required immediate attention.  </li>
                            <li>Limited decision support for resource planning and daily operations. </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>Our Solution</h2>
                        <p style={{ fontFamily: 'Garet' }}>
                            Cinergie Digital designed and deployed a <strong style={{ fontFamily: 'Garet' }}>Predictive Operations Intelligence Layer</strong> that unified data, applied machine learning and gave leaders real time and future focused visibility.
                        </p>

                        <p style={{ fontFamily: 'Garet' }}>
                            The solution did not replace existing systems.
                        </p>

                        <p style={{ fontFamily: 'Garet' }}>
                            It integrated them into a single predictive view.
                        </p>

                        <p style={{ fontFamily: 'Garet' }}>
                            Our approach delivered live risk scores, early warnings, and location specific performance insights that allowed teams to act before failures occurred.
                        </p>


                        {/* <img src={processFlowImage} alt="Order process flow" className="blog-inline-image" /> */}
                    </section>

                    <section>
                        <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>Key Steps</h2>

                        <h3 style={{ fontFamily: 'Garet' }}>1. Data Integration Across Sites </h3>
                        <p style={{ fontFamily: 'Garet' }}>We built pipelines that pull data from operational systems, ticketing tools, customer logs and IoT or equipment telemetry (where applicable). </p>

                        <h3 style={{ fontFamily: 'Garet' }}>
                            2. Feature Engineering and Predictive Modelling
                        </h3>
                        <p style={{ fontFamily: 'Garet' }}>
                            Our modelling layer forecasted:
                            <ul style={{ fontFamily: 'Garet' }}>
                                <li>Volume spikes</li>
                                <li>SLA breaches</li>
                                <li>Incident probabilities</li>
                                <li>Utilization patterns</li>
                                <li>Operational bottlenecks</li>
                            </ul>
                        </p>

                        <h3 style={{ fontFamily: 'Garet' }}>3. Real Time Dashboards and Alerts </h3>
                        <p style={{ fontFamily: 'Garet' }}>
                            We delivered control tower dashboards that visualized:
                        </p>
                        <ul style={{ fontFamily: 'Garet' }}>
                            <li>High-risk sites</li>
                            <li>Leading indicators</li>
                            <li>Predictive incident heatmaps</li>
                            <li>Capacity and workload forecasts</li>
                        </ul>

                        <h3 style={{ fontFamily: 'Garet' }}>4. Operational Playbooks</h3>
                        <p style={{ fontFamily: 'Garet' }}>
                            We collaborated with internal teams to define recommended actions for predicted scenarios, helping standardize response behavior.
                        </p>

                        <h3 style={{ fontFamily: 'Garet' }}>5. <Link style={{ color: '#3ea8d4' }} to='/services#data-engineering-analytics'>MLOps and Governance</Link></h3>
                        <p style={{ fontFamily: 'Garet' }}>
                            We ensured models retrained automatically, remained explainable, and followed governance rules suitable for non-technical teams.
                        </p>

                    </section>

                    <section>
                        <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>The Impact</h2>
                        <ul style={{ fontFamily: 'Garet' }}>
                            <li>Earlier visibility of operational risks </li>
                            <li>Reduced downtime and fewer SLA breaches </li>
                            <li>Stronger resource planning and prioritization </li>
                            <li>Improved coordination between operations, IT and service teams </li>
                            <li>Better decisions supported by predictive and real time data </li>
                        </ul>
                        <p style={{ fontFamily: 'Garet' }}>
                            The enterprise gained an operating rhythm centered on <strong style={{ fontFamily: 'Garet' }}>proactive intelligence</strong>, not reactive firefighting.
                        </p>
                    </section>

                    <section>
                        <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>Conclusion</h2>
                        <p style={{ fontFamily: 'Garet' }}>
                            Cinergie Digital helped the client transform fragmented operational reporting into a unified predictive intelligence layer that allowed leaders to act earlier, faster and with more confidence. This foundation now supports broader analytics, automation, and AI initiatives across the organization.
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