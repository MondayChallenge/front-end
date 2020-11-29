import React, { useState, useEffect } from 'react';
import Navigation from 'components/Navigation/Navigation';
import building1 from 'assets/img/building-1.png';
import interior1 from 'assets/img/interior-1.png';
import interior2 from 'assets/img/interior-2.png';
import interior3 from 'assets/img/interior-3.png';
import headshot from 'assets/img/professional_woman_headshot.jpg';
import { useQuery } from '@apollo/client';
import { getRandomInt } from 'components/utils/getRandomInt';
import { useHistory } from 'react-router-dom';
import { getProject } from '../../apollo/project';
import { getCurrUser } from '../../apollo/user';
import { getUserInfo } from '../../apollo/user';
import { Link } from 'react-router-dom';
import { renderImgBubble } from 'components/utils/renderImgBubble';

const MainProject = (props) => {
  const { loading, error, data } = useQuery(getProject, {
    variables: { id: props.match.params.id },
  });
  const history = useHistory();
  const { loading: userLoading, error: userError, data: userData } = useQuery(
    getCurrUser
  );
  const [isTeamMember, setTeamMember] = useState(false);
  const [bids, setBids] = useState([]);

  const bidColors = {
    Awarded: 'success',
    Awaiting: 'warning',
    Declined: 'danger',
  };

  const renderBidding = (bids, bidColors) => {
    return bids.map((bid, i) => {
      const { organization, type, status } = bid;

      return (
        <div className="main-project__right__bidding__group" key={i}>
          <p className="main-project__right__bidding__group--name">
            {organization.name}
          </p>
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

  const {
    loading: userInfoLoading,
    error: userInfoError,
    data: userInfoData,
  } = useQuery(getUserInfo, {
    variables: { id: userData ? userData.me.id : null },
  });

  useEffect(() => {
    function run() {
      if (data && data.project) {
        setBids(data.project.bids);
        console.log(data.project);
        if (data.project.representatives) {
          console.log(data.project.representatives);
          for (let el of data.project.representatives) {
            if (el.id == sessionStorage.getItem('userId')) {
              setTeamMember(true);
            }
          }
        }
      }
    }
    run();
  }, [data]);

  if (loading) return <div>Loading</div>;
  else if (error) return <div>{JSON.stringify(error)}</div>;
  else {
    console.log(data.project.bids);
    var currProject = data.project;
    const imgBuildingArray = [building1, interior1, interior2, interior3];
    const renderImgBuilding = (imgs) => {
      const imgArr = [];
      for (let i = 0; i < 4; i++) {
        imgArr.push(
          <img
            src={imgs[i]}
            alt={`building_${i + 1}`}
            className={`main-project__left__image--${i + 1}`}
            key={i}
          />
        );
      }

      return imgArr;
    };
    return (
      <div className="dashboard-projects">
        <Navigation />
        <div className="main-project">
          <h1>{currProject.name}</h1>
          <div className="main-project__left">
            <div className="main-project__left__image">
              {renderImgBuilding(imgBuildingArray)}
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

              {isTeamMember ? (
                renderBidding(bids, bidColors)
              ) : (
                <div>
                  <Link
                    to={'/bidCreation/' + props.match.params.id}
                    style={{
                      textDecoration: 'none',
                      color: 'rgba(0,154,255,1.0)',
                    }}>
                    Bid Now
                  </Link>
                </div>
              )}
            </div>

            <div className="main-project__right__cards main-project__right__team ">
              <h3>Project Team</h3>
              {renderTeam(team)}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MainProject;
