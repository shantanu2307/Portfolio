import React from "react";
import "./Connect.css";
import { Linkedin, Github, Facebook } from "react-bootstrap-icons";
class Connect extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
        }}
      >
        <div className="icn">
          <a href="https://www.linkedin.com/in/shantanugoyal23/">
            <Linkedin className="size" />
          </a>
        </div>
        <div className="icn">
          <a href="https://github.com/shantanu2307">
            <Github className="size" />
          </a>
        </div>
        <div className="icn">
          <a href="https://www.facebook.com/shantanugoyal23/">
            <Facebook className="size" />
          </a>
        </div>
      </div>
    );
  }
}
export default Connect;
