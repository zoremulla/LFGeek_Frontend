import React from "react";
import { observer } from "mobx-react";

// Components
import GameCard from "./GameCard";
import SearchBar from "../SearchBar";

// Store
import gamesStore from "./gamesStore";
import games from "./data";

function GamesList() {
  const GameCards = games.map(game => <GameCard key={game.id} game={game} />);

  return (
    <div className="games">
      <h3>Games</h3>
      <SearchBar store={gamesStore} />
      <div className="row">{GameCards}</div>
    </div>
  );
}

export default observer(GamesList);
