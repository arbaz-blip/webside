import Hero from 'components/shared/Hero';

import logo from '../../../assets/images/solutions/akinon.svg'
import Solution from './Solution';
import BackToTop from 'components/BackToTop';
import Navbar5 from 'components/navbars/Navbar5';
import Footer from 'pages/Home/Footer';
import Connect from 'components/shared/Connect';;

const Blog = () => {
    return (
        <>
            <div className="header-7" style={{ background: '#EA4A32' }}>
                <div className="overlay"></div>

                              <Navbar5
      isSticky={true}
      hideSearch

    />

                <Hero logo={logo} alt='Akinon' description='Empowering your ecommerce success with cutting edge solutions.' />
            </div>

            <Solution />

            <Connect
                title="Get In Touch"
                titleClassName="display-3"
                backgroundGradient="bg-gradient2"
                description="Get in touch with us today to learn more about how we can help you unlock the full potential of your digital business with Akinon Platform."
            />

            <Footer />

            <BackToTop />
        </>
    );
};

export default Blog;
