import React from "react";
import { Card } from "react-bootstrap";
import { ChevronDoubleDown } from "react-bootstrap-icons";
import "./GPCSS.css";
import "./Home.css";
class AboutMe extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="aboutMe">
        <Card>
          <Card.Header>
            <h1 className="heading">About Me!</h1>
          </Card.Header>
          <Card.Body className="content-card">
            <div className="abt">
              I'm a MERN Stack Web Developer and UI/UX Designer based in
              Delhi/NCR.
            </div>
            <div className="abt">
              I'm passionate about web development and love to code beautiful
              and attractive things.
            </div>
            <div className="abt">
              I'm always ready to challenge myself and explore new areas of
              work. I never stop learning and for me, each new project is
              another adventure.
            </div>
            <br />
            <br />
            <div className="abt">Connect with Me!</div>
          </Card.Body>
          <Card.Footer>{this.props.children}</Card.Footer>
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
export default AboutMe;
