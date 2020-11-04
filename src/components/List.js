import React from "react";
import "../App";

class List extends React.Component {
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
      <div id="list">
        <div class="rectangle-74"></div>
        <div class="title valign-text-middle font-class-1 border-class-1">Title</div>
        <div class="project-owner valign-text-middle font-class-1 border-class-1">Project Owner</div>
        <div class="status valign-text-middle font-class-1 border-class-1">Status</div>
        <div class="due valign-text-middle font-class-1 border-class-1">Due</div>
        <div class="items valign-text-middle font-class-1 border-class-1">Items</div>
        <div class="invited valign-text-middle font-class-1 border-class-1">Invited</div>
             

        <div class="mattamy-development valign-text-middle font-class-1 border-class-1">Mattamy Development</div>
        <img class="image-17"
          src="https://anima-uploads.s3.amazonaws.com/projects/5fa1a82d0aa76a11ee1c02fa/releases/5fa1b6c90aa76a11ee1c03d5/img/image-17@2x.png"
        />
        <div class="david-felb-C61RwL valign-text-middle font-class-1 border-class-1">David Felb</div>
        <div class="open-to-bid-C61RwL valign-text-middle font-class-1 border-class-1">Open to Bid</div>
        <div class="nov-12-2020-C61RwL valign-text-middle font-class-1 border-class-1">Nov 12, 2020</div>
        <div class="x14 valign-text-middle font-class-1 border-class-1">14</div>
        <div class="x2 valign-text-middle font-class-1 border-class-1">2</div>
        
        <div class="greystone-estates valign-text-middle font-class-1 border-class-1">Greystone Estates</div>
        <img class="image-56"
          src="https://anima-uploads.s3.amazonaws.com/projects/5fa1a82d0aa76a11ee1c02fa/releases/5fa1b6c90aa76a11ee1c03d5/img/image-17@2x.png"
        />
        <div class="david-felb-VMr6Om valign-text-middle font-class-1 border-class-1">David Felb</div>
        <div class="closed-to-bid-C61RwL valign-text-middle font-class-1 border-class-1">Closed to Bid</div>
        <div class="nov-12-2020-VMr6Om valign-text-middle font-class-1 border-class-1">Nov 12, 2020</div>
        <div class="x125 valign-text-middle font-class-1 border-class-1">125</div>
        <div class="x90 valign-text-middle font-class-1 border-class-1">90</div>
               
        <div class="fairview-s-ing-center valign-text-middle font-class-1 border-class-1">Fairview Shopping Center</div>
        <img class="image-57"
          src="https://anima-uploads.s3.amazonaws.com/projects/5fa1a82d0aa76a11ee1c02fa/releases/5fa1b6c90aa76a11ee1c03d5/img/image-17@2x.png"
        />
        <div class="david-felb-mzXdH9 valign-text-middle font-class-1 border-class-1">David Felb</div>
        <div class="upcoming valign-text-middle font-class-1 border-class-1">Upcoming</div>
        <div class="nov-12-2020-mzXdH9 valign-text-middle font-class-1 border-class-1">Nov 12, 2020</div>
        <div class="x9 valign-text-middle font-class-1 border-class-1">9</div>
        <div class="x7 valign-text-middle font-class-1 border-class-1">7</div>
        
        <div class="north-coas-evelopment valign-text-middle font-class-1 border-class-1">NorthCoast Development</div>
        <img class="image-58"
          src="https://anima-uploads.s3.amazonaws.com/projects/5fa1a82d0aa76a11ee1c02fa/releases/5fa1b6c90aa76a11ee1c03d5/img/image-17@2x.png"
        />
        <div class="david-felb-QxM5SU valign-text-middle font-class-1 border-class-1">David Felb</div>
        <div class="open-to-bid-VMr6Om valign-text-middle font-class-1 border-class-1">Open to Bid</div>
        <div class="nov-12-2020-QxM5SU valign-text-middle font-class-1 border-class-1">Nov 12, 2020</div>
        <div class="x84 valign-text-middle font-class-1 border-class-1">84</div>
        <div class="x18 valign-text-middle font-class-1 border-class-1">18</div>
        
        <div class="royal-home-orporation valign-text-middle font-class-1 border-class-1">Royal Homes Corporation</div>
        <img class="image-59"
          src="https://anima-uploads.s3.amazonaws.com/projects/5fa1a82d0aa76a11ee1c02fa/releases/5fa1b6c90aa76a11ee1c03d5/img/image-17@2x.png"
        />
        <div class="david-felb-2P4qUJ valign-text-middle font-class-1 border-class-1">David Felb</div>
        <div class="closed-to-bid-VMr6Om valign-text-middle font-class-1 border-class-1">Closed to Bid</div>
        <div class="nov-12-2020-2P4qUJ valign-text-middle font-class-1 border-class-1">Nov 12, 2020</div>
        <div class="x21 valign-text-middle font-class-1 border-class-1">21</div>
        <div class="x44 valign-text-middle font-class-1 border-class-1">44</div>
        

        <div class="capstone-project valign-text-middle font-class-1 border-class-1">Capstone Project</div>
        <img class="image-60"
          src="https://anima-uploads.s3.amazonaws.com/projects/5fa1a82d0aa76a11ee1c02fa/releases/5fa1b6c90aa76a11ee1c03d5/img/image-17@2x.png"
        />
        <div class="david-felb-qr8e7q valign-text-middle font-class-1 border-class-1">David Felb</div>
        <div class="open-to-bid-mzXdH9 valign-text-middle font-class-1 border-class-1">Open to Bid</div>
        <div class="nov-12-2020-qr8e7q valign-text-middle font-class-1 border-class-1">Nov 12, 2020</div>
        <div class="x49 valign-text-middle font-class-1 border-class-1">49</div>
        <div class="x78 valign-text-middle font-class-1 border-class-1">78</div>
        
      </div>
    )}
  }
  
  export default List;
  