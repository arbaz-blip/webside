import { Card, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';

// types
import { Capabilities } from './types';

type CapabilitiesProps = {
    capabilities: Capabilities[];
};

const DigitalCapabilities = ({ capabilities }: CapabilitiesProps) => {
    return (
        <section className="position-relative bg-gradient2 py-6" id="capabilities">
            <div className="divider top d-none d-sm-block"></div>

            <Container>
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <h1 className="hero-title fw-semibold">Our Digital Capabilities</h1>
                        <p className="text-muted mx-auto">
                            Modern enterprises need digital capabilities for customer engagement, partner ecosystems,
                            operational efficiency and data driven decision making. The digital capabilities that we
                            offer to our enterprise customers include:
                        </p>
                    </Col>
                </Row>
                <Row className="pt-5 features-5">
                    {(capabilities || []).map((capabilities, index) => {
                        return (
                            <Col md={4} key={index.toString()}>
                                <Card
                                    className="border position-relative hoverable overflow-hidden d-flex justify-content-center"
                                    data-aos="fade-up"
                                    data-aos-duration="500">
                                    <Card.Body>
                                        <span
                                            className={classNames(
                                                'icon icon-sm text-primary'
                                            )}>
                                            <FeatherIcon
                                                icon={capabilities.icon}
                                                className={classNames('icon-dual-' + capabilities.variant)}
                                            />
                                        </span>

                                        <h4 className="mt-3 mb-2 fw-semibold">{capabilities.title}</h4>
                                        <p className="text-muted mb-0">{capabilities.description}</p>
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

export default DigitalCapabilities;
