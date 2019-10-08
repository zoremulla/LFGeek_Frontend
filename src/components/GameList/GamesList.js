import React from "react";
import { observer } from "mobx-react";

// Components
import GameCard from "./GameCard";
<<<<<<< HEAD:src/components/GameList/GamesList.js
// import SearchBar from "../SearchBar";

// Store
// import gamesStore from "./gamesStore";
import games from "./data";
=======
import SearchBar from "../../SearchBar";

// Store
import gamesStore from "../../stores/gamesStore";
import games from "../../stores/data";
>>>>>>> 22af898c3bfdfcf096bbf06c30dbf37394ef9998:src/components/gamesList/GamesList.js

function GamesList() {
  const GameCards = games.map(game => <GameCard key={game.id} game={game} />);

  return (
    <div className="games">
      <h3>Games</h3>
      {/* <SearchBar store={gamesStore} /> */}
      <div className="card-deck">{GameCards}</div>
    </div>
  );
}

export default observer(GamesList);
