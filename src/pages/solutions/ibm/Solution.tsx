import { Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

const Solution = () => {
    return (
        <>
            <section className="my-5 py-6 position-relative">
                <Container>
                    <Row data-aos="fade-up" data-aos-duration="1500">
                        <Col className="text-center">
                            <h1 className="display-3 fw-semibold">Partnering With IBM For Innovative Solutions</h1>
                            <p className="mx-auto">
                                We are IBM partner plus and offer broad-spectrum software products and related services
                                in the IBM ecosystem. Our IBM practice it at the forefront of us solving customer
                                problems in region where working with data and turning it into information is key to
                                winning in a competitive economy.
                            </p>
                        </Col>
                    </Row>
                    <Row className="pt-5">
                        <Col md={4} data-aos="fade-up" data-aos-duration="300">
                            <div className="d-flex mb-3">
                                <div className="list-inline-item me-3 flex-shrink-0">
                                    <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                        <FeatherIcon icon="upload-cloud" className="icon-dual-primary" />
                                    </span>
                                </div>
                                <div className="fw-medium fs-16 align-self-center flex-grow-1">Cloud</div>
                            </div>
                            <p className="mb-4 pb-3 text-muted">
                                With IBM cloud we will enable you to realize the right hybrid cloud solution with
                                capabilities across platforms, applications, DevOps, and IT service management.
                            </p>
                        </Col>
                        <Col md={4} data-aos="fade-up" data-aos-duration="300">
                            <div className="d-flex mb-3">
                                <div className="list-inline-item me-3 flex-shrink-0">
                                    <span className="bg-soft-danger avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-danger">
                                        <FeatherIcon icon="bar-chart" className="icon-dual-danger" />
                                    </span>
                                </div>
                                <div className="fw-medium fs-16 align-self-center flex-grow-1">Analytics</div>
                            </div>
                            <p className="mb-4 pb-3 text-muted">
                                Turn data into information you can use to achieve your business objectives. We carry
                                IBM's Big Data and Analytics solutions, designed to empower you with the tools necessary to extract valuable insights and optimize performance.
                            </p>
                        </Col>
                        <Col md={4} data-aos="fade-up" data-aos-duration="300">
                            <div className="d-flex mb-3">
                                <div className="list-inline-item me-3 flex-shrink-0">
                                    <span className="bg-soft-info avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-info">
                                        <FeatherIcon icon="message-circle" className="icon-dual-info" />
                                    </span>
                                </div>
                                <div className="fw-medium fs-16 align-self-center flex-grow-1">Watson</div>
                            </div>
                            <p className="mb-4 pb-3 text-muted">
                                IBM Watson is the AI for smarter business. Get the power of Watson to work for your
                                business. Unlock hidden value in data and meaningful insights in structured and
                                unstructured data.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Solution;
