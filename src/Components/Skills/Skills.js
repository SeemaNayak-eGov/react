import React from 'react';
import SkillSet from "./components/SkillSet/SkillSet.js";
import "./skills.css";

class Skills extends React.Component {
  render() {
    const {skillset=[]}=this.props;
    const filteredTechSkill=skillset.filter((skill)=>{return skill.header==="Technical Skills"});
    const filteredTools=skillset.filter((skill)=>{return skill.header==="Tools"});
    const filteredHobbies=skillset.filter((skill)=>{return skill.header==="Hobbies"});
    return <div className="layout">
      <div className="horizontal-layout">
      <div className="skills-box">
        <SkillSet skillset={filteredTechSkill} headerName="Techinal Skills"/>
      </div>
      <div className="tools-box">
        <SkillSet skillset={filteredTools} headerName="Tools" />
      </div>
      <div className="hobbies-box">
        <SkillSet skillset={filteredHobbies} headerName="Hobbies"/>
      </div>
      </div>
    </div>;
  }
}

export default Skills;
