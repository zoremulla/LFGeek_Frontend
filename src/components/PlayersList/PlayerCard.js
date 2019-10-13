import React, { Component } from "react";
import { Link } from "react-router-dom";

class PlayerCard extends Component {
  render() {
    const player = this.props.player;
    // const profileName = `${profile.username}`;
    console.log("PROFILE", player);

    return (
      <div className="card">
        <img src={player.image} className="card-img-top" alt="{profileName}" />
        <div className="card-body">
          <h5 className="card-title">{player.username}</h5>
          <p className="card-text">{player.cv}</p>
          <p className="card-text">I am following these games </p>
          <p className="card-text">{player.games} </p>
          <p className="card-text"> Currently in these clans </p>
          <p className="card-text">{player.clansjoined}</p>

          {/* {playerclan} */}
          {/* <h5 className="card-title">LFG Status: </h5> */}
          <small className="text-muted">Country: {player.country}</small>
          <br></br>
        </div>
      </div>
    );
  }
}
export default PlayerCard;
