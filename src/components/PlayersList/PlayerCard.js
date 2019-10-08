import React, { Component } from "react";
import { Link } from "react-router-dom";

function PlayerCard(props) {
  const player = props.player;
  const playerName = `${player.username}`;
  // const playerclan = `${player.clansjoined}`;
  // const playerclan = clans.clansjoined.map(clan => <PlayerCard key={clan.id} clan={clan} />);
  //   const playerstatus =`${player.plfg}`
  // if statements to display the clans that are LFG at the momment onl
  //   function Playersclanz(){

  //     const playerclan = player.clansjoined.map(clan => (
  //       <p className="card-text">{clan}</p>
  //   ));
  // }

  return (
    <div className="card">
      <img src={player.avatar} className="card-img-top" alt="{playerName}" />
      <div className="card-body">
        <h5 className="card-title">{playerName}</h5>
        <p className="card-text">{player.cv}</p>
        <p className="card-text">I am following these games </p>
        <p className="card-text">{player.games} </p>
        <p className="card-text"> Currently in these clans </p>
        <p className="card-text">{player.clansjoined}</p>

        {/* {playerclan} */}
        {/* <h5 className="card-title">LFG Status: </h5> */}
        <small className="text-muted">Region: {player.region}</small>
        <br></br>
        <button>Check profile</button>
      </div>
    </div>
  );
}

export default PlayerCard;
