import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//components
import GamesList from "./GameList/GamesList";
import LoginForm from "../forms/loginForm";
import SignupForm from "../forms/SignupForm";
import UserProfile from "./UserProfile";
import PlayersList from "./PlayersList/PlayersList";
import CreateGuildForm from "../forms/createGuild";
import GameDetail from "./GameDetail/GameDetail";
import GuildsList from "./GameDetail/GuildsList";
import GuildProfile from "./guildProfile";

const Router = () => (
  <Switch>
    <Route path="/gamelist" component={GamesList} />
    <Route path="/detailgame/:gameid" component={GameDetail} />
    <Route path="/login" component={LoginForm} />
    <Route path="/register" component={SignupForm} />
    <Route path="/profile" component={UserProfile} />
    <Route path="/guild/:guildid" component={GuildProfile} />
    <Route exact path="/guild" component={GuildsList} />
    <Route path="/playerslist" component={PlayersList} />
    <Route path="/create/guild" component={CreateGuildForm} />
    <Redirect from="/" to="/gamelist" />
  </Switch>
);

export default Router;
