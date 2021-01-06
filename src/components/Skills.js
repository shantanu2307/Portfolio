import React from "react";
import { Card } from "react-bootstrap";
import { ChevronDoubleDown } from "react-bootstrap-icons";
import "./GPCSS.css";
import "./Skills.css";
class Skills extends React.Component {
  render() {
    return (
      <div id="skills">
        <Card>
          <Card.Header className="heading">Skills</Card.Header>
          <Card.Body>
            <div className="container">
              <div className="item">C++</div>
              <div className="item">HTML</div>
              <div className="item">CSS</div>
              <div className="item">BootStrap-4</div>
              <div className="item">JavaScript</div>
              <div className="item">Python</div>
              <div className="item">React</div>
              <div className="item">Node</div>
              <div className="item">MySQL</div>
            </div>
          </Card.Body>
        </Card>
        <div
          style={{
            marginTop: "10%",
            marginLeft: "47%",
          }}
        >
          <ChevronDoubleDown className="iconDown" />
        </div>
      </div>
    );
  }
}

export default Skills;
