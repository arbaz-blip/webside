import { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import classNames from 'classnames';
import "./nav.css";
// component

// images
import logo from '../../assets/images/official.svg';

type Navbar2Props = {
    isSticky?: boolean;
    navClass?: string;
    buttonClass?: string;
    fixedWidth?: boolean;
    hideSearch?: boolean;
};

const Navbar2 = ({ isSticky, navClass, buttonClass, fixedWidth, hideSearch }: Navbar2Props) => {

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
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="me-3" />
                    <Navbar.Brand href="/" className="me-lg-4 me-auto">
                        <img src={logo} height="30" className="d-inline-block align-top" alt="" />
                    </Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">
    {!hideSearch && (
        <Nav className="align-items-lg-center d-flex me-auto">
            <Nav.Item as="li">
                <form id="search" className="form-inline d-none d-sm-flex me-lg-3">
                    <div className="form-control-with-hint ms-lg-2 ms-xl-4">
                        <input
                            type="text"
                            className="form-control"
                            id="search-input"
                            placeholder="What are you looking for?"
                        />
                        <span className="form-control-feedback uil uil-search fs-16"></span>
                    </div>
                </form>
            </Nav.Item>
        </Nav>
    )}

    <Nav className="ms-auto">
                                    <Nav.Link href="/" className="px-3">Home</Nav.Link>
                            <Nav.Link href="/digital-platform-components" className="px-3">About Us</Nav.Link>
                            <Nav.Link href="/Industries" className="px-3">Industries</Nav.Link>
                            <Nav.Link href="/career" className="px-3">Career</Nav.Link>
                            <Nav.Link href="/services" className="px-3">Services</Nav.Link>
                            <Nav.Link href="/team" className="px-3">Resources</Nav.Link>
                            <Nav.Link href="/contact" className="px-3">Contact</Nav.Link>
                                                </Nav>
</Navbar.Collapse>


                    
                </Container>
            </Navbar>
        </header>
    );
};

export default Navbar2;
