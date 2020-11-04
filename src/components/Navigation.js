import React from "react";
import "../App";

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      settings: {},
      name: "",
    };
  }

  componentDidMount() {
    // TODO: set up event listeners
  }

  render() {
    return (
      <div id="navBar">
        <div class="projects valign-text-middle font-class-1 border-class-1">Projects</div>
        <div class="messages valign-text-middle font-class-1 border-class-1">Messages</div>
        <div class="proposals valign-text-middle font-class-1 border-class-1">Proposals</div>
        <div class="documents valign-text-middle font-class-1 border-class-1">Documents</div>
        <div class="reports valign-text-middle font-class-1 border-class-1">Reports</div>
        <div class="directory valign-text-middle font-class-1 border-class-1">Directory</div>
        <div class="calendar valign-text-middle font-class-1 border-class-1">Calendar</div>
        <div class="admin valign-text-middle font-class-1 border-class-1">Admin</div>  
        <img
          class="line-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/5fa1a82d0aa76a11ee1c02fa/releases/5fa1b2a05d6f58133fc1a5b9/img/line-1@1x.png"
        />
        <img
          class="line-2"
          src="https://anima-uploads.s3.amazonaws.com/projects/5fa1a82d0aa76a11ee1c02fa/releases/5fa1b2a05d6f58133fc1a5b9/img/line-2@2x.png"
        />
        
      </div>
    )}
  }
  
  export default Navigation;
  