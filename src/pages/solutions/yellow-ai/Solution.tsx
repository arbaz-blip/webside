import { Col, Container, Row } from 'react-bootstrap';
import overview from 'assets/images/solutions/yellow-overview.webp';

const Solution = () => {
    return (
        <>
            <section className="my-5 py-6 position-relative">
                <Container>
                    <Row data-aos="fade-up" data-aos-duration="1500">
                        <Col className="text-center">
                            <h1 className="display-3 fw-semibold">Enterprise Grade Conversational AI Platform</h1>
                            <p className="mx-auto">
                                We represent and distribute Yellow.ai in Pakistan, offering a world’s leading
                                conversational CX platforms for leading brands in the country. With our partnership with
                                Yellow.ai, we have the knowledge and expertise to help you build high performance
                                analytical or transactional applications.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="my-5 py-6 position-relative bg-gradient2">
                <Container>
                    <Row data-aos="fade-up" data-aos-duration="1500">
                        <Col className="text-center">
                            <h1 className="display-3 fw-semibold">AI Platform for Business</h1>
                            <p className="mx-auto">
                                The platform offers a range of AI-powered tools and services designed to help
                                organizations improve their operations, decision-making, and customer experiences.
                                Yellow.ai’s offerings include chatbots, recommendation systems, and natural language
                                processing (NLP) capabilities.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="my-5 py-6 position-relative">
                <Container>
                    <Row data-aos="fade-up" data-aos-duration="1500">
                        <Col className="text-center">
                            <h1 className="display-3 fw-semibold">Low Code Platform</h1>
                            <p className="mx-auto">
                                Through this partnership, our aim is to help enterprises to transform customer
                                experiences (CX) and employee experience (EX), by making it easier for organizations to
                                leverage the power of AI without requiring extensive technical expertise.
                            </p>
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
        </>
    );
};

export default Solution;
