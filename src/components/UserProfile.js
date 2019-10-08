import React, { Component } from "react";
import { observer } from "mobx-react";

// Stores
import authStore from "./stores/authStore";

class UserProfile extends Component {
  render() {
    const profileID = this.props.match.params.profileID;
    const profile = authStore.getProfileById(profileID);

    return (
      <div className="profile">
        <div>
          <h3>{profile.user}</h3>
          <img
            src={profile.imageUrl}
            className="img-thumbnail img-fluid"
            alt={profile.user}
          />
        </div>
      </div>
    );
  }
}

export default observer(UserProfile);