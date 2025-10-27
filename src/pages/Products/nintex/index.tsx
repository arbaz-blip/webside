import Hero from 'components/shared/Hero';
import logo from '../../../assets/images/solutions/nintex.svg'
import Solution from './Solution';
import BackToTop from 'components/BackToTop';
import Navbar5 from 'components/navbars/Navbar5';
import Footer from 'pages/Home/Footer';
import Connect from 'components/shared/Connect';;

const Blog = () => {
    return (
        <>
            <div className="header-7" style={{ background: '#013870' }}>
                <div className="overlay"></div>

                               <Navbar5
      isSticky={true}
      hideSearch

    />

                <Hero
                    logo={logo}
                    alt="Nintex"
                    description="Accelerate digital transformation with the most complete platform for process management and
                    automation."
                />
            </div>

            <Solution />

            <Connect
                title="Get In Touch"
                titleClassName="display-3"
                backgroundGradient="bg-gradient2"
                description="Get in touch with us today to learn more about how we can help you stay ahead in the digital landscape with Nintex solutions."
            />

            <Footer />

            <BackToTop />
        </>
    );
};

export default Blog;
