import { Nav, Dropdown, Row, Col } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';
import { HashLink } from 'react-router-hash-link';

type MenuProps = {
    showDownload?: boolean;
    navClass?: string;
    buttonClass?: string;
};

const Menu = ({ navClass, buttonClass, showDownload }: MenuProps) => {
    let location = useLocation();

    const isActiveRoute = (path: string) => {
        if (location.pathname) {
            return location.pathname.includes(path);
        }
        return false;
    };

    return (
        <Nav as="ul" className={classNames('align-items-lg-center', navClass)}>
            {/* Home */}
            <Nav.Item as="li">
                <NavLink to="/" end className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                    Home
                </NavLink>
            </Nav.Item>

            {/* Company */}
            <Dropdown as={'li'} className="nav-item">
                <Dropdown.Toggle
                    as={Nav.Link}
                    id="navbarPages"
                    className={classNames(isActiveRoute('/pages') ? 'active' : '')}>
                    Company{' '}
                    <FeatherIcon icon="chevron-down" className="d-inline-block icon icon-xxs ms-1 mt-lg-0 mt-1" />
                </Dropdown.Toggle>

                <Dropdown.Menu renderOnMount>
                    <Nav as={'ul'} navbar={false}>
                        <Nav.Item as="li">
                            <HashLink
                                to={'/#whatwedo'}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                                What We Do
                            </HashLink>
                        </Nav.Item>

                        <Nav.Item as="li">
                            <hr className="my-2" />
                        </Nav.Item>

                        <Nav.Item as="li">
                            <HashLink
                                to={'/#capabilities'}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                                Digital Capabilities
                            </HashLink>
                        </Nav.Item>

                        <Nav.Item as="li">
                            <hr className="my-2" />
                        </Nav.Item>

                        <Nav.Item as="li">
                            <HashLink
                                to={'/#partnership'}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                                Partnerships
                            </HashLink>
                        </Nav.Item>

                        <Nav.Item as="li">
                            <hr className="my-2" />
                        </Nav.Item>

                        <Nav.Item as="li">
                            <HashLink
                                to={'/#services'}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                                Technology Services
                            </HashLink>
                        </Nav.Item>

                        <Nav.Item as="li">
                            <hr className="my-2" />
                        </Nav.Item>

                        <Nav.Item as="li">
                            <NavLink
                                to="/team"
                                end
                                className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                                Team
                            </NavLink>
                        </Nav.Item>

                        {/* <Nav.Item as="li">
                            <hr className="my-2" />
                        </Nav.Item> */}

                        {/* <Nav.Item as="li"> */}
                        {/* <NavLink
                                to="/career"
                                end
                                className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                                Careers
                            </NavLink> */}

                        {/* <a
                                href="https://www.linkedin.com/company/cinergie-digital/jobs/"
                                target='_blank'
                                rel="noreferrer"
                                className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                                Careers
                            </a> */}
                        {/* </Nav.Item> */}
                    </Nav>
                </Dropdown.Menu>
            </Dropdown>

            {/* Services */}
            <Dropdown as={'li'} className="nav-item">
                <Dropdown.Toggle
                    as={Nav.Link}
                    id="navbarLandings"
                    className={classNames(isActiveRoute('/landing') ? 'active' : '')}>
                    Services{' '}
                    <FeatherIcon icon="chevron-down" className="d-inline-block icon icon-xxs ms-1 mt-lg-0 mt-1" />
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu-lg" renderOnMount>
                    <Row className="mx-0">
                        <Col md={6} className="p-lg-0">
                            <label className="nav-title fw-semibold fs-14 text-dark text-uppercase mb-3">
                                Digital Capabilities
                            </label>
                            <Nav as="ul" navbar={false}>
                                <Nav.Item as="li">
                                    <NavLink
                                        to="/digital-platform-outcomes"
                                        end
                                        className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1" style={{ whiteSpace: 'nowrap' }}>Digital Platform Outcomes</div>
                                        </div>
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <hr className="my-2" />
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <NavLink
                                        to="/digital-platform-components"
                                        end
                                        className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1" style={{ whiteSpace: 'nowrap' }}>Digital Platform Components</div>
                                        </div>
                                    </NavLink>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col md={6} className="p-lg-0">
                            <label className="nav-title fw-semibold fs-14 text-dark text-uppercase mb-3">
                                Services
                            </label>
                            <Nav as="ul" navbar={false}>
                                <Nav.Item as="li">
                                    <HashLink
                                        to={'/services#datastrategy'}
                                        className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                Data Strategy
                                            </div>
                                        </div>
                                    </HashLink>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <hr className="my-2" />
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <HashLink
                                        to={'/services#dataengineering'}
                                        className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                Data Engineering
                                            </div>
                                        </div>
                                    </HashLink>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <hr className="my-2" />
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <HashLink
                                        to={'/services#analytics'}
                                        className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                Data Analytics
                                            </div>
                                        </div>
                                    </HashLink>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <hr className="my-2" />
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <HashLink
                                        to={'/services#softwaredevelopment'}
                                        className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                Software Development
                                            </div>
                                        </div>
                                    </HashLink>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <hr className="my-2" />
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <HashLink
                                        to={'/services#maintenance'}
                                        className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                Application Maintenance
                                            </div>
                                        </div>
                                    </HashLink>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <hr className="my-2" />
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <HashLink
                                        to={'/services#team'}
                                        className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                Teams as a Service
                                            </div>
                                        </div>
                                    </HashLink>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <hr className="my-2" />
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <HashLink
                                        to={'/services#augmentation'}
                                        className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                Resource Augmentation
                                            </div>
                                        </div>
                                    </HashLink>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                </Dropdown.Menu>
            </Dropdown>

            {/* Solutions */}
            <Dropdown as={'li'} className="nav-item">
                <Dropdown.Toggle
                    as={Nav.Link}
                    id="navbarPages"
                    className={classNames(isActiveRoute('/pages') ? 'active' : '')}>
                    Solutions{' '}
                    <FeatherIcon icon="chevron-down" className="d-inline-block icon icon-xxs ms-1 mt-lg-0 mt-1" />
                </Dropdown.Toggle>

                <Dropdown.Menu renderOnMount>
                    <Nav as={'ul'} navbar={false}>
                        <Nav.Item as="li">
                            <NavLink
                                to="/solutions/tibco"
                                end
                                className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                                TIBCO
                            </NavLink>
                        </Nav.Item>

                        <Nav.Item as="li">
                            <hr className="my-2" />
                        </Nav.Item>

                        <Nav.Item as="li">
                            <NavLink
                                to="/solutions/singlestore"
                                end
                                className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                                SingleStore
                            </NavLink>
                        </Nav.Item>

                        {/* <Nav.Item as="li">
                            <hr className="my-2" />
                        </Nav.Item>

                        <Nav.Item as="li">
                            <NavLink
                                to="/solutions/yellow-ai"
                                end
                                className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                                Yellow.ai
                            </NavLink>
                        </Nav.Item> */}

                        {/* <Nav.Item as="li">
                            <hr className="my-2" />
                        </Nav.Item>

                        <Nav.Item as="li">
                            <NavLink
                                to="/solutions/ibm"
                                end
                                className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                                IBM
                            </NavLink>
                        </Nav.Item> */}

                        <Nav.Item as="li">
                            <hr className="my-2" />
                        </Nav.Item>

                        <Nav.Item as="li">
                            <NavLink
                                to="/solutions/nintex"
                                end
                                className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                                Nintex
                            </NavLink>
                        </Nav.Item>

                        <Nav.Item as="li">
                            <hr className="my-2" />
                        </Nav.Item>

                        <Nav.Item as="li">
                            <NavLink
                                to="/solutions/bct"
                                end
                                className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                                BCT
                            </NavLink>
                        </Nav.Item>

                        <Nav.Item as="li">
                            <hr className="my-2" />
                        </Nav.Item>

                        <Nav.Item as="li">
                            <NavLink
                                to="/solutions/akinon"
                                end
                                className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                                Akinon
                            </NavLink>
                        </Nav.Item>
                    </Nav>
                </Dropdown.Menu>
            </Dropdown>

            {/* Contact */}
            <Nav.Item as="li">
                <NavLink
                    to="/contact"
                    end
                    className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                    Contact
                </NavLink>
            </Nav.Item>
            {/* careers page */}
            <Nav.Item as="li">
                <NavLink
                    to="/career"
                    end
                    className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                    Careers
                </NavLink>
            </Nav.Item>
        </Nav>
    );
};

export default Menu;
