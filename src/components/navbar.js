import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import logo from './logo.png';

export default class Navigationbar extends Component {
    render() {
        return (
            <Navbar expand="lg" className="main-nav" fixed='top'>
                <Container className='nav-sub-container'>
                    <Navbar.Brand as={Link} to="/">
                        <img className="logo" src={logo} alt='logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/" className='nav-link-a'>Home</Nav.Link>
                            <Nav.Link as={Link} to="/top" className='nav-link-a'>Top</Nav.Link>
                            <Nav.Link as={Link} to="/trending" className='nav-link-a'>Trending</Nav.Link>
                            <Nav.Link as={Link} to="/science" className='nav-link-a'>Science</Nav.Link>
                            <Nav.Link as={Link} to="/entertainment" className='nav-link-a'>Entertainment</Nav.Link>
                            <Nav.Link as={Link} to="/sports" className='nav-link-a' style={{ marginRight: '0px !important' }}>Sports</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
