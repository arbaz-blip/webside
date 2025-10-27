import Hero from 'components/shared/Hero';
import logo from '../../../assets/images/solutions/tibco.png'
import Solution from './Solution';
import BackToTop from 'components/BackToTop';
import Navbar5 from 'components/navbars/Navbar5';
import Footer from 'pages/Home/Footer';
import Connect from 'components/shared/Connect';;



const Blog = () => {
    return (
        <>
            <div className="header-7" style={{ background: '#318CDC' }}>
                <div className="overlay"></div>

              <Navbar5
      isSticky={true}
      hideSearch

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
