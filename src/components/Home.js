import React from "react";
import { ChevronDoubleDown } from "react-bootstrap-icons";
import "./Home.css";
import { TimelineMax, Power2 } from "gsap";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.tl = new TimelineMax();
    this.nameRef = React.createRef();
    this.taglineRef = React.createRef();
  }
  componentDidMount() {
    this.tl
      .from(this.nameRef, 2, {
        css: { opacity: 0.5, color: "red", fontSize: "3vw" },
        animation: Power2.easeInOut,
      })
      .from(this.taglineRef, 1, { css: { opacity: 0 } }, "-=0.5");
  }

  render() {
    return (
      <div>
        <div
          className="text-white h2 intro"
          style={{
            marginTop: "10%",
          }}
        >
          <div
            ref={(e) => {
              this.nameRef = e;
            }}
          >
            Hi! I am Shantanu Goyal,
          </div>
          <div
            ref={(e) => {
              this.taglineRef = e;
            }}
          >
            <span style={{ color: "red" }}>
              I build Amazing UI/UX Experiences
            </span>
          </div>
          <div
            style={{
              marginTop: "10%",
              marginLeft: "47%",
            }}
          >
            <ChevronDoubleDown className="downIcon" />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
