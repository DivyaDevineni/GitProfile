import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserProfile from "./containers/userProfile";
import Profile from "./components/profileResponse";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <UserProfile />
          </Route>
          <Route exact path="/profile/:username" component={Profile}></Route>
        </Switch>
      </Router>
    );
  }
}
