import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import "sass/main.scss";

import ScrollToTop from './ScrollToTop';

import MainProject from "./components/MainProject";
import Proposals from "./components/Proposals/Proposals";
import Messages from "./components/Messages/Messages";
import Projects from "./components/Projects/Projects";
import CostBreakdown from './components/CostBreakdown/CostBreakdown';
import BidCreation from './components/BidCreation/BidCreation';
import FindProject from './components/FindProject/FindProject';
import BidPage from 'components/BidPage/BidPage';

import { RegisterUser, LoginUser } from "./apollo/user";
import { useMutation } from "@apollo/client";
import mondaySdk from "monday-sdk-js";

const monday = mondaySdk();
monday.setToken(
  "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjkxNjQwMjQzLCJ1aWQiOjE2OTgzMjgwLCJpYWQiOiIyMDIwLTExLTIzVDA0OjIxOjExLjAwMFoiLCJwZXIiOiJtZTp3cml0ZSJ9.IfCFnLLJFxZdtUCYmmDriA0tUDWFHMVL414ubvEzVlc"
);
 
// const hist = createBrowserHistory();

const App = ()=> {

  const [newUser] = useMutation(RegisterUser, {
    onCompleted: (data) => {
      console.log("Data from RegisterUser", data.register.user.id);     
      setUserId(data.register.user.id);
      sessionStorage.setItem('userId',  data.register.user.id);
      sessionStorage.setItem('jwtToken',  data.register.jwt);
    },
    onError: (error) => console.error("Error getting RegisterUser", error),
  });

  const [user] = useMutation(LoginUser, {
    onCompleted: (data) => {
      console.log("Data from LoginUser", data.login.user.id);
      setUserId(data.login.user.id);
      // sessionStorage.removeItem('jwtToken');
      sessionStorage.setItem('userId',  data.login.user.id);
      sessionStorage.setItem('jwtToken',  data.login.jwt);
    },
    onError: (error) => {
      getRegisterUserID(email, password)
      console.error("Error getting LoginUser", error)
    },
  });

  const [name, setName] = React.useState("");
  const [email, setEamil] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [userId, setUserId] = React.useState(null);

  const getUser = async () => {
    try {
      const { data } = await monday.api(`
        query {
          me {
            id,
            name,
            email
          }
        }
        `);
      // console.log('monday user: ',data.me)
      setName(data.me.name);
      setEamil(data.me.email);
      setPassword(data.me.name + "_" + data.me.id);
    } catch (err) {
      console.log("monday api error:", err);
    }
  };

  const getRegisterUserID = async (email, password, name) => {
    try {
      const userInfo = await newUser({
        variables: {
          email,
          password,
          name
        },
      });
      return userInfo.data.register.user.id;
    } catch (err) {
      console.log("graphQL register error:", err);
    }
  };

  const getLoginUserID = async (email, password) => {
    try {
      const userInfo = await user({
        variables: {
          email,
          password,
        },
      });
      if (userInfo) {
        return userInfo.data.login.user.id;
      } else {
        return null;
      }
    } catch (err) {
      console.log("graphQL login error:", err);
    }
  };

  React.useEffect(() => {
    const userId = sessionStorage.getItem('userId');
    const token = sessionStorage.getItem('jwtToken');
    getUser();
    if (password.length > 0 && !token) {
      console.log("user info", email, password, name);
      getLoginUserID(email, password, name) || getRegisterUserID(email, password, name);
    }
    // make sure to have both userId and jwtToken stored on sessionStorage
    if(!userId && token){
      sessionStorage.removeItem('jwtToken');
      getLoginUserID(email, password,name)
    }
    getLoginUserID(email, password,name)
  }, [password]);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Route path="/mainproject/:id" exact component={MainProject} />
      <Route path="/proposals" exact component={Proposals} />
      <Route path="/messages" exact component={Messages} />
      <Route path="/newProject" exact component={Projects} />
      <Route path="/costBreakdown/:id" exact component={CostBreakdown} />
      <Route path="/bidCreation" exact component={BidCreation} />
      <Route path="/findProject" exact component={FindProject} />
      <Route path="/bidPage" exact component={BidPage} />
    </BrowserRouter>
  );
};


export default App;

{
  /* {JSON.stringify(this.state.boardData, null, 2)}  */
}
