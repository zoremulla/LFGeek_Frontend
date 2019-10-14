import React, { Component, Redirect } from "react";
import { observer } from "mobx-react";

// Stores
import authStore from "../stores/authStore";
import guildStore from "../stores/guildStore";
import Loading from "../Loading";

class GuildProfile extends Component {
  componentDidMount() {
    if (authStore.user) {
      guildStore.fetchGuild();
    }
  }

  render() {
    if (!authStore.user) return <Redirect to="/login" />;
    // add loading if
    if (guildStore.loading) {
      return <Loading />;
    }

    const guild = guildStore.guild;
    return (
      <div className="guild">
        <div>
          <h3>{guild.name}</h3>
          <img
            src={guild.tag}
            className="img-thumbnail img-fluid"
            alt={guild.name}
          />
        </div>
      </div>
    );
  }
}

export default observer(GuildProfile);
