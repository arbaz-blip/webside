import { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// components
// import Menu from './Menu';

// images
import logo from '../../assets/images/official.svg';

type Navbar3Props = {
    isSticky?: boolean;
    navClass?: string;
    buttonClass?: string;
    fixedWidth?: boolean;
};

const Navbar3 = ({ isSticky, navClass, buttonClass, fixedWidth }: Navbar3Props) => {

    // on scroll add navbar class and back to top button
    useEffect(() => {
        const btnTop = document.getElementById('btn-back-to-top');
        const navbar = document.getElementById('sticky');
        window.addEventListener('scroll', (e) => {
            e.preventDefault();
            if (btnTop) {
                if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
                    btnTop.classList.add('show');
                } else {
                    btnTop.classList.remove('show');
                }
            }
            if (navbar) {
                if (document.body.scrollTop >= 240 || document.documentElement.scrollTop >= 240) {
                    navbar.classList.add('navbar-sticky');
                } else {
                    navbar.classList.remove('navbar-sticky');
                }
            }
        });
    }, []);

    return (
        <header>
            <Navbar
                id={isSticky ? 'sticky' : ''}
                collapseOnSelect
                expand="lg"
                className={classNames('topnav-menu', navClass)}
            >
                <Container fluid={!fixedWidth}>
                    <Navbar.Brand href="/">
                        <img src={logo} height="30" className="d-inline-block align-top" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="ms-auto">
                            <Nav.Link href="/" className="px-3">Home</Nav.Link>
                            <Nav.Link href="/career" className="px-3">Career</Nav.Link>
                            <Nav.Link href="/contact" className="px-3">Contact</Nav.Link>
                            <Nav.Link href="/Industries" className="px-3">Industries</Nav.Link>
                            <Nav.Link href="/services" className="px-3">Services</Nav.Link>
                            <Nav.Link href="/digital-platform-components" className="px-3">About Us</Nav.Link>
                            <Nav.Link href="/team" className="px-3">resources</Nav.Link>
                                                </Nav>

                        <Nav as="ul" className="align-items-lg-center">
                            <Nav.Item as="li">
                                <Link
                                    to="#"
                                    className={classNames('btn', buttonClass ? buttonClass : 'btn-soft-primary')}
                                >
                                    Download
                                </Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Navbar3;
