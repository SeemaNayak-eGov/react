import React from 'react';
import "./skills.css";
import music from "./music.jpg";
import paint from  "./paint.jpg";

class Skills extends React.Component {
  render () {
    return(<div className="layout">
      <div className="horizontal-layout">
        <div className="skills-box">
        <h2>Techinal Skills</h2>
          <div>Spring Framework</div>
          <div> Hibernate</div>
          <div>SQL</div>
        </div>

        <div className="tools-box">
          <h2>Tools</h2>
          <div>Eclipse</div>
          <div>Japer Report</div>
          <div>PgAdmin</div>
        </div>

        <div className="hobbies-box">
          <ul className="list-type">
            <li><h2>Hobbies</h2></li>
            <li><img src={music} alt=""/></li>
            <li ><img src={paint} alt=""/></li>
         </ul>
        </div>

      </div>
   </div>)
  }
}

export default Skills;
