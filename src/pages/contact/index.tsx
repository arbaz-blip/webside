import { Navbar5 } from 'components/navbars';
import BackToTop from 'components/BackToTop';

import hero from '../../assets/images/8db13d32-6404-4bb6-9ded-96ff18af265d.webp';

import Hero from './Hero';
import ContactUs from './ContactUs';
import Footer from 'pages/Home/Footer';

const Contact = () => {
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
                        background: 'rgba(0, 0, 0, 0.3)',
                        backdropFilter: 'blur(0.1px)',
                    }}
                ></div>

                <Navbar5
                    navClass="navbar-dark zindex-10"
                    hideSearch
                    
                    fixedWidth
                    buttonClass="btn-outline-primary btn-sm"
                />

                <Hero />
            </div>

            <ContactUs />

            <Footer />

            <BackToTop />
        </>
    );
};

export default Contact;
