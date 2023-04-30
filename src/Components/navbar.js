import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { ReactComponent as Logo } from "./img/logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">
            <Logo
            alt=""
            width="30"
            height="30"
            className="d-inline-block align-top mx-3"
            />
            Lima3's To Do List
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="newToDo">New ToDo</Nav.Link>
                <Nav.Link href="settings">Settings</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                    Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                    Separated link
                    </NavDropdown.Item>
                </NavDropdown> */}
                <Nav.Link href="logout">Logout</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}
