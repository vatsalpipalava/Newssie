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

import Home from './home';
import Top from './top';
import Trending from './trending';
import Science from './science';
import Entertainment from './entertainment';
import Sports from './sports';

export default class Navigationbar extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar expand="lg" className="bg-body-tertiary main-nav" bg="primary" data-bs-theme="dark" fixed='top'>
                        <Container className='nav-sub-container'>
                            <Navbar.Brand as={Link} to="/">Newssie</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto" variant="pills" defaultActiveKey="link-1">
                                    <Nav.Link as={Link} to="/" className='nav-link-a' eventKey="link-1">Home</Nav.Link>
                                    <Nav.Link as={Link} to="/top" className='nav-link-a' eventKey="link-2">Top</Nav.Link>
                                    <Nav.Link as={Link} to="/trending" className='nav-link-a' eventKey="link-3">Trending</Nav.Link>
                                    <Nav.Link as={Link} to="/science" className='nav-link-a' eventKey="link-4">Science</Nav.Link>
                                    <Nav.Link as={Link} to="/entertainment" className='nav-link-a' eventKey="link-5">Entertainment</Nav.Link>
                                    <Nav.Link as={Link} to="/sports" className='nav-link-a' eventKey="link-6" style={{ marginRight: '0px !important' }}>Sports</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/top" element={<Top />} />
                        <Route path="/trending" element={<Trending />} />
                        <Route path="/science" element={<Science />} />
                        <Route path="/entertainment" element={<Entertainment />} />
                        <Route path="/sports" element={<Sports />} />
                    </Routes>
                </div>
            </Router>
        )
    }
}
