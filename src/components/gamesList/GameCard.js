import React, { Component } from "react";
import { Link } from "react-router-dom";

function GameCard(props) {
  const game = props.game;
  const gameName = `${game.name}`;
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card">
        <div className="image">
          <img
            className="card-img-top img-fluid"
            src={game.image}
            alt={gameName}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <span>{gameName}</span>
          </h5>
          <small className="card-text">{game.description}</small>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
