import { Col, Container, Row } from 'react-bootstrap';

const Hero = () => {
    return (
        <section
    className="hero-4 pb-5 pt-8 pt-lg-6 pb-lg-8"
    style={{
        position: 'relative',
       
        minHeight: '85vh', // 👈 Fix height here
        display: 'flex',
        alignItems: 'center', // vertically center
        padding: '6rem 2rem',
          
            overflow: 'hidden',
    }}
>

            <Container>
                <Row className="justify-content-center">
                    <Col lg={7} className="text-center position-relative">
                        <h1 className="hero-title text-white" style={{ 
                            fontSize: '3.2rem',
                            fontWeight: 600,
                            lineHeight: 1.2,
                            // textShadow: '2px 2px 4px rgba(0, 0, 0, 10)' , 
                            fontFamily: 'Garet'
                        }}>Career</h1>
                        <p 
  style={{
    marginTop: '2rem',
    fontWeight: 500,
    fontSize: '1rem',
    maxWidth: '1000px',
    textAlign: 'center',
    // textShadow: '1px 1px 3px rgba(0, 0, 0, 1)',
    color: '#fff',
    fontFamily: 'Garet',
  }}
>
                            Join our team and drive innovation with passion, purpose, and endless opportunities for growth.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;