import React from 'react';
import "./experience.css"

class Contact extends React.Component {
  render () {
    return(<div>
      <div className="horizontal-layout">
        <div className="experience-box">
        <ul className="list-type">
          <li><h2>Experience</h2></li>
          <li><h3>Egovernments Foundation</h3></li>
          <li><div>Senior software engineer</div></li>
        </ul>  
        </div>

        <div className="education-box">
         <ul className="list-type">
          <li><h2>Education</h2></li>
          <li><h4>VTU</h4></li>
          <li>B.E in CS</li>
         </ul>
       </div>

      </div>
   </div>)
  }
}

export default Contact;
