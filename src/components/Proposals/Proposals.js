import React from "react";
import "./Proposals.css";
import Navigation from "components/Navigation/Navigation";

const Proposals = () => {
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
                {" "}
                Mattamy Development
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
              <td className="listItem font-class-1 ">14</td>
              <td className="listItem font-class-1 ">2</td>
            </tr>
            <tr className="listEntry ">
              <td className="listItem title font-class-1 ">
                {" "}
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
                {" "}
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
                {" "}
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
                {" "}
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
                {" "}
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Proposals;
