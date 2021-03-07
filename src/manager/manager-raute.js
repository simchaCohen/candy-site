import React from 'react';
import EditCandy from './edit-candy/edit-candy';
import AddCandy from './add-candy/add-candy';
import CandyList from "./candy-list/candy-list";
import src from "../assets/background-candy.jpg";
import  Home from "../home/home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
export default
  function ManagerRoute(props) {
  // const { history } = props;

  return (
    <>
      <Home srcImg={src}></Home>
      <Switch>
        <Route path="/manager/edit-candy/:index">
          <EditCandy></EditCandy>
        </Route>
        <Route path="/manager/add-candy">
          <AddCandy></AddCandy>
        </Route>
        <Route path="/manager/candy">
          <CandyList></CandyList>
        </Route>
      </Switch>
    </>
  );
};