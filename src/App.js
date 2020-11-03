import React from "react";
import "./App.css";
import Navigation from './components/Navigation';
import List from './components/List'
import mondaySdk from "monday-sdk-js";
const monday = mondaySdk();

class App extends React.Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      settings: {},
      name: "",
    };
  }

  componentDidMount() {
    // TODO: set up event listeners
  }

  render() {
    return (
      <div class="dashboard-projects border-class-1">
        <div class="dashboard font-class-2 border-class-1">Dashboard</div>
        <div class="rectangle-176"></div>
        <div class="new-project valign-text-middle font-class-1 border-class-1">New Project</div>
        <Navigation />       
        <List />       
      </div>
    );
  }
}

export default App;
