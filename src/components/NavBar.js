import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/filmfeed-logo.png';
import styles from '../styles/NavBar.module.css';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <NavLink to="/">
                <Navbar.Brand>
                    <img src={logo} alt='logo' height='50'/>
                </Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto text-left">
                    <NavLink 
                    exact
                    className={styles.NavLink} 
                    activeClassName={styles.Active} 
                    to="/">
                        <i className='fas fa-home'></i>Home
                    </NavLink>
                    <NavLink 
                    className={styles.NavLink} 
                    activeClassName={styles.Active} 
                    to="/signin">
                        <i className='fas fa-sign-in-alt'></i>Sign In
                    </NavLink>
                    <NavLink 
                    className={styles.NavLink} 
                    activeClassName={styles.Active}
                    to="/signup">
                        <i className='fas fa-user-plus'></i>Sign Up
                    </NavLink>
                    <NavLink 
                    className={styles.NavLink} 
                    activeClassName={styles.Active} 
                    to="/contactus">
                        <i class="fa-solid fa-envelope"></i>Contact Us
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar