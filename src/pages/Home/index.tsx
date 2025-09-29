import BackToTop from 'components/BackToTop';
import Navbar5 from 'components/navbars/Navbar5';
import Footer from './Footer';
import Connect from 'components/shared/Connect';
import WhyChooseCinergie from './WhyChooseCinergie';
import ValueDelivered from "./ValueDelivered";
const homeVideo = require('../../assets/videos/enterprise-it-consulting-and-ai-automation.mp4'); // ✅ Adjust path if needed

const Home = () => {
    return (
        <>
            {/* Hero Video Section */}
            <section
                className="position-relative"
                style={{
                    height: '100vh',
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
                    <source src={homeVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Dark overlay */}
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: -1,
                    }}
                ></div>

                {/* Navbar and centered content */}
                <div style={{ zIndex: 1, position: 'relative' }}>
                              <Navbar5
    hideSearch
    fixedWidth
    navClass="navbar-light bg-white zindex-10" // Changed to navbar-light and added bg-white
    buttonClass="btn-white text-white btn-sm"
/>

                    <div className="d-flex flex-column align-items-center justify-content-center text-white text-center px-3" style={{ height: '80vh' }}>
                       <h1
                                className="hero-title"
                                style={{
                                    color: "#fff",
                                    textShadow: "2px 2px 6px rgba(0, 0, 0, 0.6)", // soft black shadow
                                }}
                                >
                                One partner from strategy to steady state 
                                </h1>

                        <p className="mt-3 fs-5 fw-bold" style={{ maxWidth: '800px', textShadow: '1px 1px 3px rgba(15, 14, 14, 1)' }}>
                            Cinergie Digital transforms how enterprises build, modernise, and run software through data-led advisory, modern engineering, and managed services with ROI you can measure.
                        </p>
                    </div>
                </div>
            </section>
<WhyChooseCinergie />
<ValueDelivered />
            {/* Other Sections */}
            {/* Uncomment below sections when needed */}
            {/* <WhatWeDo />
            <About />
            <DigitalCapabilities capabilities={capabilities} />
            <Partnerships partners={partners} />
            <Services />
            <Features features={features} />
            <Connect ... /> */}
            <Connect title="Get In Touch" description="Get in touch with us today to learn more about how we can help you unlock the full potential of your organization through our IT services." />

           
            <Footer />
            <BackToTop />
        </>
    );
};

export default Home;
