import React from 'react';
import "./objective.css"

class Objective extends React.Component {
  render () {
    const {objective}=this.props;

    return(<div>
      <div className="horizontal-layout">
        <div className="objective-box"> {objective}
        </div>
      </div>
       </div>)
  }
}

export default Objective;
