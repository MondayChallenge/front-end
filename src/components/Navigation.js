import React from "react";
import "../App";

const Navigation = (props) => {
  return (
    <div id="navBar">
      <div className="projects valign-text-middle font-class-1 border-class-1">
        Projects
      </div>
      <div className="messages valign-text-middle font-class-1 border-class-1">
        Messages
      </div>
      <div className="proposals valign-text-middle font-class-1 border-class-1">
        Proposals
      </div>
      <div className="documents valign-text-middle font-class-1 border-class-1">
        Documents
      </div>
      <div className="reports valign-text-middle font-class-1 border-class-1">
        Reports
      </div>
      <div className="directory valign-text-middle font-class-1 border-class-1">
        Directory
      </div>
      <div className="calendar valign-text-middle font-class-1 border-class-1">
        Calendar
      </div>
      <div className="admin valign-text-middle font-class-1 border-class-1">
        Admin
      </div>
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
