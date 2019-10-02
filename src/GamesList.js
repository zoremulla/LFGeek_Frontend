import React from "react";
import { observer } from "mobx-react";

// Components
import GameCard from "./GameCard";
import SearchBar from "./SearchBar";

// Store
import gameStore from "./stores/gameStore";

const GamesList = () => {
  const GameCards = gameStore.filteredGames.map(game => (
    <GameCard key={game.id} game={game} />
  ));

  return (
    <div>
      <h3>Games</h3>
      <SearchBar store={gameStore} />
      <div className="row">{GameCards}</div>
    </div>
  );
};

export default observer(GamesList);
