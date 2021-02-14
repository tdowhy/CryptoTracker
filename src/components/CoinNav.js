import React from 'react';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiDollarSign } from "react-icons/fi";

const CoinNav = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/"><FiDollarSign /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        CryptoTracker
                    </Nav> 
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default CoinNav;
