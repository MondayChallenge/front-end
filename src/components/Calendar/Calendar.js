import React, { useState } from "react";
import './Calendar.css'
import Navigation from "../Navigation/Navigation";
import calendarImg from '../../assets/img/calendar.png';

 
const Calendar = () => {


  console.log('image', calendarImg)

  return (
    <div className="calendar">
      <Navigation />
      <div className="calendarImgArea">
        <img alt="" src={calendarImg} className="calendarImg" />
      </div>
    </div>
  );
}


export default Calendar;

