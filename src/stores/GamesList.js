import React from "react";
import { observer } from "mobx-react";

// Components
import GameCard from "./GameCard";
import SearchBar from "../SearchBar";

// Store
import gamesStore from "./gamesStore";

const GamesList = () => {
  const GameCards = gamesStore.filteredGames.map(game => (
    <GameCard key={game.id} game={game} />
  ));

  return (
    <div>
      <h3>Games</h3>
      <SearchBar store={gamesStore} />
      <div className="row">{GameCards}</div>
    </div>
  );
};

export default observer(GamesList);
