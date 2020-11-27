import React from 'react';
import Navigation from 'components/Navigation/Navigation';
import building1 from 'assets/img/building-1.png';
import interior1 from 'assets/img/interior-1.png';
import interior2 from 'assets/img/interior-2.png';
import interior3 from 'assets/img/interior-3.png';
import headshot from 'assets/img/professional_woman_headshot.jpg';
import { useQuery } from '@apollo/client';
import { getRandomInt } from 'components/utils/getRandomInt';
import { useHistory } from 'react-router-dom';
import { getProjects } from '../../apollo/project';
import { getCurrUser } from '../../apollo/user';
import { getUserInfo } from '../../apollo/user';
import { Link } from 'react-router-dom';
const MainProject = (props) => {
  const { loading, error, data } = useQuery(getProjects, {
    variables: { id: props.match.params.id },
  });
  const history = useHistory();
  const { loading: userLoading, error: userError, data: userData } = useQuery(
    getCurrUser
  );
  const bids = [
    { name: 'Cupertino Electric, Inc.', type: 'Utilities', status: 'Awarded' },
    { name: 'Bay Electric', type: 'Utilities', status: 'Declined' },
    { name: 'A&A Concrete Supply', type: 'Concrete', status: 'Awarded' },
    {
      name: 'SAS Stressteel, Inc.',
      type: 'Structural Steel',
      status: 'Awaiting Response',
    },
  ];

  const bidColors = {
    Awarded: 'success',
    Awaiting: 'warning',
    Declined: 'danger',
  };

  const renderBidding = (bids, bidColors) => {
    return bids.map((bid, i) => {
      const { name, type, status } = bid;

      return (
        <div className="main-project__right__bidding__group" key={i}>
          <p className="main-project__right__bidding__group--name">{name}</p>
          <p
            className={`main-project__right__bidding__group--status font-color--${
              bidColors[status.split(' ')[0]]
            }`}>
            {status}
          </p>
          <p className="main-project__right__bidding__group--type">{type}</p>
        </div>
      );
    });
  };

  const team = [
    {
      name: 'David Felber',
      title: 'Project Manager',
      img: '',
    },
    {
      name: 'Welsey Thomas',
      title: 'VP of Business Development',
      img: '',
    },
    {
      name: 'Lauren Stevens',
      title: 'Sr. Architect/Designer',
      img: headshot,
    },
    {
      name: 'Brad Nichols',
      title: 'Project Engineer',
      img: '',
    },
  ];

  const backgroundColor = ['orange', 'green', 'blue', 'pink', 'purple'];

  const renderTeam = (team, backgroundColor) => {
    return team.map((member, i) => {
      const { name, title, img } = member;

      const renderImg = (img, name) => {
        const colorPicker = (colors) => {
          const randInt = getRandomInt(0, colors.length);
          return colors[randInt];
        };

        if (img === '' || img === null) {
          const nameSplit = name.split(' ');
          const nameInitials = [
            nameSplit[0][0],
            nameSplit[nameSplit.length - 1][0],
          ].join('');

          return (
            <div
              className={`main-project__right__team__group--placeholder image-background-color--${colorPicker(
                backgroundColor
              )}`}>
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
  const {
    loading: userInfoLoading,
    error: userInfoError,
    data: userInfoData,
  } = useQuery(getCurrUser, {
    variables: { id: userData ? userData.me.id : null },
  });
  if (loading) return <div>Loading</div>;
  else if (error) return <div>{JSON.stringify(error)}</div>;
  else {
    console.log(userInfoData);
    console.log(userInfoError);

    console.log(data.projects[0]);
    var currProject = data.projects[0];
    return (
      <div className="dashboard-projects">
        <Navigation />
        <div className="main-project">
          <h1>{currProject.name}</h1>
          <Link to="/test">bid now</Link>
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
                <li>Est. Duration</li>
                <li>Budget</li>
              </ul>
              <ul className="main-project__left__details--2">
                <li>
                  {currProject.address}{' '}
                  <span>
                    {currProject.city}, {currProject.state} {currProject.zip}
                  </span>
                </li>
                <li>{props.match.params.id}</li>
                <li>{currProject.estTime}</li>
                <li>${currProject.minBid}</li>
              </ul>
            </div>

            <h3>Project Details</h3>
            <p>{currProject.description}</p>
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
  }
};

export default MainProject;
