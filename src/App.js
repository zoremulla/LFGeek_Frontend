import React from "react";
import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";
// Components
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import Router from "./components/router";

// Store
import authStore from "./stores/authStore";

// Styling
import "./App.css";

function App() {
  const getView = () => {
    if (authStore.loading) {
      return <Loading />;
    } else {
      return <Router />;
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

export default withRouter(observer(App));
