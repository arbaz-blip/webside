import { Col, Container, Row } from 'react-bootstrap';

const Hero = () => {
    return (
                 <section
            className="hero-4 pt-lg-6 pb-sm-9 pb-6 pt-9"
           style={{
    position: 'relative',
    zIndex: 2,
    minHeight: '85vh',
    display: 'flex',
    alignItems: 'center',
   
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    fontFamily: 'Garet'
  }}
        >
            <Container>
                <Row className="justify-content-center">
                    <Col lg={7} className="text-center">
                        <h1 className="hero-title mb-0 text-white" style={{ 
                            fontSize: '3.2rem',
                            fontWeight: 600,
                            lineHeight: 1.2,
                            // textShadow: '2px 2px 4px rgba(0, 0, 0, 10)' ,
                            fontFamily: 'Garet'
                        }}>Contact Us</h1>
                        <p className="mb-4 fs-17 text-white" style={{ 
                            fontSize: '1rem',
                            // textShadow: '2px 2px 4px rgba(0, 0, 0, 10)' ,
                            fontFamily: 'Garet'
                        }}>
                            Please fill out the following form and we will get back to you shortly
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;