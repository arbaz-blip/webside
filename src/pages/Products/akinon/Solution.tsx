import { Col, Container, Row } from 'react-bootstrap';
import overview from 'assets/images/solutions/akinon-omni.jpg';

const Solution = () => {
    return (
        <>
            <section className="my-5 py-6 position-relative">
                <Container>
                    <Row data-aos="fade-up" data-aos-duration="1500">
                        <Col className="text-center">
                            <h1 className="display-3 fw-semibold">Akinon For Your Digital Business</h1>
                            <p className="mx-auto">
                                We are a representatives Akinon Commerce Cloud, offering a cloud-native, composable
                                digital commerce platform with modular architecture, strong integration and API
                                orchestration capabilities.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="my-5 py-6 position-relative bg-gradient2">
                <Container>
                    <Row data-aos="fade-up" data-aos-duration="1500">
                        <Col className="text-center">
                            <h1 className="display-3 fw-semibold">About Akinon Platform</h1>
                            <Row className="pt-5">
                                <Col md={4} data-aos="fade-up" data-aos-duration="300">
                                    <div className="d-flex mb-3">
                                        <div className="fw-bold fs-16 align-self-center flex-grow-1">
                                            Grow Your Business Globally
                                        </div>
                                    </div>
                                    <p className="mb-4 pb-3 text-muted">
                                        Branch out to a larger market by building many storefronts in multiple
                                        languages, local currencies and payment methods.
                                    </p>
                                </Col>
                                <Col md={4} data-aos="fade-up" data-aos-duration="300">
                                    <div className="d-flex mb-3">
                                        <div className="fw-bold fs-16 align-self-center flex-grow-1">
                                            Leverage Platform Services
                                        </div>
                                    </div>
                                    <p className="mb-4 pb-3 text-muted">
                                        Akinon offers an integrated, next-generation application suite enhanced with
                                        omnichannel and marketplace capabilities, mobile, in-store solutions, an OMS and
                                        much more.
                                    </p>
                                </Col>
                                <Col md={4} data-aos="fade-up" data-aos-duration="300">
                                    <div className="d-flex mb-3">
                                        <div className="fw-medium fs-16 align-self-center flex-grow-1">
                                            Deliver Omnichannel Experiences
                                        </div>
                                    </div>
                                    <p className="mb-4 pb-3 text-muted">
                                        Cover every possible omnichannel trend such as click-and-collect,
                                        ship-from-store, ship-to-store, store-to-store transfer and create a better
                                        shopping experience for your customers.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="my-5 py-6 position-relative">
                <Container>
                    <Row data-aos="fade-up" data-aos-duration="1500">
                        <Col className="text-center">
                            <img src={overview} alt="overview" className="img-fluid d-block mx-auto mt-4 mt-lg-0" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="my-5 py-6 position-relative bg-gradient2">
                <Container>
                    <Row data-aos="fade-up" data-aos-duration="1500">
                        <Col className="text-center">
                            <h1 className="display-3 fw-semibold">Akinon OMS</h1>
                            <p className="mx-auto">Turn every location into a distribution centre.</p>
                            <Row className="pt-5">
                                <Col md={4} data-aos="fade-up" data-aos-duration="300">
                                    <div className="d-flex mb-3">
                                        <div className="fw-bold fs-16 align-self-center flex-grow-1">
                                            Store fulfillment
                                        </div>
                                    </div>
                                    <p className="mb-4 pb-3 text-muted">
                                        Cover every possible omnichannel trend such as click-and-collect,
                                        ship-from-store, ship-to-store, store-to-store transfer and create a seamless
                                        fulfilment model to deliver exceptional customer service.
                                    </p>
                                </Col>
                                <Col md={4} data-aos="fade-up" data-aos-duration="300">
                                    <div className="d-flex mb-3">
                                        <div className="fw-bold fs-16 align-self-center flex-grow-1">
                                            Complete Order Visibility
                                        </div>
                                    </div>
                                    <p className="mb-4 pb-3 text-muted">
                                        Obtaining a 360° view of inventory enables you to track products and avoid stock
                                        outs for a friction-free customer experience.
                                    </p>
                                </Col>
                                <Col md={4} data-aos="fade-up" data-aos-duration="300">
                                    <div className="d-flex mb-3">
                                        <div className="fw-medium fs-16 align-self-center flex-grow-1">
                                            Configurable System
                                        </div>
                                    </div>
                                    <p className="mb-4 pb-3 text-muted">
                                        Orchestrate complex order fulfilment scenarios with simple configurations and
                                        boost the efficiency of your inventory.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Solution;
