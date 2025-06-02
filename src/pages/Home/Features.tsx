import { Col, Container, Row, Card } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { Feature } from './types';

type FeaturesProps = {
    features: Feature[];
};

const Features = ({ features }: FeaturesProps) => {
    return (
        <section className="my-lg-5 py-5 py-sm-7 bg-gradient2 position-relative" data-aos="fade-up">
            <div className="divider top d-none d-sm-block"></div>
            <Container>
                <Row>
                    <Col className="text-center">
                        <h1 className="hero-title fw-medium">Why Choose Cinergie Digital?</h1>
                        <p className="text-muted mx-auto">Here are the few reasons why you should choose us</p>
                    </Col>
                </Row>

                <Row className="mt-5">
                    {(features || []).map((feature, index) => {
                        return (
                            <Col lg={6} key={index.toString()}>
                                <Card className="border position-relative hoverable overflow-hidden">
                                    <Card.Body>
                                        <div className="d-flex text-align-start">
                                            <span className="bg-soft-primary avatar avatar-md rounded icon icon-with-bg icon-sm text-primary me-4 flex-shrink-0">
                                                <FeatherIcon icon={feature.icon} className="icon-dual-primary" />
                                            </span>
                                            <div className="flex-grow-1">
                                                <h5 className="mt-0">{feature.title}</h5>
                                                <p className="mb-0">{feature.description}</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
};

export default Features;
