import React from 'react';
import { Navbar2 } from 'components/navbars';
import Footer from 'pages/Home/Footer';
import BackToTop from 'components/BackToTop';
import Connect from 'components/shared/Connect';
import './styles.css';
import coverImage from '../../assets/images/digital-transformation-operating-model-cinergie.png';
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
                            Why Digital Transformation Fails Without an Operating Model
                        </h1>

                        <p className="blog-date" style={{ fontFamily: 'Garet' }}>
                            December 22, 2025
                        </p>

                        <img
                            src={coverImage}
                            alt="Cinergie Digital operating model framework for executing digital transformation with clarity, governance, and accountability."
                            className="blog-cover"
                        />
                    </header>

                    {/* INTRO */}
                    <section>
                        <p style={{ fontFamily: 'Garet' }}>
                            Digital transformation failures are rarely caused by technology. In 2025, most
                            enterprises had access to cloud platforms, automation tools, analytics, and AI.
                        </p>

                        <p style={{ fontFamily: 'Garet' }}>
                            Yet many transformation initiatives stalled, delivered limited value, or quietly
                            faded away.
                        </p>

                        <p style={{ fontFamily: 'Garet' }}>
                            The missing piece was not a tool.
                        </p>

                        <p style={{ fontFamily: 'Garet', fontWeight: 'bold' }}>
                            It was an operating model.
                        </p>
                    </section>

                    {/* ILLUSION OF PROGRESS */}
                    <section>
                        <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>
                            The Illusion of Progress
                        </h2>

                        <p style={{ fontFamily: 'Garet' }}>
                            Enterprises often mistake activity for progress.
                        </p>

                        <ul style={{ fontFamily: 'Garet' }}>
                            <li>Multiple tools deployed across departments</li>
                            <li>Parallel transformation initiatives with no coordination</li>
                            <li>Short-term pilots that never scale</li>
                            <li>Heavy reliance on vendors without internal ownership</li>
                            <li>Lack of measurable outcomes</li>
                        </ul>

                        <p style={{ fontFamily: 'Garet' }}>
                            On paper, transformation appears active. In reality, nothing changes at scale.
                        </p>
                    </section>

                    {/* OPERATING MODEL */}
                    <section>
                        <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>
                            What an Operating Model Actually Means
                        </h2>

                        <p style={{ fontFamily: 'Garet' }}>
                            An operating model defines how work gets done across people, processes, and
                            technology.
                        </p>

                        <p style={{ fontFamily: 'Garet' }}>
                            It answers questions such as:
                        </p>

                        <ul style={{ fontFamily: 'Garet' }}>
                            <li>Who owns decisions and outcomes</li>
                            <li>How initiatives move from idea to delivery</li>
                            <li>How teams collaborate across functions</li>
                            <li>How standards, governance, and quality are enforced</li>
                            <li>How value is measured and sustained</li>
                        </ul>

                        <p style={{ fontFamily: 'Garet' }}>
                            Without this structure, transformation becomes unpredictable. Industry research
                            consistently shows that operating model transformations fail when organizations
                            focus on structure alone without aligning decision rights, governance, and execution
                            mechanisms.
                        </p>

                        <p style={{ fontFamily: 'Garet' }}>
                            This perspective is reinforced by{' '}
                            <a
                                href="https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/how-to-get-your-operating-model-transformation-back-on-track"
                                target="_blank"
                                rel="noreferrer"
                                style={{ color: '#3ea8d4' }}
                            >
                                McKinsey’s work on getting operating model transformations back on track
                            </a>
                            .
                        </p>
                    </section>

                    {/* TECHNOLOGY */}
                    <section>
                        <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>
                            Why Technology Alone Is Not Enough
                        </h2>

                        <p style={{ fontFamily: 'Garet' }}>
                            Cloud platforms, automation tools, and AI systems amplify whatever environment
                            they are placed in.
                        </p>

                        <p style={{ fontFamily: 'Garet' }}>
                            If the environment is fragmented, technology amplifies chaos.
                        </p>

                        <p style={{ fontFamily: 'Garet' }}>
                            If the environment is governed, technology amplifies efficiency.
                        </p>

                        <p style={{ fontFamily: 'Garet' }}>
                            This is why some organizations scale successfully while others struggle despite
                            similar tools.
                        </p>
                    </section>

                    {/* FIVE ELEMENTS */}
                    <section>
                        <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>
                            The Five Elements of a Sustainable Digital Operating Model
                        </h2>

                        <h3 style={{ fontFamily: 'Garet' }}>
                            Clear Ownership and Accountability
                        </h3>
                        <p style={{ fontFamily: 'Garet' }}>
                            Every capability must have a clear owner responsible for outcomes, not just
                            delivery.
                        </p>

                        <h3 style={{ fontFamily: 'Garet' }}>
                            Embedded Delivery Teams
                        </h3>
                        <p style={{ fontFamily: 'Garet' }}>
                            Cross-functional teams that combine business, engineering, and data expertise
                            deliver faster and more reliably. Learn more about{' '}
                            <Link
                                style={{ color: '#3ea8d4' }}
                                to="/services/embedded-delivery-teams"
                            >
                                embedded delivery teams
                            </Link>
                            .
                        </p>

                        <h3 style={{ fontFamily: 'Garet' }}>
                            Standardized Ways of Working
                        </h3>
                        <p style={{ fontFamily: 'Garet' }}>
                            Shared standards reduce friction, rework, and dependency on individuals.
                        </p>

                        <h3 style={{ fontFamily: 'Garet' }}>
                            Governance That Enables Speed
                        </h3>
                        <p style={{ fontFamily: 'Garet' }}>
                            Good governance accelerates decisions rather than blocking them.
                        </p>

                        <h3 style={{ fontFamily: 'Garet' }}>
                            Continuous Improvement Loops
                        </h3>
                        <p style={{ fontFamily: 'Garet' }}>
                            Transformation does not end. Feedback, metrics, and iteration keep it alive.
                        </p>
                    </section>

                    {/* 2025 SHIFT */}
                    <section>
                        <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>
                            What Changed in 2025
                        </h2>

                        <ul style={{ fontFamily: 'Garet' }}>
                            <li>From projects to capabilities</li>
                            <li>From delivery to outcomes</li>
                            <li>From siloed teams to embedded squads</li>
                            <li>From experimentation to operational maturity</li>
                        </ul>

                        <p style={{ fontFamily: 'Garet' }}>
                            Transformation became something organizations run, not something they launch.
                        </p>
                    </section>

                    {/* 2026 OUTLOOK */}
                    <section>
                        <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>
                            The 2026 Outlook
                        </h2>

                        <ul style={{ fontFamily: 'Garet' }}>
                            <li>Treat digital as a core operating capability</li>
                            <li>Align strategy, delivery, and operations</li>
                            <li>Build structures that support continuous change</li>
                            <li>Partner with teams that embed, not just advise</li>
                        </ul>

                        <p style={{ fontFamily: 'Garet' }}>
                            Technology will continue to evolve. Operating models will determine who benefits.
                        </p>
                    </section>

                    {/* FINAL CTA */}
                    <section>
                        <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>
                            Final CTA
                        </h2>

                        <p style={{ fontFamily: 'Garet' }}>
                            If your digital initiatives are active, but outcomes feel inconsistent, it may be
                            time to revisit your operating model. Cinergie Digital helps enterprises design
                            operating models that turn strategy into sustained execution.
                        </p>
                    </section>
                </article>
            </main>

            <Connect
                title="Get In Touch"
                description="Let's discuss how Cinergie can help you design an operating model that delivers real outcomes."
            />

            <Footer />
            <BackToTop />
        </>
    );
};

export default CaseStudyDetail;
