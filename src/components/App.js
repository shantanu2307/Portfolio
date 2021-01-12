import React from "react";
import Home from "./Home";
import ImageCard from "./Card";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Connect from "./Connect";
import ScrollTop from "./ScrollTop";
import Contact from "./Contact";
import Project from "./Projects";
import Skills from "./Skills";
import "./App.css";
import { TweenLite } from "gsap";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.divRef = React.createRef();
  }
  componentDidMount() {
    TweenLite.from(this.divRef, 1, { css: { visibility: 0 } });
  }
  render() {
    return (
      <div
        className="background"
        id="home"
        ref={(e) => {
          this.divRef = e;
        }}
      >
        <Navbar />
        <br />
        <br />
        <ImageCard />
        <Home />
        <AboutMe id="aboutMe">
          <Connect />
        </AboutMe>
        <Skills />
        <Project />
        <Contact />
        <ScrollTop />
      </div>
    );
  }
}
export default App;
