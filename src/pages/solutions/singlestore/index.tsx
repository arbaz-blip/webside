import { Navbar1 } from 'components/navbars';
import BackToTop from 'components/BackToTop';
import Hero from 'components/shared/Hero';
import logo from 'assets/images/solutions/singlestore.svg';
import Footer from 'pages/Home/Footer';
import Solution from './Solution';
import Connect from 'components/shared/Connect';

const Blog = () => {
    return (
        <>
            <div className="header-7" style={{ background: '#1B001B' }}>
                <div className="overlay"></div>

                <Navbar1
                    hideSearch
                    fixedWidth
                    navClass="navbar-dark zindex-10"
                    buttonClass="btn-white text-white btn-sm"
                />

                <Hero
                    logo={logo}
                    alt="SingleStore"
                    description="Get fast, real-time analytics and applications with a unified data engine for transactional
                    and analytical workloads."
                />
            </div>

            <Solution />

            <Connect
                title="Get In Touch"
                titleClassName="display-3"
                backgroundGradient="bg-gradient2"
                description="Get in touch with us today to learn more about how we can help you stay ahead in the digital landscape with SingleStore solutions."
            />

            <Footer />

            <BackToTop />
        </>
    );
};

export default Blog;
