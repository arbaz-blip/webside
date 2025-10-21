import { Navbar2 } from 'components/navbars';
import BackToTop from 'components/BackToTop';

// import Hero from './Hero';

// import hero from 'assets/images/services/8d13e852-3947-4072-afff-e1cddd1a5a53.webp';
import Footer from 'pages/Home/Footer';
import Services from './Services';
import Connect from 'components/shared/Connect';

const Blog = () => {
    return (
        <>
            <div
                className="bg-gradient2"
                style={{
                    // background: `url(${hero})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
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
                        background: '#ffffff',
                        backdropFilter: 'blur(0.5px)',
                    }}
                ></div>

 <Navbar2
       isSticky={true}
       hideSearch
 
     />

                {/* <Hero /> */}
            </div>

            <Services />

            <Connect title="Get In Touch" description="Get in touch with us today to learn more about how we can help you unlock the full potential of your organization through our IT services." />

            <Footer />

            <BackToTop />


            
        </>
    );
};

export default Blog;