import React from "react";
import { Switch, Route } from "react-router-dom";

//components
import GamesList from "./GameList/GamesList";
import LoginForm from "../forms/loginForm";
import SignupForm from "../forms/SignupForm";
import UserProfile from "./UserProfile";
import ClanList from "./GameDetail/ClanList";
import PlayersList from "./PlayersList/PlayersList";
import CreateGuildForm from "../forms/createGuild";

const Router = () => (
  <Switch>
    <Route path="/gameslist" component={GamesList} />
    <Route path="/login" component={LoginForm} />
    <Route path="/register" component={SignupForm} />
    <Route path="/profile" component={UserProfile} />
    <Route path="/clanlist" component={ClanList} />
    <Route path="/playerslist" component={PlayersList} />
    <Route path="/guild" component={CreateGuildForm} />
  </Switch>
);

export default Router;
