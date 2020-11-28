import React, { useState } from "react";

import Navigation from "../Navigation/Navigation";


// import {AddProject} from '../../apollo/project';
// import { Formik } from 'formik';
import {AddProject} from '../../apollo/project'
import { useMutation } from '@apollo/client';

  
const Projects = () => {
  
  const [organization, setOrgID] = useState(1);
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [timezone, setTimezone] = useState("");
  const [projectType, setProjectType] = useState("");
  const [minBid, setMinBid] = useState("");
  const [maxBudgetRange, setMaxBudgetRange] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [address, setAddress] = useState("");
  const [owner, setOwner] = useState(1);
  const [architect, setArchitect] = useState(1);
  const [manager, setManager] = useState(1);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [representatives] = useState(sessionStorage.getItem('userId'));
  const [createProject, {data}] = useMutation(AddProject,{
    onCompleted: (data) => {
      console.log('succeed adding project', data.createProject.project.id)
      return data
    },
    onError: (error) => console.error("Error getting RegisterUser", error)
  })
  


  const testData = {
    "zip": zip,
    "published_at": "2019-12-03T10:15:30Z",
    "status": new Date()- Date.parse(endDate) > 0 ? "Closed to Bid" : new Date()- Date.parse(startDate) < 0 ? "Upcoming" :"Open to Bid",
    "endDate": endDate,
    "minBid": parseFloat(minBid),
    "city": city,
    "name": name,
    "numStories": "2000",
    "manager": manager,
    "category": "Office",
    "team": [1,2,3],
    "estTime": "3 Month",
    "representatives": representatives,
    "description": description,
    "email": email,
    "invitations": [1,2,3],
    "type": "Whatever",
    "organization": organization,
    "numBuildings": "1",
    "country": country,
    "architect": architect,
    "address": address,
    "squareFootage": "100",
    "maxBudgetRange": parseFloat(maxBudgetRange),
    "owner": owner,
    "state": state,
    "startDate": startDate,
    "phone": phone,
    "projectType": projectType
  }
  const handleSubmit = (event)=>{
    console.log('click button');
    event.preventDefault();
    const token = sessionStorage.getItem('jwtToken');
    sessionStorage.setItem('jwt',token);
    // sessionStorage.setItem('jwt',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjA2Mjc4MDk3LCJleHAiOjE2MDg4NzAwOTd9.efVO2-okLs2ZanNEBWnDKPp3gC4fnh-AY7Rx6ZXEUyI");
    createProject({variables: testData});
  }


  return (
    <div className="dashboard-projects">
      <Navigation />
      <form action="" className="project-form" onSubmit={handleSubmit} >
        <h1 className="form-section-header">Project Information</h1>

        <p className="form-section-subheader ">
          The information below will be published to Monday Bids as a project.
          Please fill out the required fields below then hit publish to create a
          project on Monday Bids.
        </p>

        <div className="form-inputs-section">
          <div className="form-inputs-block form-inputs-block--small">
            <h4 className="form-inputs-label" >Company Name</h4>
            <input className="form-inputs form-inputs--small" ></input>
          </div>

          <div className="form-inputs-block form-inputs-block--small">
            <h4 className="form-inputs-label" >Project Name</h4>
            <input id="project_name" className="form-inputs form-inputs--small" onChange={e=>setName(e.target.value)}></input>
          </div>

          <div className="form-inputs-block form-inputs-block--small">
            <h4 className="form-inputs-label" >Project Number</h4>
            <input className="form-inputs form-inputs--small"></input>
          </div>

          <div className="form-inputs-block form-inputs-block--small">
            <h4 className="form-inputs-label" >Start Date</h4>
            <input type="date" className="form-inputs form-inputs--small" onChange={e=>setStartDate(e.target.value)}></input>
          </div>

          <div className="form-inputs-block form-inputs-block--small">
            <h4 className="form-inputs-label" >End Date</h4>
            <input type="date" className="form-inputs form-inputs--small" onChange={e=>setEndDate(e.target.value)}></input>
          </div>

          <div className="form-inputs-block form-inputs-block--small">
            <h4 className="form-inputs-label" >Timezone</h4>
            <input className="form-inputs form-inputs--small" onChange={e=>setTimezone(e.target.value)}></input>
          </div>

          <div className="form-inputs-block form-inputs-block--small">
            <h4 className="form-inputs-label" >Project Type</h4>
            <input className="form-inputs form-inputs--small" onChange={e=>setProjectType(e.target.value)}></input>
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
              <input className="form-inputs form-inputs--small" onChange={e=>setMinBid(e.target.value)}></input>
              <p className="form-inputs-label">to</p>
              <input className="form-inputs form-inputs--small" onChange={e=>setMaxBudgetRange(e.target.value)}></input>
            </div>

            {/* <div class="x-C61RwL valign-text-middle font-class-1">$</div> */}

            {/* <div class="x-VMr6Om valign-text-middle font-class-1">$</div> */}
          </div>

          <div className="form-inputs-block form-inputs-block--large">
            <h4 className="form-inputs-label" >
              Project Description
            </h4>
            <input className="form-inputs form-inputs--large" onChange={e=>setDescription(e.target.value)}></input>
          </div>
          
        </div>

        <h1 className="form-section-header">Project Location</h1>

        <p className="form-section-subheader  ">
        Please complete the fields below to indicate where the project will be taking place.
        </p>

        <div className="form-inputs-section">
          <div className="form-inputs-block form-inputs-block--small">
            <h4 className="form-inputs-label" >Country</h4>
            <input className="form-inputs form-inputs--small" onChange={e=>setCountry(e.target.value)}></input>
            {/* <div class="select-C61RwL valign-text-middle font-class-1">Select</div> */}
            {/* dropdown carrot
            <img class="vector-6" src="" /> */}
          </div>

          <div className="form-inputs-block form-inputs-block--small">
            <h4 className="form-inputs-label" >State/Province</h4>
            <input className="form-inputs form-inputs--small" onChange={e=>setState(e.target.value)}></input>
            {/* <div class="select-VMr6Om valign-text-middle font-class-1">
            Select
          </div> */}
            {/* dropdown carrot
        <img class="vector-7" src="" /> */}
          </div>

          <div className="form-inputs-block form-inputs-block--small">
            <h4 className="form-inputs-label" >City</h4>
            <input className="form-inputs form-inputs--small" onChange={e=>setCity(e.target.value)}></input>
          </div>

          {/* TODO - NEED TO FIX GRID FOR THIS */}
          <div className="form-inputs-block form-inputs-block--small">
            <div class="address address-text form-inputs-label">
              Address
            </div>
            <input class="address address-input form-inputs form-inputs--small" onChange={e=>setAddress(e.target.value)}></input>
          </div>

          <div className="form-inputs-block form-inputs-block--small">
            <div class="zip-code form-inputs-label">
              Zip (Postal) Code
            </div>
            <input class="zip-code form-inputs form-inputs--small" onChange={e=>setZip(e.target.value)}></input>
          </div>
        </div>

        <h1 className="form-section-header">Attachments</h1>

        <p className="form-section-subheader  ">
         Please upload the scope of work, images, or additional documentation for bidders to review prior to submitting a project bid.
        </p>

        <div className="project-form__files">
          <div className="form-drop-file">
            <p className="form-drop-file__title">
              Drag your file here, or
              <span > browse</span>
            </p>
            {/* .supports-j-if-pdf-png-C61RwL used to be */}
            <p className="form-drop-file__sub ">
              Supports: JPG, GIF, PDF, PNG
            </p>
          </div>
          

          <div className="form-drop-file">
            <p className="form-drop-file__title">
              Drag your file here, or
              <span > browse</span>
            </p>
            {/* .supports-j-if-pdf-png-C61RwL used to be */}
            <p className="form-drop-file__sub ">
              Supports: JPG, GIF, PDF, PNG
            </p>
          </div>
        </div>

        <h1 className="form-section-header">Project Team</h1>

        <p className="form-section-subheader  ">
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
            <input className="form-inputs form-inputs--small"  onChange={e=>setEmail(e.target.value)}></input>
          </div>

          <div className="form-inputs-block form-inputs-block--small">
            <h4 className="form-inputs-label" > Phone Number</h4>
            <input className="form-inputs form-inputs--small"  onChange={e=>setPhone(e.target.value)}></input>
          </div>
        </div>

        {/* <input class="rectangle-179"></input>
        <div class="submit valign-text-middle font-class-1 ">

        </div> */}
        <input type="submit" value="Submit" className="project-form__submit-btn submit-btn" ></input>
        {/* <Mutation mutation={AddProject} variables={{ name }} >
          {AddProposal => <button  onClick={(e)=>{e.preventDefault();AddProposal()}} className="project-form__submit-btn">Submit</button>}
        </Mutation> */}
      </form>
    </div>
  );
}


export default Projects;

