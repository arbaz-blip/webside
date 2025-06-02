import { Col, Container, Row } from 'react-bootstrap';

const Hero = () => {
    return (
        <section className="hero-4 pb-5 pt-8 pt-lg-6 pb-lg-8">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={7} className="text-center position-relative">
                        <h1 className="hero-title text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 10)' }}>Digital Platform Outcomes</h1>
                        <p className="mt-4 fs-17 text-white font-weight-bold" style={{ textShadow: '2px 2px 1px rgba(0, 0, 0, 10)' }}>
                            We enable technology-driven capabilities of an enterprise to effectively leverage digital
                            technologies to transform its operations, increase efficiency, and deliver enhanced value to
                            its customers. Use our solutions and services to get meaningful business outcomes in the
                            following enterprise capability areas.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
