import React from "react";

// import { withRouter } from "react-router";
// import { observer } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
// Components
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import GamesList from "./components/GameList/GamesList";
import ClanList from "../src/components/GameDetail/ClanList";

// Forms
import LoginForm from "./forms/loginForm";
import SignupForm from "./forms/SignupForm";

// Modals
// import AuthModal from "./modals/authStoreModal";

// Store
import AuthStore from "./stores/authStore";

// Styling
import "./App.css";
import gamesStore from "./stores/gamesStore";
import "./forms/LoginForm.css";

function App() {
  const getView = () => {
    if (AuthStore.loading) {
      return <Loading />;
    } else {
      return (
        <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to="/GamesList" />

            <Route path="/GamesList/" component={GamesList} />
            <Route path="/login/" component={LoginForm} />
            <Route path="/signup/" component={SignupForm} />
            <Route path="/ClanList/" component={ClanList} />
          </Switch>
        </BrowserRouter>
      );
    }
  };

  return (
    <div id="App">
      <Sidebar />
      <div id="page-wrap">
        <h1>LFGeek</h1>
        <h2>Tired of playing alone?</h2>
        <div className="content col-10">{getView()}</div>
      </div>
    </div>
  );
}

export default App;
