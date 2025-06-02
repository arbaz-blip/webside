import { Navbar1 } from 'components/navbars';
import BackToTop from 'components/BackToTop';

import Hero from './Hero';

import hero from 'assets/images/4b7001f0-21bb-4aad-b685-e4d0210f26cd.webp';
import Footer from 'pages/Home/Footer';
import Team from './Team';
import { teamMembers } from './data';

const Blog = () => {
    return (
        <>
            <div
                className="bg-gradient2"
                style={{
                    background: `url(${hero})`,
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
                    hideSearch
                    fixedWidth
                    navClass="navbar-dark zindex-10"
                    buttonClass="btn-white text-white btn-sm"
                />

                <Hero />
            </div>

            <Team teamMembers={teamMembers} />

            <Footer />

            <BackToTop />
        </>
    );
};

export default Blog;
