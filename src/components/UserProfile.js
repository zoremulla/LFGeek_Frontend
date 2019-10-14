import React, { Component } from "react";
import { observer } from "mobx-react";
import { Redirect } from "react-router-dom";

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
    return (
      <div className="profile">
        <div>
          <h3>{profile.user.username}</h3>
        </div>
        <div>
          <h6>{profile.user.email}</h6>
        </div>
        <div>
          <img
            src={profile.user.image}
            className="img-thumbnail img-fluid"
            alt={profile.user.username}
          />
        </div>
      </div>
    );
  }
}

export default observer(UserProfile);
