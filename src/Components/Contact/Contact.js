import React from 'react';
import "./contact.css";
import profile from './profile.jpg';

class Contact extends React.Component {
  render () {
    return(<div>
      <div className="name-layout">
        <div className="profile-box">
        <div ><img src={profile} alt="" className="profile-pic"/></div>
        <div className="name-box">
          <h4>Seema Nayak</h4>
          <h3>SSE</h3>
        </div>
        </div>

        <div className="contact-box">
        <ul>
          <li>seemanayak47@gmail.com</li>
          <li>linkedin.com/in/seema-nayak/</li>
        </ul>
        </div>

      </div>
       </div>)
  }
}

export default Contact;
