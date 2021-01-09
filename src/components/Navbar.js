import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {
  PersonFill,
  BookFill,
  CameraFill,
  TelephoneFill,
} from "react-bootstrap-icons";
import "./GPCSS.css";
class Navbars extends React.Component {
  render() {
    return (
      <Navbar
        style={{
          backgroundColor: "black",
        }}
        expand="lg"
        sticky="top"
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
              <span className="ho"> About Me</span>
            </Nav.Link>
            <Nav.Link
              href="#skills"
              style={{
                color: "white",
              }}
            >
              <BookFill />
              <span className="ho"> Skills</span>
            </Nav.Link>
            <Nav.Link
              href="#projects"
              style={{
                color: "white",
              }}
            >
              <CameraFill />
              <span className="ho"> Projects</span>
            </Nav.Link>
            <Nav.Link
              href="#contactMe"
              style={{
                color: "white",
              }}
            >
              <TelephoneFill />
              <span className="ho"> Contact Me</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navbars;
