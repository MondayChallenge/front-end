import React from "react";
import { BrowserRouter, Route, Router, Switch, Redirect } from 'react-router-dom';


import ScrollToTop from './ScrollToTop';
import Admin from './layouts/Admin';
import Messages from "./components/Messages/Messages";
import Projects from "./components/Projects/Projects";

const App = ()=> {

  
    return (
      <BrowserRouter >
        <ScrollToTop />       
          <Route path="/" exact component={Admin} />
          <Route path="/messages" exact component={Messages} />
          <Route path="/projects" exact component={Projects} />
      </BrowserRouter>
    );
  }

export default App;

{/* {JSON.stringify(this.state.boardData, null, 2)}  */}