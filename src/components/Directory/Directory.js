
import React, { useState } from "react";
import './Directory.css'
import Navigation from "../Navigation/Navigation";
import directoryImg from '../../assets/img/directory.png';


 
const Directory = () => {




  return (
    <div className="direc">
      <Navigation />
      <div className="directoryImgArea">
        <img alt="" src={directoryImg} className="directoryImg" />
      </div>
    </div>
  );
}


export default Directory;