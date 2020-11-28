import React from "react";
import "./Proposals.css";
import Navigation from "components/Navigation/Navigation";
import {getProjects} from '../../apollo/project'
import {GetAllUsers} from '../../apollo/user'
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
const Proposals = () => {
  const token = sessionStorage.getItem('jwtToken');
  const userId = sessionStorage.getItem('userId');
  sessionStorage.setItem('jwt',token);

  // sessionStorage.setItem('jwt',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjA2Mjc4MDk3LCJleHAiOjE2MDg4NzAwOTd9.efVO2-okLs2ZanNEBWnDKPp3gC4fnh-AY7Rx6ZXEUyI")
  const { data } = useQuery(getProjects,{
    variables: {id:userId},
  });

  const users =useQuery(GetAllUsers);

  const [projects, setProjects] = React.useState([])
  
  React.useEffect(()=>{
    if(data){
      console.log('data',data)
      setProjects(data.projects)
    }
    if(users.data){
      console.log('get user>>>>',users.data.users);
    }
  },[data])
  
 
  return (
    <div className="dashboard-projects">
      <Navigation />
      <div id="list">
        <table className="listTable">
          <thead className="listHead">
            <tr>
              <th className="title headItem  font-class-1 ">Title</th>
              <th className="project-owner headItem  font-class-1 ">
                Project Owner
              </th>
              <th className="status headItem font-class-1 ">Status</th>
              <th className="due headItem  font-class-1 ">Due</th>
              <th className="items headItem font-class-1 ">Items</th>
              <th className="invited headItem font-class-1 ">Invited</th>
            </tr>
          </thead>
          <tbody>
            <tr className="listEntry ">
              <td className="listItem title font-class-1 ">
                <Link to={`/projects/1`}>Mattamy Development</Link>
              </td>
              <td className="listItem font-class-1 ">
                <img
                  className="listItem-image"
                  alt=""
                  src="https://anima-uploads.s3.amazonaws.com/projects/5fa1a82d0aa76a11ee1c02fa/releases/5fa1b6c90aa76a11ee1c03d5/img/image-17@2x.png"
                />
                <span className="listItem-projectOwner   font-class-1 ">
                  David Felb
                </span>
              </td>
              <td className="listItem font-class-1 ">Closed to Bid</td>
              <td className="listItem font-class-1 ">Nov 12, 2020</td>
              <td className="listItem font-class-1 ">14</td>
              <td className="listItem font-class-1 ">2</td>
            </tr>
            {/* 
            <tr className="listEntry ">
              <td className="listItem title font-class-1 ">
                Greystone Estates
              </td>
              <td className="listItem font-class-1 ">
                <img
                  className="listItem-image"
                  alt=""
                  src="https://anima-uploads.s3.amazonaws.com/projects/5fa1a82d0aa76a11ee1c02fa/releases/5fa1b6c90aa76a11ee1c03d5/img/image-17@2x.png"
                />
                <span className="listItem-projectOwner   font-class-1 ">
                  David Felb
                </span>
              </td>
              <td className="listItem font-class-1 ">Closed to Bid</td>
              <td className="listItem font-class-1 ">Nov 12, 2020</td>
              <td className="listItem font-class-1 ">125</td>
              <td className="listItem font-class-1 ">90</td>
            </tr>
            <tr className="listEntry ">
              <td className="listItem title font-class-1 ">
                Fairview Shopping Center
              </td>
              <td className="listItem font-class-1 ">
                <img
                  className="listItem-image"
                  alt=""
                  src="https://anima-uploads.s3.amazonaws.com/projects/5fa1a82d0aa76a11ee1c02fa/releases/5fa1b6c90aa76a11ee1c03d5/img/image-17@2x.png"
                />
                <span className="listItem-projectOwner   font-class-1 ">
                  David Felb
                </span>
              </td>
              <td className="listItem font-class-1 ">Upcoming</td>
              <td className="listItem font-class-1 ">Nov 12, 2020</td>
              <td className="listItem font-class-1 ">9</td>
              <td className="listItem font-class-1 ">7</td>
            </tr>
            <tr className="listEntry ">
              <td className="listItem title font-class-1 ">
                NorthCoast Development
              </td>
              <td className="listItem font-class-1 ">
                <img
                  className="listItem-image"
                  alt=""
                  src="https://anima-uploads.s3.amazonaws.com/projects/5fa1a82d0aa76a11ee1c02fa/releases/5fa1b6c90aa76a11ee1c03d5/img/image-17@2x.png"
                />
                <span className="listItem-projectOwner   font-class-1 ">
                  David Felb
                </span>
              </td>
              <td className="listItem font-class-1 ">Open to Bid</td>
              <td className="listItem font-class-1 ">Nov 12, 2020</td>
              <td className="listItem font-class-1 ">84</td>
              <td className="listItem font-class-1 ">18</td>
            </tr>
            <tr className="listEntry ">
              <td className="listItem title font-class-1 ">
                Royal Homes Corporation
              </td>
              <td className="listItem font-class-1 ">
                <img
                  className="listItem-image"
                  alt=""
                  src="https://anima-uploads.s3.amazonaws.com/projects/5fa1a82d0aa76a11ee1c02fa/releases/5fa1b6c90aa76a11ee1c03d5/img/image-17@2x.png"
                />
                <span className="listItem-projectOwner   font-class-1 ">
                  David Felb
                </span>
              </td>
              <td className="listItem font-class-1 ">Closed to Bid</td>
              <td className="listItem font-class-1 ">Nov 12, 2020</td>
              <td className="listItem font-class-1 ">21</td>
              <td className="listItem font-class-1 ">44</td>
            </tr>
            <tr className="listEntry ">
              <td className="listItem title font-class-1 ">
                Capstone Project
              </td>
              <td className="listItem font-class-1 ">
                <img
                  className="listItem-image"
                  alt=""
                  src="https://anima-uploads.s3.amazonaws.com/projects/5fa1a82d0aa76a11ee1c02fa/releases/5fa1b6c90aa76a11ee1c03d5/img/image-17@2x.png"
                />
                <span className="listItem-projectOwner   font-class-1 ">
                  David Felb
                </span>
              </td>
              <td className="listItem font-class-1 ">Open to Bid</td>
              <td className="listItem font-class-1 ">Nov 12, 2020</td>
              <td className="listItem font-class-1 ">49</td>
              <td className="listItem font-class-1 ">78</td>
            </tr>
             */}
            {projects && projects.map((project,i) => 
            <tr className="listEntry " key={project.name+i}>
              <td className="listItem title font-class-1 ">
              <Link to={`/projects/${project.id}`}>{project.name}</Link>
                {/* <Link to={`/proposals/${project.id}`}>{project.name}</Link> */}
              </td>
              <td className="listItem font-class-1 ">
                <img
                  className="listItem-image"
                  alt=""
                  src="https://anima-uploads.s3.amazonaws.com/projects/5fa1a82d0aa76a11ee1c02fa/releases/5fa1b6c90aa76a11ee1c03d5/img/image-17@2x.png"
                />
                <span className="listItem-projectOwner font-class-1 ">
                  {project.owner ? project.owner.username : ""}
                </span>
              </td>
              <td className="listItem font-class-1 status">{project.status}</td>
              <td className="listItem font-class-1 endDate">{project.endDate}</td>
              <td className="listItem font-class-1 items">0</td>
              <td className="listItem font-class-1 invited">{project.invitations.length}</td>
            </tr>
              
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Proposals;
