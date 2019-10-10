import React from "react";
import { observer } from "mobx-react";

// Components
import PlayerCard from "./PlayerCard";
// import SearchBar from "../SearchBar";

// Store
import players from "./data";
// import profileStore from "../../stores/profileStore";

function PlayersList() {
  const playerCards = players.map(player => (
    <PlayerCard key={player.id} player={player} />
  ));
  // const PlayersList = () => {
  // const playerCards = profileStore.map(profile =>(
  //      <PlayerCard key={profile.id} profile={profile} />
  //     ));

  return (
    <div className="clans">
      <h3>Players LFG</h3>
      {/* <SearchBar store={profileStore} /> */}
      <div className="card-deck">{playerCards}</div>
    </div>
  );
}

export default observer(PlayersList);
