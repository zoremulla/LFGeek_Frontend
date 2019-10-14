import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";


class Sidebar extends Component {
  render() {
  return (
    <Menu>
      <a className="menu-item" href="/gamelist/">
        Home
      </a>

      <a className="menu-item" href="/profile">
        Profile
      </a>
      {/* 
      <a className="menu-item" href="/PlayersList">
        Find a group
      </a> */}

      <a className="menu-item" href="/guild ">
        Clans
      </a>

        <a className="menu-item" href="/about/">
          About
        </a>

        {!this.props.user ? (
          <div>
            {" "}
            <Link to="/login" className="btn btn-info m-2 float-left">
              Login
            </Link>
            <Link to="/register" className="btn btn-success m-2 float-left">
              Signup
            </Link>{" "}
          </div>
        ) : (
          <button
            className="btn btn-danger m-2 float-left"
            onClick={this.props.logout}
          >
            Logout {this.props.profile.username}
          </button>
        )}
      </Menu>
    );
  }
}

export default Sidebar;
