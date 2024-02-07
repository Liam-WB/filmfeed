import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/filmfeed-logo.png';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Navbar.Brand>
                <img src={logo} alt='logo' height='50'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto text-left">
                    <Nav.Link>
                        <i className='fas fa-home'></i>Home
                    </Nav.Link>
                    <Nav.Link>
                        <i className='fas fa-sign-in-alt'></i>Sign In
                    </Nav.Link>
                    <Nav.Link>
                        <i className='fas fa-user-plus'></i>Sign Up
                    </Nav.Link>
                    <Nav.Link>
                        <i class="fa-solid fa-envelope"></i>Contact Us
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar