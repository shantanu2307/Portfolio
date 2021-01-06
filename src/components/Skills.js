import React from "react";
import { Card } from "react-bootstrap";
import { ChevronDoubleDown } from "react-bootstrap-icons";
import "./GPCSS.css";
class Skills extends React.Component {
  render() {
    return (
      <div id="skills">
        <Card>
          <Card.Header className="heading">Skills</Card.Header>
          <Card.Body></Card.Body>
          <Card.Footer></Card.Footer>
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
