import React, { Component } from "react";
import { Link } from "react-router-dom";

class GuildCard extends Component {
  render() {
    const guild = this.props.guild;
    console.log(guild);
    const guildName = `${guild.name}`;
    return (
      <div className="card">
        <img src={guild.tag} className="card-img-top" alt="{guildName}" />
        <div className="card-body">
          <h5 className="card-title">{guildName}</h5>
          <p className="card-text">{guild.description}</p>
          <p className="card-text">We are currently playing</p>
          <p className="card-text">{guild.games}</p>
          {/* <Link className="card-text">{guild.discord}</Link> */}
          {/* <p className="card-text">Created: {guild.created}</p> */}
          <p className="card-text">Guild Members: {guild.members}</p>
          {/* <h5 className="card-title">LFG Status: </h5> */}
          <small className="text-muted">Created: {guild.created}</small>
          <br></br>
          <small className="text-muted">Leader : {guild.master}</small>
        </div>
      </div>
    );
  }
}
export default GuildCard;
