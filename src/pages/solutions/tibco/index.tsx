import { Navbar1 } from 'components/navbars';
import BackToTop from 'components/BackToTop';
import logo from 'assets/images/solutions/tibco.png';
import Hero from 'components/shared/Hero';
import Footer from 'pages/Home/Footer';
import Solution from './Solution';
import Connect from 'components/shared/Connect';

const Blog = () => {
    return (
        <>
            <div className="header-7" style={{ background: '#318CDC' }}>
                <div className="overlay"></div>

                <Navbar1
                    hideSearch
                    fixedWidth
                    navClass="navbar-dark zindex-10"
                    buttonClass="btn-white text-white btn-sm"
                />

                <Hero
                    logo={logo}
                    alt="Tibco"
                    description="Unlock the potential of your real-time data for making faster, smarter decisions."
                />
            </div>

            <Solution />

            <Connect
                title="Get In Touch"
                titleClassName="display-3"
                description="Get in touch with us today to learn more about how we can help you unlock the full potential of your organization with TIBCO technology."
            />

            <Footer />

            <BackToTop />
        </>
    );
};

export default Blog;
