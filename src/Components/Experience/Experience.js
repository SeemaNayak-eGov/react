import React from 'react';
import EduExpDetails from "./components/EduExpDetails/EduExpDetails.js";
import "./experience.css";

class Experience extends React.Component {
  render() {
    const {eduexp=[]}=this.props;
    const filteredExperience=eduexp.filter((edu)=>{return edu.title==="Experience"});
    const filteredEducation=eduexp.filter((edu)=>{return edu.title==="Education"});
    return <div>
      <div className="horizontal-layout">
      <div className="experience-box">
        <EduExpDetails eduexp={filteredExperience} title="Experience"/>
      </div>
      <div className="education-box">
        <EduExpDetails eduexp={filteredEducation} title="Education" />
      </div>
      </div>
    </div>;
  }
}

export default Experience;
