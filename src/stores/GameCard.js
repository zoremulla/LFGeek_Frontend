import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "";

class GameCard extends Component {
  render() {
    const game = this.props.game;
    const gameName = `${game.first_name} ${game.last_name}`;

    return (
      <div className="col-lg-4 col-md-6 col-12">
        <Link to={`/games/${game.id}`} className="card">
          <div className="image">
            <img
              className="card-img-top img-fluid"
              src={game.imageUrl}
              alt={gameName}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <span>{gameName}</span>
            </h5>
            <small className="card-text">{game.books.length} books</small>
          </div>
        </Link>
      </div>
    );
  }
}

export default GameCard;
