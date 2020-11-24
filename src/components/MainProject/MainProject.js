import React from "react";
import Navigation from "components/Navigation/Navigation";
import building1 from "assets/img/building-1.png";
import interior1 from "assets/img/interior-1.png";
import interior2 from "assets/img/interior-2.png";
import interior3 from "assets/img/interior-3.png";
import headshot from "assets/img/professional_woman_headshot.jpg";
import { RegisterUser, LoginUser } from "../../apollo/user";

import { useMutation } from "@apollo/client";
import mondaySdk from "monday-sdk-js";
import { register } from "serviceWorker";

import { getRandomInt } from "components/utils/getRandomInt";

const monday = mondaySdk();
monday.setToken(
  "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjkxNjQwMjQzLCJ1aWQiOjE2OTgzMjgwLCJpYWQiOiIyMDIwLTExLTIzVDA0OjIxOjExLjAwMFoiLCJwZXIiOiJtZTp3cml0ZSJ9.IfCFnLLJFxZdtUCYmmDriA0tUDWFHMVL414ubvEzVlc"
);

const MainProject = () => {
  const [newUser] = useMutation(RegisterUser, {
    onCompleted: (data) => {
      console.log("Data from RegisterUser", data.register.user.id);
      setUserId(data.login.user.id);
    },
    onError: (error) => console.error("Error getting RegisterUser", error),
  });
  const [user] = useMutation(LoginUser, {
    onCompleted: (data) => {
      console.log("Data from LoginUser", data.login.user.id);
      setUserId(data.login.user.id);
    },
    onError: (error) => console.error("Error getting LoginUser", error),
  });
  const [setting, setSetting] = React.useState({});
  const [name, setName] = React.useState("");
  const [email, setEamil] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [userId, setUserId] = React.useState(null);
  const [context, setContext] = React.useState(null);

  const getUser = async () => {
    try {
      const { data } = await monday.api(`
        query {
          me {
            id,
            name,
            email
          }
        }
        `);
      // console.log('monday user: ',data.me)
      setEamil(data.me.email);
      setPassword(data.me.name + "_" + data.me.id);
    } catch (err) {
      console.log("monday api error:", err);
    }
  };

  const getRegisterUserID = async () => {
    try {
      const userId = await newUser({
        variables: {
          email,
          password,
        },
      });
      return userId.data.register.user.id;
    } catch (err) {
      console.log("graphQL error:", err);
    }
  };

  const getLoginUserID = async () => {
    try {
      const userId = await user({
        variables: {
          email,
          password,
        },
      });
      if (userId) {
        return userId.data.login.user.id;
      } else {
        return null;
      }
    } catch (err) {
      console.log("graphQL error:", err);
    }
  };

  React.useEffect(() => {
    getUser();
    if (password.length > 0) {
      console.log("user info", email, password);
      getLoginUserID() || getRegisterUserID();
    }
  }, [password]);

  const bids = [
    { name: "Cupertino Electric, Inc.", type: "Utilities", status: "Awarded" },
    { name: "Bay Electric", type: "Utilities", status: "Declined" },
    { name: "A&A Concrete Supply", type: "Concrete", status: "Awarded" },
    {
      name: "SAS Stressteel, Inc.",
      type: "Structural Steel",
      status: "Awaiting Response",
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

  const backgroundColor = ["orange", "green", "blue", "pink", "purple"];

  const renderTeam = (team, backgroundColor) => {
    return team.map((member, i) => {
      const { name, title, img } = member;

      const renderImg = (img, name) => {
        
        const colorPicker = (colors) => {
          const randInt = getRandomInt(0, colors.length);
          return colors[randInt];
        };

        if (img === "" || img === null) {
          const nameSplit = name.split(" ");
          const nameInitials = [
            nameSplit[0][0],
            nameSplit[nameSplit.length - 1][0],
          ].join("");

          return (
            <div
              className={`main-project__right__team__group--placeholder image-background-color--${colorPicker(
                backgroundColor
              )}`}
            >
              {nameInitials}
            </div>
          );
        } else {
          return (
            <img
              src={img}
              alt={`${name} headshot`}
              className="main-project__right__team__group--img"
            />
          );
        }
      };

      return (
        <div className="main-project__right__team__group" key={i}>
          {renderImg(img, name)}

          <p className="main-project__right__team__group--name">{name}</p>
          <p className="main-project__right__team__group--description">
            {title}
          </p>
        </div>
      );
    });
  };

  return (
    <div className="dashboard-projects">
      <Navigation />
      <div className="main-project">
        <h1>Mattamy Development</h1>
        <div className="main-project__left">
          <div className="main-project__left__image">
            <img
              src={building1}
              alt="building-1"
              className="main-project__left__image--1"
            />
            <img
              src={interior1}
              alt="interior-1"
              className="main-project__left__image--2"
            />
            <img
              src={interior2}
              alt="interior-2"
              className="main-project__left__image--3"
            />
            <img
              src={interior3}
              alt="interior-3"
              className="main-project__left__image--4"
            />
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

            {renderTeam(team, backgroundColor)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProject;
