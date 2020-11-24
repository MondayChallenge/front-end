import React from "react";
import { BrowserRouter, Route, Router, Switch, Redirect } from 'react-router-dom';
import "sass/main.scss";

import ScrollToTop from './ScrollToTop';

import MainProject from "./components/MainProject";
import Proposals from "./components/Proposals/Proposals";
import Messages from "./components/Messages/Messages";
import Projects from "./components/Projects/Projects";
import CostBreakdown from './components/CostBreakdown/CostBreakdown';

 

const App = ()=> {

  
    return (
      <BrowserRouter >
        <ScrollToTop />      
          <Route path="/" exact component={MainProject} /> 
          <Route path="/proposals" exact component={Proposals} />
          <Route path="/messages" exact component={Messages} />
          <Route path="/newProject" exact component={Projects} />
          <Route path="/newProject" exact component={Projects} />
          <Route path="/costBreakdown" exact component={CostBreakdown} />

      </BrowserRouter>
    );
  }

export default App;

{/* {JSON.stringify(this.state.boardData, null, 2)}  */}