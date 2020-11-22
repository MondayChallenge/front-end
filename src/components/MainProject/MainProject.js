import React from "react";
import Navigation from "components/Navigation/Navigation";
import building1 from "assets/img/building-1.png";
import interior1 from "assets/img/interior-1.png";
import interior2 from "assets/img/interior-2.png";
import interior3 from "assets/img/interior-3.png";

import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Mutation } from 'react-apollo'

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;

// const POST_MUTATION = gql`
//   mutation PostMutation($description: String!, $url: String!) {
//     post(description: $description, url: $url) {
//       id
//       createdAt
//       url
//       description
//     }
//   }
// `

const MainProject = () => {
  return (
    <Query query={FEED_QUERY}>
      {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
    
          const linksToRender = data.feed.links
    
          return (
            <div>
              {linksToRender}
            </div>
          )
        }}
    </Query>
  );
};

export default MainProject;


{/* <div className="dashboard-projects">
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
    </div>

    <div className="main-project__right__cards main-project__right__team "></div>
  </div>
</div>
</div> */}