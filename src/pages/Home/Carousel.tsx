import { Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { solutions } from './data';

const SwiperSlider = () => {
    const swiperConfig = {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            576: { slidesPerView: 1.2 },
            768: { slidesPerView: 1 },
        },
        roundLengths: true,
    };

    return (
        <Swiper modules={[Autoplay]} {...swiperConfig}>
            {(solutions || []).map((solution, index) => (
                <SwiperSlide key={index.toString()}>
                    <div style={{ background: solution.backgroundColor }}>
                        <div className="overlay"></div>
                        <Container>
                            <Row className="d-flex align-items-center">
                                <Col lg={8} className="order-1 order-md-1">
                                    <div className="mb-lg-0 align-middle">
                                        <h1 className={`display-2 text-${solution.color}`}>{solution.heading}</h1>

                                        <p className={`mt-4 fs-18 w-100 text-${solution.color}`}>
                                            {solution.description}
                                        </p>

                                        <div className="pt-sm-3 mb-4 mb-lg-0">
                                            <Link
                                                to={solution.link}
                                                className={`h6 border-bottom border-${solution.color} pb-1 text-${solution.color} link-with-arrow`}>
                                                {solution.more}
                                                <FeatherIcon icon="arrow-right" className="ms-2 icon-xxs" />
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} className="hero-right order-0 order-md-1">
                                    <div className="img-container">
                                        <img src={solution.logo} alt={solution.title} height={solution.logoSize} />
                                        {solution.bottomImage && (
                                            <img
                                                src={solution.bottomImage}
                                                alt={solution.title}
                                                className="bottomImage"
                                            />
                                        )}
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

const Carousel = () => {
    return (
        <section className="overflow-hidden min-vh-100 d-flex align-items-center">
            <div className="heroBanner slider w-100">
                <SwiperSlider />
            </div>
        </section>
    );
};

export default Carousel;
