import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavComponent = ({ getCPU }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">SysTrack</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="https://github.com/jayhan1109/systrack">
            GitHub
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/jayhan1109/">
            LinkedIn
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavComponent;
