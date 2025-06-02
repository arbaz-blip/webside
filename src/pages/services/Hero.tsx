import { Col, Container, Row } from 'react-bootstrap';

const Hero = () => {
    return (
        <section className="hero-4 pb-5 pt-8 pt-lg-6 pb-lg-8">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={12} className="text-center position-relative">
                        <h1 className="hero-title text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 10)' }}>Empowering Your Business With IT Services</h1>
                        <p className="mt-4 fs-17 text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 10)' }}>
                            We are an information technology service provider, offering a wide range of professional
                            services to help businesses stay ahead in the digital landscape. Our goal is to provide you
                            with the resources, and expertise you need to succeed.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
