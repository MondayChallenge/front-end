import React from 'react';
import Navigation from 'components/Navigation/Navigation';
import './FindProposal.css';
import Table from '../Main/Table';
import { useQuery } from '@apollo/client';
import { getTenProposals } from '../../apollo/project';
import { v4 } from 'uuid';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function FindProject() {
  const { loading, error, data } = useQuery(getTenProposals);
  if (loading) return <div>Loading</div>;
  else if (error) return <div>{JSON.stringify(error)}</div>;
  else {
    console.log(data.projects);
    var recentProposals = data.projects.map((x) => {
      if (x)
        return (
          <TableRow
            key={x.id}
            title={x.name}
            //Failing because some username is null
            owner={x.owner ? x.owner.username : 'missing'}
            status={x.status}
            due={x.endDate}
            id={x.id}
          />
        );
    });
    console.log(recentProposals);
    return (
      <div className="dashboard-projects">
        <Navigation />
        <div id="list">
          <Table>{recentProposals ? recentProposals : 'test'}</Table>
        </div>
      </div>
    );
  }
}

function TableRow({ title, owner, status, due, id }) {
  return (
    <tr className="listEntry ">
      <td className="listItem title font-class-1 ">
        <Link
          style={{ textDecoration: 'none', color: 'rgba(0,154,255,1.0)' }}
          to={`projects/${id}`}>
          {title}
        </Link>
      </td>
      <td className="listItem font-class-1 ">
        <img
          className="listItem-image"
          alt=""
          src="https://anima-uploads.s3.amazonaws.com/projects/5fa1a82d0aa76a11ee1c02fa/releases/5fa1b6c90aa76a11ee1c03d5/img/image-17@2x.png"
        />
        <span className="listItem-projectOwner  font-class-1 ">{owner}</span>
      </td>
      <td className="listItem font-class-1 ">{status}</td>
      <td className="listItem font-class-1 ">{due}</td>
    </tr>
  );
}
