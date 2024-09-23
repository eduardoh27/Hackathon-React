import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';

function NavigationBar() {
  const [isInverted, setIsInverted] = useState(false);

  const renderNavbar = (inverted) => {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          {inverted ? (
            <>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-info">Search</Button>
              </Form>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                </Nav>
                <Navbar.Brand href="#home" className="ms-3">Navbar</Navbar.Brand>
              </Navbar.Collapse>
            </>
          ) : (
            <>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-info">Search</Button>
                </Form>
              </Navbar.Collapse>
            </>
          )}
        </Container>
      </Navbar>
    );
  };

  return (
    <>
      {/* Original */}
      {renderNavbar(false)}
      
      {/* Invertida */}
      {renderNavbar(true)}
    </>
  );
}

export default NavigationBar;
