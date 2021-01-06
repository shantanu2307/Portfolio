import React from "react";
import Home from "./Home";
import ImageCard from "./Card";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Connect from "./Connect";
import Contact from "./Contact";
import "./App.css";
class App extends React.Component {
  render() {
    return (
      <div className="background">
        <Navbar />
        <br />
        <br />
        <ImageCard />
        <Home />
        <AboutMe id="aboutMe">
          <Connect />
        </AboutMe>
        <Contact />
      </div>
    );
  }
}
export default App;
