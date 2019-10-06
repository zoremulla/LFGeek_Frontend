import React from "react";
import { Switch, Route } from "react-router-dom";

//components
import GamesList from "./gamesList/GamesList";
import LoginForm from "../forms/loginForm";
import SignupForm from "../forms/SignupForm";
import UserProfile from "./UserProfile";

const Router = () => (
  <Switch>
    <Route path="/gamelist/" component={GamesList} />
    <Route path="/login/" component={LoginForm} />
    <Route path="/register/" component={SignupForm} />
    <Route path="/profile/" component={UserProfile} />
  </Switch>
);

export default Router;
