import { Badge, Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const WhatWeDo = () => {
    return (
        <section id="whatwedo" className="position-relative hero-9">
            <div className="hero-top">
                <Container>
                    <Row className="py-6">
                        <Col>
                            <Badge pill bg="" className="badge-soft-primary px-2 py-1">
                                What We Do
                            </Badge>
                            <h1 className="hero-title fw-bold">
                                We are on a mission to{' '}
                                <span className="highlight highlight-primary d-inline-block">revolutionize</span> the
                                digital landscape
                            </h1>
                            <p className="mt-3 text-muted">
                                We at Cinergie Digital lead the charge in pioneering transformative solutions for a
                                seamless digital future.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="position-relative">
                <div className="hero-cta">
                    <Button variant="primary" className="btn-cta">
                        <Link to="/contact" className="text-white">Let's Connect</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
