import React from 'react';
import "./contact.css";
import profile from './profile.jpg';

class Contact extends React.Component {
  render () {
    const {myInfo}=this.props;

    return(<div>
      <div className="name-layout">
        <div className="profile-box">
        <div ><img src={profile} alt="" className="profile-pic"/></div>
        <div className="name-box">
          <h4>{myInfo.name}</h4>
          <h3>{myInfo.designation}</h3>
        </div>
        </div>

        <div className="contact-box">
        <ul>
          <li>{myInfo.gmail}</li>
          <li>{myInfo.linkedin}</li>
        </ul>
        </div>

      </div>
       </div>)
  }
}

export default Contact;
