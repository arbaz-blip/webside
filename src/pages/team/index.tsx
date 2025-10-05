import { Navbar1 } from 'components/navbars';
import BackToTop from 'components/BackToTop';

// import Hero from './Hero';

// import hero from 'assets/images/4b7001f0-21bb-4aad-b685-e4d0210f26cd.webp';
import Footer from 'pages/Home/Footer';
import Connect from 'components/shared/Connect';
// import Team from './Team';
// import { teamMembers } from './data';
import Platform from './case';
const Blog = () => {
    return (
        <>
            <div
                className="bg-gradient2"
                style={{
                    // background: `url(${hero})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
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
                        background: 'rgba(0, 0, 0, 0.5)',
                        backdropFilter: 'blur(0.5px)',
                    }}
                ></div>
<Navbar1
      isSticky={true}
      hideSearch

    />

                {/* <Hero /> */}
            </div>
{/* 
            <Team teamMembers={teamMembers} /> */}
 <Platform />
  <Connect title="Get In Touch" description="Get in touch with us today to learn more about how we can help you unlock the full potential of your organization through our IT services." />
            <Footer />

            <BackToTop />
        </>
    );
};

export default Blog;
