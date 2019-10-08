import React, { Component } from "react";
import LoginForm from "../forms/loginForm";
import authStore from "../stores/authStore";
import profileStore from "../stores/profileStore";

// Components

class UserProfile extends Component {
  componentDidMount = () => {
    if (authStore.user) {
      {
        profileStore.fetchProfile();
      }
    }
  };

  render() {
    if (!authStore.user) return <LoginForm />;
    // if (!this.props.user) return <Redirect to="/login" />;
    return;
  }
}

export default UserProfile;
