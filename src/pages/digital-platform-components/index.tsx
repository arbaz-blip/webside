import { Navbar1 } from 'components/navbars';
import BackToTop from 'components/BackToTop';

import Hero from './Hero';

import hero from 'assets/images/dpc/b86f020a-5c32-44dc-b185-881ffa49e15d.webp';
import Footer from 'pages/Home/Footer';
import Platform from './Platform';
import Connect from 'components/shared/Connect';

const Blog = () => {
    return (
        <>
            <div
                className="bg-gradient2"
                style={{
                    background: `url(${hero})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
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
                        backdropFilter: 'blur(0.3px)',
                    }}
                ></div>

                <Navbar1
                    hideSearch
                    fixedWidth
                    navClass="navbar-dark zindex-10"
                    buttonClass="btn-white text-white btn-sm"
                />

                <Hero />
            </div>

            <Platform />

            <Connect title="Get In Touch" description="Get in touch with us today to learn more about how we can help you succeed with these digital capabilities through our solutions and services." />

            <Footer />

            <BackToTop />
        </>
    );
};

export default Blog;
