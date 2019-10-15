import React, { Component } from "react";
import { observer } from "mobx-react";
import { Redirect, Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

// Stores
import authStore from "../stores/authStore";
import profileStore from "../stores/profileStore";
import Loading from "../Loading";

class UserProfile extends Component {
  componentDidMount() {
    if (authStore.user) {
      profileStore.fetchProfile();
    }
  }

  render() {
    if (!authStore.user) return <Redirect to="/login" />;
    // add loading if
    if (profileStore.loading) {
      return <Loading />;
    }

    const profile = profileStore.profile;
    console.log(profile);
    return (
      <div>
        <div>
          <h1>{profile.username}</h1>
        </div>
        <div>
          <img src={profile.image} className="img-responsive" alt="tag" />
        </div>
        <div>
          <h6>{profile.cv}</h6>
          <img src={profile.country} className="img-responsive" alt="flag" />
        </div>
        <div>
          {" "}
          <Link to="/create/guild" className="btn btn-info m-2 float-left">
            Create a Guild
          </Link>{" "}
        </div>
      </div>
    );
  }
}

export default observer(UserProfile);
