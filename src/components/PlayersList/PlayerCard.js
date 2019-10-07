import React, { Component } from "react";
import { Link } from "react-router-dom";

function ClanCard(props) {
  const clan = props.clan;
  const clanName = `${clan.name}`;
  //   const clanstatus =`${clan.clfg}`
  // if statements to display the clans that are LFG at the momment onl

  return (
    <div className="card">
      <img src={clan.image} className="card-img-top" alt="{clanName}" />
      <div className="card-body">
        <h5 className="card-title">{clanName}</h5>
        <p className="card-text">{clan.description}</p>
        <p className="card-text">We are currently playing</p>
        <p className="card-text">{clan.games}</p>
        <Link className="card-text">{clan.discord}</Link>
        <p className="card-text">Created: {clan.created}</p>
        <p className="card-text">Clan Members: {clan.members}</p>
        {/* <h5 className="card-title">LFG Status: </h5> */}
        <small className="text-muted">Created: {clan.created}</small>
        <br></br>
        <small className="text-muted">Followed by: {clan.followers}</small>
      </div>
    </div>
  );
}

export default ClanCard;
