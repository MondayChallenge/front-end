import React from "react";

import Navigation from "../Navigation/Navigation";

import "components/Projects/Projects.css";

import { Formik } from 'formik';

class Projects extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  handleSubmit = (event) => {
    // this.setState({
    //   searchResult: this.state.value.toUpperCase(),
    //   value: "",
    // });

    event.preventDefault(); //this is to avoid page from refreshing when you press submit
  };

  render(){

    return (
      <div className="dashboard-projects">
        <Navigation />
        <form action = "" className="project-form" onSubmit={this.handleSubmit} >
          <h1 class="font-class-2 border-class-2">Project Information</h1>
  
          <p class="project-form__instruction font-class-1 border-class-2">
            The information below will be published to Monday Bids as a project.
            Please fill out the required fields below then hit publish to create a
            project on Monday Bids.
          </p>
  
          <div className="project-form__info">
            <div className="project-form__info__inputs">
              <div class="valign-text-middle font-class-1">Company Name</div>
              <input class="project-form__inputs project-form__inputs--small"></input>
            </div>
  
            <div className="project-form__info__inputs">
              <div class="valign-text-middle font-class-1">Project Name</div>
              <input class="project-form__inputs project-form__inputs--small"></input>
            </div>
  
            <div className="project-form__info__inputs">
              <div class="valign-text-middle font-class-1">Project Number</div>
              <input class="project-form__inputs project-form__inputs--small"></input>
            </div>
  
            <div className="project-form__info__inputs">
              <div class="valign-text-middle font-class-1">Start Date</div>
              <input class="project-form__inputs project-form__inputs--small"></input>
            </div>
  
            <div className="project-form__info__inputs">
              <div class="valign-text-middle font-class-1">End Date</div>
              <input class="project-form__inputs project-form__inputs--small"></input>
            </div>
  
            <div className="project-form__info__inputs">
              <div class="valign-text-middle font-class-1">Timezone</div>
              <input class="project-form__inputs project-form__inputs--small"></input>
            </div>
  
            <div className="project-form__info__inputs">
              <div class="valign-text-middle font-class-1">Project Type</div>
              <input class="project-form__inputs project-form__inputs--small"></input>
            </div>
  
            <div className="project-form__info__amounts-sect">
              <div className="project-form__info__amounts-sect--1">
                <h3 class=" valign-text-middle font-class-1">Project Amount $</h3>
                <span>
                  <div class="select-box border-class-3"></div>
                  <p class="valign-text-middle font-class-1">allow range</p>
                </span>
              </div>
  
              <div className="project-form__info__amounts-sect--2">
              <input class="project-form__inputs project-form__inputs--small"></input>
                <p class="valign-text-middle font-class-1">to</p>
                <input class="project-form__inputs project-form__inputs--small"></input>
              </div>
  
              {/* <div class="x-C61RwL valign-text-middle font-class-1">$</div> */}
  
              {/* <div class="x-VMr6Om valign-text-middle font-class-1">$</div> */}
            </div>
  
            <div className="project-form__info__description">
              <div class=" valign-text-middle font-class-1">
                Project Description
              </div>
              <input class="project-form__inputs project-form__inputs--large"></input>
            </div>
          </div>
  
          <h1 class="font-class-2 border-class-2">Project Location</h1>
  
          <p class="project-form__instruction font-class-1 border-class-2">
            The information below will be published to Monday Bids as a project.
            Please fill out the required fields below then hit publish to create a
            project on Monday Bids.
          </p>
  
          <div className="project-form__info">
            <div className="project-form__info__inputs">
              <div class="valign-text-middle font-class-1">Country</div>
              <input class="project-form__inputs project-form__inputs--small"></input>
              {/* <div class="select-C61RwL valign-text-middle font-class-1">Select</div> */}
              {/* dropdown carrot
              <img class="vector-6" src="" /> */}
            </div>
  
            <div className="project-form__info__inputs">
              <div class=" valign-text-middle font-class-1">State/Province</div>
              <input class="project-form__inputs project-form__inputs--small"></input>
              {/* <div class="select-VMr6Om valign-text-middle font-class-1">
              Select
            </div> */}
              {/* dropdown carrot
          <img class="vector-7" src="" /> */}
            </div>
  
            <div className="project-form__info__inputs">
              <div class="valign-text-middle font-class-1">City</div>
              <input class="project-form__inputs project-form__inputs--small"></input>
            </div>
  
            {/* TODO - NEED TO FIX GRID FOR THIS */}
            <div className="project-form__info__inputs">
              <div class="address address-text valign-text-middle font-class-1">
                Address
              </div>
              <input class="address address-input project-form__inputs--small border-class-1"></input>
            </div>
  
            <div className="project-form__info__inputs">
              <div class="zip-code valign-text-middle font-class-1">
                Zip (Postal) Code
              </div>
              <input class="zip-code project-form__inputs project-form__inputs--small"></input>
            </div>
          </div>
  
          <h1 class="font-class-2 border-class-2">Included Items</h1>
  
          <p class="project-form__instruction font-class-1 border-class-2">
            The information below will be published to Monday Bids as a project.
            Please fill out the required fields below then hit publish to create a
            project on Monday Bids.
          </p>
  
          <div className="project-form__files">
            <div class="project-form__files__drop  valign-text-middle font-class-3">
              <p class="span1-9jb2op">
                Drag your file here, or
                <span class="span2-9jb2op"> browse</span>
              </p>
              {/* .supports-j-if-pdf-png-C61RwL used to be */}
              <p class="project-form__files__drop--sub valign-text-middle">
                Supports: JPG, GIF, PDF, PNG
              </p>
            </div>
            {/* <input class="rectangle-192 border-class-1"></input> */}
  
            {/* <input class="rectangle-193 border-class-1"></input> */}
            <div class="project-form__files__drop valign-text-middle font-class-3">
              <p class="span1-9jb2op">
                Drag your file here, or
                <span class="span2-9jb2op"> browse</span>
              </p>
              {/* .supports-j-if-pdf-png-VMr6Om used to be */}
              <p class="project-form__files__drop--sub valign-text-middle">
                Supports: JPG, GIF, PDF, PNG
              </p>
            </div>
          </div>
  
          <h1 class="font-class-2 border-class-2">Project Team</h1>
  
          <p class="project-form__instruction font-class-1 border-class-2">
            The information below will be published to Monday Bids as a project.
            Please fill out the required fields below then hit publish to create a
            project on Monday Bids.
          </p>
  
          <div className="project-form__info">
            <div className="project-form__info__inputs">
              <div class="valign-text-middle font-class-1">Internal Office</div>
              <input class="project-form__inputs project-form__inputs--small"></input>
              {/* <div class="select-qr8e7q valign-text-middle font-class-1">
              Select
            </div> */}
              {/*supposed to be a dropdown carot  */}
              {/* <img class="vector-8-VMr6Om" src="" /> */}
            </div>
  
            <div className="project-form__info__inputs">
              <div class="valign-text-middle font-class-1">Owner</div>
              <input class="project-form__inputs project-form__inputs--small"></input>
            </div>
  
            <div className="project-form__info__inputs">
              <div class="valign-text-middle font-class-1">Architect</div>
              <input class="project-form__inputs project-form__inputs--small"></input>
            </div>
  
            <div className="project-form__info__inputs">
              <div class="valign-text-middle font-class-1">Project Manager</div>
              <input class="project-form__inputs project-form__inputs--small"></input>
            </div>
  
            <div className="project-form__info__inputs">
              <div class="valign-text-middle font-class-1">Email</div>
              <input class="project-form__inputs project-form__inputs--small"></input>
            </div>
  
            <div className="project-form__info__inputs">
              <div class="valign-text-middle font-class-1"> Phone Number</div>
              <input class="project-form__inputs project-form__inputs--small"></input>
            </div>
          </div>
  
          {/* <input class="rectangle-179"></input>
          <div class="submit valign-text-middle font-class-1 border-class-2">
  
          </div> */}
          <input type="submit" value="Submit" className="project-form__submit-btn"></input>
        </form>
      </div>
    );

  }
  
};

export default Projects;

{
  /* <div class="select-mzXdH9 valign-text-middle font-class-1">Select</div>
        <img class="vector-8-C61RwL" src="" />
        <div class="select-QxM5SU valign-text-middle font-class-1">Select</div>
        <img class="vector-9" src="" />
        <img class="image-102" src="" />
        <img class="image-103" src="" /> */
}
