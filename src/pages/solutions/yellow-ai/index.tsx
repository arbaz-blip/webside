import { Navbar1 } from 'components/navbars';
import BackToTop from 'components/BackToTop';
import Hero from 'components/shared/Hero';
import Footer from 'pages/Home/Footer';
import Solution from './Solution';
import Connect from 'components/shared/Connect';
import logo from 'assets/images/solutions/yellow-ai.svg';

const Blog = () => {
    return (
        <>
            <div className="header-7" style={{ background: '#FFFADA' }}>

                <Navbar1
                    hideSearch
                    fixedWidth
                    navClass="navbar-light zindex-10"
                    buttonClass="btn-white text-white btn-sm"
                />

                <Hero
                    logo={logo}
                    alt="Yellow.ai"
                    description="Transform customer and employee experiences with enterprise grade conversational AI platform."
                    textColor='text-dark'
                />
            </div>

            <Solution />

            <Connect
                title="Get In Touch"
                titleClassName="display-3"
                backgroundGradient="bg-gradient2"
                description="Get in touch with us today to learn more about how we can help you stay ahead in the digital landscape with Yellow.ai solutions."
            />

            <Footer />

            <BackToTop />
        </>
    );
};

export default Blog;
