import Hero from 'components/shared/Hero';

import logo from '../../../assets/images/solutions/bahwan-bct.svg'
import Solution from './Solution';
import BackToTop from 'components/BackToTop';
import Navbar5 from 'components/navbars/Navbar5';
import Footer from 'pages/Home/Footer';
import Connect from 'components/shared/Connect';;

const Blog = () => {
    return (
        <>
            <div className="header-7" style={{ background: '#0096DA' }}>
                <div className="overlay"></div>

                               <Navbar5
      isSticky={true}
      hideSearch

    />

            <Hero logo={logo} alt='bct' />

            </div>

            <Solution />

            <Connect title="Get In Touch" titleClassName="display-3" description="Get in touch with us today to learn more about how we can help you stay ahead in the digital landscape with BCT solutions." />

            <Footer />

            <BackToTop />
        </>
    );
};

export default Blog;
