import { Col, Container, Row } from 'react-bootstrap';
import connectedintelligence from 'assets/images/solutions/tibco-connected-intelligence.png';

const Solution = () => {
    return (
        <>
            <section className="my-5 py-6 position-relative">
                <Container>
                    <Row data-aos="fade-up" data-aos-duration="1500">
                        <Col className="text-center">
                            <h1 className="display-3 fw-semibold">TIBCO Solutions For Your Business</h1>
                            <p className="mx-auto">
                                We are a TIBCO representatives and distributors in Pakistan, offering a full range of
                                TIBCO products and services to help businesses of all sizes unlock their full potential.
                                With decades of experience in TIBCO technology, we have expertise to help you achieve
                                your goals.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="my-5 py-6 position-relative bg-gradient2">
                <Container>
                    <Row data-aos="fade-up" data-aos-duration="1500">
                        <Col className="text-center">
                            <h1 className="display-3 fw-semibold">The Power of TIBCO</h1>
                            <p className="mx-auto">
                                TIBCO provides cutting-edge technology solutions that help organizations connect,
                                integrate, and analyze data in real-time. Whether you need to streamline operations,
                                improve customer experiences, or gain new insights into your business, TIBCO has the
                                tools you need to succeed.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="section py-4 py-sm-8 position-relative" data-aos="fade-up" data-aos-duration="1500">
                <Container>
                    <Row>
                        <Col lg={5}>
                            <h1 className="display-3 fw-semibold mb-4">TIBCO Connected Intelligence</h1>
                            <p className="mb-5">
                                World leading platform for integrating, analyzing, and acting on data in real-time. It
                                allows organizations to connect disparate data sources, process and analyze the data,
                                and deliver actionable insights to drive better business outcomes. The platform includes
                                a range of tools for data integration, analytics, process automation, and collaboration,
                                and is designed to help organizations create a more connected and intelligent
                                enterprise.
                            </p>
                        </Col>
                        <Col lg={{ span: 6, offset: 1 }}>
                            <img
                                src={connectedintelligence}
                                alt="connectedintelligence"
                                className="img-fluid d-block mx-auto mt-4 mt-lg-0"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Solution;
