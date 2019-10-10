import React from "react";
import { Switch, Route } from "react-router-dom";

//components
import GamesList from "./GameList/GamesList";
import LoginForm from "../forms/loginForm";
import SignupForm from "../forms/SignupForm";
import UserProfile from "./UserProfile";
import ClanList from "./GameDetail/ClanList";
import PlayersList from "./PlayersList/PlayersList";
import GameDetail from "./GameDetail/GameDetail";

const Router = () => (
  <Switch>
    <Route path="/gamelist" component={GamesList} />
    <Route path="/detailgame/:gameid" component={GameDetail} />
    <Route path="/login" component={LoginForm} />
    <Route path="/register" component={SignupForm} />
    <Route path="/profile" component={UserProfile} />
    <Route path="/clanlist" component={ClanList} />
    <Route path="/playerslist" component={PlayersList} />
  </Switch>
);

export default Router;
