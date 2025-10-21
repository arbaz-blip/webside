import BackToTop from 'components/BackToTop';
import Navbar5 from 'components/navbars/Navbar5';
import Footer from './Footer';
import Connect from 'components/shared/Connect';
import WhyChooseCinergie from './WhyChooseCinergie';
import ValueDelivered from './ValueDelivered';
import "./Home.css";
import HeroBackground from "../../assets/images/Hero-Background.png";
import MainPageHeroBackgroundImage from "../../assets/images/MainPageHeroBackgroundImage.png";
// const homeVideo = require('../../assets/videos/enterprise-it-consulting-and-ai-automation.mp4');

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section
                className="position-relative"
                style={{
                    minHeight: '100vh',
                    
                    fontFamily: 'Garet'
                }}
            >
               {/* Background Image */}
<div
  className="hero-background-image position-absolute w-100 h-100"
  style={{
    backgroundImage: `url(${MainPageHeroBackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    top: 0,
    left: 0,
    zIndex: -2,
  }}
></div>


                {/* Dark Overlay */}
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        // backgroundColor: 'rgba(0, 0, 0, 0.7)',
                       
                        fontFamily: 'Garet'
                    }}
                ></div>

                {/* Navbar */}
<Navbar5
      isSticky={true}
      hideSearch

    />

  {/* Overlay Content */}
  <div className="hero-overlay">
    <div className="hero-content">
      <h1 className="hero-title" style={{
                        
                        fontFamily: 'Garet'
                    }}>
        One Partner from Strategy to Steady State
      </h1>

      <p className="hero-subtitle" style={{
                        
                        fontFamily: 'Garet'
                    }}>
        Cinergie Digital transforms how enterprises build, modernise, and run software 
        through data-led advisory, modern engineering, and managed services with ROI you can measure.
      </p>

      <div className="hero-stats">
        {[
          { number: '$2M+', label: 'Saved' },
          { number: '12 wks', label: 'Avg. Delivery Time' },
          { number: '15%', label: 'Annual Growth' },
          { number: '95%', label: 'Positive Ratings' },
        ].map((item, i) => (
          <div key={i} className="stat-item">
            <h2>{item.number}</h2>
            <p>{item.label}</p>
          </div>
        ))}
      </div>

      <a href="contact" className="hero-btn">
        Get in Touch →
      </a>
    </div>
  </div>
</section>

            {/* Other Sections */}
            <WhyChooseCinergie />
            <ValueDelivered />
            <Connect
                title="Get In Touch"
                description="Get in touch with us today to learn more about how we can help you unlock the full potential of your organization through our IT services."
            />
            <Footer />
            <BackToTop />
        </>
    );
};

export default Home;