import React from "react";
import { Card } from "react-bootstrap";
import { ChevronDoubleDown, RecordCircleFill } from "react-bootstrap-icons";
import "./GPCSS.css";
import "./Home.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { TimelineMax, Power2 } from "gsap";

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.headRef = React.createRef();
    this.tl = new TimelineMax();
  }

  componentDidMount() {
    this.tl
      .from(
        this.headRef,
        1,
        {
          opacity: 0,
          animation: Power2.easeIn,
        },
        "+=1"
      )
      .from(".abt", 2, {
        color: "green",
        animation: Power2.easeOut,
      });
  }

  render() {
    return (
      <div id="aboutMe">
        <Card>
          <Card.Header>
            <h1
              className="heading"
              ref={(e) => {
                this.headRef = e;
              }}
            >
              <b>About Me!</b>
            </h1>
          </Card.Header>
          <Card.Body className="content-card">
            <div className="container-fluid">
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
            </div>

            <br />
            <h1
              style={{
                fontSize: "4vw",
                color: "#160457",
                textDecoration: "underline",
              }}
            >
              Timeline :
            </h1>
            <br />
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="August 2019 - Present "
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                icon={<RecordCircleFill />}
              >
                <h3 className="vertical-timeline-element-title t-heading">
                  Netaji Subhas University of Technology, New Delhi
                </h3>
                <h4 className="vertical-timeline-element-subtitle t-subheading">
                  Bachelor of Technology
                </h4>
                <p className="t-marks">
                  Computer Science and Engineering with Specialisation in
                  Artificial Intelligence
                </p>
                <p className="t-marks">
                  <b>CGPA: 9.0</b>
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2019"
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                icon={<RecordCircleFill />}
              >
                <h3 className="vertical-timeline-element-title t-heading">
                  Alhcon Public School, Mayur Vihar, New Delhi
                </h3>
                <h4 className="vertical-timeline-element-subtitle t-subheading">
                  CBSE AISSCE (PCM)
                </h4>
                <p className="t-marks">
                  <b>
                    12<sup>th</sup> Boards - 91.8%
                  </b>
                </p>
                <p className="t-marks">
                  <b>JEE Advanced: AIR 5304</b>{" "}
                </p>
                <p className="t-marks">
                  <b>JEE Mains: AIR 5296</b>{" "}
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2017"
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                icon={<RecordCircleFill />}
              >
                <h3 className="vertical-timeline-element-title t-heading">
                  Amity International School, Noida
                </h3>
                <h4 className="vertical-timeline-element-subtitle t-subheading">
                  Class 10
                </h4>
                <p className="t-marks">
                  <b>CGPA: 10</b>
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </Card.Body>
          <Card.Footer>
            <h1
              style={{
                fontSize: "4vw",
                color: "#160457",
                textDecoration: "underline",
              }}
            >
              Connect With Me :
            </h1>
            {this.props.children}
          </Card.Footer>
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
export default AboutMe;
