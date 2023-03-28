import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Nav";

const Header = () => {
  const logOut = () => {
    localStorage.removeItem("SignUp");
    window.location.reload();
  };
  return (
    <>
      {/* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Button variant="outline-success" onClick={logOut}>
              Logout
            </Button>
          </Nav>
        </Container>
      </Navbar> */}
    </>
  );
};

export default Header;
