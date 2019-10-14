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
import "bootstrap/dist/css/bootstrap.min.css";

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
        <div className="content col-10">{getView()}</div>
      </div>
    </div>
  );
}

export default withRouter(observer(App));
