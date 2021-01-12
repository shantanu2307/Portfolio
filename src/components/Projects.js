import React from "react";
import "./GPCSS.css";
import { Card } from "react-bootstrap";
class Project extends React.Component {
  render() {
    return (
      <div id="projects">
        <Card>
          <Card.Header className="heading">
            <b>Projects!</b>
          </Card.Header>
          <Card.Body></Card.Body>
        </Card>
        <div
          style={{
            marginTop: "10%",
            marginLeft: "47%",
          }}
        ></div>
      </div>
    );
  }
}
export default Project;
