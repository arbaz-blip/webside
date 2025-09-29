import { Navbar5 } from 'components/navbars';
import BackToTop from 'components/BackToTop';

import hero from '../../assets/images/cinergie-digital-contact-hero-background.jpg.jpg';


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
    hideSearch
    fixedWidth
    navClass="navbar-light bg-white zindex-10" // Changed to navbar-light and added bg-white
    buttonClass="btn-white text-white btn-sm"
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
