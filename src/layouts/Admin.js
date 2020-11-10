import React from "react";


import Navigation from "../components/Navigation/Navigation";
import List from "../components/List/List";

import mondaySdk from "monday-sdk-js";
const monday = mondaySdk();

class Admin extends React.Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      settings: {},
      name: "",
      boardData: null,
      context: null,
    };
  }

  componentDidMount() {
    // TODO: set up event listeners

    monday.listen("context", (res) => {
      this.setState({ context: res.data });
      console.log(res.data);
      monday
        .api(
          `query ($boardIds: [Int]) { boards (ids:$boardIds) { name items(limit:1) { name column_values { title text } } } }`,
          { variables: { boardIds: this.state.context.boardIds } }
        )
        .then((res) => {
          this.setState({ boardData: res.data });
        });
    });
  }

  render() {
    console.log(this.state.settings);
    return (
      <div className="dashboard-projects">       
        <Navigation />
        <List />       
        {JSON.stringify(this.state.boardData, null, 2)}
      </div>
    );
  }
}

export default Admin;
