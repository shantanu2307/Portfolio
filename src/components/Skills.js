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
              <div>C++</div>
              <div>HTML</div>
              <div>CSS</div>
              <div>BootStrap-4</div>
              <div>JavaScript</div>
              <div>Python</div>
              <div>React</div>
              <div>Node</div>
              <div>MySQL</div>
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
