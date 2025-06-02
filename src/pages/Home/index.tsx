import BackToTop from 'components/BackToTop';
import Navbar5 from 'components/navbars/Navbar5';

import { features, partners, capabilities } from './data';

import Partnerships from './Partnerships';
import Features from './Features';
import DigitalCapabilities from './DigitalCapabilities';
import Services from './Services';
import Footer from './Footer';
import WhatWeDo from './WhatWeDo';
import About from './About';
import Connect from 'components/shared/Connect';
import Carousel from './Carousel';

const Home = () => {
    return (
        <>
            <div className="bg-gradient3">
                <Navbar5
                    navClass="bg-white navbar-light zindex-10"
                    hideSearch
                    isSticky
                    fixedWidth
                    buttonClass="btn-outline-primary btn-sm"
                />
                <Carousel />
            </div>

            <WhatWeDo />
            <About />

            <DigitalCapabilities capabilities={capabilities} />
            <div id="backing"></div>
            
            <Partnerships partners={partners} />

            <Services />

            <Features features={features} />

            <Connect title="Partner With Us" titleClassName='hero-title' description="By partnering with us, you’ll have access to a wide range of digital capabilities, solutions and resources. We’ll work with you to understand your unique requirements and provide integrated solutions that optimize your operations and drive growth." />

            <Footer />

            <BackToTop />
        </>
    );
};

export default Home;
