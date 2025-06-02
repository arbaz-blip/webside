import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

import { Partner } from './types';

import { Navigation, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

type PartnerProps = {
    partners: Partner[];
};

const SwiperSlider = ({ partners }: PartnerProps) => {
    const swiperConfig = {
        loop: true,
        spaceBetween: 24,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            '576': { slidesPerView: 1 },
            '768': { slidesPerView: 2 },
        },
        roundLengths: true,
        navigation: { nextEl: '.swiper-custom-next', prevEl: '.swiper-custom-prev' },
    };

    return (
        <Swiper modules={[Pagination, Autoplay, Navigation]} {...swiperConfig}>
            {(partners || []).map((partners, index) => {
                return (
                    <SwiperSlide key={index.toString()}>
                        <Card className="border position-relative hoverable overflow-hidden">
                            <Card.Body>
                                <div className="d-flex text-align-start">
                                    <img
                                        src={partners.appLogo}
                                        alt="app"
                                        height="60"
                                        className="me-4 align-self-center flex-shrink-0"
                                    />
                                    <div className="flex-grow-1">
                                        <h5 className="mt-0">{partners.app}</h5>
                                        <p className="mb-0">{partners.description}</p>
                                        <Link to={partners.url} className="h6 text-primary">
                                            Learn more
                                            <FeatherIcon icon="arrow-right" className="ms-2 icon-xxs" />
                                        </Link>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

const Partnerships = ({ partners }: PartnerProps) => {
    return (
        <section id="partnership" className="my-5 py-6 position-relative">

            <Container data-aos="fade-up" data-aos-duration="1500">
                <Row className='mt-5'>
                    <Col className="text-center">
                        <h1 className="hero-title fw-medium">Our Partners</h1>
                        <p className="text-muted mx-auto">
                            Fostering <span className="text-primary fw-bold">Synergy</span> for unmatched{' '}
                            <span className="text-primary fw-bold">Progress</span> and{' '}
                            <span className="text-primary fw-bold">Success</span>.
                        </p>
                        <div className="navigations d-flex justify-content-end">
                            <Button variant="link" className="text-orange p-0 swiper-custom-prev">
                                <FeatherIcon icon="arrow-left" className="icon-dual" />
                            </Button>
                            <Button variant="link" className="text-orange p-0 swiper-custom-next">
                                <FeatherIcon icon="arrow-right" className="icon-dual" />
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <div className="slider">
                            <SwiperSlider partners={partners} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Partnerships;
