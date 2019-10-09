import React, { Component, Redirect } from "react";
import { observer } from "mobx-react";

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
    if (!authStore.user) return <Redirect to="/login/" />;
    // add loading if
    if (profileStore.loading) {
      return <Loading />;
    }

    const profile = profileStore.profile;
    return (
      <div className="profile">
        <div>
          <h3>{profile.user}</h3>
          <img
            src={profile.avatar}
            className="img-thumbnail img-fluid"
            alt={profile.user}
          />
        </div>
      </div>
    );
  }
}

export default observer(UserProfile);
