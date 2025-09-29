import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import "./footer.css";
import Logo from 'assets/images/official.svg';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div className="pt-5 pb-3 position-relative bg-light">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="me-5">
                            <Link to="#" className="navbar-brand me-lg-4 me-auto">
                                <img src={Logo} alt="logo" height="50" className="d-inline-block align-top" />
                            </Link>
                            <ul className="list-unstyled">
                                <li className="my-2">
                                    <p className="text-muted">
                                        Office 509, Haly Tower Sector-R, DHA Phase 2, Lahore, Pakistan
                                    </p>
                                </li>
                                <li className="my-2">
                                    <p className="text-muted">
                                        Office 1701, The Binary, Al Abraj Street, Business Bay, Dubai, UAE
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <Row>
                            <Col xs="auto">
                                <div className="ps-md-5">
                                    <h5 className="text-dark mb-4 fw-semibold">Get In Touch</h5>
                                    <ul className="list-unstyled">
                                        <li className="my-1">
                                            <a href="mailto:info@cinergiedigital.com" className="text-muted">
                                                info@cinergiedigital.com
                                            </a>
                                        </li>
                                        <li className="my-2">
                                            <p className="text-muted">+92 42 32020590</p>
                                        </li>
                                        <li className="my-2">
                                            <p className="text-muted">+971 4 551 4344</p>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs="auto">
                                <div className="ps-md-5">
                                    <h5 className="text-dark mb-4 fw-semibold">Company</h5>
                                    <ul className="list-unstyled">
                                        <li className="my-2">
                                            <HashLink to="/#whatwedo" className="text-muted">
                                                About
                                            </HashLink>
                                        </li>
                                        <li className="my-2">
                                            <Link to="/services" className="text-muted">
                                                Services
                                            </Link>
                                        </li>
                                        <li className="my-2">
                                            <Link to="/contact" className="text-muted">
                                                Contact
                                            </Link>
                                        </li>
                                        <li className="my-2">
                                            <Link
                                                to="https://www.linkedin.com/company/cinergie-digital/jobs/"
                                                className="text-muted">
                                                Careers
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>

                            {/* <Col xs="auto">
                                <div className="ps-md-5">
                                    <h5 className="text-dark mb-4 fw-semibold">Links</h5>
                                    <ul className="list-unstyled">
                                        <li className="my-2">
                                            <Link to="/solutions/tibco" className="text-muted">
                                                TIBCO
                                            </Link>
                                        </li>
                                        <li className="my-2">
                                            <Link to="/solutions/singlestore" className="text-muted">
                                                SingleStore
                                            </Link>
                                        </li>
                                        <li className="my-2">
                                            <Link to="/solutions/nintex" className="text-muted">
                                                Nintex
                                            </Link>
                                        </li> */}
                                        {/* <li className="my-2">
                                            <Link to="/solutions/yellow-ai" className="text-muted">
                                                Yellow ai
                                            </Link>
                                        </li>
                                        <li className="my-2">
                                            <Link to="/solutions/ibm" className="text-muted">
                                                IBM
                                            </Link>
                                        </li> */}
                                        {/* <li className="my-2">
                                            <Link to="/solutions/bct" className="text-muted">
                                                BCT
                                            </Link>
                                        </li>
                                        <li className="my-2">
                                            <Link to="/solutions/akinon" className="text-muted">
                                                Akinon
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col> */}
                        </Row>
                    </Col>
                </Row>
                <hr />
                <Row className="text-md-start text-center">
                    <Col md={6}>
                        <p className="pb-0 mb-0 text-muted">
                            {new Date().getFullYear()} © Cinergie Digital. All rights reserved.
                        </p>
                    </Col>
                    <Col md={6} className="text-md-end">
                        <div className="align-items-end mt-md-0 mt-4">
                            <ul className="list-unstyled mb-0">
                                <li className="d-inline-block me-4">
                                    <a
                                        href="https://www.linkedin.com/company/cinergie-digital"
                                        target="_blank"
                                        rel="noreferrer">
                                        <FeatherIcon icon="linkedin" className="icon icon-xs" />
                                    </a>
                                </li>
                                <li className="d-inline-block me-4">
                                    <a
                                        href="https://www.facebook.com/cinergiedigital.official"
                                        target="_blank"
                                        rel="noreferrer">
                                        <FeatherIcon icon="facebook" className="icon icon-xs" />
                                    </a>
                                </li>
                                <li className="d-inline-block me-4">
                                    <a href="https://twitter.com/CinergieD" target="_blank" rel="noreferrer">
                                        <FeatherIcon icon="twitter" className="icon icon-xs" />
                                    </a>
                                </li>
                                <li className="d-inline-block me-4">
                                    <a
                                        href="https://www.instagram.com/cinergiedigital"
                                        target="_blank"
                                        rel="noreferrer">
                                        <FeatherIcon icon="instagram" className="icon icon-xs" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
