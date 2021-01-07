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
          <Card.Body>
            <div className="container">
              <div
                className="progress"
                style={{
                  border: "1px solid black",
                  width: "40%",
                  height: "40%",
                }}
              >
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{
                    width: "95%",
                    backgroundColor: "#f5c4f0",
                    color: "black",
                  }}
                >
                  <b>CSS</b>
                </div>
              </div>
              <div
                className="progress"
                style={{
                  border: "1px solid black",
                  width: "40%",
                  height: "40%",
                }}
              >
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{
                    width: "90%",
                    backgroundColor: "#d0f582",
                    color: "black",
                  }}
                >
                  <b>HTML</b>
                </div>
              </div>
              <div
                className="progress"
                style={{
                  border: "1px solid black",
                  width: "40%",
                  height: "40%",
                }}
              >
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{
                    width: "70%",
                    backgroundColor: "#d0f582",
                    color: "black",
                  }}
                >
                  <b>BootStrap</b>
                </div>
              </div>
              <div
                className="progress"
                style={{
                  border: "1px solid black",
                  width: "40%",
                  height: "40%",
                }}
              >
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{
                    width: "95%",
                    backgroundColor: "#f5c4f0",
                    color: "black",
                  }}
                >
                  <b>javaScript</b>
                </div>
              </div>
              <div
                className="progress"
                style={{
                  border: "1px solid black",
                  width: "40%",
                  height: "40%",
                }}
              >
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{
                    width: "95%",
                    backgroundColor: "#f5c4f0",
                    color: "black",
                  }}
                >
                  <b>ReactJS</b>
                </div>
              </div>
              <div
                className="progress"
                style={{
                  border: "1px solid black",
                  width: "40%",
                  height: "40%",
                }}
              >
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{
                    width: "90%",
                    backgroundColor: "#d0f582",
                    color: "black",
                  }}
                >
                  <b>NodeJS</b>
                </div>
              </div>
              <div
                className="progress"
                style={{
                  border: "1px solid black",
                  width: "40%",
                  height: "40%",
                }}
              >
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{
                    width: "85%",
                    backgroundColor: "#d0f582",
                    color: "black",
                  }}
                >
                  <b>MongoDB</b>
                </div>
              </div>
              <div
                className="progress"
                style={{
                  border: "1px solid black",
                  width: "40%",
                  height: "40%",
                }}
              >
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{
                    width: "60%",
                    backgroundColor: "#f5c4f0",
                    color: "black",
                  }}
                >
                  <b>Python</b>
                </div>
              </div>
              <div
                className="progress"
                style={{
                  border: "1px solid black",
                  width: "40%",
                  height: "40%",
                }}
              >
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{
                    width: "90%",
                    backgroundColor: "#f5c4f0",
                    color: "black",
                  }}
                >
                  <b>C/C++</b>
                </div>
              </div>
              <div
                className="progress"
                style={{
                  border: "1px solid black",
                  width: "40%",
                  height: "40%",
                }}
              >
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{
                    width: "75%",
                    backgroundColor: "#d0f582",
                    color: "black",
                  }}
                >
                  <b>MySQL</b>
                </div>
              </div>
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
