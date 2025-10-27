import { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import classNames from 'classnames';
import "./navbar.css";

// images
import logo from '../../assets/images/official.svg';
import logoLight from '../../assets/images/white.svg';

type NavbarProps = {
    isSticky?: boolean;
    navClass?: string;
    buttonClass?: string;
    fixedWidth?: boolean;
    hideSearch?: boolean;
};

const Navbar5 = ({ isSticky, navClass, buttonClass, fixedWidth, hideSearch }: NavbarProps) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (!isSticky) return;

        const btnTop = document.getElementById('btn-back-to-top');
        const navbar = document.getElementById('sticky');

        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Show back-to-top button
            if (btnTop) {
                btnTop.classList.toggle('show', scrollTop >= 50);
            }

            // Add sticky class
            if (navbar) {
                navbar.classList.toggle('navbar-sticky', scrollTop >= 100);
            }

            // Toggle background based on scroll position
            setScrolled(scrollTop >= 100);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isSticky]);

    // Combine default navClass with scroll-based background change
    const combinedNavClass = classNames(
        'topnav-menu',
        navClass,
        scrolled ? 'navbar-light bg-white shadow-sm' : 'navbar-transparent text-white'
    );

    const logoSrc = scrolled ? logo : logoLight;

    return (
        <header>
            <Navbar
                id={isSticky ? 'sticky' : ''}
                collapseOnSelect
                expand="lg"
                className={combinedNavClass}
            >
                <Container fluid={!fixedWidth}>
                    <Navbar.Brand href="/" className="logo d-flex align-items-center">
                        <img src={logoSrc} height="40" className="align-middle" alt="Cinergie Digital" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="topnav-menu-content">
                        {!hideSearch && (
                            <Nav className="align-items-lg-center d-flex me-auto">
                                <Nav.Item as="li">
                                    <form id="search" className="form-inline d-none d-sm-flex">
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
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link href="/" className="px-3">Home</Nav.Link>
                            <Nav.Link href="/digital-platform-components" className="px-3">About Us</Nav.Link>
                            <Nav.Link href="/Industries" className="px-3">Industries</Nav.Link>
                            {/* ✅ New Products Dropdown */}
                            <NavDropdown title="Products" id="products-dropdown" className="">
                                <NavDropdown.Item href="/Solutions/akinon">Akinon</NavDropdown.Item>
                                <NavDropdown.Item href="/Solutions/bct">BCT</NavDropdown.Item>
                                <NavDropdown.Item href="/Solutions/singlestore">SingleStore</NavDropdown.Item>
                                <NavDropdown.Item href="/Solutions/nintex">Nintex</NavDropdown.Item>
                                <NavDropdown.Item href="/Solutions/tibco">Tibco</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/services" className="px-3">Services</Nav.Link>
                            <Nav.Link href="/team" className="px-3">Resources</Nav.Link>
                            <Nav.Link href="/career" className="px-3">Career</Nav.Link>
                            <Nav.Link href="/contact" className="px-3">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Navbar5;