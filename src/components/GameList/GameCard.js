import React, { Component } from "react";
import { Link } from "react-router-dom";

const GameCard = props => {
  const game = props.game;
  const gameName = `${game.name}`;
  return (
    <Link to={`/game/${game.id}`} className="card">
      <div className="card">
        <div className="image">
          <img src={game.image} className="card-img-top" alt="{gameName}" />
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
      </div>
    </Link>
  );
};

export default GameCard;
