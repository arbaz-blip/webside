
import BackToTop from 'components/BackToTop';
import { Navbar1 } from 'components/navbars';

// import Hero from './Hero';
// import hero from 'assets/images/dpo/f4e7f30e-ea5a-4f87-8a56-0e7f2d93111a.webp';
import Footer from 'pages/Home/Footer';
import Platform from './Platform';

import Connect from 'components/shared/Connect';

const Blog = () => {
    return (
        <>
            <div
                className="bg-gradient2"
                style={{
                    // background: `url(${hero})`,
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
      isSticky={true}

/>
{/* 
                <Hero /> */}
            </div>

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
