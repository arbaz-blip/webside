import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

interface ConnectProps {
    title: string;
    description: string;
    titleClassName?: string;
    backgroundGradient?: string;
}

const Connect: React.FC<ConnectProps> = ({ title, description, titleClassName = 'display-4', backgroundGradient = '' }) => {
    return (
        <section className={`section py-4 pt-sm-6 pb-sm-6 position-relative ${backgroundGradient}`} data-aos="fade-up">
            <Container className="text-center">
                <Row className="align-items-center" data-aos="fade-up" data-aos-duration="1500">
                    <Col>
                        <h1 className={`${titleClassName} fw-medium`}>{title}</h1>
                        <p className="text-muted mx-auto">{description}</p>

                        <div className="text-center mt-5">
                            <Link to="/contact" className="btn btn-primary">
                                <FeatherIcon className="icon icon-xxs ms-1" icon="mail" /> Contact Us
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Connect;
