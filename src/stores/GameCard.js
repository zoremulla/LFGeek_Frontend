import React, { Component } from "react";
import { Link } from "react-router-dom";

function GameCard(props) {
  const game = props.game;
  const gameName = `${game.name}`;
  return (
    <div className="card">
      <img src={game.image} class="card-img-top" alt="{gameName}" />
      <div className="card-body">
        <h5 className="card-title">{gameName}</h5>
        <p className="card-text">{game.genre}</p>
        <p className="card-text">{game.developer}</p>
        <p className="card-text">{game.platform}</p>
        <p className="card-text">{game.year}</p>
        <p className="card-text">
          <small className="text-muted">{game.description}</small>
        </p>
      </div>
    </div>
  );
}

export default GameCard;
