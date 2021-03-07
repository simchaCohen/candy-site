import React from 'react';
import ShowCandy from './show-candy/show-candy';
import src from "../assets/background-candy.jpg";
import  Home from "../home/home";
import CandyDetails from "./candy-details/candy-details";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
export default
  function ClientRoute(props) {
  // const { history } = props;

  return (
    <>
      <Home srcImg={src}></Home>
      <Switch>
        {/* <Route path="/client/candy-details/:index">
          <EditCandy></EditCandy>
        </Route> */}
        <Route path="/client/show-candy">
          <ShowCandy></ShowCandy>
        </Route>
        <Route path="/client/candy-details/:index">
          <CandyDetails></CandyDetails>
        </Route>
      </Switch>
    </>
  );
};