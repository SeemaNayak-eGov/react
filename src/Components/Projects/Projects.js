import React from "react";
import "./projects.css";

class Projects extends React.Component {
  render() {
    const {projectInfo}=this.props;
    return <div className="layout">
    <div className="horizontal-layout">
      {
        projectInfo.map((key,index)=>{
          return (
            <div className="project-box" key={index}>
                   <div>{key.name}</div>
                   <div>{key.description}</div>
            </div>
          )
        })
      }
      </div>
    </div>;
  }
}

export default Projects;
