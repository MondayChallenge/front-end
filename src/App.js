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
      boardData: null,
      context: null
    };
  }

  componentDidMount() {
    // TODO: set up event listeners

    monday.listen("context", res => {
      this.setState({context: res.data});
      console.log(res.data);
      monday.api(`query ($boardIds: [Int]) { boards (ids:$boardIds) { name items(limit:1) { name column_values { title text } } } }`,
        { variables: {boardIds: this.state.context.boardIds} }
      )
      .then(res => {
        this.setState({boardData: res.data});
      });
    })
  }

 
 

  render() {
    console.log(this.state.settings);
    return (
      <div className="dashboard-projects border-class-1">
        <div className="dashboard font-class-2 border-class-1" >Dashboard</div>
        <div className="rectangle-176"></div>
        <div className="new-project valign-text-middle font-class-1 border-class-1">New Project</div>

        <Navigation />       
        <List />       
          {JSON.stringify(this.state.boardData, null, 2)} 
      </div>
    );
  }
}

export default App;
