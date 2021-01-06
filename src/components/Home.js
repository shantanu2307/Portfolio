import React from "react";
import { ChevronDoubleDown } from "react-bootstrap-icons";
import "./Home.css";
class Home extends React.Component {
  render() {
    return (
      <div>
        <div
          className="text-white h2 intro"
          style={{
            marginTop: "10%",
          }}
        >
          <div>Hi! I am Shantanu Goyal,</div>
          <div>
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
