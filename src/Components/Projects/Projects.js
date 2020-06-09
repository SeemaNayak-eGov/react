import React from 'react';
import "./projects.css"

class Projects extends React.Component {
  render () {
    return(<div className="layout">
      <div className="horizontal-layout">
        <div className="project-box">
          <div>10+</div>
          <div>Projects</div>
        </div>

        <div className="ment-box">
          <div>1</div>
          <div>Mentees</div>
        </div>

        <div className="publication-box">
          <div>1</div>
          <div>Publications</div>
        </div>

        <div className="cert-box">
          <div>3+</div>
          <div>Certificates</div>
        </div>

      </div>
   </div>)
  }
}

export default Projects;
