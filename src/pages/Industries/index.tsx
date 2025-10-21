import BackToTop from 'components/BackToTop';
import { Navbar5 } from 'components/navbars';
import Footer from 'pages/Home/Footer';
import Platform from './Platform';
import Connect from 'components/shared/Connect';

const Blog = () => {
    return (
        <>
        <div
          style={{
            
background: '#4F6D7A',
          }}>

            <div
  className="overlay"
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '#4F6D7A',
    backdropFilter: 'blur(0.5px)',
    zIndex: 0,
    pointerEvents: 'none',
    fontFamily: 'Garet'
  }}
>
  </div>



             <div style={{ position: 'relative', zIndex: 1 }}>
  <Navbar5 hideSearch isSticky />
  <Platform />
 <Connect title="Get In Touch" description="Get in touch with us today to learn more about how we can help you unlock the full potential of your organization through our IT services." />
  <Footer />
  <BackToTop />
        </div>
</div>

          
        </>
    );
};

export default Blog;