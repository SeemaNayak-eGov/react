import React from 'react';
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
import Objective from "./Components/Objective/Objective";
import Experience from "./Components/Experience/Experience";
import Skills from "./Components/Skills/Skills";
import './App.css';

class App extends React.Component {
  state = {
      myInfo: {
        name: "Seema Nayak",
        designation: "SSE",
        gmail: "seemanayak47@gmail.com",
        linkedin: "linkedin.com/in/seema-nayak/",
      },

      projectInfo: [
        {"name":"Projects", "description": "10+"},
        {"name":"Mentees", "description":"1"},
        {"name":"Publications", "description": "1"},
        {"name":"Certificates","description": "3+"},
     ],

     objective: "I am having 5+ years of professional experience as a Java/EE application developer. Currently working as a senior software engineer at egovernments foundation. Familiar with Eclipse ,Intellij Idea,Git Hub,Docker,Kafka,Swagger,Json. Experience in Spring Framework, SQL, Hibernate and related web technologies.",

    skillset: [
      {
        header: "Technical Skills",
        description: "Spring Framework",
      },
      {
        header: "Technical Skills",
        description: "Hibernate",
      },
      {
        header: "Technical Skills",
        description: "SQL",
      },
      {
        header: "Tools",
        description: "Eclipse",
      },
      {
        header: "Tools",
        description: "PgAdmin",
      },
      {
        header: "Tools",
        description: "Jasper Report",
      },
      {
        header: "Hobbies",
        description: "Music",
      },
      {
        header: "Hobbies",
        description: "Painting",
      },
    ],
    eduexp:[
     {
       title:"Education",
       name: "VTU",
       description: "B.E in CS"
     },
     {
       title:"Experience",
       name: "Egovernments Foundation",
       description: "Senior Software Engineer",
     },
   ],

  };


  render() {
    const { myInfo = {}, projectInfo=[], objective={}, skillset = [], eduexp = []} = this.state;

    return (
      <div className="app-layout">
          <Contact myInfo={myInfo}/>
          <Projects projectInfo={projectInfo}/>
          <Objective objective={objective}/>
          <Experience eduexp={eduexp}/>
          <Skills skillset={skillset} />
      </div>
    );
  }
}

export default App;
