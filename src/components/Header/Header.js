import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            {/* making navbar using bootstrap */}
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Nav className="navbar-menu header-items">
                            <NavLink activeStyle={{
                                fontWeight: "bold",
                                color: "#0d6efd",
                            }} to="/home">Home</NavLink>
                            <NavLink activeStyle={{
                                fontWeight: "bold",
                                color: "#0d6efd"
                            }} to="/about">About</NavLink>
                            <NavLink activeStyle={{
                                fontWeight: "bold",
                                color: "#0d6efd"
                            }} to="/services">Services</NavLink>
                            <NavLink activeStyle={{
                                fontWeight: "bold",
                                color: "#0d6efd"
                            }} to="/student">Student</NavLink>
                        </Nav>
                    </Container>
                </Navbar>
                <br />

            </>
        </div >
    );
};

export default Header;