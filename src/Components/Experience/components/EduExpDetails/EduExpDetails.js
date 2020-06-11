import React from "react";

class EduExpDetails extends React.Component {
  render() {
    const {eduexp,title}=this.props;
    return <div className="title-layout">
    <h3>{title}</h3>
      {
        eduexp.map((item,index)=>{
          return (
            <div className="list-type">
               <div key={index}>
               <li><h3>{item.name}</h3></li>
               <li>{item.description}</li>
               </div>
            </div>
          )
        })
      }

    </div>;
  }
}

export default EduExpDetails;
