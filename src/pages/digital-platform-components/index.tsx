import { Navbar1 } from 'components/navbars';
import BackToTop from 'components/BackToTop';
import Footer from 'pages/Home/Footer';
import Platform from './Platform';
import Connect from 'components/shared/Connect';

const heroVideo = require('../../assets/videos/life-at-cinergie-digital.mp4');

const Blog = () => {
    return (
        <>
            {/* Hero Section with Video Background */}
            <section
                className="position-relative"
                style={{
                    height: '100vh', // Full screen hero
                    overflow: 'hidden',
                }}
            >
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="position-absolute w-100 h-100"
                    style={{
                        objectFit: 'cover',
                        top: 0,
                        left: 0,
                        zIndex: -2,
                    }}
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>

                {/* Dark Overlay for contrast */}
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                        style={{
                                    color: "#fff",
                                    textShadow: "2px 2px 6px rgba(238, 236, 236, 0.6)", // soft black shadow
                                }}
                ></div>

                {/* Navbar and Hero Text */}
                <div style={{ zIndex: 1, position: 'relative' }}>
                             <Navbar1
                      hideSearch
                      fixedWidth
                      navClass="navbar-light bg-white zindex-10" // Changed to navbar-light and added bg-white
                      buttonClass="btn-white text-white btn-sm"
                  />

                    <div className="d-flex flex-column align-items-center justify-content-center text-white text-center px-3" style={{ height: '80vh' }}>
                        <h1 className="hero-title" style={{  color: "#fff",textShadow: '2px 2px 6px rgba(21, 20, 20, 1)' }}>
                            Digital Platform Outcomes
                        </h1>
                        <p className="mt-3 fs-5 fw-bold" style={{ maxWidth: '800px', textShadow: '1px 1px 3px rgba(0, 0, 0, 1)' }}>
                            We enable technology-driven capabilities of an enterprise to effectively leverage digital
                            technologies to transform its operations, increase efficiency, and deliver enhanced value to
                            its customers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Rest of the Page */}
            <Platform />
            <Connect
                title="Get In Touch"
                description="Get in touch with us today to learn more about how we can help you succeed with these digital capabilities through our solutions and services."
            />
            <Footer />
            <BackToTop />
        </>
    );
};

export default Blog;
