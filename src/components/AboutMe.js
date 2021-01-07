import React from "react";
import { Card } from "react-bootstrap";
import { ChevronDoubleDown, ArrowUp } from "react-bootstrap-icons";
import "./GPCSS.css";
import "./Home.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
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
            <h1 style={{ fontSize: "4vw", color: "#160457" }}>Timeline</h1>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="August 2019 - Present "
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                icon={<ArrowUp />}
              >
                <h3 className="vertical-timeline-element-title">
                  Netaji Subhas University of Technology, New Delhi
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Bachelor of Technology
                </h4>
                <p>
                  Computer Science and Engineering with Specialisation in
                  Artificial Intelligence
                </p>
                <p>
                  <b>CGPA: 9.0</b>
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2019"
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                icon={<ArrowUp />}
              >
                <h3 className="vertical-timeline-element-title">
                  Alhcon Public School, Mayur Vihar, New Delhi
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  CBSE AISSCE (PCM)
                </h4>
                <p>
                  <b>
                    12<sup>th</sup> Boards - 91.8%
                  </b>
                </p>
                <p>
                  <b>JEE Advanced: AIR 5304</b>{" "}
                </p>
                <p>
                  <b>JEE Mains: AIR 5296</b>{" "}
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2017"
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                icon={<ArrowUp />}
              >
                <h3 className="vertical-timeline-element-title">
                  Amity International School, Noida
                </h3>
                <h4 className="vertical-timeline-element-subtitle">Class 10</h4>
                <p>
                  <b>CGPA: 10</b>
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </Card.Body>
          <Card.Footer>
            <div className="abt">Connect with Me!</div>
            {this.props.children}
          </Card.Footer>
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
