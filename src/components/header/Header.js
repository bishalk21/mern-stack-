import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import titleImage from "../../assets/titleLogo.png";
import "./header.css";

export const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={titleImage}
              className="title-image p-1 d-inline-block align-top"
              alt="MERN STACK"
              max-width="160px"
              height="62px"
            />
          </Navbar.Brand>
          {/* login button to link */}
          <Nav>
            <Button variant="outline-success" size="lg">
              <Nav.Link href="/login">Login</Nav.Link>
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
