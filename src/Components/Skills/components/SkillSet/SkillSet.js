import React from "react";

class SkillSet extends React.Component {
  render() {
    const {skillset,headerName}=this.props;
    return <div>
    <h3>{headerName}</h3>
      {
        skillset.map((skill,skillIndex)=>{
          return (
            <div>
               <p key={skillIndex}>{skill.description}</p>
            </div>
          )
        })
      }

    </div>;
  }
}

export default SkillSet;
