import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <section className="position-relative pt-7 pb-4">
            <Container>
                <Row data-aos="fade-up">
                    <Col lg={4}>
                        <span className="border border-top w-25 border-soft-primary d-block"></span>
                        <h1 className="hero-title fw-semibold mt-4">About Us</h1>
                    </Col>
                    <Col lg={8}>
                        <p className="mb-4 text-muted">
                            Cinergie Digital is a globally orientated technology services company with headquarters in
                            Dubai. Through our offices in UAE and Pakistan, we offer a wide range of solutions to help
                            businesses stay ahead in an ever-evolving digital landscape. Our goal is to provide you with
                            the digital capabilities, technical expertise and professional services you need to succeed.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
