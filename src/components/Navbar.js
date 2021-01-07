import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {
  PersonFill,
  BookFill,
  CameraFill,
  TelephoneFill,
} from "react-bootstrap-icons";
class Navbars extends React.Component {
  render() {
    return (
      <Navbar
        style={{
          backgroundColor: "black",
        }}
        expand="lg"
      >
        <Navbar.Brand
          href="#home"
          style={{
            color: "red",
          }}
        >
          &lt;Shantanu /&gt;
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{
            backgroundColor: "white",
            borderRadius: "100%",
            height: "60px",
          }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              href="#aboutMe"
              style={{
                color: "white",
              }}
            >
              <PersonFill />
              <span> About Me</span>
            </Nav.Link>
            <Nav.Link
              href="#skills"
              style={{
                color: "white",
              }}
            >
              <BookFill />
              <span> Skills</span>
            </Nav.Link>
            <Nav.Link
              href="#projects"
              style={{
                color: "white",
              }}
            >
              <CameraFill />
              <span> Projects</span>
            </Nav.Link>
            <Nav.Link
              href="#contactMe"
              style={{
                color: "white",
              }}
            >
              <TelephoneFill />
              <span> Contact Me</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navbars;
