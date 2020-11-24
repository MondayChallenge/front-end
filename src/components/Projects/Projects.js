import React, { useState } from "react";

import Navigation from "../Navigation/Navigation";

import "components/Projects/Projects.css";
// import {AddProject} from '../../apollo/project';
import { client } from '../../apollo/index';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo'
// import { Formik } from 'formik';




const Projects = () => {
  const [name, useName] = useState("")

  return (
    <div className="dashboard-projects">
      <Navigation />
      <form action="" className="project-form"  >
        <h1 className="form-section-header">Project Information</h1>

        <p className="form-section-subheader ">
          The information below will be published to Monday Bids as a project.
          Please fill out the required fields below then hit publish to create a
          project on Monday Bids.
        </p>

        <div className="form-inputs-section">
          <div className="form-inputs-block form-inputs-block--small">
            <h4 className="form-inputs-label" >Company Name</h4>
            <input className="form-inputs form-inputs--small"></input>
          </div>

          <div className="form-inputs-block form-inputs-block--small">
            <h4 className="form-inputs-label" >Project Name</h4>
            <input id="project_name" className="form-inputs form-inputs--small" ></input>
          </div>

          <div className="form-inputs-block form-inputs-block--small">
            <h4 className="form-inputs-label" >Project Number</h4>
            <input className="form-inputs form-inputs--small"></input>
          </div>

          <div className="form-inputs-block form-inputs-block--small">
            <h4 className="form-inputs-label" >Start Date</h4>
            <input className="form-inputs form-inputs--small"></input>
          </div>

          <div className="form-inputs-block form-inputs-block--small">
            <h4 className="form-inputs-label" >End Date</h4>
            <input className="form-inputs form-inputs--small"></input>
          </div>

          <div className="form-inputs-block form-inputs-block--small">
            <h4 className="form-inputs-label" >Timezone</h4>
            <input className="form-inputs form-inputs--small"></input>
          </div>

          <div className="form-inputs-block form-inputs-block--small">
            <h4 className="form-inputs-label" >Project Type</h4>
            <input className="form-inputs form-inputs--small"></input>
          </div>

          <div className="project-form__info__amounts-sect">
            <div className="project-form__info__amounts-sect--1">
              <h4 className="form-inputs-label" >Project Amount $</h4>
              <span>
                <div class="select-box border-class-3"></div>
                <p className="form-inputs-label">allow range</p>
              </span>
            </div>

            <div className="project-form__info__amounts-sect--2">
              <input className="form-inputs form-inputs--small"></input>
              <p className="form-inputs-label">to</p>
              <input className="form-inputs form-inputs--small"></input>
            </div>

            {/* <div class="x-C61RwL valign-text-middle font-class-1">$</div> */}

            {/* <div class="x-VMr6Om valign-text-middle font-class-1">$</div> */}
          </div>

          <div className="form-inputs-block form-inputs-block--large">
            <h4 className="form-inputs-label" >
              Project Description
            </h4>
            <input className="form-inputs form-inputs--large"></input>
          </div>
          
        </div>

        <h1 className="form-section-header">Project Location</h1>

        <p class="project-form__instruction ">
          The information below will be published to Monday Bids as a project.
          Please fill out the required fields below then hit publish to create a
          project on Monday Bids.
        </p>

        <div className="form-inputs-section">
          <div className="form-inputs-block form-inputs-block--small">
            <h4 className="form-inputs-label" >Country</h4>
            <input className="form-inputs form-inputs--small"></input>
            {/* <div class="select-C61RwL valign-text-middle font-class-1">Select</div> */}
            {/* dropdown carrot
            <img class="vector-6" src="" /> */}
          </div>

          <div className="form-inputs-block form-inputs-block--small">
            <h4 className="form-inputs-label" >State/Province</h4>
            <input className="form-inputs form-inputs--small"></input>
            {/* <div class="select-VMr6Om valign-text-middle font-class-1">
            Select
          </div> */}
            {/* dropdown carrot
        <img class="vector-7" src="" /> */}
          </div>

          <div className="form-inputs-block form-inputs-block--small">
            <h4 className="form-inputs-label" >City</h4>
            <input className="form-inputs form-inputs--small"></input>
          </div>

          {/* TODO - NEED TO FIX GRID FOR THIS */}
          <div className="form-inputs-block form-inputs-block--small">
            <div class="address address-text form-inputs-label">
              Address
            </div>
            <input class="address address-input form-inputs form-inputs--small"></input>
          </div>

          <div className="form-inputs-block form-inputs-block--small">
            <div class="zip-code form-inputs-label">
              Zip (Postal) Code
            </div>
            <input class="zip-code form-inputs form-inputs--small"></input>
          </div>
        </div>

        <h1 className="form-section-header">Included Items</h1>

        <p class="project-form__instruction font-class-1">
          The information below will be published to Monday Bids as a project.
          Please fill out the required fields below then hit publish to create a
          project on Monday Bids.
        </p>

        <div className="project-form__files">
          <div class="project-form__files__drop ">
            <p class="span1-9jb2op">
              Drag your file here, or
              <span class="span2-9jb2op"> browse</span>
            </p>
            {/* .supports-j-if-pdf-png-C61RwL used to be */}
            <p class="project-form__files__drop--sub ">
              Supports: JPG, GIF, PDF, PNG
            </p>
          </div>
          {/* <input class="rectangle-192 border-class-1"></input> */}

          {/* <input class="rectangle-193 border-class-1"></input> */}
          <div class="project-form__files__drop">
            <p class="span1-9jb2op">
              Drag your file here, or
              <span class="span2-9jb2op"> browse</span>
            </p>
            {/* .supports-j-if-pdf-png-VMr6Om used to be */}
            <p class="project-form__files__drop--sub ">
              Supports: JPG, GIF, PDF, PNG
            </p>
          </div>
        </div>

        <h1 className="form-section-header">Project Team</h1>

        <p class="project-form__instruction  ">
          The information below will be published to Monday Bids as a project.
          Please fill out the required fields below then hit publish to create a
          project on Monday Bids.
        </p>

        <div className="form-inputs-section">
          <div className="form-inputs-block form-inputs-block--small">
            <h4 className="form-inputs-label" >Internal Office</h4>
            <input className="form-inputs form-inputs--small"></input>
            {/* <div class="select-qr8e7q valign-text-middle font-class-1">
            Select
          </div> */}
            {/*supposed to be a dropdown carot  */}
            {/* <img class="vector-8-VMr6Om" src="" /> */}
          </div>

          <div className="form-inputs-block form-inputs-block--small">
            <h4 className="form-inputs-label" >Owner</h4>
            <input className="form-inputs form-inputs--small"></input>
          </div>

          <div className="form-inputs-block form-inputs-block--small">
            <h4 className="form-inputs-label" >Architect</h4>
            <input className="form-inputs form-inputs--small"></input>
          </div>

          <div className="form-inputs-block form-inputs-block--small">
            <h4 className="form-inputs-label" >Project Manager</h4>
            <input className="form-inputs form-inputs--small"></input>
          </div>

          <div className="form-inputs-block form-inputs-block--small">
            <h4 className="form-inputs-label" >Email</h4>
            <input className="form-inputs form-inputs--small"></input>
          </div>

          <div className="form-inputs-block form-inputs-block--small">
            <h4 className="form-inputs-label" > Phone Number</h4>
            <input className="form-inputs form-inputs--small"></input>
          </div>
        </div>

        {/* <input class="rectangle-179"></input>
        <div class="submit valign-text-middle font-class-1 ">

        </div> */}
        <input type="submit" value="Submit" className="project-form__submit-btn" ></input>
        {/* <Mutation mutation={AddProject} variables={{ name }} >
          {AddProposal => <button  onClick={(e)=>{e.preventDefault();AddProposal()}} className="project-form__submit-btn">Submit</button>}
        </Mutation> */}
      </form>
    </div>
  );
}


export default Projects;


 // handleSubmit = (event) => {
  //   // this.setState({
  //   //   searchResult: this.state.value.toUpperCase(),
  //   //   value: "",
  //   // });

  //   event.preventDefault(); //this is to avoid page from refreshing when you press submit
  // //   const project_name = document.getElementById("project_name").value
  // //   console.log(project_name)
  // //   // this.sendTo(project_name)
  //   console.log(this.state);
  //   client.mutate({
  //     mutation: gql`
  //       mutation AddProposal {
  //         createProposal(input: { data: { Name: name } }) {
  //           proposal {
  //             Name
  //           }
  //         }
  //       }
  //     `,

  //   })
  //   .then(result => { console.log('res',result) })
  //   .catch(error => { console.log('err',error) });

  // };



// const AddProject = gql`
//   mutation AddProposal($name: String!) {
//     createProposal(name: $name) {
//       proposal {
//         name
//       }
//     }
//   }

// `;

//TODO: send data to apollo
// client.mutate({

//   mutation: gql`
//     mutation AddProposal($name: String!) {
//       createProposal(name: $name) {
//         proposal {
//           name
//         }
//       }
//     }
//   `,

// })
// .then(result => { console.log(result) })
// .catch(error => { console.log(error) });

  // fetch = (name) => {
  //   client.query({
  //     query: gql`
  //       {
  //         users{
  //          name
  //          status
  //         }
  //       }
  //     `
  //   }).then(response => console.log(response.data.users))
  // }




  /* <div class="select-mzXdH9 valign-text-middle font-class-1">Select</div>
        <img class="vector-8-C61RwL" src="" />
        <div class="select-QxM5SU valign-text-middle font-class-1">Select</div>
        <img class="vector-9" src="" />
        <img class="image-102" src="" />
        <img class="image-103" src="" /> */

