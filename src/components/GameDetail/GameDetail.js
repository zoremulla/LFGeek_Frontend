import React from "react";
import { observer } from "mobx-react";

// Components
import PlayersList from "../PlayersList/PlayersList";
import ClanList from "../GameDetail/ClanList";
// import SearchBar from "../SearchBar";

function GameDetail() {
  return (
    <div className="clans">
      <h3>Clans LFM</h3>
      {/* <SearchBar store={gamesStore} /> */}
      <div className="card-deck">
        <ClanList />
      </div>
      <h3>Players LFG</h3>
      <div className="card-deck">
        <PlayersList />
      </div>
    </div>
  );
}
export default observer(GameDetail);
