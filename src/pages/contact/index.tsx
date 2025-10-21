import { Navbar5 } from 'components/navbars';
import BackToTop from 'components/BackToTop';

import hero from '../../assets/images/cinergie-digital-contact-hero-background.jpg.jpg';
import "./contact.css";

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
                    filter: `
                        brightness(0.9)
                        contrast(1.15)
                        saturate(0.9)
                        hue-rotate(-5deg)`,
                    fontFamily: 'Garet'
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
  
      isSticky={true}
      hideSearch

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