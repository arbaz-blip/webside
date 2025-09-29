// import { Nav, Dropdown, Row, Col } from 'react-bootstrap';
// import { NavLink, useLocation } from 'react-router-dom';
// import FeatherIcon from 'feather-icons-react';
// import classNames from 'classnames';
// import { HashLink } from 'react-router-hash-link';

// type MenuProps = {
//     showDownload?: boolean;
//     navClass?: string;
//     buttonClass?: string;
// };

// const Menu = ({ navClass, buttonClass, showDownload }: MenuProps) => {
//     let location = useLocation();

//     const isActiveRoute = (path: string) => {
//         if (location.pathname) {
//             return location.pathname.includes(path);
//         }
//         return false;
//     };

//     return (
//         <Nav as="ul" className={classNames('align-items-lg-center', navClass)}>
//             {/* Home */}
//             <Nav.Item as="li">
//                 <NavLink to="/" end className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
//                     Home
//                 </NavLink>
//             </Nav.Item>

            
//                         <Nav.Item as="li">
//                             <hr className="my-2" />
//                         </Nav.Item>

//                         <Nav.Item as="li">
//                         <NavLink
//                                 to="/career"
//                                 end
//                                 className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
//                                 Careers
//                             </NavLink>

//                         <a
//                                 href="https://www.linkedin.com/company/cinergie-digital/jobs/"
//                                 target='_blank'
//                                 rel="noreferrer"
//                                 className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
//                                 Careers
//                             </a>
//                         </Nav.Item>
//                     </Nav>)
      export {}; // <-- Add this at the top or bottom      
          

            

//             {/* Contact */}
//             <Nav.Item as="li">
//                 <NavLink
//                     to="/contact"
//                     end
//                     className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
//                     Contact
//                 </NavLink>
//             </Nav.Item>
           
       
   
// };

// export default Menu;
