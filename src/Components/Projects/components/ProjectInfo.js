import React from "react";

class ProjectInfo extends React.Component{
  render() {
    const {projectInfo} = this.props;

    return(
      projectInfo.map((key, index)=>{
        return <div>
                {key.description}<br/>
                {key.name}
              </div>
        ;
      })
    );
  }
}

export default ProjectInfo;
