import React from "react";
// import { withRouter } from "react-router";
import { observer } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
// Components
import Sidebar from "./Sidebar";
import Loading from "./Loading";

// Store
import AuthStore from "./stores/authStore";

function App() {
  const getView = () => {
    if (AuthStore.loading) {
      return <Loading />;
    } else {
      // <Switch>{/* <Route path="/" component={}/> */}</Switch>;
      return;
    }
  };

  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="content col-10">{getView()}</div>
      </div>
    </div>
  );
}

export default App;
