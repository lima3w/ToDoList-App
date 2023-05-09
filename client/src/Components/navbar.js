import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { ReactComponent as Logo } from "./img/logo.svg";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBar() {
  return (
    <Container fluid="lg">
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
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/newToDo">New ToDo</Nav.Link>
                    {/* <Nav.Link href="settings">Settings</Nav.Link>
                    <Nav.Link href="logout">Logout</Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Container>
  );
}
