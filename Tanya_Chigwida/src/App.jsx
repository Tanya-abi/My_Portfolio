import { useState } from "react";
import "./App.css";
import Landing from "./LandingPage";
import Sidebar from "./Sidebar";
import About from "./AboutMe";
import Skills from "./Skill";
import Projects from "./Project";

function App() {
  return (
    <>
      <Sidebar />
      <Sidebar />

      <div id="home">
        <Landing />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects />
      </div>

      {/* <div id="contact">
        <Contact />
      </div>  */}
    </>
  );
}

export default App;
