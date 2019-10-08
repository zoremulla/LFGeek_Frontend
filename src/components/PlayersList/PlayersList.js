import React from "react";
import { observer } from "mobx-react";

// Components
import PlayerCard from "./PlayerCard";
// import SearchBar from "../SearchBar";

// Store
// import clansStore from "./clansStore";
import players from "./data";

function PlayersList() {
  const playerCards = players.map(player => (
    <PlayerCard key={player.id} player={player} />
  ));

  return (
    <div className="clans">
      <h3>Players LFG</h3>
      {/* <SearchBar store={gamesStore} /> */}
      <div className="card-deck">{playerCards}</div>
    </div>
  );
}

export default observer(PlayersList);
