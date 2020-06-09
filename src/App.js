import React from 'react';
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
import Objective from "./Components/Objective/Objective";
import Experience from "./Components/Experience/Experience";
import Skills from "./Components/Skills/Skills";
import './App.css';

function App() {
  return (
    <div className="header">
        <Contact/>
        <Projects/>
        <Objective/>
        <Experience/>
        <Skills/>
    </div>
  );
}

export default App;
