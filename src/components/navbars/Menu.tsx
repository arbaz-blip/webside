
 
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
                                style={{color:"black"}}
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
 
        </Nav>
    );
};
 
export default Menu;
 
 