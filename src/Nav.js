import React from 'react';
import PureLogo from './img/purelogo240.png';
import { Button, Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './css/Nav.css';

function NavPage() {
  return (
    <Container>
        <Navbar bg="white" expand="lg">
            <Navbar.Brand>
                <NavLink to="/" className="navlink-button" activeClassName="navlink-selected">
                    <img src={PureLogo} alt="Pure Mold Solution of San Antonio" />
                </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
                <NavLink to="/" exact className="navlink-button" activeClassName="navlink-selected">
                    Home
                </NavLink>
                <NavLink to="/faq" className="navlink-button" activeClassName="navlink-selected">
                    FAQ
                </NavLink>
                <NavLink to="/testimonials" className="navlink-button" activeClassName="navlink-selected">
                    Testimonials
                </NavLink>
                <NavLink to="/contact" className="navlink-button" activeClassName="navlink-selected">
                    Contact Us
                </NavLink>
                <NavLink to="/contact" id="navlink-request" className="navlink-button" activeClassName="navlink-selected">
                    <Button variant="outline-primary" >
                        Request a Free Quote!
                    </Button>
                </NavLink>
            </Navbar.Collapse>
        </Navbar>
    </Container>
  );
}

export default NavPage;