import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

import hero from 'assets/images/digital-transformation-background.jpg.png'; // ✅ imported as a module

interface ConnectProps {
    title: string;
    description: string;
    titleClassName?: string;
    backgroundGradient?: string;
}

const Connect: React.FC<ConnectProps> = ({
    title,
    description,
    titleClassName = 'display-4',
    backgroundGradient = '',
}) => {
    return (
        <section
            className={`section py-4 pt-sm-6 pb-sm-6 position-relative ${backgroundGradient}`}
            style={{
                backgroundImage: `url(${hero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                
                // background: 'w',
            }}
            data-aos="fade-up"
        >
            <div
                style={{
               // optional dark overlay
                    padding: '2rem',
                }}
            >
                <Container className="text-center">
                    <Row className="align-items-center" data-aos="fade-up" data-aos-duration="1500">
                        <Col>
                            <h1 className={`${titleClassName} fw-medium`} style={{
               // optional dark overlay
                    
                    color: 'black',
                    
                }}>{title}</h1>
                            <p className="text-black mx-auto">{description}</p>

                           <div className="cta-buttons">
        <a href="/contact" className="cta-btn cta-btn-primary" style={{ fontFamily: 'Garet' }}>Get My ROI Audit →</a>
        <a href="/Industries" className="cta-btn cta-btn-secondary" style={{ fontFamily: 'Garet' }}>See All Industries →</a>
      </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default Connect;
