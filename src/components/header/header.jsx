/* eslint-disable */
import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, NavbarBrand, Navbar, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';

import logo from '../../assets/images/logos/hmlogo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    /*--------------------------------------------------------------------------------*/
    /*To open NAVBAR in MOBILE VIEW                                                   */
    /*--------------------------------------------------------------------------------*/

    return (
        <div className="topbar" id="top">
            <div className="header6">
                <Container className="po-relative">
                    <Navbar className="navbar-expand-lg h6-nav-bar">
                        <NavbarBrand href="/"><img src={logo} alt="homoroyal" style={{width:"150px"}} /></NavbarBrand>
                        <NavbarToggler onClick={toggle}><span className={isOpen?"ti-close":"ti-menu"}></span></NavbarToggler>

                        
                        
                    </Navbar>
                </Container>
                
            </div>
            {isOpen &&<div>
                <ul className='header-nav-links-list'>
                    <li>Home</li>
                    <li>Blog</li>
                    <li>Videos</li>
                    <li>FAQ</li>
                    <li>Contact Us</li>
                    <li>About</li>
                    <li>Request Quote</li>
                </ul>
                </div>}
        </div>
    );

}
export default Header;
