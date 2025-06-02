import { Col, Container, Row } from 'react-bootstrap';

interface HeroProps {
    logo: string;
    alt: string;
    description?: string;
    textColor?: string;
}

const Hero: React.FC<HeroProps> = ({ logo, alt, description, textColor = 'text-white' }) => {
    return (
        <section className="hero-4 pb-5 pt-8 pt-lg-6 pb-lg-8">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={7} className="text-center position-relative">
                        <img src={logo} alt={alt} style={{ maxWidth: '50%', height: 'auto' }} />
                        <p className={`mt-4 fs-17 ${textColor}`}>{description}</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
