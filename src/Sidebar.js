import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import Authstore from "./stores/authStore";
import { observer } from "mobx-react";
// Logo
import logo from "./assets/img/sidebar/sidebar-1.jpg";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <img src={logo} className="logo" alt="the index logo" />
      <section>
        {Authstore.user ? (
          <h4 className="menu-item">
            {/* <NavLink onClick={Authstore.logout} to="#"> */}
            LOGOUT
            {/* </NavLink> */}
          </h4>
        ) : (
          <div>
            <h4 className="menu-item">
              {/* <NavLink to="/login">LOGIN</NavLink> */}
              login
            </h4>
            <h4 className="menu-item">
              {/* <NavLink to="/signup">SIGNUP</NavLink> */}
              signup
            </h4>
          </div>
        )}
      </section>
    </div>
  );
};

export default observer(Sidebar);
