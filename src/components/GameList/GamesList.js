import React from "react";
import { observer } from "mobx-react";

// Components
import GameCard from "./GameCard";
// import SearchBar from "../SearchBar";

// Store
// import games from "./data";
import gamesStore from "../../stores/gamesStore";

const GamesList = () => {
  const GameCards = gamesStore.games.map(game => (
    <GameCard key={game.id} game={game} />
  ));
  return (
    <div className="games">
      <h3>Games</h3>
      {/* <SearchBar store={gamesStore} /> */}
      <div className="card-deck">{GameCards}</div>
    </div>
  );
};

export default observer(GamesList);
