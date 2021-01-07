import React from "react";
import Home from "./Home";
import ImageCard from "./Card";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Connect from "./Connect";
import ScrollTop from "./ScrollTop";
import Contact from "./Contact";
import Skills from "./Skills";
import "./App.css";
class App extends React.Component {
  render() {
    return (
      <div className="background" id="home">
        <Navbar />
        <br />
        <br />
        <ImageCard />
        <Home />
        <AboutMe id="aboutMe">
          <Connect />
        </AboutMe>
        <Skills />
        <Contact />
        <ScrollTop />
      </div>
    );
  }
}
export default App;
