import React from 'react';
import { Navbar2 } from 'components/navbars';
import Footer from 'pages/Home/Footer';
import BackToTop from 'components/BackToTop';
import Connect from 'components/shared/Connect';
import './styles.css';
import coverImage from '../../assets/images/enterprise-architecture-modernisation-cinergie.png';
import { Link } from 'react-router-dom';

const CaseStudyDetail = () => {
    return (
        <>
            <Navbar2 isSticky hideSearch />

            <main className="blog-container">
                <article className="blog-article">
                    <header className="blog-header">
                        <h1
                            className="hero-title"
                            style={{
                                fontSize: '3.2rem',
                                fontWeight: 600,
                                lineHeight: 1.2,
                                fontFamily: 'Garet',
                            }}
                        >
                            Enterprise Architecture Modernization for Scalable Growth
                        </h1>

                        <p className="blog-date" style={{ fontFamily: 'Garet' }}>
                            December 22, 2025
                        </p>

                        <img
                            src={coverImage}
                            alt="Enterprise architecture modernization enabling scalability and resilience"
                            className="blog-cover"
                        />
                    </header>

                    {/* CLIENT BACKGROUND */}
                    <section>
                        <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>
                            Client’s Background
                        </h2>

                        <p style={{ fontFamily: 'Garet' }}>
                            A multi-billion-dollar enterprise had grown rapidly through new digital initiatives,
                            acquisitions, and increasing regulatory demands. Over time, its technological
                            landscape became fragmented.
                        </p>

                        <p style={{ fontFamily: 'Garet' }}>
                            Multiple systems were introduced to solve individual problems, but no unifying
                            architecture governed how these systems interacted. As a result, change became slow,
                            integrations were brittle, and operational risk increased.
                        </p>

                        <p style={{ fontFamily: 'Garet' }}>
                            Leadership needed a way to modernize architecture without disrupting business
                            continuity.
                        </p>
                    </section>

                    {/* CHALLENGE */}
                    <section>
                        <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>
                            The Challenge
                        </h2>

                        <ul style={{ fontFamily: 'Garet' }}>
                            <li>Tightly coupled legacy applications limiting change</li>
                            <li>Point-to-point integrations that were difficult to maintain</li>
                            <li>No clear separation between business logic, data, and presentation layers</li>
                            <li>Inconsistent standards across teams and vendors</li>
                            <li>
                                Difficulty introducing automation, analytics, or{' '}
                                <Link
                                    style={{ color: '#3ea8d4' }}
                                    to="/services#artifical-intelligence-automation"
                                >
                                    AI
                                </Link>{' '}
                                on top of existing systems
                            </li>
                        </ul>
                    </section>

                    {/* SOLUTION */}
                    <section>
                        <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>
                            Our Solution
                        </h2>

                        <p style={{ fontFamily: 'Garet' }}>
                            Cinergie Digital led an <strong>Enterprise Architecture Modernization</strong>{' '}
                            program focused on clarity, modularity, and scalability.
                        </p>

                        <p style={{ fontFamily: 'Garet' }}>
                            Rather than replacing systems, we re-architected how they interacted. The goal
                            was to create a flexible foundation that allowed the organization to evolve
                            safely over time.
                        </p>

                        <p style={{ fontFamily: 'Garet' }}>
                            Cinergie’s approach aligns with widely adopted{' '}
                            <a
                                href="https://www.mckinsey.com/capabilities/mckinsey-technology/overview/enterprise-architecture"
                                target="_blank"
                                rel="noreferrer"
                                style={{ color: '#3ea8d4' }}
                            >
                                Enterprise Architecture
                            </a>{' '}
                            principles that emphasize modularity, clear capability ownership, and controlled
                            evolution rather than large-scale replacement.
                        </p>
                    </section>

                    {/* KEY STEPS */}
                    <section>
                        <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>
                            Key Steps
                        </h2>

                        <h3 style={{ fontFamily: 'Garet' }}>
                            Architecture Assessment and Target State Design
                        </h3>
                        <p style={{ fontFamily: 'Garet' }}>
                            We assessed existing systems, dependencies, and risks, then defined a future-state
                            architecture aligned with business priorities.
                        </p>

                        <h3 style={{ fontFamily: 'Garet' }}>
                            API and Integration Layer Design
                        </h3>
                        <p style={{ fontFamily: 'Garet' }}>
                            We introduced standardized APIs and integration patterns to decouple systems and
                            reduce point-to-point dependencies.
                        </p>

                        <h3 style={{ fontFamily: 'Garet' }}>
                            Domain and Capability Mapping
                        </h3>
                        <p style={{ fontFamily: 'Garet' }}>
                            Business capabilities were mapped to systems, clarifying ownership and reducing
                            duplication.
                        </p>

                        <h3 style={{ fontFamily: 'Garet' }}>
                            Governance and Standards
                        </h3>
                        <p style={{ fontFamily: 'Garet' }}>
                            We defined architectural standards, review processes, and documentation practices
                            to maintain consistency.
                        </p>

                        <h3 style={{ fontFamily: 'Garet' }}>
                            Incremental Migration Strategy
                        </h3>
                        <p style={{ fontFamily: 'Garet' }}>
                            Modernization was executed in phases to avoid disruption and manage risk.
                        </p>
                    </section>

                    {/* IMPACT */}
                    <section>
                        <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>
                            The Impact
                        </h2>

                        <ul style={{ fontFamily: 'Garet' }}>
                            <li>Faster implementation of new digital initiatives</li>
                            <li>Reduced integration complexity and failure points</li>
                            <li>Improved system resilience and scalability</li>
                            <li>Clear architectural ownership and decision-making</li>
                            <li>A strong foundation for automation, analytics, and AI adoption</li>
                        </ul>
                    </section>

                    {/* CONCLUSION */}
                    <section>
                        <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>
                            Conclusion
                        </h2>

                        <p style={{ fontFamily: 'Garet' }}>
                            Cinergie Digital helped the enterprise move from a fragile, fragmented architecture
                            to a modular, governed, and scalable foundation. This modernized architecture now
                            supports continuous change rather than resisting it.
                        </p>
                    </section>
                </article>
            </main>

            <Connect
                title="Get In Touch"
                description="Let's discuss how Cinergie can help you modernize your enterprise architecture."
            />

            <Footer />
            <BackToTop />
        </>
    );
};

export default CaseStudyDetail;
