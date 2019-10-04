import React from "react";

// import { withRouter } from "react-router";
// import { observer } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
// Components
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import GamesList from "./stores/GamesList";

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
          </Switch>
        </BrowserRouter>
      );
    }
  };

  return (
    <div id="App">
      <Sidebar />
      <div id="page-wrap">
        <img src="" />
        <h1>LFGeek</h1>
        <h2>Tired of playing alone?</h2>
        <div className="content col-10">{getView()}</div>
      </div>
    </div>
  );
}

export default App;
