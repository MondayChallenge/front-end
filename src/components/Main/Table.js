import React from 'react';
import '../Proposals/Proposals.css';
export default function Table(props) {
  return (
    <table className="listTable">
      <thead className="listHead">
        <tr>
          <th className="title headItem  font-class-1 ">Title</th>
          <th className="project-owner headItem  font-class-1 ">
            Project Owner
          </th>
          <th className="status headItem font-class-1 ">Status</th>
          <th className="due headItem  font-class-1 ">Due</th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
}
