import React from "react";
import {Link} from "react-router-dom";
import './Navigation.css'

const Navigation = (props) => {
  return (
    <div id="navBar">
      <div id="topNav">
        <div className="dashboard font-class-2 ">Dashboard</div>
        <div className="rectangle-176">
          <Link to="/newProject"  className="new-project  font-class-1 border-class-1">
            New Project
          </Link>
        </div>
      </div>
      <div id='bottomNav'>
        <div id="navLinks">
          <Link to="/" className="projects navLink" >Projects</Link>
          <Link to="/messages" className="messages navLink" >Messages</Link>
          <Link to="/proposals" className="proposals navLink" >Proposals</Link>
          <Link to="/costBreakdown" className="documents navLink" >Documents</Link>
          <Link to="/bidCreation" className="reports navLink" >Reports</Link>
          <Link to="/" className="directory navLink" >Budget</Link>
          <Link to="/" className="calendar navLink" >Calendar</Link>
          <Link to="/" className="admin navLink" >Directory</Link>
        </div>
        <div id="bar">
          <img
            className="line-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/5fa1a82d0aa76a11ee1c02fa/releases/5fa1b2a05d6f58133fc1a5b9/img/line-1@1x.png" alt=""
          />
          <img
            className="line-2"
            src="https://anima-uploads.s3.amazonaws.com/projects/5fa1a82d0aa76a11ee1c02fa/releases/5fa1b2a05d6f58133fc1a5b9/img/line-2@2x.png" alt=""
          /> 
        </div>
      </div>
    </div>
  );
};

export default Navigation;
