import React from "react";
import { Card } from "react-bootstrap";
import ProgrssBar from "./ProgressBar";
import "./GPCSS.css";
class Skills extends React.Component {
  render() {
    return (
      <div id="skills">
        <Card>
          <Card.Header className="heading">
            <b>Skills !</b>
          </Card.Header>
          <Card.Body>
            <div className="container">
              <div className="item">
                <i class="fab fa-html5 full"></i>
                <ProgrssBar title={"HTML-5"} progress={82} />
              </div>
              <div className="item">
                <i class="fab fa-css3-alt full"></i>
                <ProgrssBar title={"CSS-3"} progress={87} />
              </div>
              <div className="item">
                <i class="fab fa-bootstrap full"></i>
                <ProgrssBar title={"Bootstrap-4"} progress={85} />
              </div>
              <div className="item">
                <i class="fab fa-sass full"></i>
                <ProgrssBar title={"SASS"} progress={70} />
              </div>
              <div className="item">
                <i class="fab fa-js full"></i>
                <ProgrssBar title={"javaScript"} progress={90} />
              </div>
              <div className="item">
                <i class="fab fa-python full"></i>
                <ProgrssBar title={"Python"} progress={60} />
              </div>
              <div className="item">
                <i class="fab fa-react full"></i>
                <ProgrssBar title={"React"} progress={85} />
              </div>
              <div className="item">
                <i class="fab fa-node-js full"></i>
                <ProgrssBar title={"Node"} progress={85} />
              </div>
              <div className="item">
                <i class="fas fa-database full"></i>
                <ProgrssBar title={"MongoDB"} progress={70} />
              </div>
            </div>
          </Card.Body>
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

export default Skills;
