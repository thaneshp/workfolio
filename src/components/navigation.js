import React, { Component } from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

//CURRENTLY UNUSED. Navigation component made using React-Bootstrap
class Navigation extends Component {
    render() {
        return(
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="#home"><h4><b>WORKFOLIO</b></h4></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                            <Nav.Link href="/alerts">Alerts</Nav.Link>
                            <Nav.Link href="/contact">Contact Us</Nav.Link>
                            <NavDropdown title="My Profile" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Log Out</NavDropdown.Item>
                                <NavDropdown.Item href="/myprofile">My Profile</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

// export default Navigation;
