import React from "react";

import Navigation from '../Navigation/Navigation';

import 'components/Projects/Projects.css';

const Projects = () => {
  return (
    <div className="dashboard-projects">
      <Navigation />
      <div className="project-form">

        <h1 class="font-class-2 border-class-2">
          Project Information
        </h1>

        <p class="font-class-1 border-class-2">
          The information below will be published to Monday Bids as a project.
          Please fill out the required fields below then hit publish to create a
          project on Monday Bids.
        </p>

        <div className="project-form__info">

          <div className="project-form__info__inputs">
            <div class="valign-text-middle font-class-1">
              Company Name
          </div>
            <input class="project-form__inputs--small border-class-1"></input>
          </div>

          <div className="project-form__info__inputs">
            <div class="valign-text-middle font-class-1">
              Project Name
        </div>
            <input class="project-form__inputs--small border-class-1"></input>
          </div>

          <div className="project-form__info__inputs">
            <div class="valign-text-middle font-class-1">
              Project Number
        </div>
            <input class="project-form__inputs--small border-class-1"></input>
          </div>


          <div className="project-form__info__inputs">
            <div class="valign-text-middle font-class-1">Start Date</div>
            <input class="project-form__inputs--small border-class-1"></input>
          </div>

          <div className="project-form__info__inputs">
            <div class="valign-text-middle font-class-1">End Date</div>
            <input class="project-form__inputs--small border-class-1"></input>
          </div>

          <div className="project-form__info__inputs">
            <div class="valign-text-middle font-class-1">Timezone</div>
            <input class="project-form__inputs--small border-class-1"></input>
          </div>

          <div className="project-form__info__inputs">
            <div class="valign-text-middle font-class-1">
              Project Type
            </div>
            <input class="project-form__inputs--small border-class-1"></input>
          </div>

          <div className="project-form__info__amounts-sect">

            <div className="project-form__info__amounts-sect--1">
              <h3 class=" valign-text-middle font-class-1">
                Project Amount $
              </h3>
              <span>
                <div class="select-box border-class-3"></div>
                <p class="valign-text-middle font-class-1">allow range</p>
              </span>

            </div>

            <div className="project-form__info__amounts-sect--2">
              <input id="1" class="project-form__inputs--small border-class-1"></input>
              <p class="valign-text-middle font-class-1">to</p>
              <input id="2" class="project-form__inputs--small border-class-1"></input>
            </div>

            {/* <div class="x-C61RwL valign-text-middle font-class-1">$</div> */}

            {/* <div class="x-VMr6Om valign-text-middle font-class-1">$</div> */}
          </div>


          <div className="project-form__info__description">
            <div class=" valign-text-middle font-class-1">
              Project Description
        </div>
            <input class="project-form__inputs--large border-class-1"></input>
          </div>
        </div>





        <div className="project-form__info">
        <h1 class="font-class-2 border-class-2">
        Project Location
        </h1>

        <p class="font-class-1 border-class-2">
        The information below will be published to Monday Bids as a project.
          Please fill out the required fields below then hit publish to create a
          project on Monday Bids.
        </p>

        </div>







        <div class="country valign-text-middle font-class-1">Country</div>
        <input class="rectangle-183-C61RwL border-class-1"></input>
        <div class="select-C61RwL valign-text-middle font-class-1">Select</div>
        {/* dropdown carrot */}
        <img class="vector-6" src="" />

        <input class="rectangle-184 border-class-1"></input>
        <div class="select-VMr6Om valign-text-middle font-class-1">Select</div>
        {/* dropdown carrot */}
        <img class="vector-7" src="" />
        <div class="state-province valign-text-middle font-class-1">
          State/Province
        </div>

        <div class="city valign-text-middle font-class-1">City</div>
        <input class="rectangle-185 border-class-1"></input>

        <div class="address valign-text-middle font-class-1">Address</div>
        <input class="rectangle-186 border-class-1"></input>

        <div class="zip-postal-code valign-text-middle font-class-1">
          Zip (Postal) Code
        </div>
        <input class="rectangle-188 border-class-1"></input>

        <div class="included-items font-class-2 border-class-2">
          Included Items
        </div>
        <p class="the-inform-onday-bids-mzXdH9 font-class-1 border-class-2">
          The information below will be published to Monday Bids as a project.
          Please fill out the required fields below then hit publish to create a
          project on Monday Bids.
        </p>


        <input class="rectangle-192 border-class-1"></input>
        <p class="drag-your---or-browse-C61RwL valign-text-middle font-class-3">
          <span>
            <span class="span1-9jb2op">Drag your file here, or </span>
            <span class="span2-9jb2op">browse</span>
          </span>
        </p>
        <p class="supports-j-if-pdf-png-C61RwL valign-text-middle font-class-1">
          Supports: JPG, GIF, PDF, PNG
        </p>


        <input class="rectangle-193 border-class-1"></input>
        <p class="drag-your---or-browse-VMr6Om valign-text-middle font-class-3">
          <span>
            <span class="span1-QATFf4">Drag your file here, or </span>
            <span class="span2-QATFf4">browse</span>
          </span>
        </p>
        <p class="supports-j-if-pdf-png-VMr6Om valign-text-middle font-class-1">
          Supports: JPG, GIF, PDF, PNG
        </p>



        <div class="project-team font-class-2 border-class-2">Project Team</div>

        <p class="the-inform-onday-bids-QxM5SU font-class-1 border-class-2">
          The information below will be published to Monday Bids as a project.
          Please fill out the required fields below then hit publish to create a
          project on Monday Bids.
        </p>

        <div class="internal-office valign-text-middle font-class-1">
          Internal Office
        </div>
        <input class="rectangle-183-VMr6Om border-class-1"></input>
        <div class="select-qr8e7q valign-text-middle font-class-1">Select</div>
        {/*supposed to be a dropdown carot  */}
        <img class="vector-8-VMr6Om" src="" />

        <div class="owner valign-text-middle font-class-1">Owner</div>
        <input class="rectangle-18-mzXdH9 border-class-1"></input>

        <div class="architect valign-text-middle font-class-1">Architect</div>
        <input class="rectangle-176-mzXdH9 border-class-1"></input>


        <div class="project-manager valign-text-middle font-class-1">
          Project Manager
        </div>
        <input class="rectangle-180-VMr6Om border-class-1"></input>

        <div class="email valign-text-middle font-class-1">Email</div>
        <input class="rectangle-181-VMr6Om border-class-1"></input>

        <div class="phone-number valign-text-middle font-class-1">
          Phone Number
        </div>
        <input class="rectangle-182-VMr6Om border-class-1"></input>



        <input class="rectangle-179"></input>
        <div class="submit valign-text-middle font-class-1 border-class-2">
          Submit
        </div>

      </div>


    </div>

  );
};

export default Projects;

{/* <div class="select-mzXdH9 valign-text-middle font-class-1">Select</div>
        <img class="vector-8-C61RwL" src="" />
        <div class="select-QxM5SU valign-text-middle font-class-1">Select</div>
        <img class="vector-9" src="" />
        <img class="image-102" src="" />
        <img class="image-103" src="" /> */}
