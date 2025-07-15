import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import Typist from 'react-text-typist';

// swiper
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { useEffect, useState } from 'react';

// images
import singlestore from 'assets/images/hero/singlestore.png';
// import ibm from 'assets/images/hero/ibm.png';
// import yellowai from 'assets/images/hero/yellowai.png';
import spotfire from 'assets/images/hero/spotfire.png';
import { HashLink } from 'react-router-hash-link';


const SwiperSlider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const swiperConfig = {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        autoplay: true,
        breakpoints: {
            '576': { slidesPerView: 1.2 },
            '768': { slidesPerView: 1 },
        },
        roundLengths: true,
        observer: true,
        observeParents: true,
    };

    const images = [singlestore, spotfire];

    return isMounted ? (
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <Swiper modules={[Autoplay]} {...swiperConfig}>
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img src={img} alt="" className="img-fluid rounded-lg" style={{ width: '100%', height: 'auto' }} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    ) : null;
};

const Hero = () => {
    return (
        <section className="position-relative hero-13 overflow-hidden pt-7 pt-lg-6 pb-5">
            <Container>
                <Row className="align-items-center text-center text-sm-start">
                    <Col lg={6}>
                        <div className="mb-lg-0">
                            <h1 className="hero-title">
                                Elevate Your Business Future With {<br />}
                                <Typist
                                    className="highlight highlight-orange d-inline-block"
                                    sentences={[
                                        'SingleStore',
                                        // 'Yellow.ai',
                                        'Maximo Manage',
                                        'Spotfire',
                                    ]}
                                    typingSpeed={150}
                                    deletingSpeed={60}
                                    cursorSmooth
                                />{<br />}and Beyond.
                            </h1>

                            <p className="fs-18 text-muted pt-3">
                                Address business challenges, transform operations and accelerate growth though our technology solutions and services.
                            </p>

                            <div className="pt-3 pt-sm-5 mb-4 mb-lg-0">
                                <Link to="/services" className="btn btn-primary" data-toggle="smooth-scroll">
                                    Services
                                    <FeatherIcon className="ms-2 icon icon-xxs" icon="arrow-down" />
                                </Link>
                                <HashLink to="#backing" className="btn btn-link text-primary fw-semibold ms-2">
                                    Solutions
                                </HashLink>
                            </div>
                        </div>
                    </Col>
                    <Col lg={{ offset: 1, span: 5 }} className="hero-right">
                        <div className="img-container">
                            <div className="slider">
                                <SwiperSlider />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
