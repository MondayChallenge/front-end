import React from "react";
import Navigation from "components/Navigation/Navigation";
import building1 from "assets/img/building-1.png";
import interior1 from "assets/img/interior-1.png";
import interior2 from "assets/img/interior-2.png";
import interior3 from "assets/img/interior-3.png";
import headshot from "assets/img/professional_woman_headshot.jpg";

import { getRandomInt } from "components/utils/getRandomInt";
import { renderImgBubble } from 'components/utils/renderImgBubble';

const MainProject = () => {


  const bids = [
    { name: "Cupertino Electric, Inc.", type: "Utilities", status: "Awarded" },
    { name: "Bay Electric", type: "Utilities", status: "Declined" },
    { name: "A&A Concrete Supply", type: "Concrete", status: "Awarded" },
    {
      name: "SAS Stressteel, Inc.",
      type: "Structural Steel",
      status: "Awaiting",
    },
  ];

  const bidColors = {
    Awarded: "success",
    Awaiting: "warning",
    Declined: "danger",
  };

  const renderBidding = (bids, bidColors) => {
    return bids.map((bid, i) => {
      const { name, type, status } = bid;

      return (
        <div className="main-project__right__bidding__group" key={i}>
          <p className="main-project__right__bidding__group--name">{name}</p>
          <p
            className={`main-project__right__bidding__group--status font-color--${
              bidColors[status.split(" ")[0]]
              }`}
          >
            {status}
          </p>
          <p className="main-project__right__bidding__group--type">{type}</p>
        </div>
      );
    });
  };

  const team = [
    {
      name: "David Felber",
      title: "Project Manager",
      img: "",
    },
    {
      name: "Welsey Thomas",
      title: "VP of Business Development",
      img: "",
    },
    {
      name: "Lauren Stevens",
      title: "Sr. Architect/Designer",
      img: headshot,
    },
    {
      name: "Brad Nichols",
      title: "Project Engineer",
      img: "",
    },
  ];


  const renderTeam = (team) => {
    return team.map((member, i) => {
      const { name, title, img } = member;

      return (
        <div className="main-project__right__team__group" key={i}>

          <div className="main-project__right__team__group--img">
            {renderImgBubble(img, name)}
          </div>

          <p className="main-project__right__team__group--name">{name}</p>
          <p className="main-project__right__team__group--description">
            {title}
          </p>
        </div>
      );
    });
  };

const imgBuildingArray = [building1,interior1,interior2,interior3];
  const renderImgBuilding = (imgs) => {
    const imgArr = [];
    for (let i = 0; i < 4; i++) {
      imgArr.push(<img
        src={imgs[i]}
        alt={`building_${i + 1}`}
        className={`main-project__left__image--${i + 1}`}
      />)

    }

    return imgArr;
  }


  return (
    <div className="dashboard-projects">
      <Navigation />
      <div className="main-project">
        <h1>Mattamy Development</h1>
        <div className="main-project__left">
          <div className="main-project__left__image">
            {renderImgBuilding(imgBuildingArray)}
          </div>

          <div className="main-project__left__details">
            <ul className="main-project__left__details--1">
              <li>Location</li>
              <li>Project ID</li>
              <li>Est. Completition Date</li>
              <li>Budget</li>
            </ul>
            <ul className="main-project__left__details--2">
              <li>
                1015 Market Street <span>San Francisco, CA 94103</span>
              </li>
              <li>1924561</li>
              <li>September 2021</li>
              <li>$7.2 million</li>
            </ul>
          </div>

          <h3>Project Details</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur.
          </p>
        </div>

        <div className="main-project__right">
          <div className="main-project__right__cards main-project__right__bidding ">
            <h3>Bidding Activity</h3>

            {renderBidding(bids, bidColors)}
          </div>

          <div className="main-project__right__cards main-project__right__team ">
            <h3>Project Team</h3>

            {renderTeam(team)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProject;
