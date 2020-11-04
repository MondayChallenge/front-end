import React from "react";
import {Link} from "react-router-dom";
import './Navigation'

const Navigation = (props) => {
  return (
    <div id="navBar">
      <div className="dashboard font-class-2 border-class-1">Dashboard</div>
      <div className="rectangle-176"></div>
      <Link to="/newProject"  className="new-project valign-text-middle font-class-1 border-class-1" style={{ textDecoration: 'none' }}>
        New Project
      </Link>
      <Link to="/" className="projects valign-text-middle font-class-1 border-class-1" style={{ textDecoration: 'none' }}>
        Projects
      </Link>
      <Link to="/messages" className="messages valign-text-middle font-class-1 border-class-1" style={{ textDecoration: 'none' }}>
        Messages
      </Link>
      <Link to="/" className="proposals valign-text-middle font-class-1 border-class-1" style={{ textDecoration: 'none' }}>
        Proposals
      </Link>
      <Link to="/" className="documents valign-text-middle font-class-1 border-class-1" style={{ textDecoration: 'none' }}>
        Documents
      </Link>
      <Link to="/" className="reports valign-text-middle font-class-1 border-class-1" style={{ textDecoration: 'none' }}>
        Reports
      </Link>
      <Link to="/" className="directory valign-text-middle font-class-1 border-class-1" style={{ textDecoration: 'none' }}>
        Directory
      </Link>
      <Link to="/" className="calendar valign-text-middle font-class-1 border-class-1" style={{ textDecoration: 'none' }}>
        Calendar
      </Link>
      <Link to="/" className="admin valign-text-middle font-class-1 border-class-1" style={{ textDecoration: 'none' }}>
        Admin
      </Link>
      <img
        className="line-1"
        src="https://anima-uploads.s3.amazonaws.com/projects/5fa1a82d0aa76a11ee1c02fa/releases/5fa1b2a05d6f58133fc1a5b9/img/line-1@1x.png"
      />
      <img
        className="line-2"
        src="https://anima-uploads.s3.amazonaws.com/projects/5fa1a82d0aa76a11ee1c02fa/releases/5fa1b2a05d6f58133fc1a5b9/img/line-2@2x.png"
      />
    </div>
  );
};

export default Navigation;
